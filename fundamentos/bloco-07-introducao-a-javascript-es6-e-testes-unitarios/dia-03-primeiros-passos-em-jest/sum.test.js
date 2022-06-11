const sum = require('./sum.js');

describe('testa a função sum', () => {
    it('A soma de 4 e 5 é 9', () => {
        expect(sum(4,5)).toEqual(9);
    });
    it('A soma de 0 e 0 é 0', () => {
        expect(sum(0,0)).toEqual(0);
    });
    it('Se ocorre o erro se um dos parâmetros passados forem string', () => {
        expect(() => sum(4,'5')).toThrowError();
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    });
});