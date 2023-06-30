const themeSwitcher = document.querySelector(".header__toggle-btn");


const checkColorMode = () => {
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
}

checkColorMode()

const switchTheme = () => {
  if (themeSwitcher.classList.contains("switch")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");

    // set color mode to light
    localStorage.setItem("color-mode", "light");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");

    // set color mode to dark
    localStorage.setItem("color-mode", "dark");
  }

  // console.log(localStorage);
};
switchTheme();

themeSwitcher.addEventListener("click", () => {
  themeSwitcher.classList.toggle("switch");
  switchTheme();
});


//! add OS prefer setting