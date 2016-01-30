import lowlight from 'lowlight/lib/core';
import React from 'react';

const createTextElement = (text, key) => <span key={key}>{text.value}</span>;

const createStyleObject = (classNames, style) => {
	return classNames.reduce((styleObject, className) => {
		return {...styleObject, ...style[className]};
	}, {});
}

function createChildren(style) {
	let childrenCount = 0;
	return children => {
		childrenCount += 1;
		return children.map((child, i) => createElement(child, style, `code-segment-${childrenCount}-${i}`));
	}
}
function createElement(node, style, key) {
	if (node.type === "text") {
		return createTextElement(node, key);
	}
	else if (node.tagName) {
		const TagName = node.tagName;
		const { properties } = node;
		const childrenCreator = createChildren(style);
		const nodeStyle = createStyleObject(properties.className, style);
		const children = childrenCreator(node.children);
		return <TagName key={key} style={nodeStyle}>{children}</TagName>;
	}
}

export default function SyntaxHighlighter(props) {
	const {language, children, stylesheet = 'default'} = props;
	const style = require(`./styles/${stylesheet}`).default;
	const lang = require(`highlight.js/lib/languages/${language}`);
	lowlight.registerLanguage(language, lang);
	const codeTree = lowlight.highlight(language, children);

	return (
		<pre {...props}>
			<code>
				{codeTree.value.map((node, i) => createElement(node, style, `code-segement${i}`))}
			</code>
		</pre>
	);
}
