## React Syntax Highlighter

Syntax highlighting component for `React` using the seriously amazing <a href="https://github.com/wooorm/lowlight">lowlight</a> by <a href="https://github.com/wooorm">wooorm</a>

Check out a small demo <a href="http://conorhastings.com/react-syntax-highlighter/demo/">here</a> and see the component in action highlighting the returned syntax <a href="http://conorhastings.com/redux-test-recorder/demo/">here</a>

### Work in progress - tests coming soon.

### Install

`npm install react-syntax-highlighter --save`

### Why This One?

There are other syntax highlighters for `React` out there so why use this one? The biggest reason is that all the others rely on triggering calls in `componentDidMount` and `componentDidUpdate` to highlight the code block and then insert it in the render function using `dangerouslySetInnerHTML`. This utilizes a syntax tree to dynamically build the virtual dom which allows for fine tuned patching of the DOM instead of completely overwriting it on any change, and because of this it is also using more idiomatic `React` and allows the use of pure function components brought into `React` as of `0.14`

### Use

#### props
`language` - the language to highlight code in.
`children` - the code to highlight.
`spread props` pass arbitrary props to pre tag wrapping code. 

You will also need to include a highlight.js <a href="https://highlightjs.org/static/demo/">stylesheet</a> for the syntax highlighting. I'd reccomend using webpack with the `style-loader` so you can build the styles inline instead of needing to import it elsewhere. 

```js
import SyntaxHighlighter from 'react-syntax-highlighter';
const Component = () => {
  const codeString = '(num) => num + 1';
  return <SyntaxHighlighter language='javascript'>{codeString}</SyntaxHighlighter>;  
}
```
