import lowlight from 'lowlight';
import React from 'react';

const createTextElement = (text, key) => <span key={key}>{text.value}</span>;

const createStyleObject = (classNames, style) => {
	return classNames.reduce((styleObject, className) => {
		console.log(className, style[className]);
		return {...styleObject, ...style[className]};
	}, {});
}

const createClassNameString = classNames => classNames.join(" ");

function createChildren(style) {
	let childrenCount = 0;
	return children => {
		childrenCount += 1;
		return children.map((child, i) => createElement(child, style, `code-segement-${childrenCount}-${i}`));
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
		const className = properties.className ? createClassNameString(properties.className) : "";
		const nodeStyle = createStyleObject(properties.className, style);
		console.log(nodeStyle);
		const children = childrenCreator(node.children);
		return <TagName key={key} className={className}>{children}</TagName>;
	}
}

export default function SyntaxHighlighter(props) {
	const {language, children, stylesheet = 'default'} = props;
	const style = require(`./styles/${stylesheet}`);
	const codeTree = lowlight.highlight(language, children);

	return <pre {...props}>{codeTree.value.map((node, i) => createElement(node, style, `code-segement${i}`))}</pre>;
}