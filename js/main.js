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

// Get all elements with parallax class
const parallax = document.getElementsByClassName('parallax');
// The extent to which they are start lower than normal
const offset = 100
// Go through them all
for(let i = 0; i < parallax.length; i++) {
  // Set the offset
  parallax[i].style.bottom = '-' + offset + 'px';
  // Assign a listener
  window.addEventListener('scroll', (e) => {
    // calculate how much to move per scroll 
    var shift = ((window.scrollY / 12) - offset) + 'px';
    // Shift the image up that amount
    parallax[i].style.bottom = shift;
  })
}