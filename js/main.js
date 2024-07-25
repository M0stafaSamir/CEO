new WOW().init();

//navbar
const navbarHeight = $(".navbar").outerHeight(true);
// const changeingPoint = $("#home h1").offset().top;
$(window).on("scroll", function () {
  let windowScroll = $(window).scrollTop();
  console.log(windowScroll);
  if (windowScroll > 115) {
    $(".navbar").addClass("top-0");
  } else {
    $(".navbar").removeClass("top-0");
  }

  if (windowScroll > 228.5 - navbarHeight) {
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
