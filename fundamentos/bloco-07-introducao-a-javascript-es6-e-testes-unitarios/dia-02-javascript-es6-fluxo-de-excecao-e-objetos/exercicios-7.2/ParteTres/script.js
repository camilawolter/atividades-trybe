const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// função adicionando um turno na lesson2
const novaChave = (obj, chave, valor) => {
    obj[chave] = valor;
}
novaChave(lesson2, 'tuno', 'noite');
console.log(lesson2);

// função pra listar as chaves de um obj
const listaChave = (obj) => Object.keys(obj);
console.log(lesson3);

// função pra mostar o tamanho de um obj
const tamanho = (obj) => Object.keys(obj).length;
console.log(tamanho(lesson1));

// função pra listar os valores de um obj 
const listaValores = (obj) => Object.values(obj);
console.log(listaValores(lesson2));

// objeto que agrupa todas as aulas
const todasAulas = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(todasAulas);

// função que retorna o total de estudantes
const numeroTotalEstudantes = (obj) => {
    let total = 0;
    const chavesDoObj = Object.keys(obj);
    for (index in chavesDoObj) {
        total += obj[chavesDoObj[index]].numeroEstudantes
    }
    return total;
}
console.log(numeroTotalEstudantes(todasAulas));

// função que traz o valor da chave de acordo com sua posição
const getValueByNumber = (obj, number) => Object.values(obj)[number]
console.log(getValueByNumber(lesson2, 0));

// função que verifica se a chave e valor existe na função
const verifyPair = (obj, keys, value) => {
    const array = Object.entries(obj);
    let condicao = false;
    for (index in array) {
        if(array[index][0] === keys && array[index][1] === value) condicao = true;
    }
    return condicao;
}
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// função pra contar quantos estudantes assistiram as aulas de matemática
const numeroDeEstudantesMat = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for(index in array) {
        if(obj[array[index]].materia === 'Matemática') {
            total += obj[array[index]].numeroEstudantes
        }
    }
    return total;
}
console.log(numeroDeEstudantesMat(todasAulas));

// função que retorna um obj com o nome do professor, aulas que ministrou e número de estudantes totais.
const createReport = (obj, name) => {
    const todasAulas = [];
    let todosEstudantes =0;
    const array = Object.values(obj);
    for(index in array) {
        if (array[index].professor === name) {
            todasAulas.push(array[index].materia)
            todosEstudantes += array[index].numeroEstudantes;
        }
    }
    return { materia: todasAulas, estudantes: todosEstudantes};
}
console.log(createReport(todasAulas, 'Maria Clara'))