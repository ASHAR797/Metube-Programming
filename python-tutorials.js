// Javascript section - Open
let python_icon = document.querySelector("#python-logo")
let python_section = document.querySelector("#python")
python_icon.addEventListener("click", () => {
  python_icon.style.backgroundColor = "grey"
  python_icon.style.color = "white"
  python_section.style.display = "flex"
  // hide hero web
  var heroSection = document.querySelector(".hero-section")
  heroSection.style.display = "none"
  // hide javascript
  Js_Icon.style.backgroundColor = ""
  Js_Icon.style.color = ""
  Javascript_section.style.display = "none"
  // hide github
  github_icon.style.backgroundColor = ""
  github_icon.style.color = ""
  github_section.style.display = "none"
  // hide Mongo db
  mongo_db_icon.style.backgroundColor = ""
  mongo_db_icon.style.color = ""
  mongo_db_section.style.display = "none"
  // hide C++ hide
  c_lang_icon.style.backgroundColor = ""
  c_lang_icon.style.color = ""
  c_lang_section.style.display = "none"
  // hide React hide 
  react_icon.style.backgroundColor = ""
  react_icon.style.color = ""
  react_section.style.display = "none"

  tl.from("#python h1, #python #language-videos iframe",{
  
    y: 30,
    duration: .6,
    opacity: 0,
    stagger: .3
  })
})