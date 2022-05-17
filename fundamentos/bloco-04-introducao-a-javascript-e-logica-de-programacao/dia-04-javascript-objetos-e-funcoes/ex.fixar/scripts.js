// 1. objetos

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
    medals: {
        golden: 2,
        silver: 3,
    },
};


console.log('A jogadora ' + player.name + ' tem ' + player.age + ' anos de idade');
console.log('A jogadora ' + player.name + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');


// 2. for/in

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};
  
for (let index in names) {
    console.log('Olá ' + names[index]);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let index in car)  {
    console.log(index, car[index]);
}

// 3. funções 

function maiorNum(primeiroNum, segundoNum) {
    if (primeiroNum > segundoNum) {
      return primeiroNum + ' é maior que ' + segundoNum;
    } else if (segundoNum > primeiroNum) {
      return segundoNum + ' é maior que ' + primeiroNum;
    } else {
      return 'Os números são iguais';
    }
}

console.log(maiorNum(5, 80)); 
console.log(maiorNum(18, -10)); 
console.log(maiorNum(15, 15));

let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

console.log('O usuário está ' + status);