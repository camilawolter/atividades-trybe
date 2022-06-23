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
