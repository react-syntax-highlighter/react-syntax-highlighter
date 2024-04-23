import React, { useState } from 'react';
import { render } from 'react-dom';
import SyntaxHighlighter from '../src/prism-async-light.js';
import prismStyles from './styles/prism.js';
import ExamplesLinks from './examples-links.js';

import clike from '../src/languages/prism/clike.js';
import javascript from '../src/languages/prism/javascript.js';
import jsx from '../src/languages/prism/jsx.js';
import markup from '../src/languages/prism/markup.js';
import markupTemplating from '../src/languages/prism/markup-templating.js';

import prismLanguages from '../src/languages/prism/supported-languages.js';

import defaultStyleSrc from '../src/styles/prism/atom-dark.js';
import defaultLanguageSrc from '../src/languages/prism/jsx.js';

/*
SyntaxHighlighter.registerLanguage('clike', clike);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('markup', markup);
SyntaxHighlighter.registerLanguage('markup-templating', markupTemplating);
*/

const availableStyles = prismStyles;
const availableLanguages = prismLanguages;

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
  `;

const Component = (props) => {
  const [state, setState] = useState({
    code: initialCodeString,
    showLineNumbers: false,
    wrapLongLines: false,
    style: 'atom-dark',
    styleSrc: defaultStyleSrc,
    language: 'jsx',
    languageSrc: defaultLanguageSrc,
  });

  return (
    <div className="demo__root demo__root--prism-async-light">
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
              onChange={async e => {
                const {value: language} = e.target;
                const languageSrc = await import(`../src/languages/prism/${language}.js`).then(x => x?.default ?? x);
                setState(s => ({...s, languageSrc, language}));
              }}
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
              onChange={async e => {
                const {value: style} = e.target;
                const styleSrc = await import(`../src/styles/prism/${style}.js`).then(x => x?.default ?? x);
                setState(s => ({...s, styleSrc, style}));
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
                  setState(s => ({
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
                  setState(s => ({
                    ...s,
                    wrapLongLines: !s.wrapLongLines,
                  }))
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
              style={{ flex: 1, marginTop: 11 }}
              rows={40}
              value={state.code}
              onChange={e => setState(s => ({...s, code: e.target.value}))}
            />
          </div>

          <SyntaxHighlighter
            style={state.styleSrc}
            showLineNumbers={state.showLineNumbers}
            wrapLines={true}
            wrapLongLines={state.wrapLongLines}
            lineProps={(lineNumber) => ({
              style: { display: 'block', cursor: 'pointer' },
              onClick() {
                alert(`Line Number Clicked: ${lineNumber}`);
              },
            })}
            language={state.language}
          >
            {state.code}
          </SyntaxHighlighter>
        </article>
      </main>
    </div>
  );
};

render(<Component />, document.getElementById('app'));
