let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// console.log('Bem-vinda, ' + info.personagem);

info.recorrente = 'Sim'; // adicionano objeto uma nova propriedade
// console.log(info);


// for ( let key in info) { // mostra todas as chaves
//     console.log(key);
// };

for (let key in info) {  // mostra os valores das chaves
    console.log(info[key]);
};