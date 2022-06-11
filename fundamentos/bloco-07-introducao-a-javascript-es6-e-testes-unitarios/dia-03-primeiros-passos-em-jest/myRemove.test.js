const myRemove = require('./myRemove.js');

describe('Testando função myRemove', () => {
    it('verifica se retorna o array esperado removendo o item certo', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    it('verifica se não retorna o array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    it('verifica se o array retorna o esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
})