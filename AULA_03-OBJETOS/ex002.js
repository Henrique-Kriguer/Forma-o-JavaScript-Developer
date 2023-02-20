class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever(){
        
        console.log(`Meu nome é ${this.nome}e minha idade é ${this.idade}`);
    }
}

const Henrique = new Pessoa('Henrique Kriguer',52);
console.log(Henrique);
Henrique.descrever();