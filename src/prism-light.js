import highlight from './highlight.js';
import { refractor } from 'refractor/lib/core.js';

const SyntaxHighlighter = highlight(refractor, {});
SyntaxHighlighter.registerLanguage = (_, language) => refractor.register(language);
SyntaxHighlighter.alias = (name, aliases) => refractor.alias(name, aliases);

export default SyntaxHighlighter;
