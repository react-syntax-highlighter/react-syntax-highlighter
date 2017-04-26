'use strict';
/*
 * Build javascript passthrough modules for highlight.js languages
*/
const path = require('path');
const fs = require('fs');
const camel = require('to-camel-case');

fs.readdir(path.join(__dirname, '../node_modules/highlight.js/lib/languages'), (err, files) => {
  files.forEach(createLanguagePassthroughModule);

  const availableLanguageNames = files.map(file => file.split('.js')[0]);
  const languagesLi = availableLanguageNames.map(name => `\n* ${camel(name)}`);
  const languageMD = `## Available \`language\` props ${languagesLi.join('')}`;
  fs.writeFile(path.join(__dirname, '../AVAILABLE_LANGUAGES.MD'), languageMD);

  const defaultExports = availableLanguageNames.map(name => `export { default as ${camel(name)} } from './${name}';\n`);
  fs.writeFile(path.join(__dirname, '../src/languages/index.js'), defaultExports.join(''));
});


function createLanguagePassthroughModule(file) {
  const fileWithoutJS = file.split('.js')[0];
  const fileCamel = camel(fileWithoutJS)
  const lines = [
    `import ${fileCamel} from "highlight.js/lib/languages/${fileWithoutJS}"`,
    `export default ${fileCamel}`,
    ''
  ]

  fs.writeFile(path.join(__dirname, `../src/languages/${file}`), lines.join(";\n"));
}
