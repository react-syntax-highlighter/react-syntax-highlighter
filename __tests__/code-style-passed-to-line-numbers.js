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

test('SyntaxHighlighter component passes along code style to non-inline line numbers element', () => {
  const tree = renderer
    .create(
      <SyntaxHighlighter
        codeTagProps={{ style: { color: 'blue' } }}
        showLineNumbers={true}
        showInlineLineNumbers={false}
      >
        {code}
      </SyntaxHighlighter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
