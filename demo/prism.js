import React from 'react';
import { render } from 'react-dom';
import SyntaxHighlighter from '../src/prism';
import * as styles from "../styles/prism";

const availableStyles = Object.keys(styles);

class Component extends React.Component {
  constructor() {
    super();
    const initialCodeString = `import React from "react";
import uniquePropHOC from "./lib/unique-prop-hoc";

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

export default uniquePropHOC(["time", "seconds"])(Expire);`;
    this.state = {
      selected: 'atomDark',
      style: styles.atomDark,
      code: initialCodeString,
      showLineNumbers: false
    }
  }
  render() {
    const h1Style = {
      fontSize: 42,
      color: 'aliceblue'
    };
    const h2 = {
      fontSize: 24,
      color: 'aliceblue'
    }

    return (
      <div>
        <h1 style={h1Style}>React Syntax Highlighter</h1>
        <h2 style={h2}>Change Style</h2>
        <select 
          value={this.state.selected} 
          onChange={(e) => this.setState({style: styles[e.target.value], selected: e.target.value })}
        >
          {availableStyles.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <div style={{paddingTop: 20, display: 'flex'}}>
          <textarea 
            style={{marginTop: 11}}
            rows={40} 
            cols={100} 
            value={this.state.code}
            onChange={(e) => this.setState({code: e.target.value})}
          />
          <div style={{flex: 1, width: '50%'}}>
            <SyntaxHighlighter 
              style={this.state.style} 
              showLineNumbers={this.state.showLineNumbers}
              language="jsx"
            >
              {this.state.code}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}


render(<Component />, document.getElementById('app'));
