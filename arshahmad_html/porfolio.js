(function () {

    'use strict';


    var $projects = $('.projects');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function (e) {

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({
            filter: filter
        });

    });

    $('.project').mouseenter(function () {

        $(this).find('.project-overlay').css({
            'top': '-100%'
        });
        $(this).find('.project-hover').css({
            'top': '0'
        });

    }).mouseleave(function () {

        $(this).find('.project-overlay').css({
            'top': '0'
        });
        $(this).find('.project-hover').css({
            'top': '100%'
        });

    });

})(jQuery);


var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 400) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});


$('.link').click(function(e) {

    e.preventDefault();

    $('html, body').animate({

        scrollTop: $('#' + $(this).data('scroll')).offset().top

    }, '300');

});