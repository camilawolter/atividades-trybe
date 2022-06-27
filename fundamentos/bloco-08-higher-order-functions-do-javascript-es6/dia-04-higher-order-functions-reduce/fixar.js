const numeros = [10, 13, 31, 44, 50, 9, 46];

// somar só os números pares
const pares = (numero) => numero % 2 === 0;
const somaPar = (acumulador, numero) => acumulador + numero;

const somaNumerosPares = (array) => array.filter(pares).reduce(somaPar);
console.log(somaNumerosPares(numeros));

// pegar o maior valor no array
const pegarMaior = (maior, numero) => ((maior > numero) ? maior : numero);

const maior = numeros.reduce(pegarMaior, 0);
console.log(maior);

// fazer a soma
const soma = (resultado, numero) => resultado + numero;

const somaNumeros = numeros.reduce(soma, 0);
console.log(somaNumeros);

// qual matéria o estudate foi melhor
const estudantes = [{
        nome: 'Jorge',
        sobrenome: 'Silva',
        idade: 14,
        turno: 'Manhã',
        materias: [{
                name: 'Matemática',
                nota: 67
            },
            {
                name: 'Português',
                nota: 79
            },
            {
                name: 'Química',
                nota: 70
            },
            {
                name: 'Biologia',
                nota: 65
            },
        ],
    },
    {
        nome: 'Mario',
        sobrenome: 'Ferreira',
        idade: 15,
        turno: 'Tarde',
        materias: [{
                name: 'Matemática',
                nota: 59
            },
            {
                name: 'Português',
                nota: 80
            },
            {
                name: 'Química',
                nota: 78
            },
            {
                name: 'Biologia',
                nota: 92
            },
        ],
    },
    {
        nome: 'Jorge',
        sobrenome: 'Santos',
        idade: 15,
        turno: 'Manhã',
        materias: [{
                name: 'Matemática',
                nota: 76
            },
            {
                name: 'Português',
                nota: 90
            },
            {
                name: 'Química',
                nota: 70
            },
            {
                name: 'Biologia',
                nota: 80
            },
        ],
    },
    {
        nome: 'Maria',
        sobrenome: 'Silveira',
        idade: 14,
        turno: 'Manhã',
        materias: [{
                name: 'Matemática',
                nota: 91
            },
            {
                name: 'Português',
                nota: 85
            },
            {
                name: 'Química',
                nota: 92
            },
            {
                name: 'Biologia',
                nota: 90
            },
        ],
    },
    {
        nome: 'Natalia',
        sobrenome: 'Castro',
        idade: 14,
        turno: 'Manhã',
        materias: [{
                name: 'Matemática',
                nota: 70
            },
            {
                name: 'Português',
                nota: 70
            },
            {
                name: 'Química',
                nota: 60
            },
            {
                name: 'Biologia',
                nota: 50
            },
        ],
    },
    {
        nome: 'Wilson',
        sobrenome: 'Martins',
        idade: 14,
        turno: 'Manhã',
        materias: [{
                name: 'Matemática',
                nota: 80
            },
            {
                name: 'Português',
                nota: 82
            },
            {
                name: 'Química',
                nota: 79
            },
            {
                name: 'Biologia',
                nota: 75
            },
        ],
    },
];

const melhorMateria = (acc, materia) => ((acc.nota > materia.nota) ? acc : materia);

const melhorAluno = (estudantes) => estudantes.map((estudante) => ({
    name: estudante.nome,
    materia: estudante.materias.reduce(melhorMateria).name
}));
console.log(melhorAluno(estudantes));