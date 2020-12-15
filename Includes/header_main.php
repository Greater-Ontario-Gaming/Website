<?php include 'h_head.php';?>
<body>
    <nav id="mainNav" class="container fixed-top navbar-theme-black">
        <div class="row">
            <div class="col-auto">
                <a class="navbar-brand" href="#"><img class="navbar-logo" src="/Images/gtrp_logo.png" alt="Greater Toronto Roleplay logo" title="Greater Toronto Roleplay" /></a>
            </div>
            <div id="mainNavContent" class="col">
                <div class="content hide-on-compact d-none d-sm-inline-block">
                    <div class="text-center d-inline-block">THIS IS A<br /><span>FICTITIOUS GAMING COMMUNITY</span></div>
                </div>
                <div class="content d-none d-sm-inline-block">
                    FOR REAL EMERGENCIES: <span class="text-nowrap">DIAL 9-1-1</span>
                </div>
                <div class="content">
                    <a class="btn btn-outline" href="<?php echo $discord_invitation_url; ?>" target="_blank"><i class="fab fa-discord"></i>Join our DISCORD</a>
                </div>
            </div>
        </div>
    </nav>

    <div class="container body-content">
        <div class="splash">
            <div class="splash-slideshow">
                <?php
                $month = date('m');
                $day = date('d');

                if($month == 4 && $day == 1) {
                ?>
                <div class="splash-img splash-img-aprilfools"></div>
                <?php
                } else {
                ?>
                <div class="splash-img splash-img1"></div>
                <div class="splash-img splash-img2" style="display:none"></div>
                <div class="splash-img splash-img3" style="display:none"></div>
                <div class="splash-img splash-img4" style="display:none"></div>
                <div class="splash-img splash-img5" style="display:none"></div>
                <div class="splash-img splash-img6" style="display:none"></div>
                <?php
                }
                ?>
            </div>
            <div class="splash-overlay">
                <div class="splash-slogan">Toronto, Ontario... now in Los Santos</div>
                <div class="row menu">
                    <div class="col-sm">
                        <h2>Departments</h2>
                        <ul>
                            <li><a href="/tps">Toronto Police Service</a></li>
                            <li><a href="/opp">Ontario Provincial Police</a></li>
                            <li><a href="/emsfire">Toronto Fire &amp; EMS</a></li>
                            <li><a href="/civ">Civilian Operations</a></li>
                        </ul>
                    </div>
                    <div class="col-sm">
                        <h2>Explore</h2>
                        <ul>
                            <li><a href="/about">About us</a></li>
                            <li><a href="/about#Gallery">Gallery</a></li>
                            <li><a href="/join">Join us</a></li>
                        </ul>
                    </div>
                    <?php /*
                    <div class="col-sm">
                        <h2>Explore</h2>
                        <ul>
                            <li><a href="/about">About us</a></li>
                            <li><a href="#Departments">Departments</a></li>
                            <li><a href="/about#Gallery">Gallery</a></li>
                        </ul>
                    </div>
                    <div class="col-sm">
                        <h2>Become a member</h2>
                        <ul>
                            <li><a href="/join">Why join GTRP?</a></li>
                            <li><a href="/join#Opportunities">Available opportunities</a></li>
                            <li><a href="/join#Apply">How to apply</a></li>
                            <li><a href="/join#Day">A day in the life</a></li>
                        </ul>
                    </div> */
                    ?>
                </div>
            </div>
        </div>
        <div class="row justify-content-center inline-alert d-sm-none">
            <div class="col text-center">
                <h3>This is a FICTITIOUS GAMING COMMUNITY</h3>
                <h3><b>For real emergencies: <span class="text-nowrap">DIAL 9-1-1</span></b></h3>
            </div>
        </div>