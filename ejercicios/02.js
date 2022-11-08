const arrDirty = [NaN, 0, 5, false, -1, '', undefined, 3, null, 'test']

function filterArray(arr) {
  return arr.filter(Boolean)
}

module.exports = filterArray