// Escreva uma função para verificar se a pessoa é maior de idade.

function verifyAge(age){
    if (age >= 18){
        return console.log('Maior de idade');
    }else{
        return console.log('Menor de idade');
    }
}

verifyAge(18);