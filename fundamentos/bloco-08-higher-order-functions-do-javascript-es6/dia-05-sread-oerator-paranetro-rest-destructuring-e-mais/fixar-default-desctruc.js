// Default Destructuring
// ex 1
const pessoa = {
    name: 'João',
    lastName: 'Jr',
    age: 30,
}

const {
    nacionalidade = 'Brasileiro'
} = pessoa;
console.log(nacionalidade);

// ex 2
const person = {
    firstName: 'João',
    lastName: 'Jr II',
}
const outraPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
}
const getNationality = ({
    firstName,
    nationality = 'Brazilian'
}) => `${firstName} is ${nationality};`


console.log(getNationality(outraPerson));
console.log(getNationality(person));