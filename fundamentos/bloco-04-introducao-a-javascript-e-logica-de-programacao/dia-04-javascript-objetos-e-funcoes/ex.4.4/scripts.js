// PARTE UM - OBJETOS E FOR/IN

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// // console.log('Bem-vinda, ' + info.personagem);

// info.recorrente = 'Sim'; // adicionano objeto uma nova propriedade
// console.log(info);


// for ( let key in info) { // mostra todas as chaves
//     console.log(key);
// };

// for (let key in info) {  // mostra os valores das chaves
//     console.log(info[key]);
// };

// info. personagem = 'Margarida e Tio Patinhas';
// info.origem = 'Pato Donald e Christmas on Bear Mountain, Dells Four Color Comics #178'
// info.nota = 'Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas'
// info.recorrente = 'Ambos recorrentes';
// // console.log(info);

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
// };

// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos.titulo);

// leitor.livrosFavoritos.push( // adiciona um novo livro na chave livrosFAvoritos, que é array
//     {
//         titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//         autor: 'JK Rowling',
//         editor: 'Rocco',
//     }
// )

// console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');

// PARTE DOIS - FUNÇÕES

// UM
function verificaPalindrome(palavra) {
    for (index in palavra) {
        if (palavra[index] != palavra[(palavra.length - 1) - index]) {
            return false;
        }
    }
    return true
}

// console.log(verificaPalindrome('arara'));
// console.log(verificaPalindrome('desenvolvimento'));

//DOIS
function indiceDoMaior(array) {
    let indiceDoMaior = 0;
    for (let indice in array) {
        if (array[indiceDoMaior] < array[indice]) {
            indiceDoMaior = indice;
        }
    }
    return indiceDoMaior;
}

// console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

// TRÊS
function indexDoMenor(array) {
    let indexDoMenor = 0;
    for (let index in array) {
        if (array[indexDoMenor] > array[index]) {
            indexDoMenor = index;
        }
    }
    return indexDoMenor;
}
// console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));

//QUATRO
function maiorNome(nomes) {
    let maiorNome = nomes[0];
    for (let index in nomes ) {
        if (maiorNome.length < nomes[index].length ) {
            maiorNome = nomes[index];
        }
    }
    return maiorNome;
}
// console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//CINCO
function repeteInteiros (inteiros) {
    let repeteInteiros = inteiros[0];
    for (let index in inteiros) {
        if (repeteInteiros === inteiros[index]) {
            repeteInteiros = inteiros[index];
        }
    }
    return repeteInteiros;
}
// console.log(repeteInteiros([3, 3, 2, 5, 8, 2, 3]));

//SEIS
function somaNum (numeros) {
    let total = 0;
    for (let index = 1; index <= numeros; index += 1) {
        total = total + index;
    }
    return total;
}
console.log(somaNum(5));

//SETE
function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split('');
    fimPalavra = fimPalavra.split('');
    retorno = true;
    for (let index = 0; index < fimPalavra.length; index += 1) {
      if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
        retorno = false;
      }
    }
    return retorno;
}  
console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));