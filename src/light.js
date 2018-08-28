import highlight from './highlight';
import lowlight from 'lowlight/lib/core';

export const registerLanguage = lowlight.registerLanguage;
export default highlight(lowlight, {});
export { default as createElement } from './create-element';
