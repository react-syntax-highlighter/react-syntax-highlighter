import React from 'react';
import renderer from 'react-test-renderer';
import SyntaxHighlighter from '../src';

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

test('SyntaxHighlighter component renders line numbers if showLineNumbers === true', () => {
  const tree = renderer
    .create(
      <SyntaxHighlighter language="javascript" showLineNumbers>
        {code}
      </SyntaxHighlighter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('SyntaxHighlighter component does not render line numbers if showLineNumbers === undefined', () => {
  const tree = renderer
    .create(<SyntaxHighlighter language="javascript">{code}</SyntaxHighlighter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('SyntaxHighlighter component does not render line numbers if showInlineNumbers === true && showLineNumbers === undefined', () => {
  const tree = renderer
    .create(
      <SyntaxHighlighter language="javascript" showInlineLineNumbers={true}>
        {code}
      </SyntaxHighlighter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('SyntaxHighlighter component renders correctly', () => {
  const tree = renderer
    .create(
      <SyntaxHighlighter language="javascript" showLineNumbers>
        {code}
      </SyntaxHighlighter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('SyntaxHighlighter allows lineNumberStyle as object', () => {
  const tree = renderer
    .create(
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        lineNumberStyle={{ color: 'red' }}
      >
        {code}
      </SyntaxHighlighter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('SyntaxHighlighter allows lineNumberStyle as function', () => {
  const tree = renderer
    .create(
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        lineNumberStyle={() => ({ color: 'red' })}
      >
        {code}
      </SyntaxHighlighter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('SyntaxHighlighter allows lineNumberStyle as function for inline line numbers', () => {
  const tree = renderer
    .create(
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers
        showInlineLineNumbers
        lineNumberStyle={() => ({ color: 'red' })}
      >
        {code}
      </SyntaxHighlighter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
