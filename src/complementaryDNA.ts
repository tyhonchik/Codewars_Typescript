// A <-> T | C <-> G
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
