const arrDirty = [NaN, 0, 5, false, -1, '', undefined, 3, null, 'test']

function filterArray(arr) {
  const cleanArray = arr.filter(Boolean)
  return cleanArray
}

module.exports = filterArray