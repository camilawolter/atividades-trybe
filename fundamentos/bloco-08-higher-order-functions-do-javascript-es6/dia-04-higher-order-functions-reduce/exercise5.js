const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
    return names.reduce((acc, atual) =>
        acc + atual.split('').reduce((acumulator, atual) => {
            if (atual === 'a' || atual === 'A') return acumulator + 1;
            return acumulator;
        }, 0), 0);
}
console.log(containsA(names));