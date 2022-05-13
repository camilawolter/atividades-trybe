// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// EX. UM

// for (let number = 0; number < numbers.length; number += 1) {
//     console.log(number)
// };

// EX. DOIS

// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index]
// }
// console.log(soma);

// EX. TRÊS

// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index]
// }
// console.log(soma);

// let media = soma / numbers.length;
// console.log(media);

// EX. QUATRO

// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }
// console.log(soma);
 
// let media = soma / numbers.length;
// console.log(media);

// if (media > 20) {
//     console.log("valor da média é maior que 20");
// } else {
//     console.log("valor da média é menor ou igual a 20");
// }

// EX. CINCO

// let maiorNumber = 0;

// for (let index = 0; index < numbers.length; index +=1) {
//     if(numbers[index] > maiorNumber) {
//         maiorNumber = numbers[index];
//     }
// }
// console.log(maiorNumber);

// EX. SEIS

// let impares = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0) {
//         impares += 1;
//     }
// }

// if (impares === 0) {
//     console.log("nenhum valor encontrado");
// } else {
//     console.log(impares);
// }

// EX. SETE 

// let menorNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//      if(numbers[index] < menorNumber) {
//          menorNumber = numbers[index];
//      }
//  }
//  console.log(menorNumber);

// EX. OITO

let numbers = [];

for(let index = 1; index <= 25; index += 1) {
    numbers.push(index);
}
console.log(numbers);

// EX. NOVE 

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
  };