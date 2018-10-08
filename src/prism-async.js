import createAsyncLoadingHighlighter from './async-syntax-highlighter';

export default createAsyncLoadingHighlighter({
  loader: () => import(
    /* webpackChunkName:"react-syntax-highlighter/refractor-import" */ 
    'refractor').then(({ default: refractor }) => refractor),
});