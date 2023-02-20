/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/
class Car {
    brand;
    color;
    averageCombustibleConsumption;
   
    constructor (brand, color, averageCombustibleConsumption){
        this.brand = brand;
        this.color =color;
        this.averageCombustibleConsumption = averageCombustibleConsumption;
    }
    precoViagem(kilometrosViagem,precoCombustivel){
        return (kilometrosViagem /this.averageCombustibleConsumption) *precoCombustivel;
    }
}
const Duster = new Car ('Duster','cinza',8);
console.log(Duster.precoViagem(400,5.2));