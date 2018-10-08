import React from 'react';
import highlight from './highlight';

const languages = [];

export const registerLanguage = (_, language) => {
  if(ReactHighlightAsync.refractor) {
    return refractor.register(language);
  } else {
    languages.push(language);
  }
};

export default class ReactHighlightAsync extends React.PureComponent {
  static refractor = null;
  static highlightInstance = (highlight(null, {}));
  static refractorPromise = null;
  
  static _loadRefractor() {
    ReactHighlightAsync.refractorPromise = import(/* webpackChunkName:"react-syntax-highlighter/refractor-import" */ 'refractor/core').then(({ default: refractor }) => {
      languages.forEach((language) => refractor.register(language));
      ReactHighlightAsync.refractor = refractor;
    });
    
    return ReactHighlightAsync.refractorPromise;
  }

  componentDidMount() {
    if (!ReactHighlightAsync.refractorPromise) {
      ReactHighlightAsync._loadRefractor();
    }

    if(!ReactHighlightAsync.refractor) {
      ReactHighlightAsync.refractorPromise.then(() => {
        this.forceUpdate();
      });
    }
  }

  render() {
    return (<ReactHighlightAsync.highlightInstance {...this.props} astGenerator={ReactHighlightAsync.refractor} />);
  }
};
