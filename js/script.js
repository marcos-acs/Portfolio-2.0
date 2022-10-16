// typed  

var typed = new Typed(".typing", {
strings:["", "Web Design.", "Web Developer.", "Graphic Design."],
    typeSpeed: 100,
    BackSpeed: 80,
    loop: true
})



// switcher 

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style switcher on scroll 
window.addEventListener("scroll", () => {
        if(document.querySelector(".style-switcher").classList.contains("open")) 
        {
            document.querySelector(".style-switcher").classList.remove("open");
        }
    })

// theme colors 

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled")
        } else {
            style.setAttribute("disabled", "true")
        }
    })
}

// theme light and dark mode 

const dayNight = document.querySelector(".day-night");
const body = document.getElementsByTagName("body");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

// ASIDE 

const nav = document.querySelector("#nav"); //ul
    navList = nav.querySelectorAll("li");
    totalNavList = navList.length;
    for(let i=0; i<totalNavList; i++){
        const a= navList[i].querySelector("a");
        a.addEventListener("click", function(){
            for(let j=0; j,totalNavList; j++){
                this.classList.add("active");
                navList[j].querySelector("a").classList.remove("active");
            }     
        })
    }



// toggle

const toggle = document.querySelector(".toggler");
    const aside = document.querySelector("aside");
    toggle.addEventListener("click", function(){
        if(!aside.classList.contains("open")){
            aside.classList.add("open");
        } else {
            aside.classList.remove("open");
        }
    })

    


/*
const toggle = document.querySelector(".toggler");
const aside = document. querySelector("aside"); 
console.log(aside.contains(toggle));
*/


/*
 if (a.value != "active"){
                this.classList.add("active");
                
            } else {
                this.classList.remove("active");
            }
*/