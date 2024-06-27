const buttonplay = document.querySelector('.button_play');  

const audio = document.querySelector('.audio');

buttonplay.addEventListener('click', ()=> {
    if (audio.paused){
        audio.src = 'track.mp3';
        audio.play();
        audio.valume = 0.2;
        console.log('play');
    }

    else{
        audio.pause();
        console.log('stop');
    }
})