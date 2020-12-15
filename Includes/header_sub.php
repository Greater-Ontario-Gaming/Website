<?php include 'h_head.php';?>
<body>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="subNav">
        <div class="navbar-brand flex-grow-1">
            <a class="" href="/">
                <img class="navbar-logo logo-lg" src="/Images/gtrp_logo_h.png" alt="Greater Toronto Roleplay logo" title="Greater Toronto Roleplay" />
                <img class="navbar-logo logo-sm" src="/Images/gtrp_logo_sm.png" alt="Greater Toronto Roleplay logo" title="Greater Toronto Roleplay" />
            </a>
        </div>
        <button class="navbar-toggler flex-grow-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/about">About us</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Departments
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/tps">Toronto Police Service</a>
                        <a class="dropdown-item" href="/opp">Ontario Provincial Police</a>
                        <a class="dropdown-item" href="/emsfire">Toronto Fire &amp; EMS</a>
                        <a class="dropdown-item" href="/civ">Civilian Operations</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/join">Join us</a>
                </li>
                <li class="nav-item d-md-none">
                    <a class="nav-link" href="<?php echo $discord_invitation_url; ?>"><i class="fab fa-discord"></i>&nbsp;&nbsp;Join our DISCORD</a>
                </li>
            </ul>
        </div>
        <a class="btn btn-outline d-none d-md-inline-block" href="<?php echo $discord_invitation_url; ?>" target="_blank"><i class="fab fa-discord"></i>Join our DISCORD</a>
    </nav>

    <div class="container body-content">