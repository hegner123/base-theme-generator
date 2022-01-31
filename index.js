// Imported required packages
import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import { defineColors } from "./types/colors.js";
import { defineFonts } from "./types/fonts.js";
import generateCss from "./utils/generateCss.js";
import defineGrids from "./types/grids.js";
import displayOptions from "./utils/displayOptions.js";

// Array of questions for user input

function createFiles() {
  return inquirer.prompt([
    {
      type: "checkbox",
      name: "type",
      message: "What styles would you like to generate?",
      choices: ["colors", "fonts", "grids"],
      default: [],
    },
  ]);
}
// Function to write README file using the user input
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function buildFile(inquirerResponses) {
  console.log(`\nGenerating CSS ${displayOptions(inquirerResponses)}\n`);
  // console.log(inquirerResponses);
  writeToFile("/sass/base/_base.scss", generateCss(inquirerResponses));
}

// Function to initialize app
export default function createBaseCSS() {
  class Settings {
    constructor(response) {
      this.response = response;
    }
  }

  createFiles().then((response) => {
    async function loopResponses() {
      let options = [];
      for (let x of response.type) {
        switch (x) {
          case "colors":
            await defineColors().then((data) => {
              const settings = new Settings({ dataSet: "colors", data });
              options.push({ type: "color", data: settings });
            });

            break;
          case "fonts":
            await defineFonts().then((data) => {
              const settings = new Settings(data);
              options.push({ type: "fonts", data: settings });
            });
            break;
          case "grids":
            await defineGrids().then((data) => {
              const settings = new Settings(data);
              options.push({ type: "grids", data: settings });
            });
            break;
          default:
        }
      }
      return options;
    }

    loopResponses().then((options) => buildFile(options));
  });
}

createBaseCSS();
