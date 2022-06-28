//Object Destructuring
//ex 1
const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
};

const {
    name,
    price,
    seller
} = product;
console.log(name);
console.log(price);
console.log(seller);

//ex 2
// definindo o objeto
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
        specieName: 'Human',
        jedi: true,
    },
    homeWorld: {
        name: 'Tatooine',
        population: '200000',
    },
};

const {name, age, homeWorld: {name: planetName}, description: {jedi}} = character;

console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e ele ${jedi ? 'é um Jedi' : 'não é um jedi' }. `);

//ex 3
const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
};

const {
    workDays,
    weekend
} = daysOfWeek;
console.log(workDays);
console.log(weekend);

const weekdays = [...workDays, ...weekend];
console.log(weekdays);

//ex 4
const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
};

const {
    a: name,
    b: classTurma
} = student;

console.log(name);
console.log(classTurma);

//ex 5
const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
};

const detalhesProduto = ({
    name,
    price,
    seller
}) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui ${seller}`);
}
detalhesProduto(product);

//ex 6
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const detalhesUser = {...user, ...jobInfos}
console.log(detalhesUser);

const {name, age, nationality, profession, squadInitials, squad} = detalhesUser;
console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);