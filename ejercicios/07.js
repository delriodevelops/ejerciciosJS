function returnFalsyValues(obj, type) {
    for (let val in obj) {
        if (type(obj[val])) {
            delete obj[val];
        }
    }
    return obj
}

module.exports = returnFalsyValues