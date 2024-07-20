new WOW().init();

//navbar
const navbarHeight = $(".navbar").outerHeight(true);
const changeingPoint = $("#home h1").offset().top;
$(window).on("scroll", function () {
  let windowScroll = $(window).scrollTop();

  if (windowScroll > changeingPoint - navbarHeight) {
    $(".navbar").addClass("nav-scrolled");
  } else {
    $(".navbar").removeClass("nav-scrolled");
  }
});

//loading
$(function () {
  $(".loader").fadeOut(500, function () {
    $(".loaderBackground").fadeOut(500, function () {
      $(".loaderBackground").remove();
    });
  });
});

//owl carasol
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });
});
