import React from 'react';
import highlight from './highlight';

export default (options) => {
  const loader = options.loader;
  const isLanguageRegistered = options.isLanguageRegistered;
  const registerLanguage = options.registerLanguage;

  class ReactAsyncHighlighter extends React.PureComponent {
    static astGenerator = null;
    static highlightInstance = (highlight(null, {}));
    static astGeneratorPromise = null;
    static languages = [];

    static preload() {
      return ReactAsyncHighlighter.loadAstGenerator();
    }
    
    static isRegistered = (language) => {
      if(!registerLanguage) {
        return true;
      }

      if (!ReactAsyncHighlighter.astGenerator) {
        // Ast generator not available yet, but language will be registered once it is.
        return ReactAsyncHighlighter.languages.includes(item => item.name === language);
      }

      return isLanguageRegistered(ReactAsyncHighlighter.astGenerator, language);
    }

    static registerLanguage = (name, language) => {
      if (!registerLanguage) {
        return;
      }
      
      if(ReactAsyncHighlighter.astGenerator) {
        return registerLanguage(ReactAsyncHighlighter.astGenerator, name, language);
      } else {
        ReactAsyncHighlighter.languages.push({
          name,
          language
        });
      }
    };
    

    static loadAstGenerator() {
      ReactAsyncHighlighter.astGeneratorPromise = loader().then(astGenerator => {
        ReactAsyncHighlighter.astGenerator = astGenerator;

        if (registerLanguage && ReactAsyncHighlighter.languages.length) {
          ReactAsyncHighlighter.languages.forEach(({ name, language }) => registerLanguage(astGenerator, name, language));
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