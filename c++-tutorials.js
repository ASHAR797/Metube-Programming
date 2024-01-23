// Javascript section - Open
let c_lang_icon = document.querySelector("#c_plus_plus-logo")
let c_lang_section = document.querySelector("#c-plus-plus")
c_lang_icon.addEventListener("click", () => {
  c_lang_icon.style.backgroundColor = "grey"
  c_lang_icon.style.color = "white"
  c_lang_section.style.display = "flex"
  // hide hero web
  var heroSection = document.querySelector(".hero-section")
  heroSection.style.display = "none"
  // hide Javascript
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
  // hide Mongo db
  mongo_db_icon.style.backgroundColor = ""
  mongo_db_icon.style.color = ""
  mongo_db_section.style.display = "none"
  // hide React hide 
  react_icon.style.backgroundColor = ""
  react_icon.style.color = ""
  react_section.style.display = "none"

  tl.from("#c-plus-plus h1, #c-plus-plus #language-videos iframe",{
  
    y: 30,
    duration: .6,
    opacity: 0,
    stagger: .3
  })
})