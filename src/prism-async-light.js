import createAsyncLoadingHighlighter from './async-syntax-highlighter';

export default createAsyncLoadingHighlighter({
  supportsLanguageRegistering: true,
  loader: () => import(
    /* webpackChunkName:"react-syntax-highlighter/refractor-core-import" */ 
    'refractor/core').then(({ default: refractor }) => refractor),
});

// export default class ReactHighlightAsync extends React.PureComponent {
//   static refractor = null;
//   static highlightInstance = (highlight(null, {}));
//   static refractorPromise = null;
  
//   static loadRefractor() {
//     ReactHighlightAsync.refractorPromise = import(/* webpackChunkName:"react-syntax-highlighter/refractor-import" */ 'refractor/core').then(({ default: refractor }) => {
//       languages.forEach((language) => refractor.register(language));
//       ReactHighlightAsync.refractor = refractor;
//     });
    
//     return ReactHighlightAsync.refractorPromise;
//   }

//   componentDidMount() {
//     if (!ReactHighlightAsync.refractorPromise) {
//       ReactHighlightAsync.loadRefractor();
//     }

//     if(!ReactHighlightAsync.refractor) {
//       ReactHighlightAsync.refractorPromise.then(() => {
//         this.forceUpdate();
//       });
//     }
//   }

//   render() {
//     return (<ReactHighlightAsync.highlightInstance {...this.props} astGenerator={ReactHighlightAsync.refractor} />);
//   }
// };
