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
  return class SyntaxHighlighter extends React.Component {
    componentDidMount() {
      this.props.componentDidMount && this.props.call(this);
    }

    componentWillReceiveProps() {
      this.props.componentWillReceiveProps && this.props.componentWillReceiveProps.call(this, ...arguments);
    }

    shouldComponentUpdate() {
      return (
        this.props.shouldComponentUpdate 
        ? 
        this.props.shouldComponentUpdate.call(this, ...arguments)
        :
        true
      );
    }

    componentWillUpdate() {
      this.props.componentWillUpdate && this.props.componentWillUpdate.call(this, ...arguments);
    }

    componentDidUpdate() {
      this.props.componentDidUpdate && this.props.componentDidUpdate.call(this, ...arguments);
    }

    render() {
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
      } = this.props;
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
}
