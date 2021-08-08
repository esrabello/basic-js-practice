/**
Crie um programa que tenha uma função superSomador(), que vai receber dois
números como parâmetro e depois vai retornar a soma de todos os valores no
intervalo entre os valores recebidos.
Ex:
SuperSomador(1, 6) vai somar 1 + 2 + 3 + 4 + 5 + 6 e vai retornar 21
SuperSomador(15, 19) vai somar 15 + 16 + 17 + 18 + 19 e vai retornar 85
 */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

console.log('Este programa retorna a soma de todos os valores no intervalo de dois números.')
readline.question('Início: ', (valorInicial) => {
    readline.question('Fim: ', (valorFinal) => {
        console.log('A soma total é ' + superSomador(valorInicial, valorFinal));
        readline.close();
    });
});

function superSomador(numInicio, numFim) {
    let valorAcumulado = 0;    
    for (let i = parseFloat(numInicio); i <= parseFloat(numFim); i++) {
        valorAcumulado += i;
    }
    return valorAcumulado;
}