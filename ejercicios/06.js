function roundTo(number, decimales) {
    const stringifiedNumber = number.toString()

    const separatedNumber = stringifiedNumber.split('.')
    
    const decimalesNumber = Number(separatedNumber[1].slice(0, decimales))
    
    const lastNumber = Number(separatedNumber[1].slice(decimales, decimales + 1))
    
    const finalDecimal = lastNumber < 5 ? decimalesNumber : decimalesNumber + 1
    
    const finalNumber = Number([separatedNumber[0], finalDecimal].join('.'))
    
    return finalNumber
}


module.exports = roundTo