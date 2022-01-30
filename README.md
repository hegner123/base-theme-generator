# base-theme-generator

A command line tool to reduce the amount of boiler plate code when working with the standard beagle base theme code base.

## Use

1. Install into the src directory of the wordpress theme.
2. Create a `createStyles.js` file adjacent to the package.json that imports the `createBaseStyles` function from base-theme-generator.
3. Call `createBaseStyles()`
4. Copy the following script into your package.json file that runs `"base":"node createStyles.js"`.
