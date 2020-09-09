export {};

const letters = ["a", "n", "c", "e", "z", "f"];
let sortedLetters:string[] = letters.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });// You are allowed to change only this line

console.log(sortedLetters); // Expected output: [ 'a', 'c', 'e', 'f', 'n', 'z' ]
