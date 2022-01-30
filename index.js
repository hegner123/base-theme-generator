// Imported required packages
import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import generateCss from "./utils/generateCss.js";

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "primaryColor",
    message: "What is the Primary Color?",
  },
];

// Function to write README file using the user input
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
export function createBaseCSS() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("\nGenerating CSS 🎨\n");
    writeToFile("base.css", generateCss({ ...inquirerResponses }));
  });
}
