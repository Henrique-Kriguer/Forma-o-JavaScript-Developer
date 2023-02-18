function calcularImc(peso, altura){
    return peso / Math.pow(altura,2);
}

function classificarImc(imc){
    if(imc < 18.5){
        return 'ABAIXO DO PESO'
    } else if(imc < 25){
        return 'PESO IDEAL'
    } else if (imc < 30){
        return 'ACIMA DO PESO'
    } else if (imc < 40){
        return 'OBESO'
    } else {
        return 'OBESIDADE GRAVE'
    }
}

// Main
(function classificarImc(){
    const peso = 82.5;
    const altura = 1.80;
    const imc = calcularImc(peso,altura)
    const situacao = classificarImc(imc);
    console.log(imc);
    console.log(classificarImc(imc));
    
})();


//main();

// ´temos uma função autoexecutável quando a colocamos dentro de um parenteses 
//e colocamos após ela (); Podemos até remover o nome main. Por isso nossa function main () não precisa ser invocada