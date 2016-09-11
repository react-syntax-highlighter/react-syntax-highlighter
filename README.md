## React Syntax Highlighter

Syntax highlighting component for `React` using the seriously super amazing <a href="https://github.com/wooorm/lowlight">lowlight</a> by <a href="https://github.com/wooorm">wooorm</a>

Check out a small demo <a href="http://conorhastings.com/react-syntax-highlighter/demo/">here</a> and see the component in action highlighting the generated test code <a href="http://conorhastings.com/redux-test-recorder/demo/">here</a>

### Install

`npm install react-syntax-highlighter --save`

### Why This One?

There are other syntax highlighters for `React` out there so why use this one? The biggest reason is that all the others rely on triggering calls in `componentDidMount` and `componentDidUpdate` to highlight the code block and then insert it in the render function using `dangerouslySetInnerHTML` or just manually altering the DOM with native javascript. This utilizes a syntax tree to dynamically build the virtual dom which allows for  updating only the changing DOM instead of completely overwriting it on any change, and because of this it is also using more idiomatic `React` and allows the use of pure function components brought into `React` as of `0.14`. 

### Javascript Styles!
One of the biggest pain points for me trying to find a syntax highlighter for my own projects was the need to put a stylesheet tag on my page. I wanted to provide out of the box code styling with my modules without requiring awkward inclusion of another libs stylesheets. The styles in this module are all javascript based, and all styles supported by `highlight.js` have been ported! 

I do realize that javascript styles are not for someone, so you can optionally choose to use css based styles with classNames added to elements by setting the prop `useInlineStyles` to `false` (it defaults to `true`).

### Use

*Currently this modules requires that you build with webpack as it uses dynamic require statements*

#### props
* `language` - the language to highlight code in.
* `style` - style object rquired from styles directory. <a href="https://github.com/conorhastings/react-syntax-highlighter/blob/master/AVAILABLE_STYLES.MD">here</a>. `import { style } from 'react-syntax-highlighter/styles'` . Will use default if style is not included.
* `children` - the code to highlight.
* `customStyle` - prop that will be combined with the top level style on the pre tag, styles here will overwrite earlier styles. 
* `useInlineStyles` - if this prop is passed in as false, react syntax highlighter will not add style objects to elements, and will instead append classNames. You can that style the code block by using one of the css files provided by highlight.js.
* `spread props` pass arbitrary props to pre tag wrapping code. 

```js
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
const Component = () => {
  const codeString = '(num) => num + 1';
  return <SyntaxHighlighter language='javascript' style={docco}>{codeString}</SyntaxHighlighter>;  
}
```
### Light Build

React Syntax Highlighter used in the way described above can have a fairly large footprint. For those that desire more control over what exactly they need, there is the option to use an envified light build via the env variable `REACT_SYNTAX_HIGHLIGHTER_LIGHT_BUILD`. If you choose to use this you will need to specifically import lowlight and register your desired language and specifically import that language from highlight js. Then using something like `envify` for browserify or `DefinePlugin` for webpack pass the env `REACT_SYNTAX_HIGHLIGHTER_LIGHT_BUILD` into your build. You'll also want to import the style of your choosing from the specified file directly instead of /dist/styles index. An example for using with webpack can be found below:

```js
import js from 'highlight.js/lib/languages/javascript';
import lowlight from 'lowlight/lib/core';
import docco from 'react-syntax-highlighter/dist/styles/docco'; 

low.registerLanguage('javascript', js);
```

Then in your webpack config: 

```js
  plugins: [
    new webpack.DefinePlugin({
      "process.env.REACT_SYNTAX_HIGHLIGHTER_LIGHT_BUILD": true,
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ]
```