const { expect } = require('@jest/globals')
const numeroFeliz = require('./script')

test('happyNumber', () => {
    expect(numeroFeliz(19)).toBe(true);
})



/*Para o teste unitario, colocar o número a ser testado dentro do parametro do numeroFeliz na linha 5 e rodar no terminal "npm run test" ele dira se o numero passou ou não no teste.*/