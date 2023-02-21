const notas = [];
notas.push(8);
notas.push(6);
notas.push(4);
notas.push(9);
notas.push(8);
notas.push(5);

console.log(notas);
let soma = 0;

for (let index = 0; index < notas.length; index++) {
    soma = soma + notas[index];
    
}
let media = soma / notas.length;
console.log(media.toFixed(1));