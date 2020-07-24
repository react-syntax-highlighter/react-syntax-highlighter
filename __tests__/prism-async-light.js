import React from 'react';
import renderer from 'react-test-renderer';

// Tree-shaking doesn't work in testing and loads all the languages
import SyntaxHighlighter from '../src/prism-async-light';
import prism from '../src/styles/prism/prism';
import languageLoaders from '../src/async-languages/prism';

test('SyntaxHighlighter renders jsx highlighted text', () => {
  const tree = renderer
    .create(
      <SyntaxHighlighter language="jsx" style={prism}>
        {`import React from "react";
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
}`}
      </SyntaxHighlighter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('SyntaxHighlighter should just render text if syntax is not registered', () => {
  const tree = renderer
    .create(
      <SyntaxHighlighter language="nonExistingLanguage" style={prism}>
        {"print('hello')"}
      </SyntaxHighlighter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('When the code split is loaded - SyntaxHighlighter renders python highlighted text after async loading python', async () => {
  await SyntaxHighlighter.preload();

  const tree = renderer.create(
    <SyntaxHighlighter language="python" style={prism}>
      {`
             # Import the modules
import sys
import random

ans = True

while ans:
    question = raw_input("Ask the magic 8 ball a question: (press enter to quit) ")

    answers = random.randint(1,8)

    if question == "":
        sys.exit()

    elif answers == 1:
        print "It is certain"

    elif answers == 2:
        print "Outlook good"

    elif answers == 3:
        print "You may rely on it"

    elif answers == 4:
        print "Ask again later"

    elif answers == 5:
        print "Concentrate and ask again"

    elif answers == 6:
        print "Reply hazy, try again"

    elif answers == 7:
        print "My reply is no"

    elif answers == 8:
        print "My sources say no"
             `}
    </SyntaxHighlighter>
  );

  await languageLoaders.python(jest.fn());

  expect(tree.toJSON()).toMatchSnapshot();
});
