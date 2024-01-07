// Github section - Open
let github_icon = document.querySelector("#github-logo")
let github_section = document.querySelector("#github")
github_icon.addEventListener("click", () => {
  github_icon.style.backgroundColor = "grey"
  github_icon.style.color = "white"
  github_section.style.display = "flex"
  //  hide javascript
  Js_Icon.style.backgroundColor = ""
  Js_Icon.style.color = ""
  Javascript_section.style.display = "none"
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
  // hide React hide 
  react_icon.style.backgroundColor = ""
  react_icon.style.color = ""
  react_section.style.display = "none"
})