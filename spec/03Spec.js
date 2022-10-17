const findCapital = require('../ejercicios/03')
describe('Ejercicio 3. Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales', () => {
    const arrCities = [
        { city: 'Logroño', country: 'Spain', capital: false },
        { city: 'Paris', country: 'France', capital: true },
        { city: 'Madrid', country: 'Spain', capital: true },
        { city: 'Rome', country: 'Italy', capital: true },
        { city: 'Oslo', country: 'Norway', capital: true },
        { city: 'Jaén', country: 'Spain', capital: false }
    ]
    it('Should delete cities from the selected country that arent the capital and keep the capital of the country and the cities from the other countries', () => {
        expect(findCapital(arrCities,'Spain')).toEqual([
            { city: 'Paris', country: 'France', capital: true },
            { city: 'Madrid', country: 'Spain', capital: true },
            { city: 'Rome', country: 'Italy', capital: true },
            { city: 'Oslo', country: 'Norway', capital: true }
          ])
    })
})