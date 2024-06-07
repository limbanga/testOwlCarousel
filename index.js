$(document).ready(function () {
  console.log("ready!");
  $(".owl-carousel").owlCarousel({
    items: 2,
    loop: true,
    autoplay: true,
    margin: 10,
    nav: true,
    dots: true,
  });
});