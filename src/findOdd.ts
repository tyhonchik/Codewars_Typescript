export const findOdd = (xs: number[]): number => {
  const obj = xs.reduce((acc, num) => {
    acc[num.toString()] = (acc[num.toString()] || 0) + 1;

    return acc;
  }, {});

  for (let el in obj) {
    if (obj[el] % 2 !== 0) {
      return parseInt(el);
    }
  }

  return 0;
};
