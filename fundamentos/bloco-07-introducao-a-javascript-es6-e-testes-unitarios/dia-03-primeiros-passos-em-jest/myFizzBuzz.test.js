const myFizzBuzz = require('./myFizzBuzz.js');

describe('testando função myFixxBuzz', () => {
    it('a função retorna o valor esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(9)).toBe('fizz');
        expect(myFizzBuzz(25)).toBe('buzz');
    });
    it('a função retorna o próprio valor quando não é divisível', () => {
        expect(myFizzBuzz(17)).toBe(17);
    });
    it('a função retorna false quando não recebe um valor', () => {
        expect(myFizzBuzz('5')).toBe(false);
    });
});