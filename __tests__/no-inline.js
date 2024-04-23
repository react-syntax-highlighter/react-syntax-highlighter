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

test('SyntaxHighlighter component renders correctly without inline styles when useInlineStyles=false', () => {
  const tree = renderer
    .create(
      <SyntaxHighlighter language="javascript" useInlineStyles={false}>
        {code}
      </SyntaxHighlighter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
