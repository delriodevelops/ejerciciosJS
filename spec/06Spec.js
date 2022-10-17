const roundTo = require('../ejercicios/06')
describe('Ejercicio 6. Crea una función que redondee un número float a un número específico de decimales.', () => {

    it('Shoud Round to given parameters', () => {
        expect(roundTo(2.123, 2)).toEqual(2.12)
        expect(roundTo(1.123456789, 6)).toEqual(1.123457)
    })
})