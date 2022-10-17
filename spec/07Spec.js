const returnFalsyValues = require('../ejercicios/07')
describe('Ejercicio 7. Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.', () => {
    const obj = { a: 1, b: '2', c: 3 }
    const type = x => typeof x === 'string'
    it('Shoud return an object with falsy values', () => {
        expect(returnFalsyValues(obj, type)).toEqual({ a: 1, c: 3 })
    })
})