// EXERCÍCIO UM 

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// EXERCÍCIO DOIS

let indexOfPortfolio = menu[2];

console.log(indexOfPortfolio);

// EXERCÍCIO TRÊS

let addMenu = menu.push('Contato')

console.log(menu);

//FOR
// EXERCÍCIO UM

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
};

//FOR/OF
// EXERCÍCIO UM

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
    console.log(name);
};