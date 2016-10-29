import highlight from './highlight';
import lowlight from 'lowlight/lib/core';

export const registerLanguage = lowlight.registerLanguage;
export default highlight(lowlight, {});
