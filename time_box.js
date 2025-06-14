const caixa = document.getElementById('caixa-movel');
const cabecalho = document.getElementById('cabecalho-movel');

let offsetX = 0;
let offsetY = 0;
let arrastando = false;

cabecalho.addEventListener('mousedown', (e) => {
    arrastando = true;
    offsetX = e.clientX - caixa.offsetLeft;
    offsetY = e.clientY - caixa.offsetTop;
    cabecalho.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (arrastando) {
        caixa.style.left = `${e.clientX - offsetX}px`;
        caixa.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', () => {
    arrastando = false;
    cabecalho.style.cursor = 'grab';
});