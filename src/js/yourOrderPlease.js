/*
  Your order, please
*/

export function order(words) {
  return words
    .split(" ")
    .sort((a, b) => /\d/.exec(a)[0] - /\d/.exec(b)[0])
    .join(" ");
}
