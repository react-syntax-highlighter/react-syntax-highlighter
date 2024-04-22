import createAsyncLoadingHighlighter from './async-syntax-highlighter.js';
import supportedLanguages from './languages/prism/supported-languages.js';

export default createAsyncLoadingHighlighter({
  loader: () =>
    import(
      /* webpackChunkName:"react-syntax-highlighter/refractor-import" */
      'refractor'
    ).then((module) => {
      // Webpack 3 returns module.exports as default as module, but webpack 4 returns module.exports as module.default
      return (module.default || module).refractor;
    }),
  noAsyncLoadingLanguages: true,
  supportedLanguages,
});
