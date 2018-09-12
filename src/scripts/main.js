// Main
$(document).ready(function() {
    // Phần Slider
    $('.home-slider .owl-carousel').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            0: {
                dots: false,
            },
            992: {
                dots: true
            },
        }
    });
    // Phần Clients
    $('.home_clients .owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            // breakpoint from 360 up
            360: {
                items: 2,
            },
            // breakpoint from 768 up
            768: {
                items: 4,
            },
            // breakpoint from 992 up
            992: {
                items: 6,
            }
        }
    });
});
$(window).scroll(function() {
    var cc = $(window).scrollTop()
    console.log(1)
    if (cc > 0) {
        $('header').addClass('active')
    } else {
        $('header').removeClass('active')
    }
})