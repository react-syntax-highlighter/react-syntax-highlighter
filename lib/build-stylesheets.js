'use strict';
/*
 * Quick and dirty script to build javascript stylesheets from highlight.js css
*/
const path = require('path');
const fs = require('fs');
const css = require('css');
const camel = require('to-camel-case');

fs.readdir(path.join(__dirname, '../node_modules/highlight.js/styles'), (err, files) => files.forEach(file => {
  if (file.includes('.css')) {
    createJavascriptStyleSheet(file);
  }
}));

function createJavascriptStyleSheet(file) {
  const ignoreStyleWithThis = '.hljs a';
  const fileWithoutCSS = file.split('.css')[0];
  fs.readFile(path.join(__dirname, `../node_modules/highlight.js/styles/${file}`), 'utf-8', (err, data) => {
    const javacriptStylesheet = css.parse(data).stylesheet.rules.reduce((sheet, rule) => {
      if (rule.type === 'rule') {
        const style = rule.selectors.reduce((selectors, selector) => {
          if (!selector.includes(ignoreStyleWithThis)) {
            const selectorObject = rule.declarations.reduce((declarations, declaration) => {
              declarations[camel(declaration.property)] = declaration.value;
              return declarations;
            }, {});
            selectors[selector] = selectorObject;
          }
          return selectors;
        }, {});
        sheet = Object.assign({}, sheet, style);
      }
      return sheet;
    }, {});
    fs.writeFile(path.join(__dirname, `../styles/${fileWithoutCSS}.js`), JSON.stringify(javacriptStylesheet, null, 4));
  });
}