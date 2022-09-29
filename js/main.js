$(document).ready(function(){

  $('.product-image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    fade: true,
    asNavFor: '.slider-nav',
    draggable: false
  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-image',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    infinite: false
  });  
});
		