const conteiner = document.querySelectorAll('.conteiner');
const descricaoServicos = document.querySelector('.descricaoServicos');
const fundo = document.querySelector('.fundo');
const saibaMais = document.querySelectorAll('h4');
const close4 = document.getElementById('close');

saibaMais.forEach((el) => {
    el.addEventListener('click', function() {
        const servico = this.closest('.conteiner');
        const nomeServico = servico.querySelector('span').textContent;
        const info = servico.querySelector('h5').textContent;
        const button = servico.querySelector('button').textContent;

        const titulo = descricaoServicos.querySelector('h2');
        const botao = descricaoServicos.querySelector('button');
        const descricao = descricaoServicos.querySelector('p');

        titulo.textContent = nomeServico;
        botao.textContent = button;
        descricao.textContent = info;

        descricaoServicos.setAttribute('id', 'descricaoOn');
        fundo.setAttribute('id', 'fundoOn');
    })

    close4.addEventListener('click', () => {
        fundo.removeAttribute('id', 'fundoOn');
        descricaoServicos.style.display = 'none';
        setTimeout(() => {
            descricaoServicos.removeAttribute('id', 'descricaoOn');
            descricaoServicos.style.display = 'block';
        }, 300);  
    })

    fundo.addEventListener('click', () => {
        fundo.removeAttribute('id', 'fundoOn');
        descricaoServicos.style.display = 'none';
        setTimeout(() => {
            descricaoServicos.removeAttribute('id', 'descricaoOn');
            descricaoServicos.style.display = 'block';
        }, 300);  
    })

})



