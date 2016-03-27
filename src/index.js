import lowlight from 'lowlight/lib/core';
import React from 'react';

const Text = ({ children }) => <span>{children}</span>;

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
	const { properties, type, tagName, value } = node;
	if (type === "text") {
		return <Text key={key}>{ value }</Text>;
	}
	else if (tagName) {
		const TagName = tagName;
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
	const defaultPreStyle = style.hljs || {backgroundColor: '#fff'};
	return (
		<pre style={defaultPreStyle} {...props}>
			<code>
				{codeTree.value.map((node, i) => createElement(node, style, `code-segement${i}`))}
			</code>
		</pre>
	);
}
