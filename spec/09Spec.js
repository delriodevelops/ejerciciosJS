const toLowerCaseKeys = require('../ejercicios/09')
describe('Ejercicio 9. Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.', () => {
    const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
    it('Shoud return an object with all their keys in lowercase', () => {
        expect(toLowerCaseKeys(myObject)).toEqual({ name: 'Charles', address: 'Home Street' })
    })
})