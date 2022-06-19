const themeSwitchers = document.querySelectorAll('span');
const dynamicInputs = document.querySelectorAll('input.input-color-picker');

let cssPropName;
const handleThemeUpdate = (cssVars) => {
  const root = document.querySelector(':root');
  const keys = Object.keys(cssVars);
  keys.forEach((key) => {
    root.style.setProperty(key, cssVars[key]);
  });
};

// themeSwitchers.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     const themeColor = e.target.getAttribute('data-bg-color');

//     handleThemeUpdate({
//       '--primary-color': themeColor,
//     });

//     $("input.input-color-picker[data-id='theme-color']").val(themeColor);
//   });
// });

dynamicInputs.forEach((item) => {
  item.addEventListener('input', (e) => {
    const cssPropName = `--primary-${e.target.getAttribute('data-id')}`;
    handleThemeUpdate({
      [cssPropName]: e.target.value,
    });
  });
});
