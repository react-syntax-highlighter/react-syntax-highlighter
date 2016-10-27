import highlight from './highlight';
import lowlight from 'lowlight/lib/core';

const defaultStyle = {};

export const registerLanguage = lowlight.registerLanguage;
export default highlight(lowlight, defaultStyle);
