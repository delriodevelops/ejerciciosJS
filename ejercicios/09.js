function toLowerCaseKeys(obj) {
    const keys = Object.keys(obj)
    keys.forEach(e => {
        obj[e.toLowerCase()] = obj[e]
        delete obj[e]
    });
    return obj
}

module.exports= toLowerCaseKeys