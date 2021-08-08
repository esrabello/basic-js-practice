/**
Crie uma lógica que preencha um vetor de 20 posições com números
aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os
números gerados e depois coloque o vetor em ordem crescente, mostrando no final
os valores ordenados.
 */

let numerosAleatorios = [];
for (let i = 0; i < 20; i++) {
    numerosAleatorios[i] = Math.round(Math.random()*100)
};

// O método slice é usado para fazer uma cópia da array sem referência à original. Sem isso acabo alterando o array inicial.
let numerosOrdemCrescente = numerosAleatorios.slice().sort((a, b) => a - b);
let maior = numerosOrdemCrescente.slice().pop();
let menor = numerosOrdemCrescente.slice().shift();
let soma = numerosOrdemCrescente.reduce((acumulado, numero) => {
    return acumulado + numero;
})
let media = soma/numerosOrdemCrescente.length;

console.log(`
20 números aleatórios entre 0 e 100:
${numerosAleatorios.join(', ')}.

Organizados de forma crescente:
${numerosOrdemCrescente.join(', ')}.

A soma dos números dá ${soma} e a média aritmética é ${media}.
O menor valor é ${menor} e o maior é ${maior}.`)