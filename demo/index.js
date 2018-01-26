import React from 'react';
import { render } from 'react-dom';
import SyntaxHighlighter from '..';

const availableStyles = [
  'agate',
  'androidstudio',
  'arduino-light',
  'arta',
  'ascetic',
  'atelier-cave-dark',
  'atelier-cave-light',
  'atelier-dune-dark',
  'atelier-dune-light',
  'atelier-estuary-dark',
  'atelier-estuary-light',
  'atelier-forest-dark',
  'atelier-forest-light',
  'atelier-heath-dark',
  'atelier-heath-light',
  'atelier-lakeside-dark',
  'atelier-lakeside-light',
  'atelier-plateau-dark',
  'atelier-plateau-light',
  'atelier-savanna-dark',
  'atelier-savanna-light',
  'atelier-seaside-dark',
  'atelier-seaside-light',
  'atelier-sulphurpool-dark',
  'atelier-sulphurpool-light',
  'brown-paper',
  'codepen-embed',
  'color-brewer',
  'dark',
  'darkula',
  'defaultStyle',
  'docco',
  'far',
  'foundation',
  'github-gist',
  'github',
  'googlecode',
  'grayscale',
  'hopscotch',
  'hybrid',
  'idea',
  'ir-black',
  'kimbie.dark',
  'kimbie.light',
  'magula',
  'mono-blue',
  'monokai-sublime',
  'monokai',
  'obsidian',
  'paraiso-dark',
  'paraiso-light',
  'pojoaque',
  'railscasts',
  'rainbow',
  'school-book',
  'solarized-dark',
  'solarized-light',
  'sunburst',
  'tomorrow-night-blue',
  'tomorrow-night-bright',
  'tomorrow-night-eighties',
  'tomorrow-night',
  'tomorrow',
  'vs',
  'xcode',
  'xt256',
  'zenburn' 
];
const code = `function createStyleObject(classNames, style) {
  return classNames.reduce((styleObject, className) => {
    return {...styleObject, ...style[className]};
  }, {});
}

function createClassNameString(classNames) {
  return classNames.join(' ');
}

function createChildren(style, useInlineStyles) {
  let childrenCount = 0;
  return children => {
    childrenCount += 1;
    return children.map((child, i) => createElement({
      node: child,
      style,
      useInlineStyles,
    }));
  }
}`
const Component = () => (
  <SyntaxHighlighter
    wrapLines={true}
    lineProps={lineNumber => ({
      style: { display: "block", cursor: "pointer" }, 
      onClick() {
        console.log(lineNumber);
      }
    })}
  >
    {code}
  </SyntaxHighlighter>
);


render(<Component />, document.getElementById('app'));
