'use strict';

$(document).ready(function(){

    $('.js-submenu').on('click', function(e){
        e.preventDefault();
    });

    $('.js-submenu').on('click', function(e){
        if ($(this).parent('.menu__item').find('.menu__sublist').is(":visible")) {
            $('.menu__item').removeClass('active');
            $('.menu__item .menu__sublist').slideUp(400);
        } else {
            $('.menu__item').removeClass('active');
            $('.menu__item .menu__sublist').slideUp(400);
            $(this).parent('.menu__item').toggleClass('active');
            $(this).parent('.menu__item').find('.menu__sublist').slideToggle(400);
        }
    });

    $('.menu__subitem').on('click', function(e){
        $('.menu__item').removeClass('active');
        $('.menu__item .menu__sublist').slideUp(400);
    });
});
