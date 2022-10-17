const findById = require('../ejercicios/01')
describe('Ejercicio 1 Dado un array de objetos, obtener el objeto con el id 3', () => {
    const id = 3
    it('Should return an object', () => {
        expect(findById(id)).toEqual({ id: 3, name: 'Alba' })
    })
})