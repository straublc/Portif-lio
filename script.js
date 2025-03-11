const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const card = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 0.5) / 1;
  card.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

animeScroll();

if (card.length) {
  window.addEventListener(
    "scroll",
    debounce(function () {
      animeScroll();
    }, 0.1)
  );
}

//Mobile
document.addEventListener("DOMContentLoaded", function () {
  const hamburguer = document.querySelector(".hamburguer");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav-list li a");

  hamburguer.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Fechar o menu ao clicar em um dos links da lista de navegação
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
});