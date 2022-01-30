// Create a function to generate markdown for README
function generateCss(data) {
  let colors;
  let fonts;

  for (let x of data) {
    switch (x.type) {
      case "color":
        colors = x.data.response.data;
        break;
      case "fonts":
        fonts = x.data.response.data;
        break;
      default:
    }
  }

  return `:root{
    --primary-color:#${colors.primaryColor}
  }
`;
}

export default generateCss;
