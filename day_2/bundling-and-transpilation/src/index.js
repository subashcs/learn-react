import * as calculator from "./calculator";


function main() {
  console.log("Sum of 1 and 2:", calculator.add(1, 2));
  
  const sampleArrowFunction = () => {
    console.log("sample arrow function");
  };

  console.log("Calling :", sampleArrowFunction());
}

main();
