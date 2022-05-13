//Exercício Um

// const a = 5;
// const b = 4;

// const adicao = a + b;
// const subtracao = a - b;
// const multiplicacao = a * b;
// const divisao = a / b;
// const modulo = a % b;

// console.log(adicao);
// console.log(subtracao);
// console.log(multiplicacao);
// console.log(divisao);
// console.log(modulo);

//Exercício Dois

// const c = 7;
// const d = 15;

// if (c > d) {
//     console.log("a é maior que c")
// } else {
//     console.log("b é maior que d")
// };

// Exercício Três

// const a = 15;
// const b = 10;
// const c = 13;

// if (a > b && a > c) {
//     console.log("O maior número é " +a+ " A" );
// } else if (b > a && b > c) {
//     console.log("O maior número é " +b+ " B");
// } else {
//     console.log("O maior número é " +c+ " C");
// };

// Exercício Quatro

// const valor = -5

// if (valor > 0) {
//     console.log("positivo")
// } else if (valor <0) {
//     console.log("negativo")
// } else {
//     console.log("zero")
// };

//Exercício Cinco

// const ladoA = 60;
// const ladoB = 20;
// const ladoC = 60;
// const soma = ladoA + ladoB + ladoC;
// const todosPositivos = ladoA > 0 && ladoB > 0 && ladoC > 0

// if (todosPositivos) {
//     if (soma === 180) {
//     console.log(true)
//     } else {
//         console.log(false);
//     }
// } else {
//     console.log("Erro");
// };

//Exercício Seis

// const pecaXadrez = "Bispo";

// switch (pecaXadrez.toLocaleLowerCase()){
//     case "rei":
//         console.log("o rei anda uma casa pra qualquer lado do tabuleiro");
//         break;
//     case "peao":
//         console.log("uma casa para frente");
//         break;
//     case "bispo":
//         console.log("anda em diagonal");
//         break;
//     case "cavalo":
//         console.log("anda em L");
//         break;
//     case "rainha":
//         console.log("anda qualquer lugar tabuleiro");
//         break;
//     case "torre":
//         console.log("anda horrizontal e vertical");
//         break;
//     default:
//         console.log("peça invalida")
// };

//Exercício Sete

// const nota = 55;

// if (nota >=90) {
//     console.log("A");
// } else if (nota >=80) {
//     console.log("B");
// } else if (nota >= 70) {
//     console.log(C);
// } else if (nota >= 60) {
//     console.log("D");
// } else if (nota >= 50) {
//     console.log("E");
// } else {
//     console.log("F");
// };

//Exercício Oito

// const a = 5
// const b = 1
// const c = 1

// if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
//     console.log(true);
// } else {
//     console.log(false);
// };

//Exercício Nove 

// const a = 8
// const b = 4
// const c = 8

// if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
//     console.log(true);
// } else {
//     console.log(false);
// };

//Exercício Dez

// const valorProduto = 500;
// const valorVenda = 800;

// if (valorProduto >= 0 && valorVenda >=0) {
//     const valorCustoTotal = valorProduto * 1.2;
//     const lucroTotal = (valorVenda - valorCustoTotal)*1000;
//     console.log(lucroTotal);
// } else {
//     console.log("Erro, valor inválido")
// };

// Exercício Onze

let inss;
let ir;

let salarioBruto = 3000.00;

if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11
} else {
    inss = salarioBruto = 570.88;
};

let salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98) {
    ir = 0;
} else if (salarioBase <= 2826.95) {
    ir = (salarioBase * 0.075) - 142.80;
} else if  (salarioBase <= 3751.05) {
    ir = (salarioBase * 0.015) - 354.80;
} else if  (salarioBase <= 4664.68) {
    ir = (salarioBase * 0.225) - 636.13;
} else {
    ir = (salarioBase * 0.275) - 869.36
};

console.log("Salário Líquido: " + (salarioBase - ir));