
exports.min = function min (array = []) {
  return array.length ? array.sort((a, b) => a - b)[0] : 0;
}

exports.max = function max (array = []) {
  return array.length ? array.sort((a, b) => b - a)[0] : 0;
}

exports.avg = function avg (array = []) {
  return array.length ? array.reduce((sum, i) => sum + i, 0) / array.length : 0;
}
