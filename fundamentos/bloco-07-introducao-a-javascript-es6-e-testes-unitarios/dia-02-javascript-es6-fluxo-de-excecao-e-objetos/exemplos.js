//adicionando novas keys - PARTE UM
const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};
//criando o sobrenome
let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
//criando o nome completo
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
//criando algo aleatrotio
newKey = 'color';
const color = 'Red';
customer[newKey] = color;

console.log(customer);

//PARTE DOIS - Object.keys - retorna a lista das chaves
const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
};

console.log(Object.keys(coolestTvShow));

//exemplo---------------------------------------------------------------
const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
};

const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (const index in arrayOfSkills) {
        console.log(`
        ${arrayOfSkills[index]} -  Nível: ${student[arrayOfSkills[index]]}
        `);
    }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);

//PARTE TRÊS - Object.values - retorna a lista dos valores de cada chave
const coolestTvShowTwo = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
};


console.log(Object.values(coolestTvShowTwo));

//exemplo : Sem Object.values --------------------------------------------------------
const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
    const skills = [];
    for (skill in student) {
        skills.push(student[skill]);
    }

    return skills;
};
console.log(listSkillsValuesWithFor(student));

//exemplo:  Com Object.values ------------------------------------------------------------
const studentOne = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
};

const listSkillsValuesWithValues = (student) => Object.values(student);
console.log(listSkillsValuesWithValues(studentOne));

//PARTE QUATRO - Object.entries - retorna o array todo com as chaves e seu valores, retornando um array de arrays
const coolestTvShowOne = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
};

console.log(Object.entries(coolestTvShowOne));
// exemplo ----------------------------------------------------------------------------------
const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);
// para ver os valores separados
for (index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
};

//PARTE CINCO - Object.assign -  copia os valores de todas as propriedades de um ou mais objetos para um objeto destino.
const person = {
    name: 'Roberto',
};

const sobrenome = {
    lastName: 'Silva',
};

const newPerson = Object.assign({}, person, sobrenome);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);