## React Syntax Highlighter

Syntax highlighting component for `React` using the seriously amazing <a href="https://github.com/wooorm/lowlight">lowlight</a> by <a href="https://github.com/wooorm">wooorm</a>

Check out a small demo <a href="http://conorhastings.com/react-syntax-highlighter/demo/">here</a> and see the component in action highlighting the returned syntax <a href="http://conorhastings.com/redux-test-recorder/demo/">here</a>

### Work in progress - tests coming soon.

### Install

`npm install react-syntax-highlighter --save`

### Use

#### props
`language` - the language to highlight code in.
`children` - the code to highlight.
`spread props` pass arbitrary props to pre tag wrapping code. 

You will also need to include a highlight.js <a href="https://highlightjs.org/static/demo/">stylesheet</a> for the syntax highlighting. 

```js
import SyntaxHighlighter from 'react-syntax-highlighter';
const Component = () => {
  const codeString = '(num) => num + 1';
  return <SyntaxHighlighter language='javascript'>{codeString}</SyntaxHighlighter>;  
}
```
