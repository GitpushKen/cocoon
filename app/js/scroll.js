
const boxScrolled = document.querySelectorAll(".box");
const contactScrolled = document.querySelectorAll(".box");
const btnDown = document.getElementById("enter")
const nav2Scrolled = document.getElementById('link2')
const nav1Scrolled = document.getElementById("link1")   
const navBar = document.querySelector(".nav-bar")
const welcomeBtn = document.querySelector(".welcome-screen")
const aboutPage = document.querySelectorAll(".about")



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
nav2Scrolled.addEventListener("click", toggleAbout)

function toggleAbout() {
    panel2.classList.add("visible")
}


let navOn = true; 

window.onload = (e) => {
    
    if (navOn) {
        nav1Scrolled.classList.add("active")
    }

}

function toggleBtn() {
    nav1Scrolled.classList.add("active")
    navBar.classList.add("active")
    panel1.style.display="block";
    panel2.style.display="none";
    welcomeBtn.style.display="none";


    soundToggle.volume = 0.50;
        soundToggle.play();
}


aboutPage.forEach((el) => watcher.observe(el));
boxScrolled.forEach((el) => watcher.observe(el));

contactScrolled.forEach((el) => watcher.observe(el));

// navbar

const navBtns = document.querySelectorAll(".nav-bar ul li a");
const panel1 = document.querySelector(".sub-cont1")
const panel2 = document.querySelector(".sub-cont2")
const homeBtn = document.getElementById("link1")


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

homeBtn.addEventListener("click", toggleHome)

function toggleHome() {
    panel1.style.display="block";
    panel2.style.display="none";
    welcomeBtn.style.display="none";
}

function toggleAbout() {
    panel2.style.display="block";
    panel1.style.display="none";
    welcomeBtn.style.display="none";
}

nav2Scrolled.addEventListener("click", toggleAbout)

let soundToggle = new Audio("../../assets/sounds/switch.wav")

////


//////



let bootAudio = new Audio("../../assets/sounds/bootup.mp3")
let bootUp = document.getElementById("bootUp")
let miniMe = document.querySelector(".miniMe")
let titled = document.querySelector(".titled")


let bootEnd = false;


window.onload = (e) => {
    
        boot();
    
}

function boot() {

    bootAudio.volume = 0.20;
    bootEnd = true;
    miniMe.classList.toggle("active");
    titled.classList.toggle("active");
    console.log(bootEnd)
}


setTimeout(function(){bootUp.classList.toggle("inactive")},2000);

function started() {
    bootUp.classList.toggle("inactive");
    bootEnd = false;
    console.log(bootEnd);
}


// Menu principal

clickSound = new Audio("../assets/sounds/click.mp3")

let startBtn = document.getElementById("starter")
let titleScreen = document.querySelector(".main")
let mainMenu = document.querySelector(".mainMenu")

startBtn.addEventListener("click", start)

function start() {
    miniMe.classList.toggle("inactive");
    titled.classList.toggle("inactive");
    setTimeout(function(){titleScreen.classList.toggle("inactive")},200);
    setTimeout(function(){mainMenu.classList.toggle("active")},200);
    setTimeout(startTime(), 550);
    clickSound.play();
    clickSound.volume = 0.20;
    startKiller();
}

function startKiller() {
    how.classList.remove("active");
    what.classList.remove("active");
    who.classList.remove("active");
    pres.classList.remove("active");

    what.classList.remove("down");
    how.classList.remove("down");
    how.classList.remove("down2");

    audio.pause()
        music = false;
        play.classList.remove("active")
        document.getElementById('lofi').innerHTML =
    "music : Off";
}


// Menu principal -- Blocks

const who = document.getElementById("who");
const what = document.getElementById("what");
const how = document.getElementById("how");

const contents = document.querySelector(".contents")
const pres = document.querySelector(".presScroller")
const scroller = document.querySelector(".scroller")


let whoOn = false;
let whatOn = false;
let howOn = false;


who.addEventListener("click", toggleWho);
what.addEventListener("click", toggleWhat);
how.addEventListener("click", toggleHow);




function toggleWho() {
    clickSound.play();
    clickSound.volume = 0.20;
    if (!whoOn) {   
        who.classList.toggle("active");
        pres.classList.toggle("active");
        what.classList.toggle("down");
        how.classList.toggle("down");
        whoOn = true;
        console.log("who", whoOn);
        scroller.scrollTop = 0; // Permet de reset le scroll
        

    } else {
        what.classList.remove("down");
        how.classList.remove("down");
        how.classList.remove("down2");
        who.classList.remove("active");
        pres.classList.remove("active")
        
        whoOn = false;
        console.log("who",whoOn);
    }

    how.classList.remove("active");
    what.classList.remove("active");
}



function toggleWhat() {

    clickSound.play();
    clickSound.volume = 0.20;
    if (!whatOn) {
        what.classList.toggle("active");
        how.classList.toggle("down2");
        whatOn = true;
        console.log("what", whatOn);
    } else {
        how.classList.remove("down2");
        what.classList.remove("active");
        whatOn = false;
        console.log("what", whatOn); 
    }
    
    /*if (whoOn) {
        how.classList.remove("down");
    } else {
        how.classList.toggle("down")
    }*/

    who.classList.remove("active");
    how.classList.remove("active");
}
function toggleHow() {
    clickSound.play();
    clickSound.volume = 0.20;
    how.classList.toggle("active");
    howOn = true;

    who.classList.remove("active");
    what.classList.remove("active");
}

// barre d'état


function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML =
    h + ":" + m;
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  };



  // 
  

const play = document.getElementById("lofi");
let audio = new Audio("../../assets/sounds/Lofi-sample.mp3")
let music = false; 

document.getElementById('lofi').innerHTML =
    "Lofi : Off";

function playMusic() {
    if (!music) {;
    audio.play()
    audio.volume = 0.25;
    music = true;
    console.log(music)
    play.classList.toggle("active")
    document.getElementById('lofi').innerHTML =
    "Lofi : On";

    } else { 
        audio.pause()
        music = false;
        play.classList.remove("active")
        document.getElementById('lofi').innerHTML =
    "Lofi : Off";

    }
}


