class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
}


function compararPessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    }else { 
        console.log(`${p1.nome} TEM A MESMA IDADE QUE ${p2.nome}`);
        
    }
}

const Henrique = new Pessoa ('Henrique', 51);
console.log (Henrique);
const Simone = new Pessoa ('Simone', 51);
console.log(Simone);
compararPessoas(Henrique, Simone);
