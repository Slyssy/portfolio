const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.nav-list');
const header = document.querySelector('.header');
// const navLinks = document.querySelector('.nav-list ');
// console.log(navLinks);
const themeSwitchers = document.querySelectorAll('span');
const dynamicInputs = document.querySelectorAll('input.input-color-picker');
const landingH1s = document.querySelectorAll('#hero h1 span');
console.log(landingH1s);
const handleThemeUpdate = (cssVars) => {
  const root = document.querySelector(':root');
  const keys = Object.keys(cssVars);
  keys.forEach((key) => {
    inputColor = cssVars[key];
    root.style.setProperty(key, cssVars[key]);
    console.log(cssVars[key]);
  });
};

dynamicInputs.forEach((item) => {
  item.addEventListener('input', (e) => {
    const cssPropName = `--primary-${e.target.getAttribute('data-id')}`;
    console.log(cssPropName);
    console.log(e.target.getAttribute('data-id'));
    handleThemeUpdate({
      [cssPropName]: e.target.value,
    });
  });
});

// const triggerAnimations = function () {
//   landingH1s.forEach((h1) => h1.classList.toggle('animate'));
// };

// * Hamburger Menu Event Listener
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

//% Smooth Scroll Function
mobileMenu.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains('nav-link')) {
    const destinationID = e.target.getAttribute('href');
    document
      .querySelector(destinationID)
      .scrollIntoView({ behavior: 'smooth' });
  }
});
