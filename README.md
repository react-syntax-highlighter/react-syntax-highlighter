## React Syntax Highlighter

Syntax highlighting component for `React` using the seriously amazing <a href="https://github.com/wooorm/lowlight">lowlight</a> by <a href="https://github.com/wooorm">wooorm</a>

Check out a small demo <a href="http://conorhastings.com/react-syntax-highlighter/demo/">here</a> and see the component in action highlighting the returned syntax <a href="http://conorhastings.com/redux-test-recorder/demo/">here</a>

### Install

`npm install react-syntax-highlighter --save`

### Why This One?

There are other syntax highlighters for `React` out there so why use this one? The biggest reason is that all the others rely on triggering calls in `componentDidMount` and `componentDidUpdate` to highlight the code block and then insert it in the render function using `dangerouslySetInnerHTML` or just manually altering the DOM with native javascript. This utilizes a syntax tree to dynamically build the virtual dom which allows for fine tuned patching of the DOM instead of completely overwriting it on any change, and because of this it is also using more idiomatic `React` and allows the use of pure function components brought into `React` as of `0.14`

### Javascript Styles!
One of the biggest pain points for me trying to find a syntax highlighter for my own projects was the need to put a stylesheet tag on my page. I wanted to provide out of the box code styling with my modules without requiring awkward inclusion of another libs stylesheets. The styles in this module are all javascript based, and all styles supported by `highlight.js` have been ported!

### Use

*Currently this modules requires that you build with webpack as it uses dynamic require statements*

#### props
* `language` - the language to highlight code in.
* `stylesheet` - name of syntax stylesheet to use, see list of available styles  <a href="https://github.com/conorhastings/react-syntax-highlighter/blob/master/AVAILABLE_STYLES.MD">here</a>
* `children` - the code to highlight.
* `spread props` pass arbitrary props to pre tag wrapping code. 

```js
import SyntaxHighlighter from 'react-syntax-highlighter';
const Component = () => {
  const codeString = '(num) => num + 1';
  return <SyntaxHighlighter language='javascript' stylesheet='docco'>{codeString}</SyntaxHighlighter>;  
}
```
