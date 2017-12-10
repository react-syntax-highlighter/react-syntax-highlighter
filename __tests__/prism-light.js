import React from 'react';
import renderer from 'react-test-renderer';
import SyntaxHighlighter,  { registerLanguage } from "../src/prism-light.js";
import jsx from '../src/languages/prism/jsx';
import prism from "../src/styles/prism/prism";

registerLanguage('jsx', jsx);

test('SyntaxHighlighter renders jsx highlighted text', () => {
  const tree = renderer.create(
   <SyntaxHighlighter language="jsx" style={prism}> 
       {
       	`import React from "react";
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
}`
       }
    </SyntaxHighlighter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});


test('SyntaxHighlighter should just render text if syntax is not registered', () => {
  const tree = renderer.create(
   <SyntaxHighlighter language="python" style={prism}> 
       {
       		"print('hello')"
       }
    </SyntaxHighlighter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});