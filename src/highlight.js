import React from 'react';

const newLineRegex = /\n/g;
function getNewLines(str) {
  return str.match(newLineRegex);
}

function createStyleObject(classNames, elementStyle = {}, stylesheet) {
  return classNames.reduce((styleObject, className) => {
    return {...styleObject, ...stylesheet[className]};
  }, elementStyle);
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
      { style: createStyleObject(properties.className, properties.style, style) }
      :
      { className: createClassNameString(properties.className) }
    );
    const children = childrenCreator(node.children);
    return <TagName key={key} {...props}>{children}</TagName>;
  }
}

function getLineNumbers({ lines, startingLineNumber, style }) {
  return lines.map((_, i) => {
    const number = i + startingLineNumber;
    return (
      <span 
        key={`line-${i}`}
        className='react-syntax-highlighter-line-number' 
        style={typeof style === 'function' ? style(number) : style}
      >
        {`${number}\n`}
      </span> 
    );
  });
}

function LineNumbers({ 
  codeString, 
  containerStyle = {float: 'left', paddingRight: '10px'}, 
  numberStyle = {},
  startingLineNumber 
}) {
  return (
    <code style={containerStyle}>
      {getLineNumbers({
        lines: codeString.replace(/\n$/, '').split('\n'), 
        style: numberStyle,
        startingLineNumber
      })}
    </code>
  );
}

function createLineElement(children) {
  return {
    type: 'element',
    tagName: 'span',
    properties: { className: [] },
    children
  }
}


function wrapLinesInSpan(codeTree, lineStyle) {
  const { newTree, lastLineBreakIndex } = codeTree.value.reduce(({ newTree, lastLineBreakIndex }, node, index) => {
    let newLines;
    newLines = node.type === "text" && getNewLines(node.value);
    if (newLines) {
      const splitValue = node.value.split('\n');
      splitValue.forEach((text, i) => {
        const newChild = { type: 'text', value: `${text}\n`};
        if (i === 0) {
          const children = codeTree.value.slice(
            lastLineBreakIndex + 1, 
            index
          ).concat(newChild);
          newTree.push(createLineElement(children)); 
        } else if (i === splitValue.length - 1 &&  codeTree.value[index + 1]) {
          codeTree.value[index + 1].children[0].value = `${text}${codeTree.value[index + 1].children[0].value}`;
        }
        else {
          newTree.push(createLineElement([newChild]));
        }
      });
      lastLineBreakIndex = index;
    }
    return { newTree, lastLineBreakIndex };
  }, { newTree: [], lastLineBreakIndex: -1 });
  if (lastLineBreakIndex !== codeTree.value.length - 1) {
    const children = codeTree.value.slice(lastLineBreakIndex + 1, codeTree.value.length);
    newTree.push(createLineElement(children));
  }
  return newTree.map((line, i) => {
    line.properties.style = (
      typeof lineStyle === 'function'
      ?
      lineStyle(i + 1)
      :
      lineStyle
    );
    return line;
  });
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
      lineNumberContainerStyle,
      lineNumberStyle,
      wrapLines = false,
      lineStyle = {},
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

    const tree = wrapLines ? wrapLinesInSpan(codeTree, lineStyle) : codeTree.value;
    const lineNumbers = (
      showLineNumbers
      ?
      <LineNumbers
        containerStyle={lineNumberContainerStyle}
        numberStyle={lineNumberStyle}
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
          {tree.map((node, i) => createElement({
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
