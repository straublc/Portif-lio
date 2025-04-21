const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const menuOverlay = document.getElementById('menuOverlay');

openBtn.addEventListener('click', () => {
  menuOverlay.classList.add('active');
  menuOverlay.classList.remove('inactive');
});

closeBtn.addEventListener('click', () => {
  menuOverlay.classList.remove('active');
  menuOverlay.classList.add('inactive');

  // Remove a classe após a animação
  setTimeout(() => {
    menuOverlay.classList.remove('inactive');
  }, 400); // mesmo tempo do transition
});

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
  const windowTop = window.pageYOffset + window.innerHeight * 0.6;
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
    }, 70)
  );
}