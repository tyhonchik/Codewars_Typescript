export class ValidBraces {
  static validBraces(braces: string) {
    const regExp = /\(\)|\[\]|\{\}/;

    while (regExp.test(braces)) {
      braces = braces.replace(regExp, "");
    }

    return !braces.length;
  }
}
