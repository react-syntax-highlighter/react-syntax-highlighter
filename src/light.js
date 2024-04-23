import highlight from './highlight.js';
import {createLowlight} from 'lowlight';

const lowlight = createLowlight();

const SyntaxHighlighter = highlight(lowlight, {});
SyntaxHighlighter.registerLanguage = lowlight.register;

export default SyntaxHighlighter;
