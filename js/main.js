new WOW().init();

//navbar
const navbarHeight = $(".navbar").outerHeight(true);
const changeingPoint = $("#home h1").offset().top;
$(window).on("scroll", function () {
  let windowScroll = $(window).scrollTop();
  if (windowScroll > 70) {
    $(".navbar").addClass("top-0");
  } else {
    $(".navbar").removeClass("top-0");
  }

  if (windowScroll > changeingPoint - navbarHeight) {
    $(".navbar").addClass("nav-scrolled");
  } else {
    $(".navbar").removeClass("nav-scrolled");
  }
});

//loading
document.addEventListener("DOMContentLoaded", () => {
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
    margin: 5,
    nav: true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplayHoverPause: true,
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

let started = false;
const statsSection = document.getElementById("states");
let nums = document.querySelectorAll(".squareBefore");

$(window).on("scroll", function () {
  let windowScroll = window.scrollY;
  if (windowScroll >= $("#states").offset().top - 500) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
});

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 1500 / goal);
}
