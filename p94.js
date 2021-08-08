/**
Desenvolva um aplicativo que tenha um procedimento chamado
Fibonacci() que recebe um único valor inteiro como parâmetro, indicando quantos
termos da sequência serão mostrados na tela. O seu procedimento deve receber
esse valor e mostrar a quantidade de elementos solicitados.
Obs: Use os exercícios 70 e 75 para te ajudar na solução
Ex:
Fibonacci(5) vai gerar 0 >> 1 >> 1 >> 2 >> 3 >> FIM
Fibonacci(9) vai gerar 0 >> 1 >> 1 >> 2 >> 3 >> 5 >> 8 >> 13 >> 21 >> FIM
 */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Quantos números da Sequência Fibonacci deseja ver?\n', (tamanho) => {
    if (parseFloat(tamanho) <= 0) {
        console.error('\nO valor deve ser maior que zero');
    } else {
        let sequencia = [];
    
        switch (parseFloat(tamanho)) {
            case 1:
                sequencia = [0];
                break;

            default:
                sequencia = [0, 1];
                for (let i = 2; i < tamanho; i++) {
                    sequencia.push(sequencia[i-1] + sequencia[i-2]);
                }
                break;
        }
        sequencia.push('FIM')
        let string = sequencia.join(' >> ');
        console.log(`\n${tamanho} valor(es) da Sequência Fibonacci:\n${string}`);
    }
    readline.close();
});