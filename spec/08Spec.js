const fromBytesToFormattedSizeUnits = require('../ejercicios/08')
describe('Ejercicio 8. Crea una función que convierta un número de bytes en un formato con valores legibles', () => {
    it('Shoud return an object with falsy values', () => {
        expect(fromBytesToFormattedSizeUnits(-12145489451.5932, 5)).toEqual('-12.145GB')
    })
})