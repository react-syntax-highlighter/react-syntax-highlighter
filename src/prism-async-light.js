import createAsyncLoadingHighlighter from './async-syntax-highlighter';

export default createAsyncLoadingHighlighter({
  supportsLanguageRegistering: true,
  loader: () => import(
    /* webpackChunkName:"react-syntax-highlighter/refractor-core-import" */ 
    'refractor/core').then(({ default: refractor }) => refractor),
});
