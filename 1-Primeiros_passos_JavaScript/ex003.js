/* Faça um programa para calcular o valor de uma viagem.
Você terá cinco variáveis:
1- Preço do etanol;
2- Preço da gasolina;
3-O tipo de combustível que está no carro;
4- Gasto médio de combustível do carro por km;
5 - Distância da viagem 
*/
let precoEtanol = 3.85;
let precoGasolina = 4.82;
let tipocombustivel = 'etanol2';
let litrosEtanolPkm = 7.4;
let litrosGasolPkm = 8.5;
let distancia = 250;
let litrosConsumido = 0.0;
let gastoViagem =0.0; 

if(tipocombustivel === 'etanol'){
    litrosConsumido = distancia / litrosEtanolPkm;
    gastoViagem = litrosConsumido * precoEtanol;
    
}else{
    litrosConsumido = distancia / litrosGasolPkm;
    gastoViagem = litrosConsumido * precoGasolina;
    
}
console.log("O valor gasto na viagem é : " + gastoViagem.toFixed(2));
