// /*Show Menu >992px*/
// $('.menuButton').on("click", function () {
// 	if($('.navbarHeader__menu').hasClass('active')){
// 		$('.navbarHeader__menu').removeClass('active');	
// 		$('body').removeClass('fixed');	
// 		$('.hamburger--slider').removeClass('is-active');	
// 	}
// 	else{
// 		$('.navbarHeader__menu').addClass('active');	
// 		$('body').addClass('fixed');
// 		$('.hamburger--slider').addClass('is-active');
// 	}
// })

$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<div class="slider__nextArrow slider__Arrows"><i class="fa fa-angle-right slider__chevron" aria-hidden="true"></i></div>',
    prevArrow: '<div class="slider__prevArrow slider__Arrows"><i class="fa fa-angle-left slider__chevron" aria-hidden="true"></i></div>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false
            }
        },
        {
            breakpoint: 370,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
});

$('.verticalSlider').slick({
	vertical: true,
	infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    verticalSwiping: true,
    arrows: false,
    // autoplay: true
    responsive: [
        {
            breakpoint: 992,
            settings: {
                verticalSwiping: false,
                vertical: false,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 700,
            settings: {
                verticalSwiping: false,
                vertical: false,
                slidesToShow: 1,
                slidesToScroll:1
            }
        },
    ]
});


/*Show Menu >992px*/
$('.headerNav__hamburger').on("click", function () {
    if($('.headerNav__collapsedMenu').hasClass('active')){
        $('.headerNav__collapsedMenu').removeClass('active');
        $('body').removeClass('fixed');
        $('.hamburger--spring').removeClass('is-active');
    }
    else{
        $('.headerNav__collapsedMenu').addClass('active');
        $('body').addClass('fixed');
        $('.hamburger--spring').addClass('is-active');
    }
})