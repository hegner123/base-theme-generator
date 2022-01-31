# base-theme-generator

A command line tool to reduce the amount of boiler plate code when working with the standard beagle base theme code base.

## Use

1. Install into the src directory of the wordpress theme.
2. Create a `createStyles.js` file adjacent to the package.json.

3. Copy the following code into createStyles.js :

```
import  createBaseCSS  from "base-theme-generator";

createBaseCSS();

```

4. Copy the following script into your package.json file

```
"base":"node createStyles.js"
```
5. npm run base will launch the command line application.