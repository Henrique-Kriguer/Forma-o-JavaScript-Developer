/*Faça um programa para calcular o valor de uma viagem.
Você terá três variáveis:
1 - Preço de combustível;
2. Gasto médio de combustível do carro por Km;
3. Distância em Km da viagem;
*/
let precoGasolina = 5.50;
let consumoMedioCarro = 7.0;
let distancia = 100;

let gastoViagem = precoGasolina * (distancia / consumoMedioCarro);

console.log(gastoViagem.toFixed(2));