const marcos = document.getElementById('marcos');
const tioze = document.querySelector('.tioze');
let colidiu = false;

const jump = () => {
    marcos.classList.add('jump');

    setTimeout(() => {
        marcos.classList.remove('jump');
    }, 600);
}

const reload = () => {
    location.reload;
}

const loop = setInterval(() => {
    const tiozePosition = tioze.offsetLeft;
    const marcosPosition = parseInt(window.getComputedStyle(marcos).bottom.replace('px', ''), 10);
    const marcosWidth = marcos.offsetWidth;
    const tiozeWidth = tioze.offsetWidth;
    const marcosLeft = marcos.offsetLeft;

    if (marcosLeft + marcosWidth >= tiozePosition && marcosLeft <= tiozePosition + tiozeWidth && marcosPosition < 80 && !colidiu) {
        colidiu = true;

        tioze.style.animation = 'none';
        marcos.style.animation = 'none';

        tioze.style.left = `${tiozePosition}px`;
        marcos.style.bottom = `${marcosPosition}px`;
        marcos.style.left = `${marcosLeft}px`;

        marcos.src = "./img/meteoro.gif";
        marcos.class = "imagem"
        marcos.style.width = '41%';
        marcos.style.left = 0;
        marcos.style.bottom = 0;

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);
document.getElementById("botaum").addEventListener('touchstart', jump);
