// 1 - Crie um algoritmo que retorne o fatorial de 10.

let fatorial = 10;
let resultado = fatorial

for ( let index = 1; index < fatorial; index += 1) {
    resultado *= index;
}
console.log(resultado);

// 2 - Inverter uma palavra.

let word = 'tryber';
let invert = '';

for (let index = 0; index < word.length; index += 1) {
    invert += word[word.length - 1 - index];
  }
  
  console.log(invert);