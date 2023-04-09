
const numero = [5, 3, 4, 1, 10, 8];

function gets() {
    const valor = numero[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {
    gets: gets,
    print: print
};