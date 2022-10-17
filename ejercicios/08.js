function fromBytesToFormattedSizeUnits(bytes, truncate = 3) {
    const scale = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    let i = 0;
    while (Math.abs(bytes) / 1000 ** i >= 1000) {
        i++
    }
    const finalResult = Number(bytes / 1000 ** i).toPrecision(truncate) + scale[i]

    return finalResult
}

const result = fromBytesToFormattedSizeUnits(1000);
console.log(result); // 1KB

const result2 = fromBytesToFormattedSizeUnits(123456789);
console.log(result2); // 123MB

const result3 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result3); // -12.145GB

module.exports = fromBytesToFormattedSizeUnits