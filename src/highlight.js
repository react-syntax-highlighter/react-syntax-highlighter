import React from 'react';
import createElement from './create-element';
import checkForListedLanguage from './checkForListedLanguage';

const newLineRegex = /\n/g;
function getNewLines(str) {
  return str.match(newLineRegex);
}

function defaultLineNumberRenderer({ number, style, showInlineLineNumbers }) {
  return (
    <span
      key={`line-${number}`}
      className={
        showInlineLineNumbers
          ? 'comment linenumber react-syntax-highlighter-line-number'
          : 'react-syntax-highlighter-line-number'
      }
      style={style}
    >
      {showInlineLineNumbers ? `${number}` : `${number}\n`}
    </span>
  );
}

function getAllLineNumbers({ lines, startingLineNumber, style, renderer }) {
  return lines.map((_, i) => {
    const number = i + startingLineNumber;
    const lineNumberRenderer = renderer || defaultLineNumberRenderer;
    return lineNumberRenderer({
      number,
      style: typeof style === 'function' ? style(number) : style,
      showInlineLineNumbers: false
    });
  });
}

function AllLineNumbers({
  codeString,
  codeStyle,
  containerStyle = { float: 'left', paddingRight: '10px' },
  numberStyle = {},
  startingLineNumber,
  renderer
}) {
  return (
    <code style={Object.assign({}, codeStyle, containerStyle)}>
      {getAllLineNumbers({
        lines: codeString.replace(/\n$/, '').split('\n'),
        style: numberStyle,
        startingLineNumber,
        renderer
      })}
    </code>
  );
}

function getEmWidthOfNumber(num) {
  return `${num.toString().length}.25em`;
}

function getInlineLineNumber(lineNumber, inlineLineNumberStyle, renderer) {
  const lineNumberRenderer = renderer || defaultLineNumberRenderer;
  return lineNumberRenderer({
    number: lineNumber,
    style: inlineLineNumberStyle,
    showInlineLineNumbers: true
  });
}

function assembleLineNumberStyles(
  lineNumberStyle,
  lineNumber,
  largestLineNumber
) {
  // minimally necessary styling for line numbers
  const defaultLineNumberStyle = {
    display: 'inline-block',
    minWidth: getEmWidthOfNumber(largestLineNumber),
    paddingRight: '1em',
    textAlign: 'right',
    userSelect: 'none'
  };
  // prep custom styling
  const customLineNumberStyle =
    typeof lineNumberStyle === 'function'
      ? lineNumberStyle(lineNumber)
      : lineNumberStyle;
  // combine
  const assembledStyle = {
    ...defaultLineNumberStyle,
    ...customLineNumberStyle
  };
  return assembledStyle;
}

function createLineElement({
  children,
  lineNumber,
  lineNumberStyle,
  largestLineNumber,
  showInlineLineNumbers,
  lineProps = {},
  className = [],
  showLineNumbers,
  wrapLongLines,
  lineNumberRenderer
}) {
  const properties =
    typeof lineProps === 'function' ? lineProps(lineNumber) : lineProps;
  properties['className'] = className;

  if (lineNumber && showInlineLineNumbers) {
    const inlineLineNumberStyle = assembleLineNumberStyles(
      lineNumberStyle,
      lineNumber,
      largestLineNumber
    );
    children.unshift(
      getInlineLineNumber(lineNumber, inlineLineNumberStyle, lineNumberRenderer)
    );
  }

  if (wrapLongLines & showLineNumbers) {
    properties.style = { ...properties.style, display: 'flex' };
  }

  return {
    type: 'element',
    tagName: 'span',
    properties,
    children
  };
}

function flattenCodeTree(
  tree,
  className = [],
  newTree = [],
  lineNumberRenderer
) {
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.type === 'text') {
      newTree.push(
        createLineElement({
          children: [node],
          className: [...new Set(className)],
          lineNumberRenderer
        })
      );
    } else if (node.children) {
      const classNames = className.concat(node.properties.className);
      newTree = newTree.concat(
        flattenCodeTree(node.children, classNames, [], lineNumberRenderer)
      );
    }
  }
  return newTree;
}

