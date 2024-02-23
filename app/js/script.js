let bootAudio = new Audio("../assets/sounds/bootup.mp3")
let bootUp = document.getElementById("bootUp")
let miniMe = document.querySelector(".miniMe")
let titled = document.querySelector(".titled")


let bootEnd = false;


window.onload = (e) => {
    
        boot();
    
}

function boot() {
    bootAudio.play();
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

// music 

const play = document.getElementById("lofi");
let audio = new Audio("../assets/sounds/Lofi-sample.mp3")
let music = false; 

document.getElementById('lofi').innerHTML =
    "music : Off";

function playMusic() {
    if (!music) {;
    audio.play()
    audio.volume = 0.45;
    music = true;
    console.log(music)
    play.classList.toggle("active")
    document.getElementById('lofi').innerHTML =
    "music : On";

    } else { 
        audio.pause()
        music = false;
        play.classList.remove("active")
        document.getElementById('lofi').innerHTML =
    "music : Off";

    }
}

play.addEventListener("click", playMusic)

