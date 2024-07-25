// document.addEventListener("DOMContentLoaded", () => {
//   $(".service-landing img").animate({ width: "100%" }, 3000);
// });

//after translation modification
const setLanguage = (language) => {
  const navbarLinks = document.getElementById("navbarLinks");

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.innerHTML = translations[language][translationKey];
  });

  if (language === "ar") {
    document.dir = "rtl";

    navbarLinks.classList.replace("ms-auto", "me-auto");
    document.querySelector("body").classList.replace("en-font", "ar-font");
    document
      .getElementById("angleIcon")
      .classList.replace("fa-angle-right", "fa-angle-left");
  } else {
    document.dir = "ltr";
    navbarLinks.classList.replace("me-auto", "ms-auto");
    document.querySelector("body").classList.replace("ar-font", "en-font");
    document
      .getElementById("angleIcon")
      .classList.replace("fa-angle-left", "fa-angle-right");
  }
};
