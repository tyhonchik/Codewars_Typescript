export function duplicateCount(text) {
  const accumulatedObject = text.split("").reduce((acc, ch) => {
    acc[ch.toLowerCase()] = (acc[ch.toLowerCase()] || 0) + 1;

    return acc;
  }, {});

  return Object.keys(accumulatedObject).filter(
    char => accumulatedObject[char] > 1
  ).length;

  // console.log(charArr);
}
