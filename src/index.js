let defaultStyle = {};
let lowlight;

import highlight from './highlight';

if (process.env.REACT_SYNTAX_HIGHLIGHTER_LIGHT_BUILD) {
	lowlight = require('lowlight/lib/core');
} else {
	defaultStyle = require('./styles/default-style').default;
	lowlight = require('lowlight');
}

export default highlight(lowlight, defaultStyle);
