

document.addEventListener('DOMContentLoaded', function() {
    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');
    const button = document.querySelector('.button');

    const jump = () => {
        mario.classList.add('jump');

        setTimeout(() =>{
            mario.classList.remove('jump');
        }, 500);
    }

    const loop = setInterval(() => {

        console.log('loop')

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        console.log(marioPosition);

        if(pipePosition <= 120 && pipePosition >0 && marioPosition <80){
            pipe.style.animation = 'none';
            pipe.style.left= `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom= `${marioPosition}px`;

            mario.src= './imagens/game-over.png';
            mario.style.width= '75px'
            mario.style.marginLeft= '50px'

            button.style.display = 'block';
            button.addEventListener('click', botaoRestart);

            clearInterval(loop);
        }

    }, 10)

    const botaoRestart = () => {
        document.location.reload(true);
    }

    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            jump();
        }
    });

    // Fazer o Mario pular quando a página carregar
    jump();
});
