const pessoa = {
    nome: 'Henrique Kriguer',
    idade: 51,
    altura:1.78,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};
pessoa.descrever();