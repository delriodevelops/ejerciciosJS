function splitArrayIntoChunks(arr, chunks) {
    let newArr = []
    for (let i = 0; i < arr.length; i = i + chunks) {
        const chunk = arr.slice(i, i + 3)
        newArr.push(chunk)
    }
    return newArr
}

module.exports=splitArrayIntoChunks