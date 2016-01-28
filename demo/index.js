import React from 'react';
import { render } from 'react-dom';
import SyntaxHighlighter from '../dist';
import 'highlight.js/styles/docco.css';

const Component = () => {
	const h1Style = {
	  fontSize: 42,
	  color: 'aliceblue'
	}
	return (
		<div>
			<h1 style={h1Style}>React Syntax Highlighter</h1>
			<div style={{backgroundColor: 'gainsboro'}}>
				<SyntaxHighlighter language='javascript' stylesheet='docco'>
					{`
						const woah = fun => fun + 1;
						const dude = woah(2) + 3;
						function thisIsAFunction() {
							return [1,2,3].map(n => n + 1).filter(n !== 3);
						}
						console.log('making up fake code is really hard');

						function itIs() {
							return 'no seriously really it is';
						}
					`}
				</SyntaxHighlighter>
			</div>
		</div>
	);
}

render(<Component />, document.getElementById('app'));

