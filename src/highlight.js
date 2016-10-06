import React from 'react';

function createStyleObject(classNames, style) {
  return classNames.reduce((styleObject, className) => {
    return {...styleObject, ...style[className]};
  }, {});
}

function createClassNameString(classNames) {
  return classNames.join(' ');
}

function createChildren(style, useInlineStyles) {
  let childrenCount = 0;
  return children => {
    childrenCount += 1;
    return children.map((child, i) => createElement({
      node: child,
      style,
      useInlineStyles,
      key:`code-segment-${childrenCount}-${i}`
    }));
  }
}

function createElement({ node, style, useInlineStyles, key }) {
  const { properties, type, tagName, value } = node;
  if (type === 'text') {
    return value;
  } else if (tagName) {
    const TagName = tagName;
    const childrenCreator = createChildren(style, useInlineStyles);
    const props = (
      useInlineStyles
      ?
      { style: createStyleObject(properties.className, style) }
      :
      { className: createClassNameString(properties.className) }
    );
    const children = childrenCreator(node.children);
    return <TagName key={key} {...props}>{children}</TagName>;
  }
}

function getLineNumberString(lines, startingLineNumber) {
  return lines.reduce((lineCountString, _, i) => lineCountString + `${i + startingLineNumber}\n`, '');
}

function LineNumbers({ codeString, style = {float: 'left', paddingRight: '10px'}, startingLineNumber }) {
  return <code style={style}>{getLineNumberString(codeString.split('\n'), startingLineNumber)}</code>
}

export default function (lowlight, defaultStyle) {
 return function SyntaxHighlighter(props) {
    const {
      language,
      children,
      style = defaultStyle,
      customStyle = {},
      codeTagProps = {},
      useInlineStyles = true,
      showLineNumbers = false,
      startingLineNumber = 1,
      lineNumberStyle,
      ...rest
    } = props;
    const codeTree = language ? lowlight.highlight(language, children) : lowlight.highlightAuto(children);
    const defaultPreStyle = style.hljs || {backgroundColor: '#fff'};
    const preProps = (
      useInlineStyles
      ?
      Object.assign({}, rest, { style: Object.assign({}, defaultPreStyle, customStyle) })
      :
      Object.assign({}, rest, { className: 'hljs'})
    );
    const lineNumbers = (
      showLineNumbers 
      ? 
      <LineNumbers 
        style={lineNumberStyle} 
        startingLineNumber={startingLineNumber}
        codeString={children}
      />
      :
      null
    );
    return (
      <pre {...preProps}>
        {lineNumbers}
        <code {...codeTagProps}>
          {codeTree.value.map((node, i) => createElement({
            node,
            style,
            useInlineStyles,
            key: `code-segement${i}`
          }))}
        </code>
      </pre>
    );
  }
}
