import highlight from './highlight.js';
import defaultStyle from './styles/hljs/default-style.js';
import { createLowlight, all } from 'lowlight';
import supportedLanguages from './languages/hljs/supported-languages.js';

const lowlight = createLowlight(all);

const highlighter = highlight(lowlight, defaultStyle);
highlighter.supportedLanguages = supportedLanguages;

export default highlighter;
