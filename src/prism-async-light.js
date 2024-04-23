import createAsyncLoadingHighlighter from './async-syntax-highlighter.js';
import languageLoaders from './async-languages/prism.js';

export default createAsyncLoadingHighlighter({
  loader: () =>
    import(
      /* webpackChunkName:"react-syntax-highlighter/refractor-core-import" */
      'refractor/lib/core.js'
    ).then((module) => {
      // Webpack 3 returns module.exports as default as module, but webpack 4 returns module.exports as module.default
      return (module.default || module).refractor;
    }),
  isLanguageRegistered: (instance, language) => {
    return instance.registered(language);
  },
  languageLoaders,
  registerLanguage: (instance, name, language) => {
    return instance.register(language);
  },
});
