/*
Escreva um programa para calcular a redução do tempo de vida de um
fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
quantos dias de vida um fumante perderá e exiba o total em dias.
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Quantos cigarros você fuma por dia?\n', (cigarrosPorDia) => {
  readline.question('Há quantos anos fuma?\n', (anosFumando) => {
    let minutosDeVidaPerdidos = cigarrosPorDia * 10 * 365 * anosFumando;
    let diasDeVidaPerdidos = Math.round(minutosDeVidaPerdidos/1440);
    console.log(`Infelizmente você perdeu em torno de ${diasDeVidaPerdidos} dias de vida.`);
    console.log(`-------------`);
    console.log(`STOP SMOKING`);
    console.log(`-------------`);
    readline.close();
  })
});