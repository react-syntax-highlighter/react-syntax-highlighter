import React from 'react';
import renderer from 'react-test-renderer';
import SyntaxHighlighter from "../src/index.js";

const code = `const woah = fun => fun + 1;
const dude = woah(2) + 3;
function thisIsAFunction() {
  return [1,2,3].map(n => n + 1).filter(n !== 3);
}
console.log('making up fake code is really hard');

function itIs() {
  return 'no seriously really it is';
}
`;

test('SyntaxHighlighter renders div where code tag is by default', () => {
  const tree = renderer.create(
    <SyntaxHighlighter CodeTag='div'>{code}</SyntaxHighlighter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

function Code({ children, ...rest }) {
  return <section {...rest}>{children}</section>;
}

test('SyntaxHighlighter component renders custom react component where code tag is by default', () => {
  const tree = renderer.create(
    <SyntaxHighlighter CodeTag={Code}>{code}</SyntaxHighlighter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
