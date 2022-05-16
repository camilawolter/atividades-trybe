// 1 - Crie um algoritmo que retorne o fatorial de 10.

let fatorial = 10;
let resultado = fatorial

for ( let index = 1; index < fatorial; index += 1) {
    resultado *= index;
}
console.log(resultado);

// 2 - Inverter uma palavra.

let word = 'camelo';
let invert = '';

for (let index = 0; index < word.length; index += 1) {
    invert += word[word.length - 1 - index];
}
  
console.log(invert);

// 3 - Escrveva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 0; index < array.length; index += 1) {
      if (array[index].length > maiorPalavra.length) {
          maiorPalavra = array[index]
      }
  }
console.log('A maior palavra é ' + maiorPalavra);

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index]
    }
}
console.log('A menor palavra é ' + menorPalavra);

// 4 - Escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let maiorNumPrimo = 0;

for (let numAtual = 0; numAtual <= 50; numAtual += 1) {
  let numPrimo = true;
for (let numDiv = 2; numDiv < numAtual; numDiv += 1) {
    if (numAtual % numDiv === 0) {
      numPrimo = false;
    }
  }
  if (numPrimo) {
    maiorNumPrimo = numAtual;
  }
}

console.log(maiorNumPrimo);