/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/
let peso = 129.0;
let altura = 1.79;
let imc = peso / Math.pow(altura,2);
let condicao = '';
if(imc < 18.5){
    condicao = 'ABAIXO DO PESO'
} else if(imc < 25){
    condicao = 'PESO IDEAL'
} else if (imc < 30){
    condicao = 'ACIMA DO PESO'
} else if (imc < 40){
    condicao = 'OBESO'
} else {
    condicao = 'OBSIDADE GRAVE'
}
console.log(condicao);
