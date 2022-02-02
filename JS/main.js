'use strict';

import {iniciarRange} from "./input-range.js";

const camposValidos = () => document.getElementById('formulario').reportValidity();

/*function calcularImc(altura, peso) {
    return peso / (altura * altura);
}*/
//Mudando de sintaxe
const calcularImc = (altura, peso) => peso / (altura * altura);

//Classificando IMC
const classificarImc = imc => {
    let texto;
    if(imc < 18.5) {
        texto = "e você está abaixo do peso."
    } else if(imc < 25) {
        texto = "e você está com peso ideal. <span id='parabens'>Parabéns!</span>"
    } else if(imc < 30) {
        texto = "e você está levemente acima do peso."
    } else if(imc < 35) {
        texto = "e você está com obesidade grau I."
    } else if(imc < 40) {
        texto = "e você está com obesidade grau II."
    } else {
        texto = "e você está com obesidade grau III. <span id='cuidado'>Cuidado!</span>"
    }
    return texto;
}

const mostrarResultado = () => {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value; 
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(camposValidos()) {
        const imc = calcularImc(altura, peso);
        let texto = classificarImc(imc);
        
        resultado.innerHTML = `${nome} seu IMC é ${imc.toFixed(2)} ${texto}`; //anexando variáveis na String 
    } else {
        resultado.innerHTML = "Preencha todos os campos!";
    }
}

document.getElementById('calcular').addEventListener('click', mostrarResultado);

iniciarRange('altura')
iniciarRange('peso')