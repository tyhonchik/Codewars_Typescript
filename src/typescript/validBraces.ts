/*
  Valid Braces
  https://www.codewars.com/kata/5277c8a221e209d3f6000b56
*/

export class ValidBraces {
  static validBraces(braces: string) {
    const regExp = /\(\)|\[\]|\{\}/;

    while (regExp.test(braces)) {
      braces = braces.replace(regExp, "");
    }

    return !braces.length;
  }
}
