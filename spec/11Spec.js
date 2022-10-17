const splitArrayIntoChunks = require('../ejercicios/11')
describe('Ejercicio 11. Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos elementos como sean especificados.', () => {
    const array = [1, 2, 3, 4, 5, 6, 7]
    const chunks = 3
    it('Shoud return an array of smaller arrays depending on the chunks specified in the function', () => {
        expect(splitArrayIntoChunks(array, chunks)).toEqual([[1, 2, 3], [4, 5, 6], [7]])
    })
})