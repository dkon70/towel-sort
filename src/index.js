
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }
  res = [];
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if (i % 2 === 0) {
        res.push(matrix[i][j]);
      } else {
        res.push(matrix[i].reverse()[j])
      }
    }
  }
  return res;
}
