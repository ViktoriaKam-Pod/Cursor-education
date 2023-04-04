
window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[class ="${e.keyCode}"]`);
    audio.play()
    
})