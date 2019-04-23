/*
  Most digits
  https://www.codewars.com/kata/58daa7617332e59593000006
*/

export class Kata {
  static findLongest = (array: number[]): number =>
    array.sort(
      (a: number, b: number) => b.toString().length - a.toString().length
    )[0];
}
