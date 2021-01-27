'use strict';

$(document).ready(function(){
    $(document).on("click", ".js-tab", function () {
        const type = $(this).attr('data-tab');
        if (type === 'edition' || type === 'editorial-council' || type === 'international-council') {
            $('.editor__list').removeClass('active');
            $('.edition__menu-name').removeClass('edition__menu-name--active');
            $(`.js-${type}`).addClass('active');
            $(this).addClass('edition__menu-name--active')
        } else if (type === 'partners' || type === 'indexing') {
            $('.partners__list').removeClass('active');
            $('.partners__name').removeClass('partners__name--active');
            $(`.js-${type}`).addClass('active');
            $(this).addClass('partners__name--active')
        }
    });
});
