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

    spansToToggle.forEach(span => {
        if (span.style.display === "none") {
            span.style.display = "flex";
        } else {
            span.style.display = "none";
        }
    });


})


