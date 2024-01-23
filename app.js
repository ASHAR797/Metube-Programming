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

// Gsap Animation

let tl = gsap.timeline()
tl.from("#menu , nav div:nth-child(2) , nav div:nth-child(1) , nav div:nth-child(3) button", {
  y: 20,
  duration: 1,
  opacity: 0
})
tl.from(".hero-section h1:nth-child(1) , .hero-section h1:nth-child(2) , .hero-section p , .hero-section div:nth-child(2) h2 , .hero-section div:nth-child(2) img", {
  y: 50,
  duration: 1,
  opacity: 0,
  stagger: .3
})

tl.from("#c-plus-plus h1, #c-plus-plus h1, #python h1, #mongo-db h1, #github h1, #react h1", {

  y: 50,
  duration: .6,
  opacity: 0,
  stagger: .3
})



