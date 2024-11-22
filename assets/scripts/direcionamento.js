const servicos = document.getElementById('servicosButton');
const sobreNos = document.getElementById('sobreButton');
const contatos = document.getElementById('contatosButton');
const inicio = document.getElementById('inicio');

const menu1 = document.querySelector('.menu');
const fundo3 = document.querySelector('.fundo');



servicos.addEventListener('click', () => {
    menu1.removeAttribute('id', 'menuOn');
    fundo3.removeAttribute('id', 'fundoOn');
})

sobreNos.addEventListener('click', () => {
    menu1.removeAttribute('id', 'menuOn');
    fundo3.removeAttribute('id', 'fundoOn');
})

contatos.addEventListener('click', () => {
    menu1.removeAttribute('id', 'menuOn');
    fundo3.removeAttribute('id', 'fundoOn');
})

inicio.addEventListener('click', () => {
    menu1.removeAttribute('id', 'menuOn');
    fundo3.removeAttribute('id', 'fundoOn');
})