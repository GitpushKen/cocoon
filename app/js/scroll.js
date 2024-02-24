
const boxScrolled = document.querySelectorAll(".box");
const aboutScrolled = document.querySelectorAll(".box");
const contactScrolled = document.querySelectorAll(".box");
const btnDown = document.getElementById("enter")
const nav2Scrolled = document.getElementById('link2')
const nav1Scrolled = document.getElementById("link1")   
const navBar = document.querySelector(".nav-bar")
const welcomeBtn = document.querySelector(".welcome-screen")



const watcher = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            setTimeout(function(){entry.target.classList.add("show")},200);
    } else {
        entry.target.classList.remove("show");
        }
    });
});


btnDown.addEventListener("click", toggleBtn)


let navOn = true; 

window.onload = (e) => {
    
    if (navOn) {
        nav1Scrolled.classList.add("active")
    }

}

function toggleBtn() {
    nav1Scrolled.classList.add("active")
    navBar.classList.add("active")
    welcomeBtn.classList.add("hidden")

    soundToggle.volume = 0.50;
        soundToggle.play();
}



boxScrolled.forEach((el) => watcher.observe(el));
aboutScrolled.forEach((el) => watcher.observe(el));
contactScrolled.forEach((el) => watcher.observe(el));

// navbar

const navBtns = document.querySelectorAll(".nav-bar ul li a");


navBtns.forEach(item => {
    item.addEventListener("click", function (m) {
        soundToggle.volume = 0.50;
        soundToggle.play();
    })
    item.addEventListener("click", function(e) {
        for(let i = 0; i < navBtns.length; i++) {
            navBtns[i].classList.remove("active");
        }
        this.classList.add("active");
    });
});


let soundToggle = new Audio("../../assets/sounds/switch.wav")

item.addEventListener("click", playMusic)

