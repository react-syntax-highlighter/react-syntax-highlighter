let defaultStyle = {};
let lowlight;

import highlight from './highlight';

lowlight = require('lowlight/lib/core');

export default highlight(lowlight, defaultStyle);
