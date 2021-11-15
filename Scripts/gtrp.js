//$(document).on('scroll', function () {

//    if ($(document).scrollTop() > 100) {
//        $('#mainNav').addClass('compact');
//    } else {
//        $('#mainNav').removeClass('compact');
//    }

//});

$(document).ready(function () {
    if ($('#mainNav')) {
        $(document).on('scroll', function () {
            if ($(document).scrollTop() > 100) {
                $('#mainNav').addClass('compact');
            } else {
                $('#mainNav').removeClass('compact');
            }
        });
    }

    AOS.init({
        once: true,
        anchorPlacement: 'center-bottom'
    });

    setTimeout(moveNextSplashImage, 4000);

    var gallery = $('.gallery');
    if (gallery) {
        var images = '';

        for (var i = 1; i < 63; i++) {
            //images += '<div class="col-sm-2 col-md-4 col-lg-3"><img src="/Images/Gallery/' + i.toString().padStart(2, '0') + '.jpg" /></div>';
            //images += '<img class="img-gallery" src="/Images/Gallery/' + i.toString().padStart(2, '0') + '.jpg" />';
            images += '<div class="img-gallery"><a href="/Images/Gallery/' + i.toString().padStart(2, '0') + '.png" title="Click to enlarge"><img src="/Images/Gallery/thumbs/' + i.toString().padStart(2, '0') + '.png" /></a></div>';

            if (i === 1) {
                //images += '<img class="img-gallery" src="/Images/gtrp_logo.png" />';
                images += '<div class="img-gallery no-zoom"><img src="/Images/gtrp_logo.png" /></div>';
            }
        }

        gallery.html(gallery.html() + images);

        var grid = gallery.masonry({
            itemSelector: '.img-gallery',
            gutter: '.gutter-sizer',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });

        grid.imagesLoaded().progress(function () {
            grid.masonry('layout');
        });

        grid.imagesLoaded(function () {
            $('.gallery').fancybox({
                selector: '.img-gallery > a',
                protect: true,
                infoBar: false,
                smallBtn: true,
                toolbar: false
            });
        });
        
    }
});

function moveNextSplashImage() {
    var slideshowContainer = $('.splash-slideshow');

    if (slideshowContainer) {
        var count = slideshowContainer.find('.splash-img').length;
        if (count > 1) {
            var current = slideshowContainer.data('index') ? slideshowContainer.data('index') : 1;
            var next = current + 1;
            if (next > count)
                next = 1;

            var currentImg = slideshowContainer.find('.splash-img:nth-child(' + current + ')');
            var nextImg = slideshowContainer.find('.splash-img:nth-child(' + next + ')');
            if (nextImg) {
                currentImg.fadeOut(2500);
                nextImg.fadeIn(2500, function () {
                    slideshowContainer.data('index', next);

                    setTimeout(moveNextSplashImage, 5000);
                });
            }
        }
    }
}