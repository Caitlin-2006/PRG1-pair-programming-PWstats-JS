const fs = require("fs");

const inputFile = "10000-most-common-passwords.csv";
const outputFile = "statistics.csv";
const delimiter = ",";
let lengths = new Array(20).fill(0);

function deleteExistingOutputFile() {
  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
  }
}

function processData() {
  const data = fs.readFileSync(inputFile, "utf-8");
  const lines = data.split(/\n/);

  for (let line of lines) {
    elements = line.split(delimiter);
    passwordLength = elements[1].length;
    lengths[passwordLength]++;
  }
}
// Main execution
deleteExistingOutputFile();
processData();
let numChars = 0;
for (length of lengths) {
  fs.appendFileSync(outputFile, `Characters: ${numChars}, Count: ${length}\n`);
  numChars++;
}
