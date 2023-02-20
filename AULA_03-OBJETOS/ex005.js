/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura ) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc (){
        return (this.peso / Math.pow(this.altura,2)).toFixed(2);
    }
    classificarPessoa(){
        if (this.imc() < 18.5){
            return 'ABAIXO DO PESO'
        } else if(this.imc()  < 25){
           return  'PESO IDEAL'
        } else if (this.imc()  < 30){
            return 'ACIMA DO PESO'
        } else if (this.imc() < 40){
            return 'OBESO'
        } else {
            return'OBSIDADE GRAVE'
        }
    }
}

const Henrique = new Pessoa ('Henrique Kriguer', 83, 1.78);
console.log(Henrique.imc());
console.log(Henrique.classificarPessoa());
