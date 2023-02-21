//4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
const lista = []
const pares= [];
for (let index = 10; index < 51; index++) {
    lista.push(index);
    if(index%2==0){
        pares.push(index);
    }
}
console.log(lista);
console.log(pares);


