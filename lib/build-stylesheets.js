'use strict';
/*
 * Quick and dirty script to build javascript stylesheets from highlight.js css
*/
const path = require('path');
const fs = require('fs');
const css = require('css');
const camel = require('to-camel-case');

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      return this.substr(position || 0, searchString.length) === searchString;
  };
}

fs.readdir(path.join(__dirname, '../node_modules/prismjs/themes'), (err, files) => {
  files.forEach(file => {
    let stylesList = [];
    if (file.includes('.css')) {
      createJavascriptStyleSheet(file);
    };
  })
  const onlyCSSFiles = files.filter(file => file.includes('.css'));
  const availableStyleNames = onlyCSSFiles.map(file => (
    file === "prism.css" ? "prism" : file.split('.css')[0].split('prism-')[1]
  ));
  console.log(availableStyleNames)
  const styles = availableStyleNames.map(name => `\n* ${camel(name)}`);
  const defaultExports = availableStyleNames.map(name => `export { default as ${camel(name)} } from './${name}';\n`);
  const styleMD = `## Available \`stylesheet\` props ${styles.join('')}`;
  fs.writeFile(path.join(__dirname, '../AVAILABLE_STYLES.MD'), styleMD);
  fs.writeFile(path.join(__dirname, '../src/styles/index.js'), defaultExports.join(''));
});


function createJavascriptStyleSheet(file) {
  const ignoreStyleWithThis = '.hljs a';
  const fileWithoutCSS = (file === "prism.css" ? "prism" : file.split('.css')[0].split('prism-')[1])
  console.log(fileWithoutCSS)
  fs.readFile(path.join(__dirname, `../node_modules/prismjs/themes/${file}`), 'utf-8', (err, data) => {
    const javacriptStylesheet = css.parse(data).stylesheet.rules.reduce((sheet, rule) => {
      if (rule.type === 'rule') {
        const style = rule.selectors.reduce((selectors, selector) => {
          if (!selector.includes(ignoreStyleWithThis)) {
            const selectorObject = rule.declarations.reduce((declarations, declaration) => {
              if (declaration.type === 'declaration' && declaration.property) {
                declarations[camel(declaration.property)] = declaration.value;
              }
              return declarations;
            }, {});
            if (selector.substring(0, 6) === ".token") {
              selector = selector.substring(7)
            }
            selectors[selector] = selectorObject;              
          }
          return selectors;
        }, {});
        sheet = Object.keys(style).reduce((stylesheet, selector) => {
          if (stylesheet[selector]) {
            stylesheet[selector] = Object.assign({}, stylesheet[selector], style[selector]);
          }
          else {
            stylesheet[selector] = style[selector];
          }
          return stylesheet;
        }, sheet);
      }
      return sheet;
    }, {});
    fs.writeFile(path.join(__dirname, `../src/styles/${fileWithoutCSS}.js`), 
      `export default ${JSON.stringify(javacriptStylesheet, null, 4)}`);
  });
}
