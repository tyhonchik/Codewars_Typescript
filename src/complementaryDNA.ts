/*
  Complementary DNA
  (A <-> T | C <-> G)
  https://www.codewars.com/kata/554e4a2f232cdd87d9000038
*/

export class DNA {
  static complementation(char) {
    switch (char) {
      case "A":
        return "T";
      case "T":
        return "A";
      case "C":
        return "G";
      case "G":
        return "C";
      default:
        return char;
    }
  }

  static dnaStrand(dna: string): string {
    return Array.from(dna)
      .map(char => this.complementation(char))
      .join("");
  }
}
