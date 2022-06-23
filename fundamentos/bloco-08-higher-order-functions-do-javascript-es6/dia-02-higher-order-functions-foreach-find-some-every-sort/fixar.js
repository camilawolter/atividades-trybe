//UM forEach
const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
];

const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
emailListInData.forEach(showEmailList);

//DOIS find
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
    // Adiciona seu código aqui
    const div = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
    return div;
}

console.log(findDivisibleBy3And5())

//TRẼS find
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
    // Adicione seu código aqui:
    const tamanho = names.find((nome) => nome.length === 5);
    return tamanho;
}

console.log(findNameWithFiveLetters());

//QUATRO find
const musicas = [{
        id: '31031685',
        title: 'Partita in C moll BWV 997'
    },
    {
        id: '31031686',
        title: 'Toccata and Fugue, BWV 565'
    },
    {
        id: '31031687',
        title: 'Chaconne, Partita No. 2 BWV 1004'
    },
]

function findMusic(id) {
    // Adicione seu código aqui
    const musica = musicas.find((musica) => musica.id === id);
    return musica;
}

console.log(findMusic('31031685'))

//QUINTO some
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
    //Adicione seu código aqui
    return arr.some((nomeContido) => nomeContido === name);
}

console.log(hasName(names, 'Ana'))

//SEXTO every
const people = [{
        name: 'Mateus',
        age: 18
    },
    {
        name: 'José',
        age: 16
    },
    {
        name: 'Ana',
        age: 23
    },
    {
        name: 'Cláudia',
        age: 20
    },
    {
        name: 'Bruna',
        age: 19
    },
];

const verifyAges = (arr, minimumAge) => {
    //Adicione seu código aqui
    return arr.every((pessoa) => pessoa.age >= minimumAge);
}

console.log(verifyAges(people, 18));

//SÉTIMO sort
const people = [{
        name: 'Mateus',
        age: 18
    },
    {
        name: 'José',
        age: 16
    },
    {
        name: 'Ana',
        age: 23
    },
    {
        name: 'Cláudia',
        age: 20
    },
    {
        name: 'Bruna',
        age: 19
    },
];

// Adicione se código aqui
//ordem crescente 
// people.sort((a, b) => a.age - b.age);
//ordem descrecente
people.sort((a, b) => b.age - a.age);

console.log(people);