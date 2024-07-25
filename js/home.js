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

//after translation modification
const setLanguage = (language) => {
  const navbarLinks = document.getElementById("navbarLinks");

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.innerHTML = translations[language][translationKey];
  });

  const statText = document.querySelectorAll(".statsText");

  if (language === "ar") {
    document.dir = "rtl";

    //change dir of stat text
    for (let index = 0; index < statText.length; index++) {
      statText[index].classList.add("flex-row-reverse");
    }

    navbarLinks.classList.replace("ms-auto", "me-auto");
    document.querySelector("body").classList.replace("en-font", "ar-font");
    document
      .querySelector("#ourClients h2 span")
      .classList.replace("our-clients-en", "our-clients-ar");
    document
      .querySelector("#services h2 span")
      .classList.replace("our-services-en", "our-services-ar");
    document
      .querySelector("#projects h2 span")
      .classList.replace("projects-en", "projects-ar");
  } else {
    //change dir of stat text
    for (let index = 0; index < statText.length; index++) {
      statText[index].classList.remove("flex-row-reverse");
    }

    document.dir = "ltr";
    navbarLinks.classList.replace("me-auto", "ms-auto");
    document.querySelector("body").classList.replace("ar-font", "en-font");
    document
      .querySelector("#ourClients h2 span")
      .classList.replace("our-clients-ar", "our-clients-en");
    document
      .querySelector("#services h2 span")
      .classList.replace("our-services-ar", "our-services-en");
    document
      .querySelector("#projects h2 span")
      .classList.replace("projects-ar", "projects-en");
  }
};
