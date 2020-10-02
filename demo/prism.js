import React from 'react';
import { render } from 'react-dom';
import SyntaxHighlighter from '../src/prism';
import ExamplesLinks from './examples-links';
import prismStyles from './styles/prism';
import prismLanguages from '../src/languages/prism/supported-languages';

const availableStyles = prismStyles;
const availableLanguages = prismLanguages;

class Component extends React.Component {
  constructor() {
    super();
    const initialCodeString = `import React from "react";
import uniquePropHOC from "./lib/unique-prop-hoc";

// this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully

class Expire extends React.Component {
    constructor(props) {
        super(props);
        this.state = { component: props.children }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                component: null
            });
        }, this.props.time || this.props.seconds * 1000);
    }
    render() {
        return this.state.component;
    }
}

export default uniquePropHOC(["time", "seconds"])(Expire);
`;


    this.state = {
      language: 'javascript',
      selectedStyle: availableStyles[0],
      style: require(`../src/styles/prism/${availableStyles[0]}`).default,
      code: initialCodeString,
      showLineNumbers: false,
      wrapLongLines: false
    };
  }
  render() {
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
                value={this.state.language}
                onChange={e => this.setState({ language: e.target.value })}
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
                    style: require(`../src/styles/prism/${e.target.value}`)
                      .default,
                    selectedStyle: e.target.value
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
                style={{ marginTop: 11 }}
                rows={40}
                value={this.state.code}
                onChange={e => this.setState({ code: e.target.value })}
              />
            </div>

            <SyntaxHighlighter
              style={this.state.style}
              showLineNumbers={this.state.showLineNumbers}
              wrapLongLines={this.state.wrapLongLines}
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
