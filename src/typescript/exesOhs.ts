/*
  Exes and Ohs
  https://www.codewars.com/kata/55908aad6620c066bc00002a
*/

export class ExesOhs {
  static xo(str: string) {
    const arr = Array.from(str).reduce((acc, char) => {
      acc[char.toLowerCase()] = (acc[char.toLowerCase()] || 0) + 1;

      return acc;
    }, {});

    return arr["o"] === arr["x"];
  }
}
