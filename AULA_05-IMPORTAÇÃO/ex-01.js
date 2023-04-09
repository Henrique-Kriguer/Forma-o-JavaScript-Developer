/*
*   1) Faça um programa que recebe a média de um aluno
    Caso a média seja < 5 imprima reprovado;
    Caso a média seja >= 5 e < 7 imprima Recuperação;
    Caso a média seja > = 7 imprima aprovado
*
*   Exemplo: 
*        Entrada:
*               5.5
*       Saída:
*               Recuperação
*
**/
const { gets, print } = require('./funcoes-aux-ex-01');

const media = gets();

if (media < 5) {
    print('Reprovado')
} else if (media >= 5 && media < 7) {
    print('Recuperação')
} else {
    print('Aprovado')
}

