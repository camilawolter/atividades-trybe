//EXERCÍCIO UM
const newEmployees = (retorna) => {
    const employees = {
        id1: retorna('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: retorna('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: retorna('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
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