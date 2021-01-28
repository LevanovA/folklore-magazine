'use strict';

$(document).ready(function(){

    $('.burger').on('click', function(){
        $(this).toggleClass('burger--active')
        $('.menu__box').slideToggle(400)
    });
});

'use strick'

$('.button--modal-open').on('click', function () {
    console.log('click')
})

'use strict';

$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

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

//# sourceMappingURL=main.js.map