function processLines(
  codeTree,
  wrapLines,
  lineProps,
  showLineNumbers,
  showInlineLineNumbers,
  startingLineNumber,
  largestLineNumber,
  lineNumberStyle,
  wrapLongLines,
  lineNumberRenderer
) {
  const tree = flattenCodeTree(codeTree.value);
  const newTree = [];
  let lastLineBreakIndex = -1;
  let index = 0;

  function createWrappedLine(children, lineNumber, className = []) {
    return createLineElement({
      children,
      lineNumber,
      lineNumberStyle,
      largestLineNumber,
      showInlineLineNumbers,
      lineProps,
      className,
      showLineNumbers,
      wrapLongLines,
      lineNumberRenderer
    });
  }

  function createUnwrappedLine(children, lineNumber) {
    if (showLineNumbers && lineNumber && showInlineLineNumbers) {
      const inlineLineNumberStyle = assembleLineNumberStyles(
        lineNumberStyle,
        lineNumber,
        largestLineNumber
      );
      children.unshift(
        getInlineLineNumber(
          lineNumber,
          inlineLineNumberStyle,
          lineNumberRenderer
        )
      );
    }
    return children;
  }

  function createLine(children, lineNumber, className = []) {
    return wrapLines || className.length > 0
      ? createWrappedLine(children, lineNumber, className)
      : createUnwrappedLine(children, lineNumber);
  }

  while (index < tree.length) {
    const node = tree[index];
    const value = node.children[0].value;
    const newLines = getNewLines(value);

    if (newLines) {
      const splitValue = value.split('\n');
      splitValue.forEach((text, i) => {
        const lineNumber =
          showLineNumbers && newTree.length + startingLineNumber;
        const newChild = { type: 'text', value: `${text}\n` };

        // if it's the first line
        if (i === 0) {
          const children = tree.slice(lastLineBreakIndex + 1, index).concat(
            createLineElement({
              children: [newChild],
              className: node.properties.className,
              lineNumberRenderer
            })
          );

          const line = createLine(children, lineNumber);
          newTree.push(line);

          // if it's the last line
        } else if (i === splitValue.length - 1) {
          const stringChild =
            tree[index + 1] &&
            tree[index + 1].children &&
            tree[index + 1].children[0];
          if (stringChild) {
            const lastLineInPreviousSpan = { type: 'text', value: `${text}` };
            const newElem = createLineElement({
              children: [lastLineInPreviousSpan],
              className: node.properties.className,
              lineNumberRenderer
            });
            tree.splice(index + 1, 0, newElem);
          } else {
            const children = [newChild];
            const line = createLine(
              children,
              lineNumber,
              node.properties.className
            );
            newTree.push(line);
          }

          // if it's neither the first nor the last line
        } else {
          const children = [newChild];
          const line = createLine(
            children,
            lineNumber,
            node.properties.className
          );
          newTree.push(line);
        }
      });
      lastLineBreakIndex = index;
    }
    index++;
  }

  if (lastLineBreakIndex !== tree.length - 1) {
    const children = tree.slice(lastLineBreakIndex + 1, tree.length);
    if (children && children.length) {
      const lineNumber = showLineNumbers && newTree.length + startingLineNumber;
      const line = createLine(children, lineNumber);
      newTree.push(line);
    }
  }

  return wrapLines ? newTree : [].concat(...newTree);
}

function defaultRenderer({ rows, stylesheet, useInlineStyles }) {
  return rows.map((node, i) =>
    createElement({
      node,
      stylesheet,
      useInlineStyles,
      key: `code-segement${i}`
    })
  );
}

// only highlight.js has the highlightAuto method
function isHighlightJs(astGenerator) {
  return astGenerator && typeof astGenerator.highlightAuto !== 'undefined';
}

