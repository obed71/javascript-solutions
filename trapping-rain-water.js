import { rotateMatrix as rotate } from './utils.js';

[
  [0, 2, 0, 3, 2, 0],
  [2, 3, 1, 0, 3, 1, 0, 1, 2],
  [4, 2, 1, 0, 3, 2],
  [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
].forEach((height) => console.log(trap(height)));

function trap(height) {
  const maxHeight = Math.max(...height);
  const heightMatrix = rotate(
    height.map((value) => {
      const col = [];
      for (let i = 0; i < maxHeight; i++) col.push(Number(i < value));
      return col;
    })
  );

  return heightMatrix
    .map(getTrapped)
    .flatMap((el) => el)
    .reduce((prev, current) => prev + Number(current.trapped), 0);
}

function getTrapped(el) {
  return el.map((value, index, array) => {
    if (value != 0) return { trapped: false };
    if (index == 0 || index == array.length - 1) return { trapped: false };
    const len = array.length;

    const nearest1 = {
      left: len - (1 + [...array].reverse().indexOf(1, len - (index + 1))),
      right: array.indexOf(1, index),
    };

    if (nearest1.left == len) nearest1.left = -1;

    return nearest1.left == -1 || nearest1.right == -1
      ? { trapped: false }
      : { trapped: true };
  });
}
