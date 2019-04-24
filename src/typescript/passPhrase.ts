/*
  Playing with passphrases
  https://www.codewars.com/kata/559536379512a64472000053
*/

export class G964 {
  public static playPass(s: string, n: number): string {
    const charArr: string[] = Array.from(s);
    const alphabet: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      .toLowerCase()
      .split("");

    const outString: string = charArr
      .map(
        (char: string, index: number): string => {
          let outChar: string = char;

          if (/\d/.test(char)) {
            outChar = (9 - parseInt(char)).toString();
          }

          if (/[a-zA-Z]/.test(char)) {
            const chIndex = alphabet.indexOf(char.toLowerCase());

            outChar = alphabet[(chIndex + n) % alphabet.length];
          }

          return index % 2 !== 0
            ? outChar.toLowerCase()
            : outChar.toUpperCase();
        }
      )
      .reverse()
      .join("");

    return outString;
  }
}
