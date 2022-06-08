// PARTE UM
//EXERCÍCIO UM (modificando com arrow funtion e template literals)

// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

const ifScope = 'Não devo ser utilizada fora do meu escopo (if)'
const testantoEscopo = (escopo) => (escopo === true ? `${ifScope} ótimo, fui utilizada no escopo !` : `Não devo ser utilizada fora meu escopo (else)`);

console.log(testantoEscopo(true));

//EXERCÍCIO DOIS
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const compararNum = (a, b) => a - b

oddsAndEvens.sort(compararNum);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente`); 

//PARTE DOIS
//EXERCÍCIO UM - Crie uma função que receba um número e retorne seu fatorial.

const fatorial = numero => {
    let resultado = 1;
    for(let index = 1; index <= numero; index +=1) {
        resultado *= index;
    }
    return resultado;
}
console.log(fatorial(4));

