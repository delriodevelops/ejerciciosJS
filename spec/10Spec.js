const removeHTMLTags = require('../ejercicios/10')
describe('Ejercicio 10. Crea una función que elimine las etiquetas html o xml de un string.La función debe tener un string como único parámetro.', () => {
    const string = '<div><span>lorem</span> <strong>ipsum</strong></div>'
    it('Shoud return an String without any HTML or XML tag, removing them via regEx and replace', () => {
        expect(removeHTMLTags(string)).toEqual('lorem ipsum')
    })
})