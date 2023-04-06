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
      console.log(`Meu nome é ${this.nome} e eu sou de ${this.anoDeNascimento}`);
    }
  }
const Henrique = new Pessoa('Henrique Kriguer',51);

console.log(Henrique);

