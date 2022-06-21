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
