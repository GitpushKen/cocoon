

const startBtn = document.getElementById("starter");
const intro = document.querySelector(".container-intro");
const menu = document.querySelector(".container-menu");

const block = document.querySelector(".block");

const whoBtn = document.getElementById("whoT");
const whatBtn = document.getElementById("whatT");
const howBtn = document.getElementById("howT");

const whoBlock = document.getElementById("whoB");
const whatBlock = document.getElementById("whatB");
const howBlock = document.getElementById("howB");

const backBtn = document.getElementById("backTo");


let whoT = false;
let whatT = false;
let howT = false;


clickSound = new Audio("assets/sounds/click.mp3")
const soundMenuBtn = document.getElementById("sound-btn")



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


startBtn.addEventListener("click", startClicked)

whoBtn.addEventListener("click", whoClicked)
whatBtn.addEventListener("click", whatClicked)
howBtn.addEventListener("click", howClicked)

backBtn.addEventListener("click", backClicked)


function startClicked() {
    intro.classList.add("hidden");
    menu.classList.add("active");
    if (soundMenu) {
        clickSound.play();
        clickSound.volume = 0.20;
    }

    startTime();
}

function whoClicked() {
    whatBtn.classList.remove("active")
    whatBlock.classList.remove("visible")

    howBtn.classList.remove("active")
    howBlock.classList.remove("visible")

    if (soundMenu) {
        clickSound.play();
        clickSound.volume = 0.20;
    }


    if (!whoT) {
        whoBtn.classList.add("active")
        whoBlock.classList.toggle("visible")
        whatBlock.classList.add("hidden")
        howBlock.classList.add("hidden")

        backBtn.classList.add("hidden")

        whatBtn.classList.add("hidden")
        howBtn.classList.add("hidden")

        whoT = true;
    } else {
        whoBtn.classList.remove("active")
        whoBlock.classList.remove("visible")
        whatBtn.classList.remove("hidden")
        howBtn.classList.remove("hidden")
        backBtn.classList.remove("hidden")
        whoT = false;
    }
}

function whatClicked() {

    if (soundMenu) {
        clickSound.play();
        clickSound.volume = 0.20;
    }

    if (!whatT) {

        howBtn.classList.remove("active")
        howBlock.classList.remove("visible")

        backBtn.classList.add("hidden")

        whatBtn.classList.add("active")
        whatBlock.classList.toggle("visible")
        howBlock.classList.add("hidden")

        howBtn.classList.add("hidden")

        whatT = true;
    } else {
        whatBtn.classList.remove("active")
        whatBlock.classList.remove("visible")

        backBtn.classList.remove("hidden")

        howBtn.classList.remove("hidden")
        whatT = false;
    }
}

function howClicked() {

    if (soundMenu) {
        clickSound.play();
        clickSound.volume = 0.20;
    }

    if (!howT) {
        howBtn.classList.add("active")
        howBlock.classList.toggle("visible")
        howBlock.classList.remove("hidden")


        howT = true;
    } else {
        howBtn.classList.remove("active")
        howBlock.classList.remove("visible")
        howBlock.classList.add("hidden")


        howT = false;
    }
}

function backClicked() {

    if (soundMenu) {
        clickSound.play();
        clickSound.volume = 0.20;
    }
    
    intro.classList.remove("hidden");
    menu.classList.remove("active");
}

//// time



  //// Music


  const playedM = document.getElementById("lofiM");
  let audioM = new Audio("assets/sounds/lofi.mp3");
  let musicM = false; 
  
  document.getElementById('lofiM').innerHTML =
      "Music : Off";
  
    playedM.addEventListener("click", playMusicM)

  function playMusicM() {
      if (!musicM) {;
      audioM.play()
      audioM.volume = 0.25;
      musicM = true;
      console.log(musicM)
      document.getElementById('lofiM').innerHTML =
      "Music : On";
  
      } else { 
          audioM.pause()
          musicM = false;
          document.getElementById('lofiM').innerHTML =
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