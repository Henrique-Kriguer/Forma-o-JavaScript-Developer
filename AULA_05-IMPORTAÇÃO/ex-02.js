/*
*   2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
*       Imprima o maior número par e o menor número impar.
*   
*       Exemplo:
*           Entrada:
*           5
*           3
*           4
*           1
*           10
*           8
*
*           Saída:
*               Maior número Par: 10
*               Menor número impar: 1
*/

const { gets, print } = require('./funcoes-aux-ex-02');

const n = gets();
let maiorPar = null;
let menorImpar = null;


for (let i = 0; i < n; i++) {
    const numero = gets();
    if (numero % 2 === 0) {
        if (maiorPar === null) {
            maiorPar = numero;
        } else if (numero > maiorPar) {
            maiorPar = numero;
        }
    } else {
        if (menorImpar === null) {
            menorImpar = numero;
        } else if (numero < menorImpar) {
            menorImpar = numero;
        }
    }
}
print("maior número par: " + maiorPar);

print("menor número impar: " + menorImpar);
