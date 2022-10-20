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


const parallax = document.getElementsByClassName('parallax');
const spinner1 = document.getElementById('spinner1');
// const spinner2 = document.getElementById('spinner2');
// const spinner3 = document.getElementById('spinner3');

const offset = 100

for(let i = 0; i < parallax.length; i++) {

  parallax[i].style.bottom = '-' + offset + 'px';

  window.addEventListener('scroll', (e) => {
    var shift = ((window.scrollY / 12) - offset) + 'px';
    parallax[i].style.bottom = shift;
  })
}


window.addEventListener('scroll', (e) => {
  // var topPos = ((window.scrollY / 6) - 60) + 'px';
  // parallax.style.top = topPos;
  // spinner2.style.top = topPos;
  // spinner3.style.top = topPos;

  // console.log(topPos);

  // if(window.scrollY < 100) {
  //   spinner1.classList.remove('hidden');
  //   spinner2.classList.add('hidden');
  //   spinner3.classList.add('hidden');
  // }  
  // if(window.scrollY > 100) {
  //   spinner1.classList.add('hidden');
  //   spinner2.classList.remove('hidden');
  //   spinner3.classList.add('hidden');
  // }
  // if(window.scrollY > 200) {
  //   spinner1.classList.add('hidden');
  //   spinner2.classList.add('hidden');
  //   spinner3.classList.remove('hidden');
  // }  
  // // if(window.scrollY > 300) {
  // //   spinner1.classList.add('hidden');
  // //   spinner2.classList.remove('hidden');
  // //   spinner2.classList.add('-scale-x-100');
  // //   spinner3.classList.add('hidden');
  // // }    
  // if(window.scrollY > 400) {
  //   spinner1.classList.add('hidden');
  //   spinner2.classList.add('hidden');
  //   spinner3.classList.remove('hidden');
  //   // spinner3.style.top = '100px';
  // }  
 
})