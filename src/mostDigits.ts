export class Kata {
  static findLongest = (array: number[]): number =>
    array.sort(
      (a: number, b: number) => b.toString().length - a.toString().length
    )[0];
}
