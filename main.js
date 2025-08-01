const numeroSenha = document.querySelector('.parametrio-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letraMaiuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letraminuscula = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha_botao');
const campoSenha = document.querySelectorAll('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('forca');


botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = diminuiTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    gerarSenha();
}
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    gerarSenha();
}

function gerarSenha() {
    let alfabeto = '';
    if (checkbox[0].checked) alfabeto += letraMaiuscula;
    if (checkbox[1].checked) alfabeto += letraminuscula;
    if (checkbox[2].checked) alfabeto += numeros;
    if (checkbox[3].checked) alfabeto += simbolos;

    if (aflfabeto.lenth === 0) {
        campoSenha.value = '';
        classificaSenha(1);
        return;
    }
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++); {
        const numeroAleatorio = Math.floor(Math.random() * alfabeto.length);
        senha += alfabeto[numeroAleatorio];

    }
    campoSenha.value = senha;
    classificaSenha(alfabeto.length);
}