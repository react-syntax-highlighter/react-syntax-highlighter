import createAsyncLoadingHighlighter from './async-syntax-highlighter';
import languageLoaders from './async-languages/hljs';

export default createAsyncLoadingHighlighter({
  loader: () => import(
    /* webpackChunkName:"react-syntax-highlighter/lowlight-import" */ 
    'lowlight/lib/core').then((module) => {
      // Webpack 3 returns module.exports as default as module, but webpack 4 returns module.exports as module.default
      return module.default || module;
    }),
  isLanguageRegistered: (instance, language) => {
    return !!instance.getLanguage(language);
  },
  languageLoaders,
  registerLanguage: (instance, name, language) => {
    return instance.registerLanguage(name, language);
  }
});