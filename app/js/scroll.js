
const boxScrolled = document.querySelectorAll(".box");

const welcomeBtn = document.querySelector(".welcome-screen")
const btnDown = document.getElementById("enter")
const homeBtn = document.getElementById("link1")

const navBar = document.querySelector(".nav-bar")

const navBtns = document.querySelectorAll(".nav-bar ul li a");
const nav1Scrolled = document.getElementById("link1") 
const nav2Scrolled = document.getElementById('link2')
const nav3Scrolled = document.getElementById('link3')
  
const aboutPage = document.querySelectorAll(".about")
const contactPage = document.querySelectorAll(".contact-me")

const panel1 = document.querySelector(".sub-cont1")
const panel2 = document.querySelector(".sub-cont2")
const panel3 = document.querySelector(".sub-cont3")



let navOn = true; 

window.onload = (e) => {
    
    if (navOn) {
        nav1Scrolled.classList.add("active")
    }

}

//// Intersection Obs

const watcher = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setTimeout(function(){entry.target.classList.add("show")},200);
    } else {
        entry.target.classList.remove("show");
        }
    });
});


aboutPage.forEach((el) => watcher.observe(el));
boxScrolled.forEach((el) => watcher.observe(el));
contactPage.forEach((el) => watcher.observe(el));


//// Toggle btn

btnDown.addEventListener("click", toggleBtn)
homeBtn.addEventListener("click", toggleHome)

function toggleBtn() {
    nav1Scrolled.classList.add("active")
    navBar.classList.add("active")
    panel1.style.display="block";
    panel2.style.display="none";
    panel3.style.display="none";
    welcomeBtn.style.display="none";
    soundToggle.volume = 0.50;
        soundToggle.play();
}


//// navbar

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

function toggleHome() {
    panel1.style.display="block";
    panel2.style.display="none";
    panel3.style.display="none";
    welcomeBtn.style.display="none";
}

function toggleAbout() {
    panel2.classList.add("visible")
    panel2.style.display="block";
    panel1.style.display="none";
    panel3.style.display="none";
    panel3.classList.remove("visible")
    welcomeBtn.style.display="none";
}

function toggleContact() {
    panel3.classList.add("visible")
    panel2.classList.remove("visible")
    panel3.style.display="block";
    panel2.style.display="none";
    panel1.style.display="none";
    welcomeBtn.style.display="none";
}

nav2Scrolled.addEventListener("click", toggleAbout)
nav2Scrolled.addEventListener("click", toggleAbout)
nav3Scrolled.addEventListener("click", toggleContact)


let soundToggle = new Audio("assets/sounds/switch.wav")





////// Mobile

//// Booting

let bootAudio = new Audio("assets/sounds/bootup.mp3")
let bootUp = document.getElementById("bootUp")
let miniMe = document.querySelector(".miniMe")
let titled = document.querySelector(".titled")

let bootEnd = false;

window.onload = (e) => {
    
    if(window.innerHeight > window.innerWidth){
        boot();
    }
     
    
}

function boot() {
    bootAudio.play()
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

//// Menu principal

clickSound = new Audio("assets/sounds/click.mp3")
const soundMenuBtn = document.getElementById("sound-btn")


backBtn.addEventListener("click", backTitle)
startBtn.addEventListener("click", start)
soundMenuBtn.addEventListener("click", soundMenuToggle)


let soundMenu = true;
document.getElementById('sound-btn').innerHTML =
        "Sounds : On";

function soundMenuToggle() {
    if (!soundMenu) {
        soundMenu = true;
        console.log("sound on")
        document.getElementById('sound-btn').innerHTML =
        "Sounds : On";
    
        } else if (soundMenu) { 
            soundMenu = false;
            document.getElementById('sound-btn').innerHTML =
        "Sounds : Off";
    
        }
}

function start() {
    miniMe.classList.toggle("inactive");
    titled.classList.toggle("inactive");
    setTimeout(function(){titleScreen.classList.toggle("inactive")},200);
    setTimeout(function(){mainMenu.classList.toggle("active")},200);
    setTimeout(startTime(), 550);
    if (soundMenu) {
        clickSound.play();
        clickSound.volume = 0.20;
    }
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
        played.classList.remove("active")
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
    if (soundMenu) {
        clickSound.play();
        clickSound.volume = 0.20;
    }
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

    if (howOn) {
        iconMail2.classList.remove("active");
    }
    backBtn.classList.toggle("inactive");
    how.classList.remove("active");
    what.classList.remove("active");
    panelPro.classList.remove("active")
}

function toggleWhat() {

    if (soundMenu) {
        clickSound.play();
        clickSound.volume = 0.20;
    }
    if (!whatOn) {
        what.classList.toggle("active");
        panelPro.classList.toggle("active")
        how.classList.toggle("down2");
        whatOn = true;
        console.log("what", whatOn);
    } else {
        how.classList.remove("down2");
        what.classList.remove("active");
        panelPro.classList.remove("active")
        whatOn = false;
        console.log("what", whatOn); 
    }

    if (howOn) {
        iconMail2.classList.remove("active");
    }
    
    /*if (whoOn) {
        how.classList.remove("down");
    } else {
        how.classList.toggle("down")
    }*/
    backBtn.classList.toggle("inactive");
    who.classList.remove("active");
    how.classList.remove("active");
}

function toggleHow() {
    if (soundMenu) {
        clickSound.play();
        clickSound.volume = 0.20;
    }
    how.classList.toggle("active");
    iconMail2.classList.toggle("active");
    howOn = true;
    who.classList.remove("active");
    what.classList.remove("active");
    backBtn.classList.toggle("inactive");

}

//// barre d'état




//// Mail 

const iconMail = document.querySelector(".icons")

iconMail.addEventListener('click', sendMail)

function sendMail(){
    window.location.href = "mailto:kenperot@outlook.fr?subject=En%20savoir%20plus&body=";
    console.log("work")
}




const iconMail2 = document.querySelector(".contact")
const panelPro = document.querySelector(".panelProject")

iconMail2.addEventListener('click', sendMail)

function backTitle() {
    miniMe.classList.remove("inactive");
    titled.classList.remove("inactive");
    setTimeout(function(){titleScreen.classList.remove("inactive")},200);
    setTimeout(function(){mainMenu.classList.remove("active")},200);
    setTimeout(startTime(), 550);
    if (soundMenu) {
        clickSound.play();
        clickSound.volume = 0.20;
    }
    startKiller();
}