function getCodeTree({ astGenerator, language, code, defaultCodeValue }) {
  // figure out whether we're using lowlight/highlight or refractor/prism
  // then attempt highlighting accordingly

  // lowlight/highlight?
  if (isHighlightJs(astGenerator)) {
    const hasLanguage = checkForListedLanguage(astGenerator, language);
    if (language === 'text') {
      return { value: defaultCodeValue, language: 'text' };
    } else if (hasLanguage) {
      return astGenerator.highlight(language, code);
    } else {
      return astGenerator.highlightAuto(code);
    }
  }

  // must be refractor/prism, then
  try {
    return language && language !== 'text'
      ? { value: astGenerator.highlight(code, language) }
      : { value: defaultCodeValue };
  } catch (e) {
    return { value: defaultCodeValue };
  }
}

export default function(defaultAstGenerator, defaultStyle) {
  return function SyntaxHighlighter({
    language,
    children,
    style = defaultStyle,
    customStyle = {},
    codeTagProps = {
      className: language ? `language-${language}` : undefined,
      style: {
        ...style['code[class*="language-"]'],
        ...style[`code[class*="language-${language}"]`]
      }
    },
    useInlineStyles = true,
    showLineNumbers = false,
    showInlineLineNumbers = true,
    startingLineNumber = 1,
    lineNumberContainerStyle,
    lineNumberStyle = {},
    lineNumberRenderer = defaultLineNumberRenderer,
    wrapLines,
    wrapLongLines = false,
    lineProps = {},
    renderer,
    PreTag = 'pre',
    CodeTag = 'code',
    code = Array.isArray(children) ? children[0] : children,
    astGenerator,
    ...rest
  }) {
    astGenerator = astGenerator || defaultAstGenerator;

    const allLineNumbers = showLineNumbers ? (
      <AllLineNumbers
        containerStyle={lineNumberContainerStyle}
        codeStyle={codeTagProps.style || {}}
        numberStyle={lineNumberStyle}
        startingLineNumber={startingLineNumber}
        codeString={code}
        renderer={lineNumberRenderer}
      />
    ) : null;

    const defaultPreStyle = style.hljs ||
      style['pre[class*="language-"]'] || { backgroundColor: '#fff' };
    const generatorClassName = isHighlightJs(astGenerator) ? 'hljs' : 'prismjs';
    const preProps = useInlineStyles
      ? Object.assign({}, rest, {
          style: Object.assign({}, defaultPreStyle, customStyle)
        })
      : Object.assign({}, rest, {
          className: rest.className
            ? `${generatorClassName} ${rest.className}`
            : generatorClassName,
          style: Object.assign({}, customStyle)
        });

    if (!astGenerator) {
      return (
        <PreTag {...preProps}>
          {allLineNumbers}
          <CodeTag {...codeTagProps}>{code}</CodeTag>
        </PreTag>
      );
    }

    /*
     * Some custom renderers rely on individual row elements so we need to turn wrapLines on
     * if renderer is provided and wrapLines is undefined.
     */
    if ((wrapLines === undefined && renderer) || wrapLongLines)
      wrapLines = true;

    renderer = renderer || defaultRenderer;
    const defaultCodeValue = [{ type: 'text', value: code }];
    const codeTree = getCodeTree({
      astGenerator,
      language,
      code,
      defaultCodeValue
    });
    if (codeTree.language === null) {
      codeTree.value = defaultCodeValue;
    }

    // determine largest line number so that we can force minWidth on all linenumber elements
    const largestLineNumber = codeTree.value.length + startingLineNumber;

    const rows = processLines(
      codeTree,
      wrapLines,
      lineProps,
      showLineNumbers,
      showInlineLineNumbers,
      startingLineNumber,
      largestLineNumber,
      lineNumberStyle,
      wrapLongLines,
      lineNumberRenderer
    );

    if (wrapLongLines) {
      codeTagProps.style = { ...codeTagProps.style, whiteSpace: 'pre-wrap' };
    } else {
      codeTagProps.style = { ...codeTagProps.style, whiteSpace: 'pre' };
    }

    return (
      <PreTag {...preProps}>
        <CodeTag {...codeTagProps}>
          {!showInlineLineNumbers && allLineNumbers}
          {renderer({ rows, stylesheet: style, useInlineStyles })}
        </CodeTag>
      </PreTag>
    );
  };
}
