export function rotateMatrix(matrix) {
  return matrix[0].length == 1
    ? [matrix.map((el) => el[0])]
    : [matrix.map((el) => el.pop())].concat(rotateMatrix(matrix));
}
