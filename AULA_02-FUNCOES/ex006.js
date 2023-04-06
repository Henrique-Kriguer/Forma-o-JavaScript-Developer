/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function calculaPagto(precoEtiqueta,condicaoPgto){
    if (condicaoPgto === 1){
        return valorPagto = precoEtiqueta - (precoEtiqueta*0.1);
    } else if(condicaoPgto === 2 ){
        return valorPagto = precoEtiqueta - (precoEtiqueta*0.15);
    } else if( condicaoPgto === 3){
        return valorPagto = precoEtiqueta;
    } else if(condicaoPgto === 4){
        return valorPagto = precoEtiqueta +(precoEtiqueta * 0.1);
    }
}
const precoEtiqueta = 100.0;
const condicaoPgto = 2;
calculaPagto(precoEtiqueta,condicaoPgto);
console.log(valorPagto);