// 1 - Imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

// let simbolo = '*';
// let n = 5;
// let linha = '';

// for (index= 0; index < n; index += 1) {
//     linha = linha + simbolo
// }
//  for (index = 0; index < n; index += 1) {
//     console.log(linha);
//  }





// 2 - Imprima na tela um triangulo feito de asteriscos de lado de tamanho n.

// // let simbolo = '*';
// // let n = 5;
// // let linha = '';

// for (index= 0; index < n; index += 1) {
//     linha = linha + simbolo
//     console.log(linha);
// }

// 3 - Inverter o lado do triangulo.

let simbolo = '*';
let n = 5;
let linha = '';
let posicao = n

for (linhaIndex= 0; linhaIndex <= n; linhaIndex += 1) {
    for (let indexColuna = 0; indexColuna <= n; indexColuna += 1) {
        if (indexColuna < posicao) {
           linha =  linha + ' ';
        } else {
            linha = linha + simbolo;
        }
    }
    console.log(linha);
    linha = '';
    posicao -= 1;
}
