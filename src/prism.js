import highlight from './highlight';
import defaultStyle from './styles/prism/prism';
import { refractor } from 'refractor/all';
import supportedLanguages from './languages/prism/supported-languages';

const highlighter = highlight(refractor, defaultStyle);
highlighter.supportedLanguages = supportedLanguages;

export default highlighter;
