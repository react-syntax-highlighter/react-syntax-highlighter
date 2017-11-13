'use strict';
/*
 * Build javascript passthrough modules for highlight.js languages
*/
const path = require('path');
const fs = require('fs');
const camel = require('to-camel-case');

function makeImportName (name) {
  if (name === '1c') {
    return 'oneC';
  }
  return camel(name);
}

function createLanguagePassthroughModule (file) {
  file = file.split('prism-')[1]
  const fileWithoutJS = file.split('.js')[0]
  const importName = makeImportName(fileWithoutJS);
  const lines = [
    `import Prism from 'prismjs'`,
    `export default Prism.languages.${importName}`,
    ''
  ];

  fs.writeFile(path.join(__dirname, `../src/languages/refractor/${file}`), lines.join(';\n'));
}

fs.readdir(path.join(__dirname, '../node_modules/prismjs/components'), (err, files) => {
  if (err) {
    process.exit(1);
  }
  files = files.filter((file) => {
    return (file.indexOf('min.js') == -1)
  })
  files.forEach(createLanguagePassthroughModule);
  const availableLanguageNames = files.map((file) => {
    return file.split('.js')[0].split('prism-')[1]  
  })
  console.log(availableLanguageNames)
  const languagesLi = availableLanguageNames.map((name) => `\n* ${makeImportName(name)}${ makeImportName(name) !== name ? ` (${name})` : '' }`);
  const languageMD = `## Available \`language\` imports ${languagesLi.join('')}`;
  fs.writeFile(path.join(__dirname, '../AVAILABLE_LANGUAGES_REFRACTOR.MD'), languageMD);

  const defaultExports = availableLanguageNames.map((name) => `export { default as ${makeImportName(name)} } from './${name}';\n`);
  fs.writeFile(path.join(__dirname, '../src/languages/refractor/index.js'), defaultExports.join(''));
});
