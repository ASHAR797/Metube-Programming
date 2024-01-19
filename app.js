// Open Menu
const menu = document.getElementById("menu");
const asideSection = document.querySelector(".aside-section");
// javascript tutorials

menu.addEventListener("click", () => {

  if (asideSection.style.width === "4%") {
    asideSection.style.width = "20%"; // Decrease width
  } else {
    asideSection.style.width = "4%"; // Increase width
  }


  setTimeout(function () {

    let spansToToggle = document.querySelectorAll(".language-span");
    spansToToggle.forEach(span => {
      if (span.style.display === "none") {
        span.style.display = "flex";
      } else {
        span.style.display = "none";
      }
    });

  }, 100)
})
function toggleTheme() {
  const root = document.documentElement;
  const currentBackgroundColor = getComputedStyle(root).getPropertyValue('--backgroundcolorTheme').trim();

  // Toggle between light and dark themes
  if (currentBackgroundColor === 'whitesmoke') {
    root.style.setProperty('--backgroundcolorTheme', '#333');
    root.style.setProperty('--colorTheme', '#fff');
  } else {
    root.style.setProperty('--backgroundcolorTheme', 'whitesmoke');
    root.style.setProperty('--colorTheme', 'black');
  }


  let icon = document.getElementById('themeIcon');

  // Toggle between light and dark classes
  if (icon.classList.contains('ri-sun-fill')) {
    icon.classList.remove('ri-sun-fill');
    icon.classList.add('ri-moon-fill');
  } else {
    icon.classList.remove('ri-moon-fill');
    icon.classList.add('ri-sun-fill');
  }

}

