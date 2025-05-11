const input = document.querySelector("#switchv5");

const sections = document.querySelectorAll("section");

const background = document.querySelector("body");

const mycommits = document.querySelectorAll(".title");

const date = document.querySelectorAll(".date");

const comment = document.querySelectorAll("span");

input.addEventListener("change", (event)=>{
  sections.forEach((section)=>{
    if(event.target.checked){
      section.classList.add("dark")
    }
    else {
      section.classList.remove("dark")
    }
    // section.classList.toggle("dark")
  })
  if(event.target.checked){
    background.classList.add("dark")
  }
  else{
    background.classList.remove("dark")
  }
  mycommits.forEach((title)=>{
    if(event.target.checked){
      title.classList.add("dark")
    }
    else{
      title.classList.remove("dark")
    }
  })
  date.forEach((date)=>{
    if(event.target.checked){
      date.classList.add("dark")
    }
    else {
      date.classList.remove("dark")
    }
  })
    comment.forEach((span)=>{
    if(event.target.checked){
      span.classList.add("dark")
    }
    else {
      span.classList.remove("dark")
    }
  })
})