export {};

function trim(word) {
  return word.trim('CODELEX');
}

const result = trim("CODELEX  ");
console.log(result); // Expected output: "CODELEX"
