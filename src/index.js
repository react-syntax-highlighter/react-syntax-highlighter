import highlight from './highlight';
import defaultStyle from './styles/hljs/default-style';
import lowlight from 'lowlight';

export default highlight(lowlight, defaultStyle);
export { default as createElement } from './create-element';