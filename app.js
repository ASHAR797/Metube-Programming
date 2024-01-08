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

    let spansToToggle = document.querySelectorAll(".language-span");

    setTimeout(() => {
        spansToToggle.forEach(span => {
            if (span.style.display === "none") {
                span.style.display = "flex";
            } else {
                span.style.display = "none";
            }
        });
    }, 110);


})

let  themeLight = document.querySelector(".ri-sun-fill")
let  themeDark = document.querySelector(".ri-moon-fill")
    themeLight.addEventListener("click", () => {
        themeDark.style.display = "block"
        themeLight.style.display = "none"
      })
      themeDark.addEventListener("click", () => {
        themeLight.style.display = "block"
        themeDark.style.display = "none"
      })


