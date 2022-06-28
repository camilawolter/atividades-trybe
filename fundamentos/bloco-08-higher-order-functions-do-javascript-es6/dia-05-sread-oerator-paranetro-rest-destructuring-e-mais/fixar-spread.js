// spread operator 
//exemplo 1
const carros = ['Gol', 'Focus', 'HB20'];
const motos = ['Biz', 'R1'];

const veiculos = [...carros, ...motos];
console.log(veiculos);

//exemplo 2
const conhecimentoTrybe = {
    softSkils: true,
    hardSkils: true,
    trabalho: true,
}

const pessoa = {
    nome: 'Nádia',
    idade: '28',
    cidade: 'BH',
}

const pessoaTrybe = {
    ...pessoa,
    ...conhecimentoTrybe,
    esporte: 'corrida',
}
console.log(pessoaTrybe);

//ex 3
const numeros = [1, 2, 3];

const novoArray = [...numeros, 4, 5, 6];
const outraPosicaoArray = [4, 5, 6, ...numeros];
console.log(novoArray);
console.log(numeros);
console.log(outraPosicaoArray);

//ex 4
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const meses = [...summer, ...fall, ...winter, ...spring];
console.log(meses);

//ex 5
const imc = (peso, altura) => {
    return (peso / (altura * altura)).toFixed(2);
}
const infoPaciente = [60, 1.7];
console.log(imc(...infoPaciente));

//ex 6 
const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
};

const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
};

const customer = {
    ...people,
    ...about
};
console.log(customer);

//ex 7
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'bergamota', 'maçã'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['maracujá', 'uva', 'banana'];

const fruitSalad = (fruit, additional) => {
    const juntos = [...fruit, ...additional]
    return juntos;
};

console.log(fruitSalad(specialFruit, additionalItens));