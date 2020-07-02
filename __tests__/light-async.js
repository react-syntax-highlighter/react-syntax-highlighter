import React from 'react';
import renderer from 'react-test-renderer';
import languageLoaders from '../src/async-languages/prism';

// Tree-shaking doesn't work in testing and loads all the languages
import SyntaxHighlighter from '../src/light-async';
import prism from '../src/styles/prism/prism';

test('SyntaxHighlighter renders javascript highlighted text', async () => {
  await SyntaxHighlighter.preload();

  const tree = renderer.create(
    <SyntaxHighlighter language="javascript" style={prism}>
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
  );

  expect(tree.toJSON()).toMatchSnapshot();
});

test('SyntaxHighlighter render as text if language doesnt exist', () => {
  const tree = renderer.create(
    <SyntaxHighlighter language="nonexistinglanguage" style={prism}>
      {"print('hello')"}
    </SyntaxHighlighter>
  );
  expect(tree.toJSON()).toMatchSnapshot();
});

test('When the code split is loaded - SyntaxHighlighter renders jsx highlighted text', async () => {
  await SyntaxHighlighter.preload();

  const tree = renderer.create(
    <SyntaxHighlighter language="javascript" style={prism}>
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
  );

  await languageLoaders.javascript(jest.fn());
  expect(tree.toJSON()).toMatchSnapshot();
});

test('SyntaxHighlighter renders fortran highlighted text', async () => {
  await SyntaxHighlighter.preload();

  const tree = renderer.create(
    <SyntaxHighlighter language="fortran" style={prism}>
      {`
            C AREA OF A TRIANGLE WITH A STANDARD SQUARE ROOT FUNCTION
            C INPUT - TAPE READER UNIT 5, INTEGER INPUT
            C OUTPUT - LINE PRINTER UNIT 6, REAL OUTPUT
            C INPUT ERROR DISPLAY ERROR OUTPUT CODE 1 IN JOB CONTROL LISTING
                READ INPUT TAPE 5, 501, IA, IB, IC
            501 FORMAT (3I5)
            C IA, IB, AND IC MAY NOT BE NEGATIVE OR ZERO
            C FURTHERMORE, THE SUM OF TWO SIDES OF A TRIANGLE
            C MUST BE GREATER THAN THE THIRD SIDE, SO WE CHECK FOR THAT, TOO
                IF (IA) 777, 777, 701
            701 IF (IB) 777, 777, 702
            702 IF (IC) 777, 777, 703
            703 IF (IA+IB-IC) 777, 777, 704
            704 IF (IA+IC-IB) 777, 777, 705
            705 IF (IB+IC-IA) 777, 777, 799
            777 STOP 1
            C USING HERON'S FORMULA WE CALCULATE THE
            C AREA OF THE TRIANGLE
            799 S = FLOATF (IA + IB + IC) / 2.0
                AREA = SQRTF( S * (S - FLOATF(IA)) * (S - FLOATF(IB)) *
                +     (S - FLOATF(IC)))
                WRITE OUTPUT TAPE 6, 601, IA, IB, IC, AREA
            601 FORMAT (4H A= ,I5,5H  B= ,I5,5H  C= ,I5,8H  AREA= ,F10.2,
                +        13H SQUARE UNITS)
                STOP
                END
                   `}
    </SyntaxHighlighter>
  );

  await languageLoaders.fortran(jest.fn());
  expect(tree.toJSON()).toMatchSnapshot();
});

test('SyntaxHighlighter renders text while language loads', async () => {
  await SyntaxHighlighter.preload();

  const tree = renderer.create(
    <SyntaxHighlighter language="gherkin" style={prism}>
      {`
            C AREA OF A TRIANGLE WITH A STANDARD SQUARE ROOT FUNCTION
            C INPUT - TAPE READER UNIT 5, INTEGER INPUT
            C OUTPUT - LINE PRINTER UNIT 6, REAL OUTPUT
            C INPUT ERROR DISPLAY ERROR OUTPUT CODE 1 IN JOB CONTROL LISTING
                READ INPUT TAPE 5, 501, IA, IB, IC
            501 FORMAT (3I5)
            C IA, IB, AND IC MAY NOT BE NEGATIVE OR ZERO
            C FURTHERMORE, THE SUM OF TWO SIDES OF A TRIANGLE
            C MUST BE GREATER THAN THE THIRD SIDE, SO WE CHECK FOR THAT, TOO
                IF (IA) 777, 777, 701
            701 IF (IB) 777, 777, 702
            702 IF (IC) 777, 777, 703
            703 IF (IA+IB-IC) 777, 777, 704
            704 IF (IA+IC-IB) 777, 777, 705
            705 IF (IB+IC-IA) 777, 777, 799
            777 STOP 1
            C USING HERON'S FORMULA WE CALCULATE THE
            C AREA OF THE TRIANGLE
            799 S = FLOATF (IA + IB + IC) / 2.0
                AREA = SQRTF( S * (S - FLOATF(IA)) * (S - FLOATF(IB)) *
                +     (S - FLOATF(IC)))
                WRITE OUTPUT TAPE 6, 601, IA, IB, IC, AREA
            601 FORMAT (4H A= ,I5,5H  B= ,I5,5H  C= ,I5,8H  AREA= ,F10.2,
                +        13H SQUARE UNITS)
                STOP
                END
                   `}
    </SyntaxHighlighter>
  );

  expect(tree.toJSON()).toMatchSnapshot();
});
