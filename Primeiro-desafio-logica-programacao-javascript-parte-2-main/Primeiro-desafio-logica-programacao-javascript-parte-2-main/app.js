let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function verificarConsole (){
    console.log('O Botão console foi clicado!');
}

function verificarAlert(){
    alert('Eu amo JS <3!')
}

function perguntarCidade(){
    let cidade = prompt('Digite o nome de uma cidade do Brasil.');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function somar(){
    let numero1 = parseInt(prompt('Digite um número inteiro aqui:'));
    let numero2 = parseInt(prompt('Digite um número inteiro aqui:'));

    let resultado = numero1 + numero2;

    alert(`O resultado da soma é ${resultado}.`);
}