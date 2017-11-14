
import highlight from './highlight';
import defaultStyle from './styles/refractor/prism';
import refractor from 'refractor';

export default highlight(refractor, defaultStyle);
