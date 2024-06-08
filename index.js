$(document).ready(function () {
  console.log("ready!");
  $(".owl-carousel").owlCarousel({
    items: 2,
    loop: true,
    autoplay: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });
});
