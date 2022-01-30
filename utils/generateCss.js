// Create a function to generate markdown for README
function generateCss(data) {
  return `:root{
    --primary-color:${data.primaryColor}
  }
`;
}

export default generateCss;
