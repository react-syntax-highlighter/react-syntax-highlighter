
import highlight from './highlight';
import defaultStyle from './styles/prism/prism';
import refractor from 'refractor';

export default highlight(refractor, defaultStyle);
