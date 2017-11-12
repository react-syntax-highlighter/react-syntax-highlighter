import highlight from './highlight';
import defaultStyle from './styles/prism';
import refractor from 'refractor';

export default highlight(refractor, defaultStyle);
export { default as createElement } from "./create-element";