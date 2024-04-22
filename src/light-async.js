import createAsyncLoadingHighlighter from './async-syntax-highlighter.js';
import languageLoaders from './async-languages/hljs.js';
import checkForListedLanguage from './checkForListedLanguage.js';

export default createAsyncLoadingHighlighter({
  loader: () =>
    import(
      /* webpackChunkName:"react-syntax-highlighter/lowlight-import" */
      'lowlight'
    ).then((module) => {
      // Webpack 3 returns module.exports as default as module, but webpack 4 returns module.exports as module.default
      return (module.default || module).createLowlight();
    }),
  isLanguageRegistered: (instance, language) => {
    return !!checkForListedLanguage(instance, language);
  },
  languageLoaders,
  registerLanguage: (instance, name, language) => {
    return instance.registerLanguage(name, language);
  },
});
