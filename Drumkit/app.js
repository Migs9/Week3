const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

// on key being pressed down, refer to above and play sound linked to in quotes
document.addEventListener('keypress', (key) => {
    if (key.keyCode == 113) {
        boom.currentTime = 0 // resets the audio file
        boom.play(); // plays
    }
    else if (key.keyCode == 119) {
        clap.currentTime = 0 
        clap.play(); 
    }
    else if (key.keyCode == 101) {
        hihat.currentTime = 0 
        hihat.play(); 
    }
    else if (key.keyCode == 114) {
        kick.currentTime = 0 
        kick.play(); 
    }
    else if (key.keyCode == 116) {
        openhat.currentTime = 0 
        openhat.play(); 
    }
    else if (key.keyCode == 121) {
        ride.currentTime = 0 
        ride.play(); 
    }
    else if (key.keyCode == 117) {
        snare.currentTime = 0 
        snare.play();
    }
    else if (key.keyCode == 105) {
        tink.currentTime = 0
        tink.play(); 
    }
    else if (key.keyCode == 111) {
        tom.currentTime = 0 
        tom.play();
    }
});
// tried to change this into a switch statement but couldn't quite get it to work



// play when clicked
document.getElementById('drumQ').addEventListener('click', function () {
    boom.currentTime = 0
    boom.play();
});

document.getElementById('drumW').addEventListener('click', function () {
    clap.currentTime = 0
    clap.play();
});

document.getElementById('drumE').addEventListener('click', function () {
    hihat.currentTime = 0
    hihat.play();
});

document.getElementById('drumR').addEventListener('click', function () {
    kick.currentTime = 0
    kick.play();
});

document.getElementById('drumT').addEventListener('click', function () {
    openhat.currentTime = 0
    openhat.play();
});

document.getElementById('drumY').addEventListener('click', function () {
    ride.currentTime = 0
    ride.play();
});

document.getElementById('drumU').addEventListener('click', function () {
    snare.currentTime = 0
    snare.play();
});

document.getElementById('drumI').addEventListener('click', function () {
    tink.currentTime = 0
    tink.play();
});

document.getElementById('drumO').addEventListener('click', function () {
    tom.currentTime = 0
    tom.play();
});
