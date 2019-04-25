/*
  Simple Pig Latin
*/

export function pigIt(str) {
  return str
    .split(" ")
    .map(word =>
      /\w+/.test(word)
        ? word.substring(1, word.length) + word.charAt(0) + "ay"
        : word
    )
    .join(" ");
}
