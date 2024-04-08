//gradient effect
document.addEventListener('DOMContentLoaded', function () {
    const gradientEffect = document.createElement('div');
    gradientEffect.classList.add('gradient-effect');
    document.body.appendChild(gradientEffect);

    document.addEventListener('mousemove', function (e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        gradientEffect.style.background = `radial-gradient(circle 800px at ${x * 100}% ${y * 100}%, var(--gradient-color-1),var(--gradient-color-2))`;
    });
});

// toggle style swithcer
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

//hide style switcher on scroll
window.addEventListener("scroll",()=>{
    if( document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

//theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color == style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}

//dark mode
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("light");
})
window.addEventListener("load",()=> {
    if(document.body.classList.contains("light")){
        dayNight.querySelector("i").classList.add("fa-moon");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-sun");
    }
})