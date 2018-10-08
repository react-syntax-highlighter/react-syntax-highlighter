import createAsyncLoadingHighlighter from './async-syntax-highlighter';

export default createAsyncLoadingHighlighter({
  supportsLanguageRegistering: true,
  loader: () => import(
    /* webpackChunkName:"react-syntax-highlighter/lowlight-import" */ 
    'lowlight/lib/core').then(({ default: lowlight }) => lowlight),
});