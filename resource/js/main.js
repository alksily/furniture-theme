/*
Template Name: Venturi - Bootstrap 5 eCommerce HTML Template.
Author: Mate_Themes
*/
(function () {
    //===== Prealoder
    window.onload = function () {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }

    $('.mobile-menu-toggle').on('click', function () {
        $('.mobile-menu').addClass('active');
        $('body').addClass('overflow-hidden');
    });

    $('.mobile-menu .close').on('click', function () {
        $('.mobile-menu').removeClass('active');
        $('body').removeClass('overflow-hidden');
    });

    $('.mobile-menu ul li.has-submenu').on('click', (el) => {
        $(el.target).siblings('ul').slideToggle();
        $(el.target).siblings('i').toggleClass('icon-rotate');
    });

    $(document).on('mouseup', function (e) {
        var offCanvusMenu = $('.mobile-menu');

        if (!offCanvusMenu.is(e.target) && offCanvusMenu.has(e.target).length === 0) {
            $('.mobile-menu').removeClass('active');
            $('body').removeClass('overflow-hidden');
        }
    });

    $('.vr6-category-dropdown').on('click', function () {
        $('.vr6-category-sidebar').addClass('active');
        $('body').addClass('overflow-hidden');
    });

    $('.vr6-category-sidebar .close-ct-menu').on('click', function () {
        $('.vr6-category-sidebar').removeClass('active');
        $('body').removeClass('overflow-hidden');
    });

    $('.vr6-category-sidebar ul li.has-submenu').on('click', (el) => {
        $(el.target).siblings('ul').slideToggle();
        $(el.target).siblings('i').toggleClass('icon-rotate');
    });

    $(document).on('mouseup', function (e) {
        let offCanvusMenu = $('.vr6-category-sidebar');

        if (!offCanvusMenu.is(e.target) && offCanvusMenu.has(e.target).length === 0) {
            $('.vr6-category-sidebar').removeClass('active');
            $('body').removeClass('overflow-hidden');
        }
    });

    //vr product slider
    $(".vr-poroduct-single-slider").slick({
        slidesToShow: 1,
        asNavFor: '.vr-product-thumb-control',
        prevArrow: '<button class="prev-arrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-angle-right"></i></button>',

    });

    $(".vr-product-thumb-control").slick({
        slidesToShow: 3,
        arrows: false,
        asNavFor: '.vr-poroduct-single-slider',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    $(".vr-poroduct-single-slider2").slick({
        slidesToShow: 1,
        asNavFor: '.pd-vertical-product-slider',
        prevArrow: '<button class="prev-arrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fas fa-angle-right"></i></button>',

    });

    //Fancybox.bind("[data-fancybox]", {});
    $('.zoom-on-hover').zoom({magnify: 1.2});
})();
