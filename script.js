// Get the menu button
const burger = document.querySelector(".burger")

//Event listner for click
burger.addEventListener("click",()=>{
  var ul= document.querySelector("body .Body header nav ul")
  console.log("Hello")
    ul.classList.toggle("active")
});
