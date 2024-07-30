//after translation modification
const setLanguage = (language) => {
  const navbarLinks = document.getElementById("navbarLinks");

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.innerHTML = translations[language][translationKey];
  });
  const pageLocation = document.querySelector(".pageLocation");

  if (language === "ar") {
    document.dir = "rtl";

    navbarLinks.classList.replace("ms-auto", "me-auto");
    document.querySelector("body").classList.replace("en-font", "ar-font");
    document
      .getElementById("angleIcon")
      .classList.replace("fa-angle-right", "fa-angle-left");
    //page location
    pageLocation.classList.remove("start-0");
    pageLocation.classList.add("end-0");
    pageLocation.classList.replace("border-end", "border-start");
  } else {
    document.dir = "ltr";
    navbarLinks.classList.replace("me-auto", "ms-auto");
    document.querySelector("body").classList.replace("ar-font", "en-font");
    document
      .getElementById("angleIcon")
      .classList.replace("fa-angle-left", "fa-angle-right");
    //page location
    pageLocation.classList.remove("end-0");
    pageLocation.classList.add("start-0");
    pageLocation.classList.replace("border-start", "border-end");
  }
};
