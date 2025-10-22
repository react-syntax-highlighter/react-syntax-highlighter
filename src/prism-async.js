import createAsyncLoadingHighlighter from './async-syntax-highlighter';
import supportedLanguages from './languages/prism/supported-languages';

export default createAsyncLoadingHighlighter({
  loader: () =>
    import(
      /* webpackChunkName:"react-syntax-highlighter/refractor-import" */
      'refractor/all' // Import all languages from refractor
    ).then(module => {
      return module.refractor;
    }),
  noAsyncLoadingLanguages: true,
  supportedLanguages
});
