
export let audio = window.addEventListener("keydown", function(e){
    const audios = document.querySelector(`audio[class ="${e.keyCode}"]`);
    audios.play()
    
})