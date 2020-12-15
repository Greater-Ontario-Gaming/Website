//--------------------
// View
//--------------------

var View =
{
	current: '',
	application: '',
	st : '',
	status_change: 0,
	ids: '',
	// group: current.match( /&group=(\d+)/g ),

	//------------------------------
	// Init
	//------------------------------

	main: function()
	{
		document.observe("dom:loaded", function(){

			View.current = window.location.href;

			var _group = /&group=(\d+)/g;
			if( _group.test( View.current ) ) return View.initGroup( _group );

			var _application = /&application=(\d+)/g;
			if( _application.test( View.current ) ) return View.initApplication( _application );

			return View.initHome( );
	
			// Do the same for application_id


			// var _group =  new RegExp( "&group=(\d+)" );			
			// var _group =  new RegExp( "&group=(\d+)", "g" );
			// alert (_group.test( View.current ));
			// if( _group.test( View.current ) != true ) alert( "ok" );
			// if( _group.test( View.current ) == true )
			// {
				// alert( _group.exec( View.current ) );
			// }
// View.group = _group.exec( View.current );			
			// alert( View.group );
		});
		
	},
	
	//------------------------------
	// Init Group
	//------------------------------

	initGroup: function( pattern )
	{
		group = View.current.match( pattern )[0].replace( '&group=', '' );
		if( $( "load_applications" ) != undefined )
		{
			$( "load_applications" ).observe( 'click', function(e){
				Event.stop(e);

				// If st == -1 it means that there is nothing more to load
				if( View.st != -1 )	View.loadMore(group);
			});
		}
		
		if( $('moderator_actions') != undefined )	new ipb.Menu( $('moderator_actions'), $('moderator_actions_menucontent'), { stopClose: true } );

		if( $( "moderator_applications" ) != undefined )
		{
			$( "moderator_applications" ).observe( 'click', function(e){
				Event.stop(e);
			
				View.toggle(group, "applications");
			});
		}

		if( $( "moderator_comments" ) != undefined )
		{
			$( "moderator_comments" ).observe( 'click', function(e){
				Event.stop(e);
			
				View.toggle(group, "comments");
			});
		}

		if( $( "moderator_infos" ) != undefined )
		{
			$( "moderator_infos" ).observe( 'click', function(e){
				Event.stop(e);
			
				View.infos(group);
			});
		}
		// alert( group );

		// var _status = /&status=(\d+)/i;
		// if( _status.test( View.current ) ) 
		// {
			// status = View.current.match( _status )[0].replace( '&status=', '' );
		// }
		// else status = "all";

	},


	//------------------------------
	// Init Home
	//------------------------------

	initHome: function()
	{
		if( $( "load_my_applications" ) != undefined )
		{
			$( "load_my_applications" ).observe( 'click', function(e){
				Event.stop(e);

				// If st == -1 it means that there is nothing more to load
				if( View.st != -1 )	View.loadMyApplications();
			});
		}

	},

	//------------------------------
	// Load My Applications
	//------------------------------
	
	loadMyApplications: function()
	{
		// Why using to functions to do the same things? I'm to lazy to make the other one compatible with this one :p
		if( View.st != '' ) st = View.st;
		else st = 0;
		url = ipb.vars['base_url'] + "app=groupjoin&module=ajax&section=public_ajax&do=load_my_applications&md5check="+ipb.vars['secure_hash'];

		new Ajax.Request( url,
		{
			method: 'post',
			evalJSON: 'force',

			parameters: 
			{				
				'st': st,
				'md5check': ipb.vars['secure_hash'],
			},

			onSuccess: function(t)
			{
				if( Object.isUndefined( t.responseJSON ) )	alert( "Bad Request" );
				else if ( t.responseJSON['error'] )	alert( t.responseJSON['error'] );
				else
				{	
					View.st = parseInt( t.responseJSON['st'] );
					$('applications_table').select('tbody:last')[0].insert({ 'after': t.responseJSON['template'] });
					if( t.responseJSON['st'] == -1 ) $( "load_my_applications" ).innerHTML = t.responseJSON['text'];
				}
			}
		});
	},

	//------------------------------
	// Load More Applications
	//------------------------------
	
	loadMore: function(group)
	{
		st = '';
		status = '';
		url = ipb.vars['base_url'] + "app=groupjoin&module=ajax&section=public_ajax&do=load_more_applications&md5check="+ipb.vars['secure_hash'];

		//------------------------------
		// Getting status
		//------------------------------
		if( View.st > 0 ) st = View.st;
		else
		{
			if( /&st=(\d+)/g.test( View.current ) )	st = View.current.match( /&st=(\d+)/g )[0].replace( '&st=', '' );
		}
		if( /&status=(\d+)/g.test( View.current ) ) status = View.current.match( /&status=(\d+)/g )[0].replace( '&status=', '' );
		
		//------------------------------
		// Call AJAX
		//------------------------------

		new Ajax.Request( url,
		{
			method: 'post',
			evalJSON: 'force',

			parameters: 
			{				
				'group': group,
				'st': st,
				'md5check': ipb.vars['secure_hash'],
				'status' : status,
			},

			onSuccess: function(t)
			{
				if( Object.isUndefined( t.responseJSON ) )	alert( "Bad Request" );
				else if ( t.responseJSON['error'] )	alert( t.responseJSON['error'] );
				else
				{	
					View.st = parseInt( t.responseJSON['st'] );
					$('applications_table').select('tbody:last')[0].insert({ 'after': t.responseJSON['template'] });
					if( t.responseJSON['st'] == -1 ) $( "load_applications" ).innerHTML = t.responseJSON['text'];
				}
			}
		});
		
	},

	//------------------------------
	// Suspend Applications/Comments
	//------------------------------

	toggle: function(group_id, type)
	{
		url = ipb.vars['base_url'] + "app=groupjoin&module=ajax&section=public_ajax&do=toggle_" + type + "&md5check="+ipb.vars['secure_hash'];

		new Ajax.Request( url,
		{
			method: 'post',
			evalJSON: 'force',

			parameters: 
			{				
				'group': group,
				'md5check': ipb.vars['secure_hash'],
			},

			onSuccess: function(t)
			{
				if( Object.isUndefined( t.responseJSON ) )	alert( "Bad Request" );
				else if ( t.responseJSON['error'] )	alert( t.responseJSON['error'] );
				else
				{	
					$( "moderator_" + type ).innerHTML = t.responseJSON['text'];
				}
			}
		});
	},

	//------------------------------
	// Get Group Infos
	//------------------------------

	infos: function( group_id )
	{
		// url = ipb.vars['base_url'] + "app=groupjoin&module=ajax&section=public_ajax&do=get_infos&md5check="+ipb.vars['secure_hash'];

		// new Ajax.Request( url,
		// {
			// method: 'post',
			// evalJSON: 'force',

			// parameters: 
			// {				
				// 'group': group,
				// 'md5check': ipb.vars['secure_hash'],
			// },

			// onSuccess: function(t)
			// {
				// if( Object.isUndefined( t.responseJSON ) )	alert( "Bad Request" );
				// else if ( t.responseJSON['error'] )	alert( t.responseJSON['error'] );
				// else
				// {	
					// $( "moderator_" + type ).innerHTML = t.responseJSON['text'];
				// }
			// }
		// });
	},

	//------------------------------
	// Applications Init
	//------------------------------

	initApplication: function( pattern )
	{
		View.application = View.current.match( pattern )[0].replace( '&application=', '' );
		var stop = false;

		var _comment = /#comment_(\d+)/g;
		if( _comment.test( View.current ) )	stop = true;

		if( !stop )
		{
			var _st = /&st=(\d+)/g;
			if( _st.test( View.current ) )	new Effect.ScrollTo('comment_wrap', { duration:'1.5', offset:-40, delay: 1.0 });

			var _st_st = /page__st__(\d+)/g;
			if( _st_st.test( View.current ) )	new Effect.ScrollTo('comment_wrap', { duration:'1.5', offset:-40, delay: 1.0 });

			if( $$( '.roundButton' ) != undefined ) $$( '.roundButton').each(
				function( element )
				{	
					id = element.identify();
					element.observe( 'click', View.scrollTo );
				}
			);
		}

		if( $( 'notes_area' ) != undefined )
		{
			$( 'notes_area').observe( 'focus', function(e) { 
				if( $( 'post_note_div' ).style.display != 'none' ) return;
				Effect.BlindDown('post_note_div', { duration: 0.5 } ); 
			} );
		}

		if( $( 'post_note' ) != undefined )
		{
			$( 'post_note' ).observe( 'click', function(e){
				Event.stop(e);
				string = $('notes_area').getValue().strip(); 
				if( string.length ) View.updateNote( View.application, string );
			});
		}

		if( $('support_me') != undefined )	View.initVoteEvent( );

		ipb.delegate.register('input.invalidAnswer', View.initMod );

		if( $('status_change') != undefined )
		{
			new ipb.Menu( $('status_change'), $('status_change_menucontent'), { stopClose: true } );
			$$( '._status' ).each( function(s)
				{ 
					s.observe( 'click', function(e){
						Event.stop(e);
						new_status = s.readAttribute( 'data-status' );
						if( new_status != undefined || new_status > 0 ) View.popupChange( 0, new_status );
					}); 
				} );				
		}
		// if( $( 'post_note' ) != undefined ) $( 'notes_area').observe( 'focus', function(e) { Effect.BlindDown('post_note_div', { duration: 0.5 } ) } );

		return false;
	},

	//------------------------------
	// Initializing vote events
	//------------------------------

	initMod: function()
	{
		var count = $$(".invalidAnswer:checked").length;
	
		if( count ){
			if( !$('answers_moderate_box') ){
				$$('body')[0].insert({'bottom': ipb.templates['answer_moderation'].evaluate({count: count}) });
				$('submitAnsAction').on('click', View.invalid);
			} else {
				$('count_count').update( count );
			}
			
			if( !$('answers_moderate_box').visible() ){
				new Effect.Appear( $('answers_moderate_box'), { duration: 0.3 } );
			}
		}
		else
		{
			if( $('answers_moderate_box') ){
				new Effect.Fade( $('answers_moderate_box'), { duration: 0.3 } );
			}
		}
	},

	invalid: function(e)
	{	
		Event.stop(e);

		// Get checked comment IDs
		var ids = $$('.invalidAnswer:checked').collect( function(item){
			return item.value;
		});

		View.ids = ids;
		View.popupChange( 1, 0);
	},
	
	statusChange: function(e)
	{
		alert( this );
	},

	popupChange: function( _default, status_id )
	{
		var url = ipb.vars['base_url'] + "app=groupjoin&module=ajax&section=public_ajax&do=set_status&md5check="+ipb.vars['secure_hash'];
		// alert( url );
		// alert( "app_id: " + View.application + "\n status: " + status_id + "\n default: " + _default + "\n invalid_ids: " + View.ids );

		new Ajax.Request(	url,
							{
								method: 'post',
								evalJSON: 'force',

							parameters: 
							{
								'md5check': 	ipb.vars['secure_hash'],
								'app_id': View.application,
								'status_id': status_id,
								'_default': _default,
								'invalid_ids[]': View.ids,
							},
								
							onSuccess: function(t)
							{
								if ( t.responseJSON['error'] )
								{
									alert( t.responseJSON['error'] );
									return false;
								}
								else
								{
									// alert( 'test' );
									var popid   = 'pop__status_change_popup_' + View.application;
									var popup_ = new ipb.Popup( popid, {  type: 'pane',
															initial: t.responseJSON['popup'],
															hideAtStart: false,
															w: '800px',
															} );
								}
							}
						});
	},

	//------------------------------
	// Initializing vote events
	//------------------------------

	initVoteEvent: function()
	{
		$( 'support_me' ).observe( 'click', function(e){
			Event.stop(e);
			View.support();
		});
	},

	//------------------------------
	// Smooth and sexy redirect
	//------------------------------
	
	scrollTo: function(e) 
	{
		e.stop();
		var elem_id = this.id.replace( '__showQuestion_', '' );
		var temp = $$( '.row2' )[0].getStyle( 'background-color' );		
		string = View.RGBToHex( temp ); 

		new Effect.ScrollTo('question_' + elem_id, { duration:'1.2', offset:-50 });
		new Effect.Highlight('title_' + elem_id, {duration: '3', 'endcolor' : string });
		new Effect.Highlight('answerArea_' + elem_id, {duration: '3' });

		return false;
	},

	//------------------------------
	// Invision's comment delete
	//------------------------------

	deleteComment: function( e )
	{
		Event.stop(e);
		ipb.comments.deletePopUps.hide();
		
		var url = ipb.vars['base_url'] + 'app=core&module=ajax&section=comments&do=delete&parentId=' + ipb.comments.parentId + '&fromApp=' + ipb.comments.data['fromApp'] + '&secure_key=' + ipb.vars['secure_hash'] + '&comment_id=' + ipb.comments.commentId;
		
		Debug.write( url );
		
		new Ajax.Request(	url,
							{
								method: 'post',
								evalJSON: 'force',
								encoding: ipb.vars['charset'],
								parameters: {
									md5check: 			ipb.vars['secure_hash']
									},
								onSuccess: function(t)
								{
									if ( t.responseJSON['error'] ){
										alert( ipb.lang['no_permission'] );									
										return false;
									}
									else
									{
										/* Inc. deleted count */
										ipb.comments.deleted++;
										Debug.write( "Deleted - " + ipb.comments.deleted + ", on this page - " + ipb.comments.data['counts']['thisPageCount'] );
										
										if ( ipb.comments.data['counts']['curStart'] )
										{
											/* How many posts are actually left? */
											if ( ipb.comments.data['counts']['thisPageCount'] - ipb.comments.deleted < 1 )
											{
												/* redirect to the previous page */
												window.location = ipb.vars['base_url'] + 'app=core&module=global&section=comments&do=findLastComment&parentId=' +ipb.comments.parentId + '&fromApp=' + ipb.comments.data['fromApp'];
													
												return false;
											}
										}
										
										/* Just go away if still here */
										Effect.Fade( 'comment_comment_' + ipb.comments.commentId, { 'duration': 0.6 } );
									}
								}
							}
						);
	},

	//------------------------------
	// Invision's add comment
	//------------------------------

	addComment: function(e)
	{
		Event.stop(e);

		var content = ipb.textEditor.getEditor().getText();
		var isRte   = ipb.textEditor.getEditor().isRte();
		
		if( content.blank() )
		{
			alert( ipb.lang['post_empty'] );
			return;
		}
		
		/* Close editor */
		ipb.textEditor.getEditor().minimizeOpenedEditor();
		
		in_use = 0;
		
		var url = ipb.vars['base_url'] + 'app=core&module=ajax&section=comments&do=add&parentId=' + ipb.comments.parentId + '&fromApp=' + ipb.comments.data['fromApp'] + '&secure_key=' + ipb.vars['secure_hash'];
		Debug.write( url );
		
		new Ajax.Request(	url,
							{
								method: 'post',
								evalJSON: 'force',
								encoding: ipb.vars['charset'],
								parameters: {
									md5check: 			ipb.vars['secure_hash'],
									Post: 				content.encodeParam(),
									isRte:				isRte
								},
								onSuccess: function(t)
								{
									if ( t.responseJSON && t.responseJSON['error'] )
									{
										if( t.responseJSON['error'] == 'comment_requires_approval' )
										{
											ipb.global.okDialogue( ipb.lang['comment_requires_approval'] );
										}
										else
										{
											ipb.global.errorDialogue( ipb.lang['no_permission'] );
										}
									}
									else if ( t.responseText && t.responseText != 'no_permission' )
									{
										/* Are we *NOT* on the last page? */
										if ( ! Object.isUndefined( ipb.comments.data ) && ! Object.isUndefined( ipb.comments.data['counts'] ) )
										{
											if ( ( ipb.comments.data['counts']['commentTotal'] ) && ( ( ipb.comments.data['counts']['commentTotal'] - ipb.comments.data['counts']['curStart'] ) >= ipb.comments.data['counts']['perPage'] ) )
											{ 
												/* http redirect */
												window.location = ipb.vars['base_url'] + 'app=core&module=global&section=comments&do=findLastComment&parentId=' +ipb.comments.parentId + '&fromApp=' + ipb.comments.data['fromApp'];
												
												return false;
											}
										}
																					
										/* Fetch latest ID */
										latestId = 0;
										m        = t.responseText.match( /<a id='comment_(\d+?)'>/ );
										
										if ( m && m[1] )
										{
											latestId = m[1];
										}
																			
										$('comment_wrap').insert( t.responseText );
										// Debug.write( 'inserted data' );
										ipb.comments.data['counts']['thisPageCount']++;
										
										/* animate, exterminate, germinate */
										if ( latestId > 0 && $('comment_id_' + latestId ) )
										{
											/* Add dark BG and fetch RGB value */
											$('comment_comment_' + latestId ).addClassName( 'row2' );
											var startColor = $('comment_comment_' + latestId ).getStyle( 'background-color' );
											
											/* Add light BG and fetch RGB value */
											// $('comment_comment_' + latestId ).removeClassName('row2').addClassName( 'row1' );
											var endColor    = $('output_panel').getStyle( 'background-color' );
											// var endBorderColor = $('comment_comment_' + latestId ).getStyle( 'border-top-color' );
											
											/* Remove light BG */
											// $('comment_comment_' + latestId).removeClassName('row1').addClassName('row2');
											
											$('comment_comment_' + latestId ).hide();
											new Effect.BlindDown( 'comment_comment_' + latestId, { duration: 1.0, queue: 'front' } );
											// new Effect.Morph( 'comment_comment_' + latestId, { 'style': 'border-top-color:' + endBorderColor, queue: 'end' } );
											new Effect.Morph( 'comment_comment_' + latestId, { 'style': 'background-color:' + endColor, duration: 2.0, queue: 'end' } );
										}

										prettyPrint();
									}
								}
							}
						);
	},
	//------------------------------
	// RGB 2 HEX
	//------------------------------

	RGBToHex: function( cssStyle )
	{
		return cssStyle.replace( /(?:rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\))/gi, function( match, red, green, blue )
			{
				red = parseInt( red, 10 ).toString( 16 );
				green = parseInt( green, 10 ).toString( 16 );
				blue = parseInt( blue, 10 ).toString( 16 );
				var color = [red, green, blue] ;

				// Add padding zeros if the hex value is less than 0x10.
				for ( var i = 0 ; i < color.length ; i++ )
					color[i] = String( '0' + color[i] ).slice( -2 ) ;

				return '#' + color.join( '' ) ;
			 });
	},

	//------------------------------
	// Update Moderator notes
	//------------------------------

	updateNote: function( application_id, message )
	{
		url = ipb.vars['base_url'] + "app=groupjoin&module=ajax&section=public_ajax&do=update_notes&md5check="+ipb.vars['secure_hash'];

		new Ajax.Request( url,
		{
			method: 'post',
			evalJSON: 'force',

			parameters: 
			{				
				'application': application_id,
				'md5check': ipb.vars['secure_hash'],
				'message': message.encodeParam(),
			},

			onSuccess: function(t)
			{
				if( Object.isUndefined( t.responseJSON ) )	alert( "Bad Request" );
				else if ( t.responseJSON['error'] )	alert( t.responseJSON['error'] );
				else
				{	
					$( "notes_last_update" ).innerHTML = t.responseJSON['time'];
					$( "notes_member_update" ).innerHTML = t.responseJSON['member'];
					Effect.BlindDown( "notes_infos", { duration: 1 } );
				}
			}
		});
	},

	//------------------------------
	// Support an application
	//------------------------------

	support: function()
	{
		url = ipb.vars['base_url'] + "app=groupjoin&module=ajax&section=public_ajax&do=support&md5check="+ipb.vars['secure_hash'];

		new Ajax.Request( url,
		{
			method: 'post',
			evalJSON: 'force',

			parameters: 
			{				
				'application': View.application,
				'md5check': ipb.vars['secure_hash'],
			},

			onSuccess: function(t)
			{
				if( Object.isUndefined( t.responseJSON ) )	alert( "Bad Request" );
				else if ( t.responseJSON['error'] )	alert( t.responseJSON['error'] );
				else
				{					
					var elem = new Element('a', { 'class': t.responseJSON['class'], href: '#', id: "support_me", title: t.responseJSON['title'] }).update( t.responseJSON['text']);
					$( "support_me" ).remove();
					$( "supported").insert( elem );
					$( "total_votes" ).update( t.responseJSON['votes'] );
					View.initVoteEvent();
				}
			}
		});
	}
	// submitAnswer: function(e) 
	// {
		// Event.stop( e );

		
		
	// },

	/*addMod: function()
	{
		id = this.id.replace( '__addMe_', '' );
		fsid = jQ( "#fsid" ).val();
		url = ipb.vars['base_url'] + "app=groupjoin&module=ajax&section=ajax&do=add_moderator&md5check="+ipb.vars['md5_hash'];
		url = url.replace( '&amp;', '&');

		new Ajax.Request( url,
		{
			method: 'post',
			evalJSON: 'force',
			parameters: 
			{
				'id': id.encodeParam(),
				'md5check': ipb.vars['md5_hash'],
				'fsid' : fsid.encodeParam(),
			},
			onSuccess: function(t)
			{
				if( Object.isUndefined( t.responseJSON ) )	alert( "Bad Request" );
				else if ( t.responseJSON['error'] )	alert( t.responseJSON['error'] );
				else
				{	
					jQ( "#moderators_table" ).append( t.responseJSON['element'] );
					jQ( "#available_" + t.responseJSON['remove'] ).hide( ).remove( );
					Moderators.initEvents();
				}
			}
		});

		event.preventDefault();
	},	

	removeMod: function()
	{
		id = this.id.replace( '__removeMe_', '' );
		fsid = jQ( "#fsid" ).val();
		url = ipb.vars['base_url'] + "app=groupjoin&module=ajax&section=ajax&do=remove_moderator&md5check="+ipb.vars['md5_hash'];
		url = url.replace( '&amp;', '&');

		new Ajax.Request( url,
		{
			method: 'post',
			evalJSON: 'force',
			parameters: 
			{
				'id': id.encodeParam(),
				'md5check': ipb.vars['md5_hash'],
				'fsid' : fsid.encodeParam(),
			},
			onSuccess: function(t)
			{
				if( Object.isUndefined( t.responseJSON ) )	alert( "Bad Request" );
				else if ( t.responseJSON['error'] )	alert( t.responseJSON['error'] );
				else
				{	
					jQ( "#available_table" ).append( t.responseJSON['element'] );
					jQ( "#mod_" + t.responseJSON['remove'] ).hide( ).remove( );
					Moderators.initEvents();
				}
			}
		});

		event.preventDefault();
	},	*/

}

View.main();