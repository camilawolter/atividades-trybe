const {
    encode,
    decode
} = require('./encodeDecode.js');

describe('testando as funções encode e decode', () => {
    it('se encode e decode é definada', () => {
        expect(encode).toBeDefined();
        expect(decode).toBeDefined();
    });
    it('se encode e decode são funções', () => {
        expect(typeof encode).toEqual('function');
        expect(typeof encode).toEqual('function');
    });
    it('função encode é convertida "a" para num 1', () => {
        expect(encode('ama')).toEqual('1m1');
    });
    it('função encode é convertida "e" para num 2', () => {
        expect(encode('dele')).toEqual('d2l2');
    });
    it('função encode é convertida "i" para num 3', () => {
        expect(encode('ixi')).toEqual('3x3');
    });
    it('função encode é convertida "o" para num 4', () => {
        expect(encode('ovo')).toEqual('4v4');
    });
    it('função encode é convertida "u" para num 5', () => {
        expect(encode('nuvem')).toEqual('n5vem');
    });
    it('checa se o retorno da função tem o mesmo número de caracteres', () => {
        expect(encode('trybe').length).toEqual(5);;
    });
    it('converte apenas o número 1 na vogal a', () => {
        expect(decode('1m1')).toEqual('ama');
    });
    it('converte apenas o número 2 na vogal e', () => {
        expect(decode('2l2')).toEqual('dele');
    });
    it('converte apenas o número 3 na vogal i', () => {
        expect(decode('3x3')).toEqual('ixi');
    });
    it('converte apenas o número 4 na vogal o', () => {
        expect(decode('4v4')).toEqual('ovo');
    });
    it('converte apenas o número 5 na vogal u', () => {
        expect(decode('n5vem')).toEqual('nuvem');
    });
    it('checa se o retorno da função tem o mesmo número de caracteres', () => {
        expect(decode('trybe').length).toEqual(5);
    });
});