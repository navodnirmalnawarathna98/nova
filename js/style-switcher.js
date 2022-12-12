
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", () =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})


const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
    alternateStyle.forEach((style) =>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}



const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", ()=>{
    dayNight.querySelector("i").classList.add("fa-sun");
    dayNight.querySelector("i").classList.add("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", ()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})