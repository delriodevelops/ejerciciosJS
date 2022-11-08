const arrNames = [
    { id: 1, name: 'Pepe' },
    { id: 2, name: 'Juan' },
    { id: 3, name: 'Alba' },
    { id: 4, name: 'Toby' },
    { id: 5, name: 'Lala' }
]

function findById(arr, id) {
    const obj = arr.find(arrayObject => arrayObject.id === id)
    return obj
}

console.log('Ejercicio 1.', arrNames)
console.log('Respuesta:', findById(arrNames, 3))
console.log('*************************************')
console.log('*************************************')




const arrDirty = [NaN, 0, 5, false, -1, '', undefined, 3, null, 'test']

function filterArray(arr) {
    const cleanArray = arr.filter(Boolean)
    return cleanArray
}

console.log('Ejercicio 2.', arrDirty)
console.log('Respuesta:', filterArray(arrDirty))
console.log('*************************************')
console.log('*************************************')





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
        if (obj.country === country && obj.capital !== true) { filteredArray.splice(i, 1) }
    })
    return filteredArray
}


console.log('Ejercicio 3', arrCities)
console.log('Respuesta', findCapital(arrCities, 'Spain'))
console.log('*************************************')
console.log('*************************************')





const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];
function intersect(arr1, arr2, arr3) {
    let smallestArray;
    if ((arr1.length <= arr2.length) && (arr1.length <= arr3.length)) {
        smallestArray = arr1
    } else if ((arr2.length <= arr1.length) && (arr2.length <= arr3.length)) {
        smallestArray = arr2
    }
    else {
        smallestArray = arr3
    }

    let intersectedArray = [];

    for (let i = 0; i < smallestArray.length; i++) {
        if (arr1.includes(smallestArray[i]) && arr2.includes(smallestArray[i]) && arr3.includes(smallestArray[i])) {
            intersectedArray.push(smallestArray[i])
        }
    }

    return intersectedArray
}

console.log('Ejercicio 4', arrNumber1, arrNumber2, arrNumber3)
console.log('Respuesta:', intersect(arrNumber1, arrNumber2, arrNumber3))
console.log('*************************************')
console.log('*************************************')





const arrCities2 = [
    { city: 'Logroño', country: 'Spain', capital: false },
    { city: 'Bordeaux', country: 'France', capital: false },
    { city: 'Madrid', country: 'Spain', capital: true },
    { city: 'Florence', country: 'Italy', capital: true },
    { city: 'Oslo', country: 'Norway', capital: true },
    { city: 'Jaén', country: 'Spain', capital: false }
]

function isSpain(array) {
    const nonCapitalArray = array.filter(obj => obj.capital === false)
    let isSpainArray = [];
    nonCapitalArray.map(obj => {

        isSpainArray.push({
            city: obj.city,
            isSpain: obj.country === 'Spain' ? true : false
        })
    })
    return isSpainArray
}

console.log('Ejercicio 5',arrCities2)
console.log('Respuesta:',isSpain(arrCities2))
console.log('*************************************')
console.log('*************************************')



2.123, 2

function roundTo(number, decimales) {
    const stringifiedNumber = number.toString()
    const separatedNumber = stringifiedNumber.split('.')
    const decimalesNumber = Number(separatedNumber[1].slice(0, decimales))
    const lastNumber = Number(separatedNumber[1].slice(decimales, decimales + 1))
    const finalDecimal = lastNumber < 5 ? decimalesNumber : decimalesNumber + 1
    const finalNumber = Number([separatedNumber[0], finalDecimal].join('.'))
    return finalNumber
}


console.log('Ejercicio 6A','Redondear:',2.123,'Decimales:', 2)
console.log('Respuesta :',roundTo(2.123, 2))
console.log('Ejercicio 6B','Redondear:',1.123456789,'Decimales:', 6)
console.log('Respuesta :',roundTo(1.123456789, 6))
console.log('*************************************')
console.log('*************************************')




const obj = { a: 1, b: '2', c: 3 }
const type = x => typeof x === 'string'

function returnFalsyValues(obj, type) {
    for (let val in obj) {
        if (type(obj[val])) {
            delete obj[val];
        }
    }
    return obj
}


console.log('Ejercicio 7',obj,type)
console.log('Respuesta:',returnFalsyValues(obj,type))
console.log('*************************************')
console.log('*************************************')



const result = fromBytesToFormattedSizeUnits(1000);
const result2 = fromBytesToFormattedSizeUnits(123456789);
const result3 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);

function fromBytesToFormattedSizeUnits(bytes, truncate = 3) {
    const scale = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    let i = 0;
    while (Math.abs(bytes) / 1000 ** i >= 1000) {
        i++
    }
    const finalResult = Number(bytes / 1000 ** i).toPrecision(truncate) + scale[i]
    
    return finalResult
}


console.log('Ejercicio 8A')
console.log('Respuesta:',result)
console.log('Ejercicio 8B')
console.log('Respuesta:',result2)
console.log('Ejercicio 8C')
console.log('Respuesta:',result3)
console.log('*************************************')
console.log('*************************************')



const myObject = { NamE: 'Charles', ADDress: 'Home Street' };

function toLowerCaseKeys(obj) {
    const keys = Object.keys(obj)
    keys.forEach(e => {
        obj[e.toLowerCase()] = obj[e]
        delete obj[e]
    });
    return obj
}

console.log('Ejercicio 9',myObject)
console.log('Respuesta:',toLowerCaseKeys(myObject))
console.log('*************************************')
console.log('*************************************')




const HTMLString = '<div><span>lorem</span> <strong>ipsum</strong></div>'

function removeHTMLTags(str) {
    const regEx = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g
    return str.replace(regEx, '')
}


console.log('Ejercicio 10',HTMLString)
console.log('Respuesta:',removeHTMLTags(HTMLString))
console.log('*************************************')
console.log('*************************************')



const arrayToChunks = [1, 2, 3, 4, 5, 6, 7]

function splitArrayIntoChunks(arr, chunks) {
    let newArr = []
    for (let i = 0; i < arr.length; i = i + chunks) {
        const chunk = arr.slice(i, i + 3)
        newArr.push(chunk)
    }
    return newArr
}


console.log('Ejercicio 11',arrayToChunks)
console.log('Respuesta:',splitArrayIntoChunks(arrayToChunks,3))
console.log('*************************************')
console.log('*************************************')

