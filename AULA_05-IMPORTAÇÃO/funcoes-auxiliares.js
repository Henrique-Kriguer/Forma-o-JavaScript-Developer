const lista = [5,50,10,98,234,50,100,198,23,150,10,98,230];
let i=0;

function gets() {
    const valor = lista[i];
    i++;
    return valor; 
}

function print (texto){
    console.log(texto);
}

module.exports = { 
    gets: gets,
    print: print
};