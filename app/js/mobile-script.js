

const startBtn = document.getElementById("starter");
const intro = document.querySelector(".container-intro");
const menu = document.querySelector(".container-menu");

const block = document.querySelector(".block");

const whoBtn = document.getElementById("who");
const whatBtn = document.getElementById("what");
const howBtn = document.getElementById("how");

const whoBlock = document.getElementById("whoB");
const whatBlock = document.getElementById("whatB");
const howBlock = document.getElementById("howB");

const backBtn = document.getElementById("backTo");


let who = false;
let what = false;
let how = false;

startBtn.addEventListener("click", startClicked)

whoBtn.addEventListener("click", whoClicked)
whatBtn.addEventListener("click", whatClicked)
howBtn.addEventListener("click", howClicked)

backBtn.addEventListener("click", backClicked)


function startClicked() {
    intro.classList.add("hidden");
    menu.classList.add("active");
}

function whoClicked() {
    whatBtn.classList.remove("active")
    whatBlock.classList.remove("visible")

    howBtn.classList.remove("active")
    howBlock.classList.remove("visible")


    if (!who) {
        whoBtn.classList.add("active")
        whoBlock.classList.toggle("visible")
        whatBlock.classList.add("hidden")
        howBlock.classList.add("hidden")

        backBtn.classList.add("hidden")

        whatBtn.classList.add("hidden")
        howBtn.classList.add("hidden")

        who = true;
    } else {
        whoBtn.classList.remove("active")
        whoBlock.classList.remove("visible")
        whatBtn.classList.remove("hidden")
        howBtn.classList.remove("hidden")
        backBtn.classList.remove("hidden")
        who = false;
    }
}

function whatClicked() {

    if (!what) {

        howBtn.classList.remove("active")
        howBlock.classList.remove("visible")

        backBtn.classList.add("hidden")

        whatBtn.classList.add("active")
        whatBlock.classList.toggle("visible")
        howBlock.classList.add("hidden")

        howBtn.classList.add("hidden")

        what = true;
    } else {
        whatBtn.classList.remove("active")
        whatBlock.classList.remove("visible")

        backBtn.classList.remove("hidden")

        howBtn.classList.remove("hidden")
        what = false;
    }
}

function howClicked() {

    if (!how) {
        howBtn.classList.add("active")
        howBlock.classList.toggle("visible")
        howBlock.classList.remove("hidden")


        how = true;
    } else {
        howBtn.classList.remove("active")
        howBlock.classList.remove("visible")
        howBlock.classList.add("hidden")


        how = false;
    }
}

function backClicked() {
    intro.classList.remove("hidden");
    menu.classList.remove("active");
}


  //// Music


  const played = document.getElementById("lofi");
  let audio = new Audio("assets/sounds/lofi.mp3");
  let music = false; 
  
  document.getElementById('lofi').innerHTML =
      "Music : Off";
  
    played.addEventListener("click", playMusic)

  function playMusic() {
      if (!music) {;
      audio.play()
      audio.volume = 0.25;
      music = true;
      console.log(music)
      document.getElementById('lofi').innerHTML =
      "Music : On";
  
      } else { 
          audio.pause()
          music = false;
          document.getElementById('lofi').innerHTML =
      "Music : Off";
  
      }
  }
  
//// barre d'état

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

//// Mail 

howBlock.addEventListener('click', sendMail)

function sendMail(){
    window.location.href = "mailto:kenperot@outlook.fr?subject=En%20savoir%20plus&body=";
    console.log("work")
}