import lowlight from 'lowlight/';
import React from 'react';

const createTextElement = (text, key) => <span key={key}>{text.value}</span>;

const createClassNameString = classNames => classNames.join(" ");

function createChildren() {
	let childrenCount = 0;
	return children => {
		childrenCount += 1;
		return children.map((child, i) => createElement(child, `code-segement-${childrenCount}-${i}`));
	}
}
function createElement(node, key) {
	if (node.type === "text") {
		return createTextElement(node, key);
	}
	else if (node.tagName) {
		const TagName = node.tagName;
		const { properties } = node;
		const childrenCreator = createChildren();
		const className = properties.className ? createClassNameString(properties.className) : "";
		const children = childrenCreator(node.children);
		return <TagName key={key} className={className}>{children}</TagName>;
	}
}

export default function SyntaxHighlighter({language, children}) {
	const codeTree = lowlight.highlight(language, children);
	return <span>{codeTree.value.map((node, i) => createElement(node, `code-segement${i}`))}</span>;
}