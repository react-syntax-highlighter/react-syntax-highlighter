import React from 'react';
import highlight from './highlight';

const languages = [];
export const registerLanguage = (_, language) => languages.push(language);

export default class ReactHighlightAsync extends React.PureComponent {
  static refractor = null;
  static highlightInstance = null;

  state = {
    refractor: ReactHighlightAsync.refractor
  };

  componentWillMount() {
    if (!ReactHighlightAsync.highlightInstance) {
      const refractorPromise = import(/* webpackChunkName:"react-syntax-highlighter/refractor-import" */ 'refractor/core').then(({ default: refractor }) => {
        languages.forEach((language) => refractor.register(language));
        this.setState({ refractor })
      });
      ReactHighlightAsync.highlightInstance = (highlight(null, {}));
    }
  }
  render() {
    return (<ReactHighlightAsync.highlightInstance {...this.props} astGenerator={this.state.refractor} />);
  }
};
