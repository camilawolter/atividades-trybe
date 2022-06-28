// rest
//ex 1
function quantosParams(...args) {
    console.log('parâmetros', args);
    return `Você passou ${args.length} parâmetros para a função`;
}

console.log(quantosParams(1, 2, 3));
console.log(quantosParams('string', null, false, [1, 2, 3], {}));

//ex 2
const soma = (...args) => {
    return args.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}
console.log(soma(4, 5, 1, 9, 50));