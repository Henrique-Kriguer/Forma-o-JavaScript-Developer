function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}
function classificarImc(imc) {
    if(imc<18.5){
        return 'ABAIXO DO PESO'
    } else if(imc < 25){
        return 'PESO IDEAL'
    } else if (imc < 30){
        return 'ACIMA DO PESO'
    } else if (imc < 40){
        return'OBESO'
    } else {
        return 'OBESIDADE GRAVE'
    }
}

(function (){
    const peso = 81.8 ;
    const altura = 1.78 ;
    const imc = calcularImc(peso, altura) ;
    console.log(classificarImc(imc));

})();
