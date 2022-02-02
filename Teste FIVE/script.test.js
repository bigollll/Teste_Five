const { expect } = require('@jest/globals')
const numeroFeliz = require('./script')

describe('happyNumber', () => {
    test('Should return true with a known happy number', () => {
        const knowHappyNumber = 19;
        expect(numeroFeliz(knowHappyNumber)).toBe(true);
    });
    test('Should return false with a known non happy number', () => {
        const numberNotHappy = 2;
        expect(numeroFeliz(numberNotHappy)).toBe(false);
    });
})
