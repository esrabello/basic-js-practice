/*
Crie um programa que tenha uma função calcNotaMedia(), que vai receber as 2 notas de
um aluno e retornar a sua média, e uma outra função chamada mostrarSituacao(), que
vai retornar para o programa principal se o aluno está APROVADO, em RECUPERAÇÃO ou
REPROVADO. Essa nova função, vai receber como parâmetro o resultado retornado pela
função Media().
 */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Nota 1: ', (nota1) => {
    readline.question('Nota 2: ', (nota2) => {
        console.log(mostrarSituacao(calcNotaMedia(nota1, nota2)));
        readline.close();
    });
});

let calcNotaMedia = function(nota1, nota2) {
    return (parseFloat(nota1) + parseFloat(nota2)) / 2;
};

let mostrarSituacao = function(mediaNota) {
    let situacao = '';
    if (mediaNota >= 8) {
        situacao = 'APROVADO(A)';
    } else if (mediaNota < 8 & mediaNota >= 5) {
        situacao = 'RECUPERAÇÃO';
    } else {
        situacao = 'REPROVADO(A)';
    }
    return `Sua média foi de ${mediaNota}.\nSITUAÇÃO: ${situacao}.`
}