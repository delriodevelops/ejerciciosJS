const isSpain = require('../ejercicios/05')
describe('Ejercicio 5. Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros que sean city y isSpain. El valor de isSpain será un booleano indicando si es una ciudad de España. ', () => {
    const arrCities2 = [
        { city: 'Logroño', country: 'Spain', capital: false },
        { city: 'Bordeaux', country: 'France', capital: false },
        { city: 'Madrid', country: 'Spain', capital: true },
        { city: 'Florence', country: 'Italy', capital: true },
        { city: 'Oslo', country: 'Norway', capital: true },
        { city: 'Jaén', country: 'Spain', capital: false }
    ]

    it('Should delete numbers that are not contained in all 3 arrays', () => {
        expect(isSpain(arrCities2)).toEqual([{ city: 'Logroño', isSpain: true },
        { city: 'Bordeaux', isSpain: false },
        { city: 'Jaén', isSpain: true }])
    })
})