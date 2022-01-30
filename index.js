// Imported required packages
import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import generateCss from "./utils/generateCss.js";

// Array of questions for user input
const questions = [
  {
    type: "checkbox",
    name: "type",
    message: "What styles would you like to generate?",
    choices: ["colors", "fonts"],
    default: [],
  },
];

// Function to write README file using the user input
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
export default function createBaseCSS() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("\nGenerating CSS 🎨\n");
    writeToFile(
      "src/sass/base/base.css",
      generateCss({ ...inquirerResponses })
    );
  });
}
