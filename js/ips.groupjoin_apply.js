//--------------------
// APPLY
//--------------------

var Apply =
{
	//Initialize everything! But only if dom is loaded.
	init: function()
	{
		document.observe("dom:loaded", function(){
			Apply.initEvents();
			Apply.trimText();
	});
		
	},
	
	//Initialize all events
	initEvents: function( )
	{		
		if( $$( '.roundButton' ).length ) $$( '.roundButton').each(
			function( element )
			{	
				id = element.identify();
				element.observe( 'click', Apply.scrollTo );
			}
		);
	},
	
	//Clean empty textareas
	trimText: function( )
	{
		texts = document.getElementsByTagName('textarea');

		for( i = 0; i < texts.length; ++i )
		{
			if( texts[i].getValue().blank() ) texts[i].value = texts[i].getValue().strip();
		}
	},
	
	//Smooth and sexy question redirect
	scrollTo: function(e) 
	{
		e.stop();
		var elem_id = this.id.replace( '__showQuestion_', '' );
		var temp = $$( '.row2' )[0].getStyle( 'background-color' );		
		string = Apply.RGBToHex( temp ); 

		new Effect.ScrollTo('question_' + elem_id, { duration:'1.2', offset:-50 });
		new Effect.Highlight('title_' + elem_id, {duration: '3', 'endcolor' : string });
		new Effect.Highlight('answerArea_' + elem_id, {duration: '3' });
	},

	//RGB to Hex conversion. Thanks Invision!
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

Apply.init();