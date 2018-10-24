import React from 'react';
import highlight from './highlight';

export default (options) => {
  const loader = options.loader;
  const isLanguageRegistered = options.isLanguageRegistered;
  const registerLanguage = options.registerLanguage;
  const languageLoaders = options.languageLoaders;

  class ReactAsyncHighlighter extends React.PureComponent {
    static astGenerator = null;
    static highlightInstance = (highlight(null, {}));
    static astGeneratorPromise = null;
    static languages = [];

    static preload() {
      return ReactAsyncHighlighter.loadAstGenerator();
    }

    static async loadLanguage(language) {
      const languageLoader = languageLoaders[language];
      if (typeof languageLoader === 'function') {
        return languageLoader(ReactAsyncHighlighter.registerLanguage);
      } else {
        throw `Language ${language} not supported`
      }
    }
    
    static isRegistered = (language) => {
      if(!registerLanguage) {
        return true;
      }

      if (!ReactAsyncHighlighter.astGenerator) {
        // Ast generator not available yet, but language will be registered once it is.
        return ReactAsyncHighlighter.languages.findIndex(item => item.name === language) > -1;
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
    
    componentDidUpdate() {
      if(!ReactAsyncHighlighter.isRegistered(this.props.language) && languageLoaders) {
        this.loadLanguage();
      }
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
      if(!ReactAsyncHighlighter.isRegistered(this.props.language) && languageLoaders) {
        this.loadLanguage();
      }
    }

    async loadLanguage() {
      try {
        ReactAsyncHighlighter.loadLanguage(this.props.language).then(() => {
          this.forceUpdate();
        });
      } catch (error) {
        console.log(error);
      }
    }
  
    render() {
      return (<ReactAsyncHighlighter.highlightInstance {...this.props} astGenerator={ReactAsyncHighlighter.astGenerator} />);
    }
  };

  return ReactAsyncHighlighter;
}