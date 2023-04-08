/* 1º forma de importar funções e utilizar :
const funcoes = require('./funcoes-auxiliares');

console.log(funcoes.gets());

Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o número sorteado.

Dados de entrada:
5
50
10
98
23

Saída:
98

2º forma de importação (mais moderna) */

const funcoes = require('./funcoes-auxiliares');

console.log(funcoes.gets());

/*let maiorNumero = 0;

const qtdAlunos = gets();

for (let index = 0; index < qtdAlunos; index++) {
    const numeroSorteado = gets();
    if(numeroSorteado> maiorNumero){
        maiorNumero = numeroSorteado;
    }
}

print(maiorNumero);*/