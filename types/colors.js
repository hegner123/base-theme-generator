import inquirer from "inquirer";

const colors = [
  {
    type: "input",
    name: "primaryColor",
    message: "What is the Primary Background Color?",
    prefix: "🎨",
    suffix: " #",
  },
  {
    type: "input",
    name: "primaryFontColor",
    message: "What is the Primary Font Color?",
    prefix: "🎨",
    suffix: " #",
  },
];

export function defineColors() {
  return inquirer.prompt(colors).then((data) => data);
}
