import React from 'react';
import highlight from './highlight';

export default (options) => {
  const supportsLanguageRegistering = !!options.supportsLanguageRegistering
  const loader = options.loader;

  class ReactAsyncHighlighter extends React.PureComponent {
    static astGenerator = null;
    static highlightInstance = (highlight(null, {}));
    static astGeneratorPromise = null;
    static languages = [];

    static preload() {
      return ReactAsyncHighlighter.loadAstGenerator();
    }

    static registerLanguage = (_, language) => {
      if (!supportsLanguageRegistering) {
        return;
      }
      
      if(ReactAsyncHighlighter.astGenerator) {
        return ReactAsyncHighlighter.astGenerator.register(language);
      } else {
        ReactAsyncHighlighter.languages.push(language);
      }
    };
    

    static loadAstGenerator() {
      ReactAsyncHighlighter.astGeneratorPromise = loader().then(astGenerator => {
        ReactAsyncHighlighter.astGenerator = astGenerator;

        if (supportsLanguageRegistering && ReactAsyncHighlighter.languages.length) {
          ReactAsyncHighlighter.languages.forEach((language) => astGenerator.register(language));
        }
      });
      
      return ReactAsyncHighlighter.astGeneratorPromise;
    }
  
    componentDidMount() {
      if (!ReactAsyncHighlighter.astGeneratorPromise) {
        ReactAsyncHighlighter.loadAstGenerator();
      }
  
      if(!ReactAsyncHighlighter.astGenerator) {
        ReactAsyncHighlighter.astGeneratorPromise.then(() => {
          this.forceUpdate();
        });
      }
    }
  
    render() {
      return (<ReactAsyncHighlighter.highlightInstance {...this.props} astGenerator={ReactAsyncHighlighter.astGenerator} />);
    }
  };

  return ReactAsyncHighlighter;
}