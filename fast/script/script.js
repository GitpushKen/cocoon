// music 

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

play.addEventListener("click", playMusic)
