const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.nav-list');
const header = document.querySelector('.header');
const navLink = document.querySelectorAll('.nav-link ');
// console.log(navLinks);
const themeSwitchers = document.querySelectorAll('span');
const dynamicInputs = document.querySelectorAll('input.input-color-picker');
const landingH1s = document.querySelectorAll('#hero h1 span');
console.log(landingH1s);

//* Function to handle the theme color selector
const handleThemeUpdate = (cssVars) => {
  const root = document.querySelector(':root');
  const keys = Object.keys(cssVars);
  keys.forEach((key) => {
    inputColor = cssVars[key];
    root.style.setProperty(key, cssVars[key]);
    console.log(cssVars[key]);
  });
};

//* Looping through the inputs provided from the color selector to set the
//* primary color variable.
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

//* Change Header Background Color on Scroll
document.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 250) {
    header.style.backgroundColor = '#1f1e1e96';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
});

// * Open an closing the resume modal
const modalContainer = document.querySelector('#modal-container');
const closeButton = document.querySelector('.close-modal');
const closeIcon = document.querySelector('.close-icon');
const resumeButton = document.querySelector('.resume-button');

resumeButton.addEventListener('click', (event) => {
  modalContainer.classList.add('show');
  header.classList.add('hide');
});

//* Adding event listenters to close modal.
closeButton.addEventListener('click', (event) => {
  modalContainer.classList.remove('show');
  header.classList.remove('hide');
});
closeIcon.addEventListener('click', (event) => {
  modalContainer.classList.remove('show');
  header.classList.remove('hide');
});
