import createAsyncLoadingHighlighter from './async-syntax-highlighter';
import languageLoaders from './async-languages/prism';

export default createAsyncLoadingHighlighter({
  loader: () =>
    import(
      /* webpackChunkName:"react-syntax-highlighter/refractor-core-import" */
      'refractor/core'
    ).then(module => {
      return module.refractor;
    }),
  isLanguageRegistered: (instance, language) => {
    return instance.registered(language);
  },
  languageLoaders,
  registerLanguage: (instance, name, language) => {
    return instance.register(language);
  }
});
