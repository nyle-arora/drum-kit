
function playAudio(sound){
    var audio = new Audio(sound);
    audio.play()
}

document.querySelector('.w').addEventListener("click", function(){playAudio("./sounds/tom-1.mp3")}, false);
document.querySelector('.a').addEventListener("click", function(){playAudio("./sounds/tom-2.mp3")}, false);
document.querySelector('.s').addEventListener("click", function(){playAudio("./sounds/tom-3.mp3")}, false);
document.querySelector('.d').addEventListener("click", function(){playAudio("./sounds/tom-4.mp3")}, false);
document.querySelector('.j').addEventListener("click", function(){playAudio("./sounds/snare.mp3")}, false);
document.querySelector('.k').addEventListener("click", function(){playAudio("./sounds/crash.mp3")}, false);
document.querySelector('.l').addEventListener("click", function(){playAudio("./sounds/kick-bass.mp3")}, false);
