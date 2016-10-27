## React Syntax Highlighter

[![CircleCI](https://circleci.com/gh/conorhastings/react-syntax-highlighter.svg?style=svg)](https://circleci.com/gh/conorhastings/react-syntax-highlighter)

Syntax highlighting component for `React` using the seriously super amazing <a href="https://github.com/wooorm/lowlight">lowlight</a> by <a href="https://github.com/wooorm">wooorm</a>

Check out a small demo <a href="http://conorhastings.com/react-syntax-highlighter/demo/">here</a> and see the component in action highlighting the generated test code <a href="http://conorhastings.com/redux-test-recorder/demo/">here</a>

### Install

`npm install react-syntax-highlighter --save`

### Why This One?

There are other syntax highlighters for `React` out there so why use this one? The biggest reason is that all the others rely on triggering calls in `componentDidMount` and `componentDidUpdate` to highlight the code block and then insert it in the render function using `dangerouslySetInnerHTML` or just manually altering the DOM with native javascript. This utilizes a syntax tree to dynamically build the virtual dom which allows for  updating only the changing DOM instead of completely overwriting it on any change, and because of this it is also using more idiomatic `React` and allows the use of pure function components brought into `React` as of `0.14`. 

### Javascript Styles!
One of the biggest pain points for me trying to find a syntax highlighter for my own projects was the need to put a stylesheet tag on my page. I wanted to provide out of the box code styling with my modules without requiring awkward inclusion of another libs stylesheets. The styles in this module are all javascript based, and all styles supported by `highlight.js` have been ported! 

I do realize that javascript styles are not for everyone, so you can optionally choose to use css based styles with classNames added to elements by setting the prop `useInlineStyles` to `false` (it defaults to `true`).

### Use

#### props
* `language` - the language to highlight code in.
* `style` - style object rquired from styles directory. <a href="https://github.com/conorhastings/react-syntax-highlighter/blob/master/AVAILABLE_STYLES.MD">here</a>. `import { style } from 'react-syntax-highlighter/styles'` . Will use default if style is not included.
* `children` - the code to highlight.
* `customStyle` - prop that will be combined with the top level style on the pre tag, styles here will overwrite earlier styles. 
* `codeTagProps` - props that will be spread into the `<code`> tag that is the direct parent of the highlighted code elements. Useful for styling/assigning classNames.
* `useInlineStyles` - if this prop is passed in as false, react syntax highlighter will not add style objects to elements, and will instead append classNames. You can then style the code block by using one of the CSS files provided by highlight.js.
* `showLineNumbers` - if this is enabled line numbers will be shown next to the code block.
* `startingLineNumber` - if `showLineNumbers` is enabled the line numbering will start from here.
* `lineNumberStyle` - the line numbers default to appearing to the left with 10px of right padding. You can use this to override those styles.
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

React Syntax Highlighter used in the way described above can have a fairly large footprint. For those that desire more control over what exactly they need, there is an option to import a light build. If you choose to use this you will need to specifically import desired languages and register them using the registerLanguage export from the light build.

```js
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light"
import js from 'highlight.js/lib/languages/javascript';
import docco from 'react-syntax-highlighter/dist/styles/docco'; 

registerLanguage('javascript', js);
```
### Built with React Syntax Highlighter

- [DBGlass](https://github.com/web-pal/DBGlass) - PostgreSQL client built with Electron.
- [Spectacle Editor](https://github.com/FormidableLabs/spectacle-editor) - An Electron based app for creating, editing, saving, and publishing Spectacle presentations. With integrated Plotly support.
- [Caravel](https://github.com/airbnb/caravel) - Caravel is a data exploration platform designed to be visual, intuitive, and interactive.
- [CodeDoc](https://github.com/B1naryStudio/CodeDoc) - Electron based application build with React for creating project documentations
- [React Component Demo](https://github.com/conorhastings/react-component-demo) - A React Component To make live editable demos of other React Components.
- [Redux Test Recorder](https://github.com/conorhastings/redux-test-recorder) - a redux middleware to automatically generate tests for reducers through ui interaction. Syntax highlighter used by react plugin.
