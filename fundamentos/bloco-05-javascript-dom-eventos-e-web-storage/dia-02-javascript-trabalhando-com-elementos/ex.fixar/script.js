console.log((document.getElementById('elementoOndeVoceEsta'))); //acessar o elemento

console.log((document.getElementById('elementoOndeVoceEsta').parentNode.style.color = 'red')); // acessar pai a partir do anterior e colocar color

console.log(document.getElementById('primeiroFilhoDoFilho').innerHTML = 'Textinho'); // acessar o primeiroFilhoDoFilho e colocar texto

console.log(document.getElementById('pai').firstElementChild); // acessar o primeiroFilho a partir do pai

console.log((document.getElementById('elementoOndeVoceEsta').previousElementSibling)); // acessar o primeiroFilho a partir do elemento

console.log((document.getElementById('elementoOndeVoceEsta').nextSibling)); // acessar texto Atenção! a partir do elemento

console.log((document.getElementById('elementoOndeVoceEsta').nextElementSibling)); // acessar o terceiroFilho a paritr do elemento

console.log(document.getElementById('pai').lastElementChild.previousElementSibling); // acessar o terceiroFilho a partir de pai

// PARTE DOIS

let pai = document.getElementById('pai'); //criando elemento irmão
let irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);

let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta'); //criando elemento filho
let filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho'); //criando filho do primeiroFilhoDoFilho
let filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
filhoDoPrimeiroFilhoDoFilho.id = 'filhoDoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

console.log(document.getElementById('filhoDoPrimeiroFilhoDoFilho').nextElementSibling); //acessando o terceiroFilho a partir desse filho
