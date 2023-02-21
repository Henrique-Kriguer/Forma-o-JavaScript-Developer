//5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que 
// ficaram de recuperação (média < 5).
// Ex de lista = [2, 7, 3, 8, 10, 4]

const notas=[2, 7, 3, 8, 10, 4];
for (let index = 0; index < notas.length; index++) {
    if(notas[index] < 5){
        console.log(notas[index]);
    }
    
}