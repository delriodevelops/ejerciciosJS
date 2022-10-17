const intersect = require('../ejercicios/04')
describe('Ejercicio 4 Dado tres arrays de números, sacar en un nuevo array la intersección de estos. ', () => {
    const arrNumber1 = [1, 2, 3];
    const arrNumber2 = [1, 2, 3, 4, 5];
    const arrNumber3 = [1, 4, 7, 2];
    it('Should delete numbers that are not contained in all 3 arrays', () => {
        expect(intersect(arrNumber1, arrNumber2, arrNumber3)).toEqual([1, 2])
    })
})