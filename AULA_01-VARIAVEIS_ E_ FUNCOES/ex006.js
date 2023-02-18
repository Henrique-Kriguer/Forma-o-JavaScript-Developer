/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let preco = 100.0;
let formaPgto = 4;
let precoPgto = 0.0;

if (formaPgto === 1){
    precoPgto = preco - (preco * 0.1);
} else if (formaPgto === 2){
    precoPgto = preco - (preco * 0.15);
} else if (formaPgto === 3){
    precoPgto = preco;
} else if(formaPgto === 4) {
    precoPgto = preco + (preco * 0.1);
}
console.log(precoPgto.toFixed(2));