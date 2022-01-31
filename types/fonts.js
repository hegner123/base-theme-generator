import inquirer from "inquirer";

const fonts = [
  {
    type: "input",
    name: "h1Font",
    message: "What is the h1 font size?",
    prefix: "📖",
  },
  {
    type: "input",
    name: "h2Font",
    message: "What is the h2 font size?",
    prefix: "📖",
  },
  {
    type: "input",
    name: "h3Font",
    message: "What is the h3 font size?",
    prefix: "📖",
  },
  {
    type: "input",
    name: "h4Font",
    message: "What is the h4 font size?",
    prefix: "📖",
  },
  {
    type: "input",
    name: "h5Font",
    message: "What is the h5 font size?",
    prefix: "📖",
  },
  {
    type: "input",
    name: "h6Font",
    message: "What is the h6 font size?",
    prefix: "📖",
  },
];

export function defineFonts() {
  return inquirer.prompt(fonts).then((data) => data);
}
