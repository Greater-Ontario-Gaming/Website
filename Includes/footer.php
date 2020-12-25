    </div>

    <footer>
        <div class="container-fluid">
            <div class="row menu">
                <div class="col-sm-6 col-md-4 col-lg-4 mt-sm-0">
                    <h2>Contact us</h2>
                    <p style="font-weight: bold;">JOIN OUR DISCORD TO CHAT WITH US</p>
                    <p>Click the button below.</p>
                    <a class="btn btn-outline" href="<?php echo $discord_invitation_url; ?>" target="_blank"><i class="fab fa-discord"></i> Join our DISCORD</a>
                </div>
                <div class="col-sm-6 col-md-4 col-lg mt-sm-0">
                    <h2>About us</h2>
                    <ul>
                        <li><a href="/about">What we do</a></li>
                        <li><a href="/about#Leadership">Leadership team</a></li>
                        <li><a href="/dev#Leadership">Development team</a></li>
                        <li><a href="/about#Gallery">Gallery</a></li>
                    </ul>
                </div>
                <div class="col-sm-6 col-md-4 col-lg mt-md-0">
                    <h2>Departments</h2>
                    <ul>
                    <li><a href="/lps">London Police Service</a></li>
                            <li><a href="/wrps">Waterloo Regional Police Service</a></li>
                            <li><a href="/opp">Ontario Provincial Police</a></li>
                            <li><a href="/emsfire">Fire &amp; EMS</a></li>
                            <li><a href="/civ">Civilian Operations</a></li>
                    </ul>
                </div>
                <div class="d-sm-none d-md-block col-md-4 d-lg-none"></div>
                <div class="col-sm-6 col-md-4 col-lg mt-lg-0">
                    <h2>Join us</h2>
                    <ul>
                        <li><a href="/join">Why join GTRP?</a></li>
                        <li><a href="/join#Opportunities">Available opportunities</a></li>
                        <li><a href="/join#Apply">How to apply</a></li>
                        <li><a href="/join#Day">A day in the life</a></li>
                    </ul>
                </div>
                <div class="col-sm-12 col-md-4 col-lg mt-lg-0">
                    <h2>Connect with us</h2>
		<?php /*
                    <ul>
                            <li><a href="#">News releases</a></li>
                            <li><a href="#">Upcoming events</a></li>
                            <li><a href="#">Social media</a></li>
                        </ul>*/
		?>
                    <p>Follow our social media channels to find out more about what we do at GTRP.</p>
                    <a class="btn btn-social btn-social-instagram" href="https://www.instagram.com/GreaterTorontoRP/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a class="btn btn-social btn-social-twitter" href="https://twitter.com/GTRPOperations" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-social btn-social-youtube" href="https://www.youtube.com/channel/UCIrZllWX8h8kzZ3oqJ5yfdA" target="_blank"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            <div class="row footer2">
                <div class="col text-right">
                    &copy; Greater Ontario Roleplay <?php echo date('Y'); ?>
                </div>
            </div>
        </div>
    </footer>

    <script src="/Scripts/jquery-3.5.1.min.js"></script>
    <script src="https://unpkg.com/@popperjs/core@2"></script>
    <script src="/Scripts/bootstrap.min.js"></script>
    <script src="/Scripts/imagesloaded.pkgd.min.js"></script>
    <script src="/Scripts/masonry.pkgd.min.js"></script>
    <script src="/Scripts/jquery.fancybox.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="/Scripts/gtrp.js"></script>
</body>
</html>
