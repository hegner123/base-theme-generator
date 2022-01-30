import inquirer from "inquirer";

const grids = [
  {
    type: "input",
    name: "maxColumns",
    message: "How many columns?",
  },
];

export default function defineGrids() {
  return inquirer.prompt(grids).then((data) => data);
}
