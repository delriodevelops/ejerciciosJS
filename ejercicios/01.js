const arrNames = [
  { id: 1, name: 'Pepe' },
  { id: 2, name: 'Juan' },
  { id: 3, name: 'Alba' },
  { id: 4, name: 'Toby' },
  { id: 5, name: 'Lala' }
]

function findById(id) {
  return arrNames.find(arrayObject => arrayObject.id === id)
}

module.exports = findById