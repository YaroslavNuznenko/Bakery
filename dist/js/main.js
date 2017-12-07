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
    prevArrow: '<div class="slider__prevArrow slider__Arrows"><i class="fa fa-angle-left slider__chevron" aria-hidden="true"></i></div>'
});

$('.verticalSlider').slick({
	vertical: true,
	infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    verticalSwiping: true,
    arrows: false,
    // autoplay: true
});	