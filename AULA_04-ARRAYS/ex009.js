//6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
// Ex de lista de notas = [2, 7, 3, 8, 10, 4]

const notas =  [2, 7, 3, 8, 10, 4];
let maior = 0;

for (let index = 0; index < notas.length; index++) {
    if(notas[index] > maior){
        maior = notas[index];
    }
}
console.log(maior);