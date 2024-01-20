// react section - Open
let react_icon = document.querySelector("#react-logo")
let react_section = document.querySelector("#react")
react_icon.addEventListener("click", () => {
  react_icon.style.backgroundColor = "grey"
  react_icon.style.color = "white"
  react_section.style.display = "flex"
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
  // hide C++ hide
  c_lang_icon.style.backgroundColor = ""
  c_lang_icon.style.color = ""
  c_lang_section.style.display = "none"
})