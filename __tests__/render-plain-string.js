import React from 'react';
import renderer from 'react-test-renderer';
import SyntaxHighlighter,  { registerLanguage } from "../src/light.js";
import objc from 'highlight.js/lib/languages/objectivec';

registerLanguage('objc', objc);
registerLanguage('objectivec', objc);


test('SyntaxHighlighter renders childre unadultered when no language disocvered in highlight auto', () => {
  const tree = renderer.create(
   <SyntaxHighlighter> 
       {`Contacts* contacts = [[Contacts alloc]init];`}
    </SyntaxHighlighter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});