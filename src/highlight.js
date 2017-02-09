import React from 'react';

const newLineRegex = /\n/g;
function getNewLines(str) {
  return str.match(newLineRegex);
}

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
      ...rest
    } = props;
    const codeTree = language ? lowlight.highlight(language, children) : lowlight.highlightAuto(children);
    console.log(codeTree, "codeTree");
    const defaultPreStyle = style.hljs || {backgroundColor: '#fff'};
    const preProps = (
      useInlineStyles
      ?
      Object.assign({}, rest, { style: Object.assign({}, defaultPreStyle, customStyle) })
      :
      Object.assign({}, rest, { className: 'hljs'})
    );

    const { newTree } = codeTree.value.reduce(({ newTree, lastLineBreakIndex }, node, index) => {
      let shouldSlice = false;
      let newLines;
      newLines = node.type === "text" && getNewLines(node.value);
      if (newLines) {
        node.value.split('\n').forEach((text, i) => {
          if (i === 0) {
            const children = codeTree.value.slice(
              lastLineBreakIndex + 1, 
              index
            ).concat({ type: 'text', value: `${text}\n`});
            console.log(children, "children we are");
            const newElements = {
              type: 'element',
              tagName: 'span',
              properties: { className: [] },
              children
            }; 
            newTree.push(newElements);
          } else if (i === node.value.split('\n').length - 1 &&  codeTree.value[index + 1]) {
            console.log(codeTree.value[index + 1], index, codeTree.value.length, text);
            codeTree.value[index + 1].children[0].value = `${text}${codeTree.value[index + 1].children[0].value}`;
          }
          else {
            newTree.push({
              type: 'text',
              value: `${text}\n`
            });
          }
        });
        lastLineBreakIndex = index;
      } else if(node.children) {
        for (let i = 0; i < node.children.length; i++) {
          newLines = node.children[i].type === 'text' && getNewLines(node.children[i].value);
          if (newLines) {
            console.log("HI!");
            break;
          }
        }
      }
      if (newLines && lastLineBreakIndex !== index) {
        console.log("zam");
        newTree.push({
          type: 'element',
          tagName: 'span',
          properties: { className: [] },
          children: codeTree.value.slice(
            lastLineBreakIndex + 1, 
            index + 1
          )
        });
        lastLineBreakIndex = index;
      }
      return { newTree, lastLineBreakIndex };
    }, { newTree: [], lastLineBreakIndex: -1 });
    console.log(newTree);
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
          {newTree.map((node, i) => createElement({
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
