/*
  Tribonacci Sequence

*/

export function tribonacci(signature, n) {
  const _outArray = [];
  let [a, b, c] = signature;

  for (let i = 0; i < n; i++) {
    if (i < 3) {
      _outArray.push(signature[i]);
    } else {
      let d = a + b + c;
      a = b;
      b = c;
      c = d;

      _outArray.push(d);
    }
  }

  return _outArray;
}
