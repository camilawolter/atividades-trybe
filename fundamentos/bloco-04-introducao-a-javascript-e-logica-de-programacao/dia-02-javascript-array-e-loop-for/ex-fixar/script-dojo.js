//1. Descubra a idade mínima Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza. Imprima no terminal uma mensagem informando a pessoa mais jovem no formato: -------------------------------------------------- "x é a pessoa mais jovem e possui y anos de idade" -------------------------------------------------- 

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

//2. Taxa Metabólica Basal Ana Laura é uma nutricionista e quer disponibilizar uma calculadora de BMR (Taxa Metabólica Basal) em seu site, vamos ajudá-la escrevendo um algoritmo. Ele recebe os seguintes dados: - age: número maior que 0 - sex: M ou F - weight: Em (kg) com número maior que 0 - height: Em (cm) com número maior que 0 A fórmula para homens: - (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5 A fórmula para mulheres: - (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161 Imprima no terminal o resultado do cálculo no formato: ----------------------------------- "A taxa metabólica basal é: x Kcal" -----------------------------------

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



//3. Lanchonete da Trybe A Trybe abriu uma lanchonete e precisa criar um menu de opções para que as pessoas consigam escolher qual lanche maravilhoso irão pedir. Para isso escreva um algoritmo que recebe o número da opção escolhida conforme a tabela abaixo e imprima no terminal a mensagem de acordo com a opção escolhida. Tabela: "1 - Trybe Lanche Feliz" "2 - McTrybe" "3 - TrybeWooper" "4 - X-Trybe" "5 - Triplo Trybe com JS" Caso a pessoa escolha uma opção inexistente, imprima no terminal: ----------------------------------- "Ainda não possuímos esta opção :(" ----------------------------------- 


