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

    //Работа поиска в шапке
    const searchButton = $('.menu__search-icon');
    const searchClose = $('.menu__search-close');

    function openingAndClosingSearch() {
        const menuList = $('.menu__list');
        const menuLogin = $('.menu__login');
        const menuLanguages = $('.menu__languages');
        const burger = $('.burger');
        const menuUser = $('.menu__user');
        const menuForm = $('.menu__search-form');
        const menuInput = $('.menu__search-input');
        const menuLeft = $('.menu__left');
        const header = $('.header');

        menuList.toggleClass('menu__list--search-active');
        menuLogin.toggleClass('menu__login--search-active');
        menuLanguages.toggleClass('menu__languages--search-active');
        burger.toggleClass('burger--search-active');
        menuUser.toggleClass('menu__user--search-active');
        menuForm.toggleClass('menu__search-form--search-active');
        menuLeft.toggleClass('menu__left--search-active');
        header.toggleClass('header--search-active');
        menuInput.val('');

    }

    //Работа с поиском по клавише enter
    $(document).on('keydown', function (e) {
        const menuInput = $('.menu__search-input');
        const menuForm = $('.menu__search-form');

        if (e.keyCode === 13) {
            if (menuInput.val().length > 0) {
                $(document).off('keydown');
                menuForm.trigger('submit');
            } else {
                openingAndClosingSearch();
            }
        }
    })

    searchButton.on('click', function () {
        const menuInput = $('.menu__search-input');
        const menuForm = $('.menu__search-form');

        if (menuInput.val().length > 0) {
            menuForm.trigger('submit')
        } else {
            openingAndClosingSearch();
        }
    })

    searchClose.on('click', function () {
        openingAndClosingSearch();
    })

    const windowWidth = window.innerWidth

    if (windowWidth < 480) {
        const menuInput = $('.menu__search-input');

        menuInput.attr("placeholder", "Введите запрос");
    }
});
