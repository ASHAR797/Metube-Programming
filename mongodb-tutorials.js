// Javascript section - Open
let mongo_db_icon = document.querySelector("#mongo-db-logo")
let mongo_db_section = document.querySelector("#mongo-db")
mongo_db_icon.addEventListener("click", () => {
  mongo_db_icon.style.backgroundColor = "grey"
  mongo_db_icon.style.color = "white"
  mongo_db_section.style.display = "flex"
  // hide hero web
  var heroSection = document.querySelector(".hero-section")
  heroSection.style.display = "none"
  // Hide javascript
  Js_Icon.style.backgroundColor = ""
  Js_Icon.style.color = ""
  Javascript_section.style.display = "none"
  // hide github
  github_icon.style.backgroundColor = ""
  github_icon.style.color = ""
  github_section.style.display = "none"
  // hide Python
  python_icon.style.backgroundColor = ""
  python_icon.style.color = ""
  python_section.style.display = "none"
  // hide C++ hide
  c_lang_icon.style.backgroundColor = ""
  c_lang_icon.style.color = ""
  c_lang_section.style.display = "none"
  // hide React hide 
  react_icon.style.backgroundColor = ""
  react_icon.style.color = ""
  react_section.style.display = "none"

  
  tl.from("#mongo-db h1, #mongo-db #language-videos iframe",{
  
    y: 30,
    duration: .6,
    opacity: 0,
    stagger: .3
  })
})