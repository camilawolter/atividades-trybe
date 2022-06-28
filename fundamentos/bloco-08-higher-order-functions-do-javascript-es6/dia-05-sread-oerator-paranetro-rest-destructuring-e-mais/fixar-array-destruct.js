//Array Destructuring
//ex 1
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;
console.log(firstCountry);
console.log(secondCountry);

// ex 2
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

const [saudacoesUm, saudacao2] = saudacoes;
console.log(saudacoesUm);

//ex3
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água
[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida);

//ex 4
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];
[,,, ...numerosPares] = numerosPares;
console.log(numerosPares);
