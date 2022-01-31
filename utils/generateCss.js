function printColors(colors) {
  if (!colors) {
    return "";
  } else {
    return `$primary-color: #${colors.primaryColor};
    $primary-font-color: #${colors.primaryFontColor};

  `;
  }
}
function printFonts(fonts) {
  // console.log(fonts);
  if (!fonts) {
    return "";
  } else {
    return ` $h1-size: ${fonts.h1Font}px;
  $h2-size: ${fonts.h2Font}px;
  $h3-size: ${fonts.h3Font}px;
  $h4-size: ${fonts.h4Font}px;
  $h5-size: ${fonts.h5Font}px;
  $h6-size: ${fonts.h6Font}px;
  `;
  }
}
function printGrids(grids) {
  // console.log(fonts);
  if (!grids) {
    return "";
  } else {
    return `
  `;
  }
}

// Create a function to generate markdown for README
function generateCss(data) {
  // console.log(data);
  let colors;
  let fonts;
  let grids;

  for (let x of data) {
    // console.log(x);
    switch (x.type) {
      case "color":
        colors = x.data.response.data;
        break;
      case "fonts":
        // console.log(x.data.response);
        fonts = x.data.response;
        break;
      case "grids":
        grids = x.data.response.data;
        break;
      default:
    }
  }

  return `:root {
${printColors(colors)}
${printFonts(fonts)}
${printGrids(grids)}


}
`;
}

export default generateCss;
