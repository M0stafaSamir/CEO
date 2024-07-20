const translations = {
  en: {
    home: "Home",
    services: "Services",
    achivements: "achivements",
    projects: "Projects",
    vision: "Our vision",
    aboutus: "About us",
    contactus: "Contact us",
    projectOne: "Project One",
    projectTwo: "Project Two",
    homeH1: "Consultant Engineering Office",
    homelegend: "House of Experience over 15 Years",
    homeP: `CEO is a leading independent engineering firm specializing in the
          built environment, encompassing <br />
          the planning, design, management of various engineering projects, and
          construction.`,
    homeBtnService: "Exploar services",
    homeBtnContact: "Contact Us",
    whoWe: "Who We Are",

    whoWeContent: `Founded in 2008 in Cairo, Egypt, Construction Engineering Office
              (CEO) was established by a group of highly experienced engineers
              and architects. Over the years, CEO has emerged as a leading
              Engineering Consultancy firm in the region, specializing in Civil
              Engineering and Architectural Services. Starting modestly with a
              small team, we have now expanded to employ a workforce of over a
              hundred professionals, including Engineers, Architects, Cost
              Consultants, and Construction Management Experts.`,
    knowMore: `<i class="fa-solid fa-angles-right"></i> Know More`,

    ourServices: "Our services",
    ourClients: "Our clients",

    service1: "Architecture and Building Engineering",
    service2: "Contracts and Cost Consultancy",
    service3: "Project and Construction Management",
    service4: "Design the Mechanical and Biological Treatment (MBT)",
    service5: "Highways and Bridges",
    service6: "Landscaping and Public Realm",

    copyRights: ` Copyright &copy; 2024 Consultant Engineering Office, All rights
                reserved.`,
  },
  ar: {
    home: "الرئيسية",
    services: "خدماتنا  ",
    achivements: "الإنجازات",
    projects: "المشروعات",
    vision: "رؤيتنا",
    aboutus: "معلومات عنا",
    contactus: "اتصل بنا",
    projectOne: "المشروع لاول",
    projectTwo: "المشروع التاني",
    homeH1: "مكتب الاستشارات الهندسية",
    homelegend: "خبرة أكثر من 15 سنة",
    homeP: `CEO هي شركة هندسية مستقلة رائدة متخصصة في البيئة المبنية، والتي تشمل التخطيط <br /> والتصميم وإدارة المشاريع الهندسية المختلفة والبناء.`,
    homeBtnService: "تعرف على خدماتنا",
    homeBtnContact: "اتصل بنا",
    whoWe: "من نحن",
    whoWeContent: `تأسس عام 2008 في القاهرة، مصر، مكتب الإستشارات الهندسيه
(CEO) من قبل مجموعة من المهندسين ذوي الخبرة العالية
والمهندسين المعماريين. على مر السنين، برز CEO كرائد
شركة استشارات هندسية في المنطقة، متخصصة في الشؤون المدنية
الخدمات الهندسية والمعمارية. تبدأ بشكل متواضع مع
فريق صغير، لقد توسعنا الآن لتوظيف قوة عاملة تزيد عن
مائة مهني، بما في ذلك المهندسون والمهندسون المعماريون والتكلفة
خبراء استشاريون وخبراء في إدارة البناء.`,
    knowMore: `<i class="fa-solid fa-angles-left"></i> اعرف المزيد`,

    ourServices: "خدماتنا",
    ourClients: "عملائنا",

    service1: "الهندسة المعمارية وهندسة البناء",
    service2: "العقود والاستشارات المتعلقة بالتكاليف",
    service3: "إدارة المشاريع والبناء",
    service4: "تصميم المعالجة الميكانيكية والبيولوجية",
    service5: "الطرق السريعة والجسور",
    service6: "تنسيق الحدائق والمجال العام",

    copyRights: `  مكتب  الإستشارات الهندسيه جميع الحقوق محفوظه  &copy; 2024`,
  },
};

const langSelector = document.querySelector("select");
langSelector.addEventListener("change", function (e) {
  setLanguage(e.target.value);
  localStorage.setItem("lang", e.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(localStorage.getItem("lang"));
  langSelector.value = localStorage.getItem("lang");
});

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
      .querySelector("#ourClients h2 span")
      .classList.replace("our-clients-en", "our-clients-ar");
    document
      .querySelector("#services h2 span")
      .classList.replace("our-services-en", "our-services-ar");
  } else {
    document.dir = "ltr";
    navbarLinks.classList.replace("me-auto", "ms-auto");
    document.querySelector("body").classList.replace("ar-font", "en-font");
    document
      .querySelector("#ourClients h2 span")
      .classList.replace("our-clients-ar", "our-clients-en");
    document
      .querySelector("#services h2 span")
      .classList.replace("our-services-ar", "our-services-en");
  }
};
