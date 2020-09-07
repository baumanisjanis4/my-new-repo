export {};

function trimWord(word) {
  return word.trim('CODELEX');
}

const result = trimWord("  CODELEX ");
console.log(result); // Expected output: "CODELEX"
