import fs from "fs";
import path from "path";
import * as calculator from "./calculator";

function readFileContet(filename) {
  try {
    const content = fs.readFileSync(path.join(__dirname, filename), "utf-8");
    console.log("file content:\n", content);
  } catch (error) {
    console.log("Error: ", error);
  }
}

function main() {
  readFileContet(filename);
  console.log("Sum of 1 and 2:", calculator.add(1, 2));
  
  const sampleArrowFunction = () => {
    console.log("sample arrow function");
  };

  console.log("Calling :", sampleArrowFunction());
}

main();
