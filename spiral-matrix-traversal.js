const matrix = [
  [1, 6, 11, 16],
  [2, 7, 12, 17],
  [3, 8, 13, 18],
  [4, 9, 14, 19],
  [5, 10, 15, 20],
];

console.log(traverse(matrix));

function traverse(matrix) {
  return (
    matrix.length == 1
      ? [...matrix]
      : matrix.splice(0, 1).concat(traverse(rotate(matrix)))
  ).flatMap((el) => el);
}

function rotate(matrix) {
  return matrix[0].length == 1
    ? [matrix.map((el) => el[0])]
    : [matrix.map((el) => el.pop())].concat(rotate(matrix));
}
