import React from 'react';
import { render } from 'react-dom';
import SyntaxHighlighter from '../dist';

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
  'darkula',
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
    const initialCodeString = `const woah = fun => fun + 1;
const dude = woah(2) + 3;
function thisIsAFunction() {
  return [1,2,3].map(n => n + 1).filter(n !== 3);
}
console.log('making up fake code is really hard');

function itIs() {
  return 'no seriously really it is';
}
  `;
    this.state = {
      selected: 'docco',
      style: require('../dist/styles/docco').default,
      code: initialCodeString
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

    const dropDown = (
      <select 
        value={this.state.selected} 
        onChange={(e) => this.setState({style: require(`../dist/styles/${e.target.value}`).default, selected: e.target.value})}
      >
        {availableStyles.map(s => <option key={s} value={s}>{s}</option>)}
      </select>
    );

    return (
      <div>
        <h1 style={h1Style}>React Syntax Highlighter</h1>
        <h2 style={h2}>Change Style</h2>
        {dropDown}
        <div style={{paddingTop: 20}}>
          <textarea 
            style={{float: 'left', marginTop: 11}} 
            rows={40} 
            cols={100} 
            value={this.state.code}
            onChange={(e) => this.setState({code: e.target.value})}
          />
          <div style={{float: 'right', width: '50%'}}>
            <SyntaxHighlighter language='javascript' style={this.state.style}>
              {this.state.code}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    );
  }
}


render(<Component />, document.getElementById('app'));

