import highlight from './highlight';
import refractor from 'refractor/core';

export const registerLanguage = (_, language) => refractor.register(language);
export default highlight(refractor, {});
