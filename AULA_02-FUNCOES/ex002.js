function incrementarJuros(valor, juros){
    const valorAcrescimo = (juros/100)*valor;
    return valor + valorAcrescimo;
}

console.log(incrementarJuros(1500,10));