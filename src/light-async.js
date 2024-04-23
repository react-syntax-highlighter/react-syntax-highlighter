import createAsyncLoadingHighlighter from './async-syntax-highlighter.js';
import languageLoaders from './async-languages/hljs.js';
import checkForListedLanguage from './checkForListedLanguage.js';

export default createAsyncLoadingHighlighter({
  loader: () => import(
    /* webpackChunkName:"react-syntax-highlighter/lowlight-import" */
    'lowlight'
  ).then(module => module.createLowlight(module.common)),
  isLanguageRegistered: (instance, language) => {
    return !!checkForListedLanguage(instance, language);
  },
  languageLoaders,
  registerLanguage: (instance, name, language) => {
    return instance.register(name, language);
  },
});
