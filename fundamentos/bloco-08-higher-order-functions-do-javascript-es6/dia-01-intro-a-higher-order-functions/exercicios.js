//EXERCÍCIO UM
const newEmployees = (gerandoEmployees) => {
    const employees = {
        id1: gerandoEmployees('Pedro Guerra'),
        id2: gerandoEmployees('Luiza Drumond'),
        id3: gerandoEmployees('Carla Paiva'),
    }
    return employees;
};

const gerandoEmployees = (nome) => {
    const email = nome.toLowerCase().split(' ').join('_');
    return {
        nome,
        email: `${email}@trybe.com`
    };
};

console.log(newEmployees(gerandoEmployees));

//EXERCÍCIO DOIS
const numeroSorteio = (meuNumero, numero) => meuNumero === numero;

const resultadoSorteio = (meuNumero, callback) => {
    const numero = Math.floor((Math.random() * 5) + 1);

    return callback(meuNumero, numero) ? 'Parabéns você ganhou' : 'Tente novamente';
};
console.log(resultadoSorteio(5, numeroSorteio));

//EXERCÍCIO TRÊS
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparaAnswers = (rightAnswers, studentAnswers) => {
    if (rightAnswers === studentAnswers) {
        return 1;
    }
    if (studentAnswers === 'N.A') {
        return 0;
    }
    return -0.5
};

const totalPontos = (rightAnswers, studentAnswers, callback) => {
    let contador = 0;
    for (let index = 0; index <= rightAnswers.length; index += 1) {
        const callbackReturn = callback(rightAnswers[index], studentAnswers[index]);
            contador += callbackReturn;
    }
    return `Resultado: ${contador} pontos`;
};
console.log(totalPontos(RIGHT_ANSWERS, STUDENT_ANSWERS, comparaAnswers));