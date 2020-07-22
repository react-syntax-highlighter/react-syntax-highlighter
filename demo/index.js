import React from 'react';
import { render } from 'react-dom';
import SyntaxHighlighter from '../src/index';
import ExamplesLinks from './examples-links';

const availableStyles = [
  'agate',
  'androidstudio',
  'arduino-light',
  'arta',
  'ascetic',
  'atelier-cave-dark',
  'atelier-cave-light',
  'atelier-dune-dark',
  'atelier-dune-light',
  'atelier-estuary-dark',
  'atelier-estuary-light',
  'atelier-forest-dark',
  'atelier-forest-light',
  'atelier-heath-dark',
  'atelier-heath-light',
  'atelier-lakeside-dark',
  'atelier-lakeside-light',
  'atelier-plateau-dark',
  'atelier-plateau-light',
  'atelier-savanna-dark',
  'atelier-savanna-light',
  'atelier-seaside-dark',
  'atelier-seaside-light',
  'atelier-sulphurpool-dark',
  'atelier-sulphurpool-light',
  'brown-paper',
  'codepen-embed',
  'color-brewer',
  'dark',
  'darcula',
  'defaultStyle',
  'docco',
  'far',
  'foundation',
  'github-gist',
  'github',
  'googlecode',
  'grayscale',
  'hopscotch',
  'hybrid',
  'idea',
  'ir-black',
  'kimbie.dark',
  'kimbie.light',
  'magula',
  'mono-blue',
  'monokai-sublime',
  'monokai',
  'obsidian',
  'paraiso-dark',
  'paraiso-light',
  'pojoaque',
  'railscasts',
  'rainbow',
  'school-book',
  'solarized-dark',
  'solarized-light',
  'sunburst',
  'tomorrow-night-blue',
  'tomorrow-night-bright',
  'tomorrow-night-eighties',
  'tomorrow-night',
  'tomorrow',
  'vs',
  'xcode',
  'xt256',
  'zenburn'
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
      language: 'javascript',
      selected: 'atelier-dune-dark',
      style: require('../src/styles/hljs/atelier-dune-dark').default,
      code: initialCodeString,
      showLineNumbers: false
    };
  }
  render() {
    return (
      <main>
        <h1>React Syntax Highlighter Demo</h1>

        <ExamplesLinks />

        <section>
          <aside className="options__container">
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

            <div className="options__option options__option--theme">
              <select
                className="select"
                value={this.state.selected}
                onChange={e =>
                  this.setState({
                    style: require(`../src/styles/hljs/${e.target.value}`)
                      .default,
                    selected: e.target.value
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
          </aside>

          <div className="example-container">
            <textarea
              style={{ flex: 1, marginTop: 11 }}
              rows={40}
              cols={100}
              value={this.state.code}
              onChange={e => this.setState({ code: e.target.value })}
            />
            <div style={{ flex: 1, width: '50%' }}>
              <SyntaxHighlighter
                language={this.state.language}
                style={this.state.style}
                showLineNumbers={this.state.showLineNumbers}
                wrapLines={true}
                lineProps={lineNumber => ({
                  style: { display: 'block', cursor: 'pointer' },
                  onClick() {
                    alert(`Line Number Clicked: ${lineNumber}`);
                  }
                })}
              >
                {this.state.code}
              </SyntaxHighlighter>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

render(<Component />, document.getElementById('app'));
