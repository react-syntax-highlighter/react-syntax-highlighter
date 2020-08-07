import React from 'react';
import renderer from 'react-test-renderer';
import SyntaxHighlighter from '../src';

const code = `
/* This is a multi-
   line comment. 
*/

void setup() {
}

void loop() {
}
`;

test('Syntaxhighliter correctly renders multi-line comments in arduino language', () => {
  const tree = renderer
    .create(<SyntaxHighlighter language="arduino">{code}</SyntaxHighlighter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
