export default function displayOptions(options) {
  // console.log(data);
  let display = [];

  for (let x of options) {
    // console.log(x);
    switch (x.type) {
      case "color":
        display.push("🎨");
        break;
      case "fonts":
        // console.log(x.data.response);
        display.push("📖");
        break;
      case "grids":
        display.push("📰");
        break;
      default:
    }
  }
  return display.join(" ");
}
