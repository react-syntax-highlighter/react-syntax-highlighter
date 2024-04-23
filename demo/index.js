import React, { useState } from 'react';
import { render } from 'react-dom';
import SyntaxHighlighter from '../src/index.js';
import ExamplesLinks from './examples-links.js';
import hljsStyles from './styles/hljs.js';
import hljsLanguages from '../src/languages/hljs/supported-languages.js';

const availableStyles = hljsStyles;
const availableLanguages = hljsLanguages;

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
      ? { style: createStyleObject(properties.className, style) }
      : { className: createClassNameString(properties.className) }
    );
    const children = childrenCreator(node.children);
    return <TagName key={key} {...props}>{children}</TagName>;
  }
}
`;

const defaultStyle = await import(
  `../src/styles/hljs/${availableStyles[0]}.js`
).then((x) => x?.default ?? x);

const Component = (props) => {
  const [state, setState] = useState({
    language: 'javascript',
    selectedStyle: availableStyles[0],
    style: defaultStyle,
    code: initialCodeString,
    showLineNumbers: false,
    wrapLongLines: false,
  });

  return (
    <div className="demo__root demo__root--default">
      <header>
        <h1>React Syntax Highlighter Demo</h1>
        <ExamplesLinks />
      </header>

      <main>
        <aside className="options__container">
          <div className="options__option options__option--language">
            <select
              className="select"
              value={state.language}
              onChange={(e) =>
                setState((s) => ({ ...s, language: e.target.value }))
              }
            >
              {availableLanguages.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>

          <div className="options__option options__option--theme">
            <select
              className="select"
              value={state.selectedStyle}
              onChange={async (e) => {
                const { value: selectedStyle } = e.target;
                const style = await import(
                  `../src/styles/hljs/${selectedStyle}.js`
                ).then((x) => x?.default ?? x);
                setState((s) => ({ ...s, style, selectedStyle }));
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
                onChange={() =>
                  setState((s) => ({
                    ...s,
                    showLineNumbers: !s.showLineNumbers,
                  }))
                }
                id="showLineNumbers"
              />

              <span className="label__text">Show line numbers</span>
            </label>
          </div>

          <div className="options__option options__option--wrap-long-lines">
            <label htmlFor="wrapLongLines" className="option__label">
              <input
                type="checkbox"
                className="option__checkbox"
                checked={state.wrapLongLines}
                onChange={() =>
                  setState((s) => ({ ...s, wrapLongLines: !s.wrapLongLines }))
                }
                id="wrapLongLines"
              />

              <span className="label__text">Wrap long lines</span>
            </label>
          </div>
        </aside>

        <article className="example__container">
          <div className="textarea__wrapper">
            <textarea
              rows={40}
              value={state.code}
              onChange={(e) =>
                setState((s) => ({ ...s, code: e.target.value }))
              }
            />
          </div>

          <SyntaxHighlighter
            language={state.language}
            style={state.style}
            showLineNumbers={state.showLineNumbers}
            wrapLongLines={state.wrapLongLines}
            wrapLines={true}
            lineProps={(lineNumber) => ({
              style: { display: 'block', cursor: 'pointer' },
              onClick() {
                alert(`Line Number Clicked: ${lineNumber}`);
              },
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
