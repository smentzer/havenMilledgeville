document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems);
  });

//drop down trigger
$(".dropdown-trigger").dropdown();

// start carrousel
$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});autoplay();

//carousel movement 
function autoplay() {
  $(".carousel").carousel("next");
  setTimeout(autoplay, 5500);
}

// move next carousel
$('.moveNextCarousel').click(function(e){
  e.preventDefault();
  e.stopPropagation();
  $('.carousel').carousel('next');
});

// move prev carousel
$('.movePrevCarousel').click(function(e){
  e.preventDefault();
  e.stopPropagation();
  $('.carousel').carousel('prev');
});

//faqs collapsible 
$(document).ready(function(){
  $('.collapsible').collapsible();
});

//image scroll 
$(document).ready(function(){
  $('.parallax').parallax();
});


//instagram
(function(){
  var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
  i.src = "https://cdn.curator.io/published/fbfb7a55-2d87-4d1f-99dc-c265f451b1c9.js";
  e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
  })();




