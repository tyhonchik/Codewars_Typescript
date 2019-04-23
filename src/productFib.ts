/*
  Product of consecutive Fib numbers
  https://www.codewars.com/kata/5541f58a944b85ce6d00006a
*/

export class ProductFib {
  public static productFib = (prod: number) => {
    let a = 0,
      b = 1;
    while (a * b < prod) {
      let c = a + b;
      a = b;
      b = c;
    }
    return [a, b, prod === a * b];
  };
}
