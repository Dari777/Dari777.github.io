// owl - carousel

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["", ""],
        dots: false,
        smartspeed: 2000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });
});

// scroller

$(document).ready(function () {
    $('#scroller').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 300);
        return false;
    });
});

// menuTop

$(document).ready(function () {

    var menu = $("#menu");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $("#menu").addClass("menuFixed transbg")
        } else if ($(this).scrollTop() <= 150) {
            $("#menu").removeClass("menuFixed transbg")
        }
    });

    // menuTop:hover
    menu.hover(
        function () {
            if ($(this).hasClass('menuFixed')) {
                $(this).removeClass('transbg');
            }
        },
        function () {
            if ($(this).hasClass('menuFixed')) {
                $(this).addClass('transbg');
            }
        });
});