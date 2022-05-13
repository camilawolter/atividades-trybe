//1

const marina = 20;
const silvia = 12;
const iza = 30;

if ( marina < silvia && marina < iza ) {
    nome = "Maria";
    idade = 20;
} else if (silvia < iza) {
    nome = "Silvia";
    idade = 12;
} else {
    nome = "Iza"
    idade = 30;
}
console.log(nome + " é a pessoa mais jovem e possui " + idade + " anos de idade");

//2

let idade = 23;
let sex = "F";
let peso = 50; 
let altura = 160;
let calc = 0;

switch (sex) {
    case "M":
        calc = (altura * 6.25) + (peso * 9.99) - (idade * 4.92) + 5;
        console.log("A taxa metabólica é: " + calc + " Kcal");
        break;
    case "F":
        calc = (altura * 6.25) + (peso * 9.99) - (idade * 4.92) - 161;
        console.log("A taxa metabólica é: " + calc + " Kcal");
        break;
    default:
        console.log("Erro, variável inválida");
        break;
}



//3

let num = 1;

switch (num) {
    case 1:
        lanche = "Trybe Lanche Feliz";
        console.log("Seu pedido é " + lanche);
        break;
    case 2:
        lanche = "McTrybe";
        console.log("Seu pedido é " + lanche);
        break;
    case 3:
        lanche = "TrybeWooper";
        console.log("Seu pedido é " +lanche);
        break;
    case 4:
        lanche = "X-Trybe";
        console.log("Seu pedido é " + lanche);
        break;
    case 5:
        lanche = "Triplo Trybe com JS";
        console.log("Seu pedido é " + lanche);
        break;
    default:
        console.log("Ainda não possuímos esta opção");
        break;
}
