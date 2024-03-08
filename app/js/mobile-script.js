

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

    if (!what) {

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
//// Toggle btn

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




