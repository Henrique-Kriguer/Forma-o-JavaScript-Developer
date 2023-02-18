function teste(){
    console.log('Henrique Kriguer')
}

teste();

// passando parâmetros para uma função: 

function sayMyName(nome){
    console.log('Your name is: '+ nome)
}

sayMyName("Henrique Kriguer");

// funções que retornam o resultado da função:

function quadrado(valor) {
    return valor * valor;
}

console.log(quadrado(10)+quadrado(10));

/*const quadradoDeDez = quadrado(10);
console.log (quadradoDeDez);*/


