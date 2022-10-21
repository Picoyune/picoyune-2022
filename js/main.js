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
    slidesToShow: 5,
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
const offset = 40
// Go through them all
for(let i = 0; i < parallax.length; i++) {
  // Set the offset
  parallax[i].style.top = '-' + offset + 'px';
  // Assign a listener
  window.addEventListener('scroll', (e) => {
    // calculate how much to move per scroll 
    var shift = ((window.scrollY / 15) - offset) + 'px';
    // Shift the image up that amount
    parallax[i].style.top = shift;
  })
}

//  Header stuff
window.addEventListener('scroll', (e) => {
  if(window.scrollY > 70) {
    // console.log(document.getElementsByClassName('js-header').classList)
    document.getElementsByClassName('js-header')[0].classList.add('fixed', 'top-0', 'shadow-sm');
    // document.getElementsByClassName('js-header')[0].classList.remove('p-8');
    // document.getElementById('header-logo').classList.remove('w-64');
    document.getElementById('header-logo').classList.add('md:w-40');
    document.getElementById('header-placeholder').classList.remove('hidden');
  } else {
    document.getElementsByClassName('js-header')[0].classList.remove('fixed', 'top-0', 'shadow-sm');
    // document.getElementsByClassName('js-header')[0].classList.add('p-8');
    // document.getElementById('header-logo').classList.add('w-64');
    document.getElementById('header-logo').classList.remove('md:w-40');
    document.getElementById('header-placeholder').classList.add('hidden');    
  }
})