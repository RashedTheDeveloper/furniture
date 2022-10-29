$(document).ready(function () {

    var one = $("#carousel_one")
    var two = $("#carousel_two")

    one.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
    });

    two.owlCarousel({
        items: 3,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
    });


})