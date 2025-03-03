const integers = [2734, 1994, 5500, 3787, 3950, 403, 1000, 3002];

integers.forEach((int) => {
  try {
    console.log(`${int} \t => ${integerToRoman(int)}`);
  } catch (err) {
    console.log(`${int} \t => Error: ${err.message}`);
  }
});

function integerToRoman(integer) {
  const romanNumerals = new Map([
    [1, 'I'],
    [5, 'V'],
    [10, 'X'],
    [50, 'L'],
    [100, 'C'],
    [500, 'D'],
    [1000, 'M'],
  ]);

  if (integer > 3999 || integer < 1) {
    throw new Error(`${integer} is out of the range! (1 - 3999)`);
  }

  const roman = String(integer)
    .split('')
    .map((value, index, array) => {
      const numericValue = Number(value);
      const NumberOfZeroes = array.length - index - 1;

      const newValue = numericValue * Math.pow(10, NumberOfZeroes);
      const placeValue = newValue / numericValue;

      switch (true) {
        case romanNumerals.has(newValue):
          return romanNumerals.get(newValue);

        case value.startsWith('4') || value.startsWith('9'):
          return romanNumerals
            .get(placeValue)
            .concat(romanNumerals.get(placeValue + newValue));

        case numericValue < 5 && numericValue != 0:
          return romanNumerals.get(placeValue).repeat(numericValue);

        case numericValue > 5:
          return romanNumerals
            .get(placeValue * 5)
            .concat(romanNumerals.get(placeValue).repeat(numericValue - 5));
      }
    });

  return roman.filter((value) => Boolean(value)).join('-');
}
