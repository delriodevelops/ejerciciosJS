const filterArray = require('../ejercicios/02')
describe('Ejercicio 2. Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)', () => {
    const arrDirty = [NaN, 0, 5, false, -1, '', undefined, 3, null, 'test']
    it('Should return an array with no falsy values', () => {
        expect(filterArray(arrDirty)).toEqual([5, -1, 3, 'test'])
    })
})