import React from 'react';
import renderer from 'react-test-renderer';
import { Light as SyntaxHighlighter } from '../src';
import objc from 'highlight.js/lib/languages/objectivec';

SyntaxHighlighter.registerLanguage('objc', objc);
SyntaxHighlighter.registerLanguage('objectivec', objc);

test('SyntaxHighlighter renders childre unadultered when no language disocvered in highlight auto', () => {
  const tree = renderer
    .create(
      <SyntaxHighlighter>
        {`Contacts* contacts = [[Contacts alloc]init];`}
      </SyntaxHighlighter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
