const arrCities = [
    { city: 'Logroño', country: 'Spain', capital: false },
    { city: 'Paris', country: 'France', capital: true },
    { city: 'Madrid', country: 'Spain', capital: true },
    { city: 'Rome', country: 'Italy', capital: true },
    { city: 'Oslo', country: 'Norway', capital: true },
    { city: 'Jaén', country: 'Spain', capital: false }
]

function findCapital(array, country) {
    let filteredArray = array
    array.map((obj, i) => {
        if (obj.country === country && obj.capital !== true) { filteredArray.splice(i,1) }
    })
    return filteredArray
}

module.exports= findCapital