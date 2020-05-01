## React Syntax Highlighter Virtualized Renderer

<a href='https://github.com/conorhastings/react-syntax-highlighter'>React Syntax Highlighter</a> allows for the use of custom renderers to change the behavior of the way the syntax highlighted code is rendered. This module utilizes <a href="https://github.com/bvaughn/react-virtualized">React Virtualized</a> to virtualize rendering of non visible code nodes to allow for better performance when syntax highlighting large blocks. See an example: <a href="http://conor.rodeo/react-syntax-highlighter/demo/virtualized.html">here</a>

### Use

```shell
npm install react-syntax-highlighter --save
npm install react-syntax-highlighter-virtualized-renderer --save
```

```js
import SyntaxHighlighter from 'react-syntax-highlighter';
import virtualizedRenderer from 'react-syntax-highlighter-virtualized-renderer'; 
import { docco } from 'react-syntax-highlighter/dist/styles';
const Component = () => {
  const codeString = '(num) => num + 1';
  return (
	<SyntaxHighlighter 
	  language='javascript' 
	  style={docco}
	  renderer={virtualizedRenderer()}
  	>
  		{codeString}
  	</SyntaxHighlighter> 
  );
}
```

### Optional Options Argument
* overscanRowCount - number of rows to render ahead of what is currently visible. (defaults to 10)
* rowHeight - if you use different fonts / line height styles, you made need to adjust the row height (defaults to 15)

