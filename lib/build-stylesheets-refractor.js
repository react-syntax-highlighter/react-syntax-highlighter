'use strict';
const path = require('path');
const fs = require('fs');
const css = require('css');
const camel = require('to-camel-case');

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      return this.substr(position || 0, searchString.length) === searchString;
  };
}

let directories = ['../node_modules/prismjs/themes', 
'../node_modules/prism-themes/themes']

directories.map((directory) => {
  fs.readdir(path.join(__dirname, directory), (err, files) => {
    files.forEach(file => {
      let stylesList = [];
      if (file.includes('.css')) {
        createJavascriptStyleSheet(file, directory);
      };
    })
    updateDocs(files)
  });
})

let allFiles = []
let callCount = 0
function updateDocs(files) {
  allFiles = allFiles.concat(files)
  callCount += 1

  if (callCount != directories.length) {
    return
  }
  const onlyCSSFiles = allFiles.filter(file => file.includes('.css'));
  const availableStyleNames = onlyCSSFiles.map(file => (
    file === "prism.css" ? "prism" : file.split('.css')[0].split('prism-')[1]
  ));
  const styles = availableStyleNames.map(name => `\n* ${camel(name)}`);
  const defaultExports = availableStyleNames.map(name => `export { default as ${camel(name)} } from './${name}';\n`);
  const styleMD = `## Available \`stylesheet\` props ${styles.join('')}`;
  fs.writeFile(
    path.join(__dirname, '../AVAILABLE_STYLES_REFRACTOR.MD'), 
    styleMD, 
    () => {});
  fs.writeFile(
    path.join(__dirname, '../src/styles/refractor/index.js'), 
    defaultExports.join(''), 
    () => {});
}

function createJavascriptStyleSheet(file, directory) {
  const ignoreStyleWithThis = '.hljs a';
  const fileWithoutCSS = (file === "prism.css" ? "prism" : file.split('.css')[0].split('prism-')[1])
  console.log(fileWithoutCSS)
  fs.readFile(path.join(__dirname, `${directory}/${file}`), 'utf-8', (err, data) => {
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
            if (selector === "pre[class*=\"language-\"]") {
              if (!selectors.hljs) {
                selectors.hljs = {}
              }
              if (selectorObject.color) {
                selectors.hljs.color = selectorObject.color
              }
              if (selectorObject.background) {
                selectors.hljs.backgroundColor = selectorObject.background
              }
            }
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
    fs.writeFile(path.join(__dirname, `../src/styles/refractor/${fileWithoutCSS}.js`),
      `export default ${JSON.stringify(javacriptStylesheet, null, 4)}`, () => {});
  });
}
