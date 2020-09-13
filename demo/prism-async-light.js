import React from 'react';
import { render } from 'react-dom';
import SyntaxHighlighter from '../src/prism-async-light';
import prismStyles from './styles/prism';
import ExamplesLinks from './examples-links';

import clike from '../src/languages/prism/clike';
import javascript from '../src/languages/prism/javascript';
import jsx from '../src/languages/prism/jsx';
import markup from '../src/languages/prism/markup';
import markupTemplating from '../src/languages/prism/markup-templating';

SyntaxHighlighter.registerLanguage('clike', clike);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('markup', markup);
SyntaxHighlighter.registerLanguage('markup-templating', markupTemplating);

const availableStyles = prismStyles;
const availableLanguages = [
  'clike',
  'javascript',
  'jsx',
  'markup',
  'markup-templating'
];

class Component extends React.Component {
  constructor() {
    super();
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
    this.state = {
      code: initialCodeString,
      showLineNumbers: false,
      wrapLongLines: false,
      style: 'atom-dark',
      styleSrc: require('../src/styles/prism/atom-dark').default,
      language: 'jsx',
      languageSrc: require(`../src/languages/prism/jsx`).default
    };
  }

  render() {
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
                value={this.state.language}
                onChange={e =>
                  this.setState({
                    languageSrc: require(`../src/languages/prism/${
                      e.target.value
                    }`).default,
                    language: e.target.value
                  })
                }
              >
                {availableLanguages.map(l => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>

            <div className="options__option options__option--theme">
              <select
                className="select"
                value={this.state.selectedStyle}
                onChange={e =>
                  this.setState({
                    styleSrc: require(`../src/styles/prism/${e.target.value}`)
                      .default,
                    style: e.target.value
                  })
                }
              >
                {availableStyles.map(s => (
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
                  checked={this.state.showLineNumbers}
                  onChange={() =>
                    this.setState({
                      showLineNumbers: !this.state.showLineNumbers
                    })
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
                  checked={this.state.wrapLongLines}
                  onChange={() =>
                    this.setState({
                      wrapLongLines: !this.state.wrapLongLines
                    })
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
                value={this.state.code}
                onChange={e => this.setState({ code: e.target.value })}
              />
            </div>

            <SyntaxHighlighter
              style={this.state.styleSrc}
              showLineNumbers={this.state.showLineNumbers}
              wrapLines={true}
              wrapLongLines={this.state.wrapLongLines}
              lineProps={lineNumber => ({
                style: { display: 'block', cursor: 'pointer' },
                onClick() {
                  alert(`Line Number Clicked: ${lineNumber}`);
                }
              })}
              language={this.state.language}
            >
              {this.state.code}
            </SyntaxHighlighter>
          </article>
        </main>
      </div>
    );
  }
}

render(<Component />, document.getElementById('app'));
