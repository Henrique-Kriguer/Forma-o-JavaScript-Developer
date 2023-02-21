//2) Crie um programa que seja capaz de percorrer uma lista de números e 
//     imprima cada número Par encontrado.
let contador = 0;
const lista= [0,1,2,3,4,5,6,7,8,9,10,11,12,15,16,182,75,86,54,32,23,22,10]
for (let index = 0; index < lista.length; index++) {
      if (lista[index]%2 == 0){
        console.log(lista[index]);
        contador = contador + 1;
    };
    
}
console.log(`Termino do programa, encontrados ${contador} numeros pares na listagem`);