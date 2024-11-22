const menu = document.querySelector('.menu');
const fundo2 = document.querySelector('.fundo');
const menuButton = document.querySelector('#menuButton');
const close1 = document.getElementById('fechar');


menuButton.addEventListener('click', () => {
    menu.setAttribute('id', 'menuOn');
    fundo2.setAttribute('id', 'fundoOn');
})


close1.addEventListener('click', () => {
    menu.removeAttribute('id', 'menuOn');
    fundo2.removeAttribute('id', 'fundoOn');
})

fundo2.addEventListener('click', () => {
    menu.removeAttribute('id', 'menuOn');
    fundo2.removeAttribute('id', 'fundoOn');
})
