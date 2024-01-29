const nav = document.querySelector(".navbar");
const openIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");

openIcon.addEventListener("click", ()=>{
    nav.style.display = "flex";
    openIcon.style.display = "none";
    closeIcon.style.display = "block";
})

closeIcon.addEventListener("click", ()=>{
    nav.style.display = "none";
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
})

function myFunction(x) {
    if (!x.matches) {
        nav.style.display = "flex";
        closeIcon.style.display = "none";
        openIcon.style.display = "none";
    } else {
        nav.style.display = "none";
        closeIcon.style.display = "none";
        openIcon.style.display = "block";
    }
  }
  
  let x = window.matchMedia("(max-width: 1230px)")
  
  myFunction(x);
  
  x.addEventListener("change", function() {
    myFunction(x);
  });
