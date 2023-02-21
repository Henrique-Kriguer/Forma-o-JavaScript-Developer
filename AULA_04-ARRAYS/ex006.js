//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
const nomes = ['Henrique','vivian','simone','veridiana','victor','Amauri','Mario','Vanessa']

for (let index = 0; index < nomes.length; index++) {
    let nome = nomes[index];
        if(nome[0]==="v"|| nome[0]=='V'){
            console.log(nome);
        }        
}