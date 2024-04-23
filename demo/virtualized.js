import React, { useState } from 'react';
import { render } from 'react-dom';
import SyntaxHighlighter from '../src/index.js';
import virtualizedRendererImpl from 'react-syntax-highlighter-virtualized-renderer';
import ExamplesLinks from './examples-links.js';
import hljsStyles from './styles/hljs.js';

const availableStyles = hljsStyles;

const {default: virtualizedRenderer} = virtualizedRendererImpl;

const initialCodeString = `function createStyleObject(classNames, style) {
  return classNames.reduce((styleObject, className) => {
    return {...styleObject, ...style[className]};
  }, {});
}

function createClassNameString(classNames) {
  return classNames.join(' ');
}

// this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully

function createChildren(style, useInlineStyles) {
  let childrenCount = 0;
  return children => {
    childrenCount += 1;
    return children.map((child, i) => createElement({
      node: child,
      style,
      useInlineStyles,
      key:\`code-segment-$\{childrenCount}-$\{i}\`
    }));
  }
}

function createElement({ node, style, useInlineStyles, key }) {
  const { properties, type, tagName, value } = node;
  if (type === "text") {
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

`.repeat(50);

const defaultStyle = await import(`../src/styles/hljs/${availableStyles[0]}.js`);

const Component = (props) => {
  const [state, setState] = useState({
    selectedStyle: availableStyles[0],
    style: defaultStyle,
    code: initialCodeString,
    showLineNumbers: false,
  });

  return (
    <div className="demo__root demo__root--virtualized">
      <header>
        <h1>React Syntax Highlighter Demo</h1>
        <ExamplesLinks />
      </header>

      <main>
        <aside className="options__container">
          <div className="options__option options__option--theme">
            <select
              className="select"
              value={state.selectedStyle}
              onChange={async e => {
                const {value: selectedStyle} = e.target;
                const style = await import(`../src/styles/hljs/${selectedStyle}.js`).then(x => x?.default ?? x);
                setState(s => ({...s, style, selectedStyle}));
              }}
            >
              {availableStyles.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="options__option options__option--line-numbers">
            <label htmlFor="showLineNumbers" className="option__label">
              <input
                type="checkbox"
                className="option__checkbox"
                checked={state.showLineNumbers}
                onChange={() => setState(s => ({...s, showLineNumbers: !s.showLineNumbers}))}
                id="showLineNumbers"
              />

              <span className="label__text">Show line numbers</span>
            </label>
          </div>
        </aside>

        <article className="example__container">
          <SyntaxHighlighter
            language="javascript"
            style={state.style}
            showLineNumbers={state.showLineNumbers}
            showInlineLineNumbers={true}
            renderer={virtualizedRenderer({
              rowHeight: 20,
            })}
          >
            {state.code}
          </SyntaxHighlighter>
        </article>
      </main>
    </div>
  );
};

render(<Component />, document.getElementById('app'));
