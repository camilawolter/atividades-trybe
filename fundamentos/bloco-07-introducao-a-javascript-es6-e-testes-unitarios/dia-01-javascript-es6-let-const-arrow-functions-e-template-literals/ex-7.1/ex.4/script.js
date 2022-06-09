const array = ['JavaScript', 'HTML', 'CSS', 'Python', 'C++']

function construindoFrase (eventoUm) {
    const funcaoUm = nomePessoa => (
        `Tryber ${nomePessoa} aqui!
        Tudo bem?`
    )

    let resultado = `${funcaoUm(eventoUm)}
    Minha cinco principais habilidades são:`;

    array.forEach((habilidade ) => resultado = `${resultado}
    - ${habilidade}`);

    resultado = `
    ${resultado}
    #goTrybe
    `;

    return resultado;
}
console.log(construindoFrase('Camila'));