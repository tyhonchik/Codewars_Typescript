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
