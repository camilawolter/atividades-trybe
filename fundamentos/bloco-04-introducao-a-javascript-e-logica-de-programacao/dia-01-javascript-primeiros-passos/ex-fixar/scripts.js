const myName = "Camila";
const birthCity = "Porto Alegre";
// birthCity = "Lagoas"; erro porque a constante não altera o seu valor
var birthYear = 1998;
birthYear = 2030;
console.log(myName);
console.log(birthCity);
console.log(birthYear);

//Operadores
const base = 5;
let height = 8;
const area = base * height;
console.log(area);

const perimeter = 2*base + 2*height;
console.log(perimeter);

//if - se
//else - senão
const nota = 81;

if (nota >= 80) {
    console.log("Parabéns, você foi aprovado");
}
else if (nota >= 60) {
    console.log("Você está na nossa lista de espera")
}
else {
    console.log("Você foi reprovado(a)")
}

//Operador AND
const curretHour = 23;
let message = "";

if (curretHour >= 22) {
    console.log("Não deveríamos comer nada, é hora de dormir")
} else if (curretHour >= 18 && curretHour < 22) {
    console.log("Rango da noite, vamos jantar :D")
} else if (curretHour >= 14 && curretHour < 18) {
    console.log("Vamos fazer um bolo pro café da tarde?")
} else if (curretHour >= 11 && curretHour< 14) {
    console.log("Hora do almoço")
} else {
    console.log("Hmmm, cheiro de café recém passado")
}

//Operador OR
let weekDay = "domingo";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quinta-feira" || weekDay === "quarta-feira" ||weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
} else {
    console.log("FINALMENTE, descanso merecido UwU")
}

//switch -- case

let estado = "lista";
switch (estado) {
    case "aprovada":
        console.log("Aprovada!");
        break;

    case "lista":
        console.log("Lista!");
        break;

    case "reprovada":
        console.log("Reprovada!");
        break;
    default:
        console.log("Valor não identificado.")
}