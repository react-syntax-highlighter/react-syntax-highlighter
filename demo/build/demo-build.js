/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/react-dom/cjs/react-dom.production.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom.production.min.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(/*! react */ "./node_modules/react/index.js"),ca=__webpack_require__(/*! scheduler */ "./node_modules/scheduler/index.js");function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b)}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a])}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return!0;if(ja.call(la,a))return!1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return!1}function pa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1)});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0)});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return"function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||""}return"\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return"";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return(a.displayName||"Context")+".Consumer";case Ba:return(a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1)}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function kb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a]})});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb()}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb)}catch(a){Lb=!1}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments)}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=l)}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128))}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)))}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId)}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift()}return!0}function Zc(a,b,c){Xc(a)&&c.delete(b)}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc)}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d)}finally{C=e,cd.transition=f}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else hd(a,b,d,null,c)}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b)}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return!1}return!0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Je(c)}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d))}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b))}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x)}t=null}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else{na=De;var xa=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value)}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a)}se(g,b)})}function tf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;})}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);bd(b)}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[Of]||a[uf];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return{current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H)}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c)}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return!0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c)}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a)}function ig(a){fg=!0;hg(a)}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a}else rg=1<<f|c<<e|d,sg=a}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0))}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return!1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a)}}else{if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a}
function Gg(a){if(a!==xg)return!1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling)}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}yg=
null}}else yg=xg?Lf(a.stateNode.nextSibling):null;return!0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling)}function Ig(){yg=xg=null;I=!1}function Jg(a){null===zg?zg=[a]:zg.push(a)}var Kg=ua.ReactCurrentBatchConfig;function Lg(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var Mg=Uf(null),Ng=null,Og=null,Pg=null;function Qg(){Pg=Og=Ng=null}function Rg(a){var b=Mg.current;E(Mg);a._currentValue=b}
function Sg(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}function Tg(a,b){Ng=a;Pg=Og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(Ug=!0),a.firstContext=null)}
function Vg(a){var b=a._currentValue;if(Pg!==a)if(a={context:a,memoizedValue:b,next:null},null===Og){if(null===Ng)throw Error(p(308));Og=a;Ng.dependencies={lanes:0,firstContext:a}}else Og=Og.next=a;return b}var Wg=null;function Xg(a){null===Wg?Wg=[a]:Wg.push(a)}function Yg(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,Xg(b)):(c.next=e.next,e.next=c);b.interleaved=c;return Zg(a,d)}
function Zg(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var $g=!1;function ah(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}
function bh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function ch(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function dh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return Zg(a,c)}e=d.interleaved;null===e?(b.next=b,Xg(d)):(b.next=e.next,e.next=b);d.interleaved=b;return Zg(a,c)}function eh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
function fh(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function gh(a,b,c,d){var e=a.updateQueue;$g=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:$g=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);hh|=g;a.lanes=g;a.memoizedState=q}}
function ih(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d)}}}var jh=(new aa.Component).refs;function kh(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var nh={isMounted:function(a){return(a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=L(),d=
lh(a),e=ch(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=dh(a,e,d);null!==b&&(mh(b,a,d,c),eh(b,a,d))}};function oh(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function ph(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=Vg(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=nh;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function qh(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&nh.enqueueReplaceState(b,b.state,null)}
function rh(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jh;ah(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=Vg(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(kh(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&nh.enqueueReplaceState(e,e.state,null),gh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}
function sh(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;b===jh&&(b=e.refs={});null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function th(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function uh(a){var b=a._init;return b(a._payload)}
function vh(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=wh(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=xh(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&uh(f)===b.type))return d=e(b,c.props),d.ref=sh(a,b,c),d.return=a,d;d=yh(c.type,c.key,c.props,null,a.mode,d);d.ref=sh(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=zh(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ah(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=xh(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=yh(b.type,b.key,b.props,null,a.mode,c),
c.ref=sh(a,null,b),c.return=a,c;case wa:return b=zh(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Ah(b,a.mode,c,null),b.return=a,b;th(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);th(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);th(b,d)}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&uh(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=sh(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ya?(d=Ah(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=yh(f.type,f.key,f.props,null,a.mode,h),h.ref=sh(a,d,f),h.return=a,a=h)}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=zh(f,a.mode,h);d.return=a;a=d}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);th(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=xh(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Bh=vh(!0),Ch=vh(!1),Dh={},Eh=Uf(Dh),Fh=Uf(Dh),Gh=Uf(Dh);function Hh(a){if(a===Dh)throw Error(p(174));return a}function Ih(a,b){G(Gh,b);G(Fh,a);G(Eh,Dh);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a)}E(Eh);G(Eh,b)}function Jh(){E(Eh);E(Fh);E(Gh)}
function Kh(a){Hh(Gh.current);var b=Hh(Eh.current);var c=lb(b,a.type);b!==c&&(G(Fh,a),G(Eh,c))}function Lh(a){Fh.current===a&&(E(Eh),E(Fh))}var M=Uf(0);
function Mh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Nh=[];
function Oh(){for(var a=0;a<Nh.length;a++)Nh[a]._workInProgressVersionPrimary=null;Nh.length=0}var Ph=ua.ReactCurrentDispatcher,Qh=ua.ReactCurrentBatchConfig,Rh=0,N=null,O=null,P=null,Sh=!1,Th=!1,Uh=0,Vh=0;function Q(){throw Error(p(321));}function Wh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Xh(a,b,c,d,e,f){Rh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Ph.current=null===a||null===a.memoizedState?Yh:Zh;a=c(d,e);if(Th){f=0;do{Th=!1;Uh=0;if(25<=f)throw Error(p(301));f+=1;P=O=null;b.updateQueue=null;Ph.current=$h;a=c(d,e)}while(Th)}Ph.current=ai;b=null!==O&&null!==O.next;Rh=0;P=O=N=null;Sh=!1;if(b)throw Error(p(300));return a}function bi(){var a=0!==Uh;Uh=0;return a}
function ci(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function di(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(p(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function ei(a,b){return"function"===typeof b?b(a):b}
function fi(a){var b=di(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Rh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;N.lanes|=m;hh|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(Ug=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,N.lanes|=f,hh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function gi(a){var b=di(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(Ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function hi(){}
function ii(a,b){var c=N,d=di(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,Ug=!0);d=d.queue;ji(ki.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==P&&P.memoizedState.tag&1){c.flags|=2048;li(9,mi.bind(null,c,d,e,b),void 0,null);if(null===R)throw Error(p(349));0!==(Rh&30)||ni(c,b,e)}return e}function ni(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function mi(a,b,c,d){b.value=c;b.getSnapshot=d;oi(b)&&pi(a)}function ki(a,b,c){return c(function(){oi(b)&&pi(a)})}function oi(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!He(a,c)}catch(d){return!0}}function pi(a){var b=Zg(a,1);null!==b&&mh(b,a,1,-1)}
function qi(a){var b=ci();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:a};b.queue=a;a=a.dispatch=ri.bind(null,N,a);return[b.memoizedState,a]}
function li(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function si(){return di().memoizedState}function ti(a,b,c,d){var e=ci();N.flags|=a;e.memoizedState=li(1|b,c,void 0,void 0===d?null:d)}
function ui(a,b,c,d){var e=di();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&Wh(d,g.deps)){e.memoizedState=li(b,c,f,d);return}}N.flags|=a;e.memoizedState=li(1|b,c,f,d)}function vi(a,b){return ti(8390656,8,a,b)}function ji(a,b){return ui(2048,8,a,b)}function wi(a,b){return ui(4,2,a,b)}function xi(a,b){return ui(4,4,a,b)}
function yi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function zi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ui(4,4,yi.bind(null,b,a),c)}function Ai(){}function Bi(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Ci(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Di(a,b,c){if(0===(Rh&21))return a.baseState&&(a.baseState=!1,Ug=!0),a.memoizedState=c;He(c,b)||(c=yc(),N.lanes|=c,hh|=c,a.baseState=!0);return b}function Ei(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Qh.transition;Qh.transition={};try{a(!1),b()}finally{C=c,Qh.transition=d}}function Fi(){return di().memoizedState}
function Gi(a,b,c){var d=lh(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,c);else if(c=Yg(a,b,c,d),null!==c){var e=L();mh(c,a,d,e);Ji(c,b,d)}}
function ri(a,b,c){var d=lh(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,Xg(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=Yg(a,b,e,d);null!==c&&(e=L(),mh(c,a,d,e),Ji(c,b,d))}}
function Hi(a){var b=a.alternate;return a===N||null!==b&&b===N}function Ii(a,b){Th=Sh=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function Ji(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
var ai={readContext:Vg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useInsertionEffect:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useDeferredValue:Q,useTransition:Q,useMutableSource:Q,useSyncExternalStore:Q,useId:Q,unstable_isNewReconciler:!1},Yh={readContext:Vg,useCallback:function(a,b){ci().memoizedState=[a,void 0===b?null:b];return a},useContext:Vg,useEffect:vi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ti(4194308,
4,yi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ti(4194308,4,a,b)},useInsertionEffect:function(a,b){return ti(4,2,a,b)},useMemo:function(a,b){var c=ci();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=ci();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=Gi.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=
ci();a={current:a};return b.memoizedState=a},useState:qi,useDebugValue:Ai,useDeferredValue:function(a){return ci().memoizedState=a},useTransition:function(){var a=qi(!1),b=a[0];a=Ei.bind(null,a[1]);ci().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=N,e=ci();if(I){if(void 0===c)throw Error(p(407));c=c()}else{c=b();if(null===R)throw Error(p(349));0!==(Rh&30)||ni(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;vi(ki.bind(null,d,
f,a),[a]);d.flags|=2048;li(9,mi.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=ci(),b=R.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Uh++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Vh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Zh={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:fi,useRef:si,useState:function(){return fi(ei)},
useDebugValue:Ai,useDeferredValue:function(a){var b=di();return Di(b,O.memoizedState,a)},useTransition:function(){var a=fi(ei)[0],b=di().memoizedState;return[a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1},$h={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:gi,useRef:si,useState:function(){return gi(ei)},useDebugValue:Ai,useDeferredValue:function(a){var b=di();return null===
O?b.memoizedState=a:Di(b,O.memoizedState,a)},useTransition:function(){var a=gi(ei)[0],b=di().memoizedState;return[a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1};function Ki(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}function Li(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}
function Mi(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Ni="function"===typeof WeakMap?WeakMap:Map;function Oi(a,b,c){c=ch(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Pi||(Pi=!0,Qi=d);Mi(a,b)};return c}
function Ri(a,b,c){c=ch(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Mi(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Mi(a,b);"function"!==typeof d&&(null===Si?Si=new Set([this]):Si.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Ti(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Ni;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ui.bind(null,a,b,c),b.then(a,a))}function Vi(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function Wi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=ch(-1,1),b.tag=2,dh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Xi=ua.ReactCurrentOwner,Ug=!1;function Yi(a,b,c,d){b.child=null===a?Ch(b,null,c,d):Bh(b,a.child,c,d)}
function Zi(a,b,c,d,e){c=c.render;var f=b.ref;Tg(b,e);d=Xh(a,b,c,d,f,e);c=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&c&&vg(b);b.flags|=1;Yi(a,b,d,e);return b.child}
function aj(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!bj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,cj(a,b,f,d,e);a=yh(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return $i(a,b,e)}b.flags|=1;a=wh(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function cj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(Ug=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(Ug=!0);else return b.lanes=a.lanes,$i(a,b,e)}return dj(a,b,c,d,e)}
function ej(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(fj,gj),gj|=c;else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(fj,gj),gj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(fj,gj);gj|=d}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(fj,gj),gj|=d;Yi(a,b,e,c);return b.child}function hj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function dj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);Tg(b,e);c=Xh(a,b,c,d,f,e);d=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&d&&vg(b);b.flags|=1;Yi(a,b,c,e);return b.child}
function ij(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b)}else f=!1;Tg(b,e);if(null===b.stateNode)jj(a,b),ph(b,c,d),rh(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=Vg(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&qh(b,g,d,l);$g=!1;var r=b.memoizedState;g.state=r;gh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||$g?("function"===typeof m&&(kh(b,c,m,d),k=b.memoizedState),(h=$g||oh(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;bh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Lg(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=Vg(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&qh(b,g,d,k);$g=!1;r=b.memoizedState;g.state=r;gh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||$g?("function"===typeof y&&(kh(b,c,y,d),n=b.memoizedState),(l=$g||oh(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return kj(a,b,c,d,f,e)}
function kj(a,b,c,d,e,f){hj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),$i(a,b,f);d=b.stateNode;Xi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Bh(b,a.child,null,f),b.child=Bh(b,null,h,f)):Yi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function lj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);Ih(a,b.containerInfo)}
function mj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Yi(a,b,c,d);return b.child}var nj={dehydrated:null,treeContext:null,retryLane:0};function oj(a){return{baseLanes:a,cachePool:null,transitions:null}}
function pj(a,b,c){var d=b.pendingProps,e=M.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(M,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=qj(g,d,0,null),a=Ah(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=oj(c),b.memoizedState=nj,a):rj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return sj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=wh(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=wh(h,f):(f=Ah(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?oj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=nj;return d}f=a.child;a=f.sibling;d=wh(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function rj(a,b){b=qj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function tj(a,b,c,d){null!==d&&Jg(d);Bh(b,a.child,null,c);a=rj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function sj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Li(Error(p(422))),tj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=qj({mode:"visible",children:d.children},e,0,null);f=Ah(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Bh(b,a.child,null,g);b.child.memoizedState=oj(g);b.memoizedState=nj;return f}if(0===(b.mode&1))return tj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Li(f,d,void 0);return tj(a,b,g,d)}h=0!==(g&a.childLanes);if(Ug||h){d=R;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,Zg(a,e),mh(d,a,e,-1))}uj();d=Li(Error(p(421)));return tj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=vj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=rj(b,d.children);b.flags|=4096;return b}function wj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);Sg(a.return,b,c)}
function xj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function yj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Yi(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&wj(a,c,b);else if(19===a.tag)wj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}G(M,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Mh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);xj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Mh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}xj(b,!0,c,null,f);break;case "together":xj(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function jj(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function $i(a,b,c){null!==a&&(b.dependencies=a.dependencies);hh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=wh(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=wh(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function zj(a,b,c){switch(b.tag){case 3:lj(b);Ig();break;case 5:Kh(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:Ih(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Mg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(M,M.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return pj(a,b,c);G(M,M.current&1);a=$i(a,b,c);return null!==a?a.sibling:null}G(M,M.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return yj(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(M,M.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,ej(a,b,c)}return $i(a,b,c)}var Aj,Bj,Cj,Dj;
Aj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Bj=function(){};
Cj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;Hh(Eh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf)}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,
c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4}};Dj=function(a,b,c,d){c!==d&&(b.flags|=4)};
function Ej(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Fj(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;Jh();E(Wf);E(H);Oh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Gj(zg),zg=null));Bj(a,b);S(b);return null;case 5:Lh(b);var e=Hh(Gh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Cj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d)}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d)}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;Aj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g))}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}S(b);return null;case 6:if(a&&null!=b.stateNode)Dj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=Hh(Gh.current);Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d}S(b);return null;case 13:E(M);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1}else null!==zg&&(Gj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(M.current&1)?0===T&&(T=3):uj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return Jh(),
Bj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return Rg(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(M);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Ej(f,!1);else{if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Mh(a);if(null!==g){b.flags|=128;Ej(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(M,M.current&1|2);return b.child}a=
a.sibling}null!==f.tail&&B()>Hj&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304)}else{if(!d)if(a=Mh(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Ej(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Hj&&1073741824!==c&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=M.current,G(M,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Ij(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(gj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Jj(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return Jh(),E(Wf),E(H),Oh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Lh(b),null;case 13:E(M);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(M),null;case 4:return Jh(),null;case 10:return Rg(b.type._context),null;case 22:case 23:return Ij(),
null;case 24:return null;default:return null}}var Kj=!1,U=!1,Lj="function"===typeof WeakSet?WeakSet:Set,V=null;function Mj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){W(a,b,d)}else c.current=null}function Nj(a,b,c){try{c()}catch(d){W(a,b,d)}}var Oj=!1;
function Pj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode}q=y}c=-1===h||-1===k?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Lg(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F)}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return}n=Oj;Oj=!1;return n}
function Qj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Nj(b,c,f)}e=e.next}while(e!==d)}}function Rj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Sj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Tj(a){var b=a.alternate;null!==b&&(a.alternate=null,Tj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Uj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Vj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Uj(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling}
function Xj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Xj(a,b,c),a=a.sibling;null!==a;)Xj(a,b,c),a=a.sibling}var X=null,Yj=!1;function Zj(a,b,c){for(c=c.child;null!==c;)ak(a,b,c),c=c.sibling}
function ak(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c)}catch(h){}switch(c.tag){case 5:U||Mj(c,b);case 6:var d=X,e=Yj;X=null;Zj(a,b,c);X=d;Yj=e;null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Yj;X=c.stateNode.containerInfo;Yj=!0;
Zj(a,b,c);X=d;Yj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Nj(c,b,g):0!==(f&4)&&Nj(c,b,g));e=e.next}while(e!==d)}Zj(a,b,c);break;case 1:if(!U&&(Mj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){W(c,b,h)}Zj(a,b,c);break;case 21:Zj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Zj(a,b,c),U=d):Zj(a,b,c);break;default:Zj(a,b,c)}}function bk(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Lj);b.forEach(function(b){var d=ck.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function dk(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Yj=!1;break a;case 3:X=h.stateNode.containerInfo;Yj=!0;break a;case 4:X=h.stateNode.containerInfo;Yj=!0;break a}h=h.return}if(null===X)throw Error(p(160));ak(f,g,e);X=null;Yj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(l){W(e,b,l)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)ek(b,a),b=b.sibling}
function ek(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:dk(b,a);fk(a);if(d&4){try{Qj(3,a,a.return),Rj(3,a)}catch(t){W(a,a.return,t)}try{Qj(5,a,a.return)}catch(t){W(a,a.return,t)}}break;case 1:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);break;case 5:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"")}catch(t){W(a,a.return,t)}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l)}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1))}e[Pf]=f}catch(t){W(a,a.return,t)}}break;case 6:dk(b,a);fk(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(t){W(a,a.return,t)}}break;case 3:dk(b,a);fk(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo)}catch(t){W(a,a.return,t)}break;case 4:dk(b,a);fk(a);break;case 13:dk(b,a);fk(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(gk=B()));d&4&&bk(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,dk(b,a),U=l):dk(b,a);fk(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Qj(4,r,r.return);break;case 1:Mj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount()}catch(t){W(d,c,t)}}break;case 5:Mj(r,r.return);break;case 22:if(null!==r.memoizedState){hk(q);continue}}null!==y?(y.return=r,V=y):hk(q)}m=m.sibling}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g))}catch(t){W(a,a.return,t)}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps}catch(t){W(a,a.return,t)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling}}break;case 19:dk(b,a);fk(a);d&4&&bk(a);break;case 21:break;default:dk(b,
a),fk(a)}}function fk(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Uj(c)){var d=c;break a}c=c.return}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Vj(a);Xj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Vj(a);Wj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function ik(a,b,c){V=a;jk(a,b,c)}
function jk(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Kj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Kj;var l=U;Kj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?kk(e):null!==k?(k.return=g,V=k):kk(e);for(;null!==f;)V=f,jk(f,b,c),f=f.sibling;V=e;Kj=h;U=l}lk(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):lk(a,b,c)}}
function lk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Rj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:Lg(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&ih(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode}ih(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Sj(b)}catch(r){W(b,b.return,r)}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}function hk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}
function kk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Rj(4,b)}catch(k){W(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){W(b,e,k)}}var f=b.return;try{Sj(b)}catch(k){W(b,f,k)}break;case 5:var g=b.return;try{Sj(b)}catch(k){W(b,g,k)}}}catch(k){W(b,b.return,k)}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return}}
var mk=Math.ceil,nk=ua.ReactCurrentDispatcher,ok=ua.ReactCurrentOwner,pk=ua.ReactCurrentBatchConfig,K=0,R=null,Y=null,Z=0,gj=0,fj=Uf(0),T=0,qk=null,hh=0,rk=0,sk=0,tk=null,uk=null,gk=0,Hj=Infinity,vk=null,Pi=!1,Qi=null,Si=null,wk=!1,xk=null,yk=0,zk=0,Ak=null,Bk=-1,Ck=0;function L(){return 0!==(K&6)?B():-1!==Bk?Bk:Bk=B()}
function lh(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Ck&&(Ck=yc()),Ck;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function mh(a,b,c,d){if(50<zk)throw zk=0,Ak=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==R)a===R&&(0===(K&2)&&(rk|=c),4===T&&Dk(a,Z)),Ek(a,d),1===c&&0===K&&0===(b.mode&1)&&(Hj=B()+500,fg&&jg())}
function Ek(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===R?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Fk.bind(null,a)):hg(Fk.bind(null,a)),Jf(function(){0===(K&6)&&jg()}),c=null;else{switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc}c=Gk(c,Hk.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Hk(a,b){Bk=-1;Ck=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Ik()&&a.callbackNode!==c)return null;var d=uc(a,a===R?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Jk(a,d);else{b=d;var e=K;K|=2;var f=Kk();if(R!==a||Z!==b)vk=null,Hj=B()+500,Lk(a,b);do try{Mk();break}catch(h){Nk(a,h)}while(1);Qg();nk.current=f;K=e;null!==Y?b=0:(R=null,Z=0,b=T)}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Ok(a,e)));if(1===b)throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;if(6===b)Dk(a,d);
else{e=a.current.alternate;if(0===(d&30)&&!Pk(e)&&(b=Jk(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Ok(a,f))),1===b))throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Qk(a,uk,vk);break;case 3:Dk(a,d);if((d&130023424)===d&&(b=gk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){L();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),b);break}Qk(a,uk,vk);break;case 4:Dk(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*mk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),d);break}Qk(a,uk,vk);break;case 5:Qk(a,uk,vk);break;default:throw Error(p(329));}}}Ek(a,B());return a.callbackNode===c?Hk.bind(null,a):null}
function Ok(a,b){var c=tk;a.current.memoizedState.isDehydrated&&(Lk(a,b).flags|=256);a=Jk(a,b);2!==a&&(b=uk,uk=c,null!==b&&Gj(b));return a}function Gj(a){null===uk?uk=a:uk.push.apply(uk,a)}
function Pk(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Dk(a,b){b&=~sk;b&=~rk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d}}function Fk(a){if(0!==(K&6))throw Error(p(327));Ik();var b=uc(a,0);if(0===(b&1))return Ek(a,B()),null;var c=Jk(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Ok(a,d))}if(1===c)throw c=qk,Lk(a,0),Dk(a,b),Ek(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Qk(a,uk,vk);Ek(a,B());return null}
function Rk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Hj=B()+500,fg&&jg())}}function Sk(a){null!==xk&&0===xk.tag&&0===(K&6)&&Ik();var b=K;K|=1;var c=pk.transition,d=C;try{if(pk.transition=null,C=1,a)return a()}finally{C=d,pk.transition=c,K=b,0===(K&6)&&jg()}}function Ij(){gj=fj.current;E(fj)}
function Lk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:Jh();E(Wf);E(H);Oh();break;case 5:Lh(d);break;case 4:Jh();break;case 13:E(M);break;case 19:E(M);break;case 10:Rg(d.type._context);break;case 22:case 23:Ij()}c=c.return}R=a;Y=a=wh(a.current,null);Z=gj=b;T=0;qk=null;sk=rk=hh=0;uk=tk=null;if(null!==Wg){for(b=
0;b<Wg.length;b++)if(c=Wg[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}Wg=null}return a}
function Nk(a,b){do{var c=Y;try{Qg();Ph.current=ai;if(Sh){for(var d=N.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Sh=!1}Rh=0;P=O=N=null;Th=!1;Uh=0;ok.current=null;if(null===c||null===c.return){T=1;qk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Vi(g);if(null!==y){y.flags&=-257;Wi(y,g,h,f,b);y.mode&1&&Ti(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t}else n.add(k);break a}else{if(0===(b&1)){Ti(f,l,b);uj();break a}k=Error(p(426))}}else if(I&&h.mode&1){var J=Vi(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Wi(J,g,h,f,b);Jg(Ki(k,h));break a}}f=k=Ki(k,h);4!==T&&(T=2);null===tk?tk=[f]:tk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Oi(f,k,b);fh(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Si||!Si.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Ri(f,h,b);fh(f,F);break a}}f=f.return}while(null!==f)}Tk(c)}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Kk(){var a=nk.current;nk.current=ai;return null===a?ai:a}
function uj(){if(0===T||3===T||2===T)T=4;null===R||0===(hh&268435455)&&0===(rk&268435455)||Dk(R,Z)}function Jk(a,b){var c=K;K|=2;var d=Kk();if(R!==a||Z!==b)vk=null,Lk(a,b);do try{Uk();break}catch(e){Nk(a,e)}while(1);Qg();K=c;nk.current=d;if(null!==Y)throw Error(p(261));R=null;Z=0;return T}function Uk(){for(;null!==Y;)Vk(Y)}function Mk(){for(;null!==Y&&!cc();)Vk(Y)}function Vk(a){var b=Wk(a.alternate,a,gj);a.memoizedProps=a.pendingProps;null===b?Tk(a):Y=b;ok.current=null}
function Tk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Fj(c,b,gj),null!==c){Y=c;return}}else{c=Jj(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===T&&(T=5)}function Qk(a,b,c){var d=C,e=pk.transition;try{pk.transition=null,C=1,Xk(a,b,c,d)}finally{pk.transition=e,C=d}return null}
function Xk(a,b,c,d){do Ik();while(null!==xk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===R&&(Y=R=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||wk||(wk=!0,Gk(hc,function(){Ik();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=pk.transition;pk.transition=null;
var g=C;C=1;var h=K;K|=4;ok.current=null;Pj(a,c);ek(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;ik(c,a,e);dc();K=h;C=g;pk.transition=f}else a.current=c;wk&&(wk=!1,xk=a,yk=e);f=a.pendingLanes;0===f&&(Si=null);mc(c.stateNode,d);Ek(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Pi)throw Pi=!1,a=Qi,Qi=null,a;0!==(yk&1)&&0!==a.tag&&Ik();f=a.pendingLanes;0!==(f&1)?a===Ak?zk++:(zk=0,Ak=a):zk=0;jg();return null}
function Ik(){if(null!==xk){var a=Dc(yk),b=pk.transition,c=C;try{pk.transition=null;C=16>a?16:a;if(null===xk)var d=!1;else{a=xk;xk=null;yk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Qj(8,m,f)}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Tj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J}while(null!==t)}}V=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Qj(9,f,f.return)}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Rj(9,h)}}catch(na){W(h,h.return,na)}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a)}catch(na){}d=!0}return d}finally{C=c,pk.transition=b}}return!1}function Yk(a,b,c){b=Ki(c,b);b=Oi(a,b,1);a=dh(a,b,1);b=L();null!==a&&(Ac(a,1,b),Ek(a,b))}
function W(a,b,c){if(3===a.tag)Yk(a,a,c);else for(;null!==b;){if(3===b.tag){Yk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Si||!Si.has(d))){a=Ki(c,a);a=Ri(b,a,1);b=dh(b,a,1);a=L();null!==b&&(Ac(b,1,a),Ek(b,a));break}}b=b.return}}
function Ui(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=L();a.pingedLanes|=a.suspendedLanes&c;R===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-gk?Lk(a,0):sk|=c);Ek(a,b)}function Zk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=L();a=Zg(a,b);null!==a&&(Ac(a,b,c),Ek(a,c))}function vj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Zk(a,c)}
function ck(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Zk(a,c)}var Wk;
Wk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)Ug=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return Ug=!1,zj(a,b,c);Ug=0!==(a.flags&131072)?!0:!1}else Ug=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;jj(a,b);a=b.pendingProps;var e=Yf(b,H.current);Tg(b,c);e=Xh(null,b,d,a,e,c);var f=bi();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,ah(b),e.updater=nh,b.stateNode=e,e._reactInternals=b,rh(b,d,a,c),b=kj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Yi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{jj(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=$k(d);a=Lg(d,a);switch(e){case 0:b=dj(null,b,d,a,c);break a;case 1:b=ij(null,b,d,a,c);break a;case 11:b=Zi(null,b,d,a,c);break a;case 14:b=aj(null,b,d,Lg(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),dj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),ij(a,b,d,e,c);case 3:a:{lj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;bh(a,b);gh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ki(Error(p(423)),b);b=mj(a,b,d,c,e);break a}else if(d!==e){e=Ki(Error(p(424)),b);b=mj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Ch(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Ig();if(d===e){b=$i(a,b,c);break a}Yi(a,b,d,c)}b=b.child}return b;case 5:return Kh(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
hj(a,b),Yi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return pj(a,b,c);case 4:return Ih(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Bh(b,null,d,c):Yi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),Zi(a,b,d,e,c);case 7:return Yi(a,b,b.pendingProps,c),b.child;case 8:return Yi(a,b,b.pendingProps.children,c),b.child;case 12:return Yi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Mg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=$i(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=ch(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);Sg(f.return,
c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);Sg(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}Yi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,Tg(b,c),e=Vg(e),d=d(e),b.flags|=1,Yi(a,b,d,c),
b.child;case 14:return d=b.type,e=Lg(d,b.pendingProps),e=Lg(d.type,e),aj(a,b,d,e,c);case 15:return cj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),jj(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,Tg(b,c),ph(b,d,e),rh(b,d,e,c),kj(null,b,d,!0,a,c);case 19:return yj(a,b,c);case 22:return ej(a,b,c)}throw Error(p(156,b.tag));};function Gk(a,b){return ac(a,b)}
function al(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Bg(a,b,c,d){return new al(a,b,c,d)}function bj(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function $k(a){if("function"===typeof a)return bj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function wh(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function yh(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Ah(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return qj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Ah(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function qj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function xh(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function zh(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function bl(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null}function cl(a,b,c,d,e,f,g,h,k){a=new bl(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};ah(f);return a}function dl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function el(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function fl(a,b,c,d,e,f,g,h,k){a=cl(c,d,!0,a,e,f,g,h,k);a.context=el(null);c=a.current;d=L();e=lh(c);f=ch(d,e);f.callback=void 0!==b&&null!==b?b:null;dh(c,f,e);a.current.lanes=e;Ac(a,e,d);Ek(a,d);return a}function gl(a,b,c,d){var e=b.current,f=L(),g=lh(e);c=el(c);null===b.context?b.context=c:b.pendingContext=c;b=ch(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=dh(e,b,g);null!==a&&(mh(a,e,g,f),eh(a,e,g));return g}
function hl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function il(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function jl(a,b){il(a,b);(a=a.alternate)&&il(a,b)}function kl(){return null}var ll="function"===typeof reportError?reportError:function(a){console.error(a)};function ml(a){this._internalRoot=a}
nl.prototype.render=ml.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));gl(a,b,null,null)};nl.prototype.unmount=ml.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Sk(function(){gl(null,a,null,null)});b[uf]=null}};function nl(a){this._internalRoot=a}
nl.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a)}};function ol(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function pl(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function ql(){}
function rl(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=hl(g);f.call(a)}}var g=fl(b,d,a,0,null,!1,!1,"",ql);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Sk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=hl(k);h.call(a)}}var k=cl(a,0,!1,null,null,!1,!1,"",ql);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Sk(function(){gl(b,k,c,d)});return k}
function sl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=hl(g);h.call(a)}}gl(b,g,a,e)}else g=rl(c,b,a,e,d);return hl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Ek(b,B()),0===(K&6)&&(Hj=B()+500,jg()))}break;case 13:Sk(function(){var b=Zg(a,1);if(null!==b){var c=L();mh(b,a,1,c)}}),jl(a,1)}};
Fc=function(a){if(13===a.tag){var b=Zg(a,134217728);if(null!==b){var c=L();mh(b,a,134217728,c)}jl(a,134217728)}};Gc=function(a){if(13===a.tag){var b=lh(a),c=Zg(a,b);if(null!==c){var d=L();mh(c,a,b,d)}jl(a,b)}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Rk;Hb=Sk;
var tl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Rk]},ul={findFiberByHostInstance:Wc,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"};
var vl={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance||
kl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{kc=wl.inject(vl),lc=wl}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tl;
exports.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!ol(b))throw Error(p(200));return dl(a,b,null,c)};exports.createRoot=function(a,b){if(!ol(a))throw Error(p(299));var c=!1,d="",e=ll;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=cl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ml(b)};
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a){return Sk(a)};exports.hydrate=function(a,b,c){if(!pl(b))throw Error(p(200));return sl(null,a,b,!0,c)};
exports.hydrateRoot=function(a,b,c){if(!ol(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=ll;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=fl(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new nl(b)};exports.render=function(a,b,c){if(!pl(b))throw Error(p(200));return sl(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!pl(a))throw Error(p(40));return a._reactRootContainer?(Sk(function(){sl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null})}),!0):!1};exports.unstable_batchedUpdates=Rk;
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!pl(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return sl(a,b,c,!1,d)};exports.version="18.2.0-next-9e3b772b8-20220608";


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(/*! ./cjs/react-dom.production.min.js */ "./node_modules/react-dom/cjs/react-dom.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/react/cjs/react.production.min.js":
/*!********************************************************!*\
  !*** ./node_modules/react/cjs/react.production.min.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;
exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
exports.useTransition=function(){return U.current.useTransition()};exports.version="18.2.0";


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react.production.min.js */ "./node_modules/react/cjs/react.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.production.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.production.min.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ "./node_modules/scheduler/index.js":
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/scheduler.production.min.js */ "./node_modules/scheduler/cjs/scheduler.production.min.js");
} else {}


/***/ }),

/***/ "./src/styles/hljs lazy recursive ^\\.\\/.*\\.js$":
/*!********************************************************************!*\
  !*** ./src/styles/hljs/ lazy ^\.\/.*\.js$ strict namespace object ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./a11y-dark.js": [
		"./src/styles/hljs/a11y-dark.js",
		"src_styles_hljs_a11y-dark_js"
	],
	"./a11y-dark.min.js": [
		"./src/styles/hljs/a11y-dark.min.js",
		"src_styles_hljs_a11y-dark_min_js"
	],
	"./a11y-light.js": [
		"./src/styles/hljs/a11y-light.js",
		"src_styles_hljs_a11y-light_js"
	],
	"./a11y-light.min.js": [
		"./src/styles/hljs/a11y-light.min.js",
		"src_styles_hljs_a11y-light_min_js"
	],
	"./agate.js": [
		"./src/styles/hljs/agate.js",
		"src_styles_hljs_agate_js"
	],
	"./agate.min.js": [
		"./src/styles/hljs/agate.min.js",
		"src_styles_hljs_agate_min_js"
	],
	"./an-old-hope.js": [
		"./src/styles/hljs/an-old-hope.js",
		"src_styles_hljs_an-old-hope_js"
	],
	"./an-old-hope.min.js": [
		"./src/styles/hljs/an-old-hope.min.js",
		"src_styles_hljs_an-old-hope_min_js"
	],
	"./androidstudio.js": [
		"./src/styles/hljs/androidstudio.js",
		"src_styles_hljs_androidstudio_js"
	],
	"./androidstudio.min.js": [
		"./src/styles/hljs/androidstudio.min.js",
		"src_styles_hljs_androidstudio_min_js"
	],
	"./arduino-light.js": [
		"./src/styles/hljs/arduino-light.js",
		"src_styles_hljs_arduino-light_js"
	],
	"./arduino-light.min.js": [
		"./src/styles/hljs/arduino-light.min.js",
		"src_styles_hljs_arduino-light_min_js"
	],
	"./arta.js": [
		"./src/styles/hljs/arta.js",
		"src_styles_hljs_arta_js"
	],
	"./arta.min.js": [
		"./src/styles/hljs/arta.min.js",
		"src_styles_hljs_arta_min_js"
	],
	"./ascetic.js": [
		"./src/styles/hljs/ascetic.js",
		"src_styles_hljs_ascetic_js"
	],
	"./ascetic.min.js": [
		"./src/styles/hljs/ascetic.min.js",
		"src_styles_hljs_ascetic_min_js"
	],
	"./atelier-cave-dark.js": [
		"./src/styles/hljs/atelier-cave-dark.js",
		"src_styles_hljs_atelier-cave-dark_js"
	],
	"./atelier-cave-light.js": [
		"./src/styles/hljs/atelier-cave-light.js",
		"src_styles_hljs_atelier-cave-light_js"
	],
	"./atelier-dune-dark.js": [
		"./src/styles/hljs/atelier-dune-dark.js",
		"src_styles_hljs_atelier-dune-dark_js"
	],
	"./atelier-dune-light.js": [
		"./src/styles/hljs/atelier-dune-light.js",
		"src_styles_hljs_atelier-dune-light_js"
	],
	"./atelier-estuary-dark.js": [
		"./src/styles/hljs/atelier-estuary-dark.js",
		"src_styles_hljs_atelier-estuary-dark_js"
	],
	"./atelier-estuary-light.js": [
		"./src/styles/hljs/atelier-estuary-light.js",
		"src_styles_hljs_atelier-estuary-light_js"
	],
	"./atelier-forest-dark.js": [
		"./src/styles/hljs/atelier-forest-dark.js",
		"src_styles_hljs_atelier-forest-dark_js"
	],
	"./atelier-forest-light.js": [
		"./src/styles/hljs/atelier-forest-light.js",
		"src_styles_hljs_atelier-forest-light_js"
	],
	"./atelier-heath-dark.js": [
		"./src/styles/hljs/atelier-heath-dark.js",
		"src_styles_hljs_atelier-heath-dark_js"
	],
	"./atelier-heath-light.js": [
		"./src/styles/hljs/atelier-heath-light.js",
		"src_styles_hljs_atelier-heath-light_js"
	],
	"./atelier-lakeside-dark.js": [
		"./src/styles/hljs/atelier-lakeside-dark.js",
		"src_styles_hljs_atelier-lakeside-dark_js"
	],
	"./atelier-lakeside-light.js": [
		"./src/styles/hljs/atelier-lakeside-light.js",
		"src_styles_hljs_atelier-lakeside-light_js"
	],
	"./atelier-plateau-dark.js": [
		"./src/styles/hljs/atelier-plateau-dark.js",
		"src_styles_hljs_atelier-plateau-dark_js"
	],
	"./atelier-plateau-light.js": [
		"./src/styles/hljs/atelier-plateau-light.js",
		"src_styles_hljs_atelier-plateau-light_js"
	],
	"./atelier-savanna-dark.js": [
		"./src/styles/hljs/atelier-savanna-dark.js",
		"src_styles_hljs_atelier-savanna-dark_js"
	],
	"./atelier-savanna-light.js": [
		"./src/styles/hljs/atelier-savanna-light.js",
		"src_styles_hljs_atelier-savanna-light_js"
	],
	"./atelier-seaside-dark.js": [
		"./src/styles/hljs/atelier-seaside-dark.js",
		"src_styles_hljs_atelier-seaside-dark_js"
	],
	"./atelier-seaside-light.js": [
		"./src/styles/hljs/atelier-seaside-light.js",
		"src_styles_hljs_atelier-seaside-light_js"
	],
	"./atelier-sulphurpool-dark.js": [
		"./src/styles/hljs/atelier-sulphurpool-dark.js",
		"src_styles_hljs_atelier-sulphurpool-dark_js"
	],
	"./atelier-sulphurpool-light.js": [
		"./src/styles/hljs/atelier-sulphurpool-light.js",
		"src_styles_hljs_atelier-sulphurpool-light_js"
	],
	"./atom-one-dark-reasonable.js": [
		"./src/styles/hljs/atom-one-dark-reasonable.js",
		"src_styles_hljs_atom-one-dark-reasonable_js"
	],
	"./atom-one-dark-reasonable.min.js": [
		"./src/styles/hljs/atom-one-dark-reasonable.min.js",
		"src_styles_hljs_atom-one-dark-reasonable_min_js"
	],
	"./atom-one-dark.js": [
		"./src/styles/hljs/atom-one-dark.js",
		"src_styles_hljs_atom-one-dark_js"
	],
	"./atom-one-dark.min.js": [
		"./src/styles/hljs/atom-one-dark.min.js",
		"src_styles_hljs_atom-one-dark_min_js"
	],
	"./atom-one-light.js": [
		"./src/styles/hljs/atom-one-light.js",
		"src_styles_hljs_atom-one-light_js"
	],
	"./atom-one-light.min.js": [
		"./src/styles/hljs/atom-one-light.min.js",
		"src_styles_hljs_atom-one-light_min_js"
	],
	"./brown-paper.js": [
		"./src/styles/hljs/brown-paper.js",
		"src_styles_hljs_brown-paper_js"
	],
	"./brown-paper.min.js": [
		"./src/styles/hljs/brown-paper.min.js",
		"src_styles_hljs_brown-paper_min_js"
	],
	"./codepen-embed.js": [
		"./src/styles/hljs/codepen-embed.js",
		"src_styles_hljs_codepen-embed_js"
	],
	"./codepen-embed.min.js": [
		"./src/styles/hljs/codepen-embed.min.js",
		"src_styles_hljs_codepen-embed_min_js"
	],
	"./color-brewer.js": [
		"./src/styles/hljs/color-brewer.js",
		"src_styles_hljs_color-brewer_js"
	],
	"./color-brewer.min.js": [
		"./src/styles/hljs/color-brewer.min.js",
		"src_styles_hljs_color-brewer_min_js"
	],
	"./darcula.js": [
		"./src/styles/hljs/darcula.js",
		"src_styles_hljs_darcula_js"
	],
	"./dark.js": [
		"./src/styles/hljs/dark.js",
		"src_styles_hljs_dark_js"
	],
	"./dark.min.js": [
		"./src/styles/hljs/dark.min.js",
		"src_styles_hljs_dark_min_js"
	],
	"./darkula.js": [
		"./src/styles/hljs/darkula.js",
		"src_styles_hljs_darkula_js"
	],
	"./default-style.js": [
		"./src/styles/hljs/default-style.js"
	],
	"./default.min.js": [
		"./src/styles/hljs/default.min.js",
		"src_styles_hljs_default_min_js"
	],
	"./devibeans.js": [
		"./src/styles/hljs/devibeans.js",
		"src_styles_hljs_devibeans_js"
	],
	"./devibeans.min.js": [
		"./src/styles/hljs/devibeans.min.js",
		"src_styles_hljs_devibeans_min_js"
	],
	"./docco.js": [
		"./src/styles/hljs/docco.js",
		"src_styles_hljs_docco_js"
	],
	"./docco.min.js": [
		"./src/styles/hljs/docco.min.js",
		"src_styles_hljs_docco_min_js"
	],
	"./dracula.js": [
		"./src/styles/hljs/dracula.js",
		"src_styles_hljs_dracula_js"
	],
	"./far.js": [
		"./src/styles/hljs/far.js",
		"src_styles_hljs_far_js"
	],
	"./far.min.js": [
		"./src/styles/hljs/far.min.js",
		"src_styles_hljs_far_min_js"
	],
	"./felipec.js": [
		"./src/styles/hljs/felipec.js",
		"src_styles_hljs_felipec_js"
	],
	"./felipec.min.js": [
		"./src/styles/hljs/felipec.min.js",
		"src_styles_hljs_felipec_min_js"
	],
	"./foundation.js": [
		"./src/styles/hljs/foundation.js",
		"src_styles_hljs_foundation_js"
	],
	"./foundation.min.js": [
		"./src/styles/hljs/foundation.min.js",
		"src_styles_hljs_foundation_min_js"
	],
	"./github-dark-dimmed.js": [
		"./src/styles/hljs/github-dark-dimmed.js",
		"src_styles_hljs_github-dark-dimmed_js"
	],
	"./github-dark-dimmed.min.js": [
		"./src/styles/hljs/github-dark-dimmed.min.js",
		"src_styles_hljs_github-dark-dimmed_min_js"
	],
	"./github-dark.js": [
		"./src/styles/hljs/github-dark.js",
		"src_styles_hljs_github-dark_js"
	],
	"./github-dark.min.js": [
		"./src/styles/hljs/github-dark.min.js",
		"src_styles_hljs_github-dark_min_js"
	],
	"./github-gist.js": [
		"./src/styles/hljs/github-gist.js",
		"src_styles_hljs_github-gist_js"
	],
	"./github.js": [
		"./src/styles/hljs/github.js",
		"src_styles_hljs_github_js"
	],
	"./github.min.js": [
		"./src/styles/hljs/github.min.js",
		"src_styles_hljs_github_min_js"
	],
	"./gml.js": [
		"./src/styles/hljs/gml.js",
		"src_styles_hljs_gml_js"
	],
	"./gml.min.js": [
		"./src/styles/hljs/gml.min.js",
		"src_styles_hljs_gml_min_js"
	],
	"./googlecode.js": [
		"./src/styles/hljs/googlecode.js",
		"src_styles_hljs_googlecode_js"
	],
	"./googlecode.min.js": [
		"./src/styles/hljs/googlecode.min.js",
		"src_styles_hljs_googlecode_min_js"
	],
	"./gradient-dark.js": [
		"./src/styles/hljs/gradient-dark.js",
		"src_styles_hljs_gradient-dark_js"
	],
	"./gradient-dark.min.js": [
		"./src/styles/hljs/gradient-dark.min.js",
		"src_styles_hljs_gradient-dark_min_js"
	],
	"./gradient-light.js": [
		"./src/styles/hljs/gradient-light.js",
		"src_styles_hljs_gradient-light_js"
	],
	"./gradient-light.min.js": [
		"./src/styles/hljs/gradient-light.min.js",
		"src_styles_hljs_gradient-light_min_js"
	],
	"./grayscale.js": [
		"./src/styles/hljs/grayscale.js",
		"src_styles_hljs_grayscale_js"
	],
	"./grayscale.min.js": [
		"./src/styles/hljs/grayscale.min.js",
		"src_styles_hljs_grayscale_min_js"
	],
	"./gruvbox-dark.js": [
		"./src/styles/hljs/gruvbox-dark.js",
		"src_styles_hljs_gruvbox-dark_js"
	],
	"./gruvbox-light.js": [
		"./src/styles/hljs/gruvbox-light.js",
		"src_styles_hljs_gruvbox-light_js"
	],
	"./hopscotch.js": [
		"./src/styles/hljs/hopscotch.js",
		"src_styles_hljs_hopscotch_js"
	],
	"./hybrid.js": [
		"./src/styles/hljs/hybrid.js",
		"src_styles_hljs_hybrid_js"
	],
	"./hybrid.min.js": [
		"./src/styles/hljs/hybrid.min.js",
		"src_styles_hljs_hybrid_min_js"
	],
	"./idea.js": [
		"./src/styles/hljs/idea.js",
		"src_styles_hljs_idea_js"
	],
	"./idea.min.js": [
		"./src/styles/hljs/idea.min.js",
		"src_styles_hljs_idea_min_js"
	],
	"./index.js": [
		"./src/styles/hljs/index.js",
		"src_styles_hljs_index_js"
	],
	"./intellij-light.js": [
		"./src/styles/hljs/intellij-light.js",
		"src_styles_hljs_intellij-light_js"
	],
	"./intellij-light.min.js": [
		"./src/styles/hljs/intellij-light.min.js",
		"src_styles_hljs_intellij-light_min_js"
	],
	"./ir-black.js": [
		"./src/styles/hljs/ir-black.js",
		"src_styles_hljs_ir-black_js"
	],
	"./ir-black.min.js": [
		"./src/styles/hljs/ir-black.min.js",
		"src_styles_hljs_ir-black_min_js"
	],
	"./isbl-editor-dark.js": [
		"./src/styles/hljs/isbl-editor-dark.js",
		"src_styles_hljs_isbl-editor-dark_js"
	],
	"./isbl-editor-dark.min.js": [
		"./src/styles/hljs/isbl-editor-dark.min.js",
		"src_styles_hljs_isbl-editor-dark_min_js"
	],
	"./isbl-editor-light.js": [
		"./src/styles/hljs/isbl-editor-light.js",
		"src_styles_hljs_isbl-editor-light_js"
	],
	"./isbl-editor-light.min.js": [
		"./src/styles/hljs/isbl-editor-light.min.js",
		"src_styles_hljs_isbl-editor-light_min_js"
	],
	"./kimbie-dark.js": [
		"./src/styles/hljs/kimbie-dark.js",
		"src_styles_hljs_kimbie-dark_js"
	],
	"./kimbie-dark.min.js": [
		"./src/styles/hljs/kimbie-dark.min.js",
		"src_styles_hljs_kimbie-dark_min_js"
	],
	"./kimbie-light.js": [
		"./src/styles/hljs/kimbie-light.js",
		"src_styles_hljs_kimbie-light_js"
	],
	"./kimbie-light.min.js": [
		"./src/styles/hljs/kimbie-light.min.js",
		"src_styles_hljs_kimbie-light_min_js"
	],
	"./kimbie.dark.js": [
		"./src/styles/hljs/kimbie.dark.js",
		"src_styles_hljs_kimbie_dark_js"
	],
	"./kimbie.light.js": [
		"./src/styles/hljs/kimbie.light.js",
		"src_styles_hljs_kimbie_light_js"
	],
	"./lightfair.js": [
		"./src/styles/hljs/lightfair.js",
		"src_styles_hljs_lightfair_js"
	],
	"./lightfair.min.js": [
		"./src/styles/hljs/lightfair.min.js",
		"src_styles_hljs_lightfair_min_js"
	],
	"./lioshi.js": [
		"./src/styles/hljs/lioshi.js",
		"src_styles_hljs_lioshi_js"
	],
	"./lioshi.min.js": [
		"./src/styles/hljs/lioshi.min.js",
		"src_styles_hljs_lioshi_min_js"
	],
	"./magula.js": [
		"./src/styles/hljs/magula.js",
		"src_styles_hljs_magula_js"
	],
	"./magula.min.js": [
		"./src/styles/hljs/magula.min.js",
		"src_styles_hljs_magula_min_js"
	],
	"./mono-blue.js": [
		"./src/styles/hljs/mono-blue.js",
		"src_styles_hljs_mono-blue_js"
	],
	"./mono-blue.min.js": [
		"./src/styles/hljs/mono-blue.min.js",
		"src_styles_hljs_mono-blue_min_js"
	],
	"./monokai-sublime.js": [
		"./src/styles/hljs/monokai-sublime.js",
		"src_styles_hljs_monokai-sublime_js"
	],
	"./monokai-sublime.min.js": [
		"./src/styles/hljs/monokai-sublime.min.js",
		"src_styles_hljs_monokai-sublime_min_js"
	],
	"./monokai.js": [
		"./src/styles/hljs/monokai.js",
		"src_styles_hljs_monokai_js"
	],
	"./monokai.min.js": [
		"./src/styles/hljs/monokai.min.js",
		"src_styles_hljs_monokai_min_js"
	],
	"./night-owl.js": [
		"./src/styles/hljs/night-owl.js",
		"src_styles_hljs_night-owl_js"
	],
	"./night-owl.min.js": [
		"./src/styles/hljs/night-owl.min.js",
		"src_styles_hljs_night-owl_min_js"
	],
	"./nnfx-dark.js": [
		"./src/styles/hljs/nnfx-dark.js",
		"src_styles_hljs_nnfx-dark_js"
	],
	"./nnfx-dark.min.js": [
		"./src/styles/hljs/nnfx-dark.min.js",
		"src_styles_hljs_nnfx-dark_min_js"
	],
	"./nnfx-light.js": [
		"./src/styles/hljs/nnfx-light.js",
		"src_styles_hljs_nnfx-light_js"
	],
	"./nnfx-light.min.js": [
		"./src/styles/hljs/nnfx-light.min.js",
		"src_styles_hljs_nnfx-light_min_js"
	],
	"./nnfx.js": [
		"./src/styles/hljs/nnfx.js",
		"src_styles_hljs_nnfx_js"
	],
	"./nord.js": [
		"./src/styles/hljs/nord.js",
		"src_styles_hljs_nord_js"
	],
	"./nord.min.js": [
		"./src/styles/hljs/nord.min.js",
		"src_styles_hljs_nord_min_js"
	],
	"./obsidian.js": [
		"./src/styles/hljs/obsidian.js",
		"src_styles_hljs_obsidian_js"
	],
	"./obsidian.min.js": [
		"./src/styles/hljs/obsidian.min.js",
		"src_styles_hljs_obsidian_min_js"
	],
	"./ocean.js": [
		"./src/styles/hljs/ocean.js",
		"src_styles_hljs_ocean_js"
	],
	"./panda-syntax-dark.js": [
		"./src/styles/hljs/panda-syntax-dark.js",
		"src_styles_hljs_panda-syntax-dark_js"
	],
	"./panda-syntax-dark.min.js": [
		"./src/styles/hljs/panda-syntax-dark.min.js",
		"src_styles_hljs_panda-syntax-dark_min_js"
	],
	"./panda-syntax-light.js": [
		"./src/styles/hljs/panda-syntax-light.js",
		"src_styles_hljs_panda-syntax-light_js"
	],
	"./panda-syntax-light.min.js": [
		"./src/styles/hljs/panda-syntax-light.min.js",
		"src_styles_hljs_panda-syntax-light_min_js"
	],
	"./paraiso-dark.js": [
		"./src/styles/hljs/paraiso-dark.js",
		"src_styles_hljs_paraiso-dark_js"
	],
	"./paraiso-dark.min.js": [
		"./src/styles/hljs/paraiso-dark.min.js",
		"src_styles_hljs_paraiso-dark_min_js"
	],
	"./paraiso-light.js": [
		"./src/styles/hljs/paraiso-light.js",
		"src_styles_hljs_paraiso-light_js"
	],
	"./paraiso-light.min.js": [
		"./src/styles/hljs/paraiso-light.min.js",
		"src_styles_hljs_paraiso-light_min_js"
	],
	"./pojoaque.js": [
		"./src/styles/hljs/pojoaque.js",
		"src_styles_hljs_pojoaque_js"
	],
	"./pojoaque.min.js": [
		"./src/styles/hljs/pojoaque.min.js",
		"src_styles_hljs_pojoaque_min_js"
	],
	"./purebasic.js": [
		"./src/styles/hljs/purebasic.js",
		"src_styles_hljs_purebasic_js"
	],
	"./purebasic.min.js": [
		"./src/styles/hljs/purebasic.min.js",
		"src_styles_hljs_purebasic_min_js"
	],
	"./qtcreator-dark.js": [
		"./src/styles/hljs/qtcreator-dark.js",
		"src_styles_hljs_qtcreator-dark_js"
	],
	"./qtcreator-dark.min.js": [
		"./src/styles/hljs/qtcreator-dark.min.js",
		"src_styles_hljs_qtcreator-dark_min_js"
	],
	"./qtcreator-light.js": [
		"./src/styles/hljs/qtcreator-light.js",
		"src_styles_hljs_qtcreator-light_js"
	],
	"./qtcreator-light.min.js": [
		"./src/styles/hljs/qtcreator-light.min.js",
		"src_styles_hljs_qtcreator-light_min_js"
	],
	"./qtcreator_dark.js": [
		"./src/styles/hljs/qtcreator_dark.js",
		"src_styles_hljs_qtcreator_dark_js"
	],
	"./qtcreator_light.js": [
		"./src/styles/hljs/qtcreator_light.js",
		"src_styles_hljs_qtcreator_light_js"
	],
	"./railscasts.js": [
		"./src/styles/hljs/railscasts.js",
		"src_styles_hljs_railscasts_js"
	],
	"./rainbow.js": [
		"./src/styles/hljs/rainbow.js",
		"src_styles_hljs_rainbow_js"
	],
	"./rainbow.min.js": [
		"./src/styles/hljs/rainbow.min.js",
		"src_styles_hljs_rainbow_min_js"
	],
	"./routeros.js": [
		"./src/styles/hljs/routeros.js",
		"src_styles_hljs_routeros_js"
	],
	"./routeros.min.js": [
		"./src/styles/hljs/routeros.min.js",
		"src_styles_hljs_routeros_min_js"
	],
	"./school-book.js": [
		"./src/styles/hljs/school-book.js",
		"src_styles_hljs_school-book_js"
	],
	"./school-book.min.js": [
		"./src/styles/hljs/school-book.min.js",
		"src_styles_hljs_school-book_min_js"
	],
	"./shades-of-purple.js": [
		"./src/styles/hljs/shades-of-purple.js",
		"src_styles_hljs_shades-of-purple_js"
	],
	"./shades-of-purple.min.js": [
		"./src/styles/hljs/shades-of-purple.min.js",
		"src_styles_hljs_shades-of-purple_min_js"
	],
	"./solarized-dark.js": [
		"./src/styles/hljs/solarized-dark.js",
		"src_styles_hljs_solarized-dark_js"
	],
	"./solarized-light.js": [
		"./src/styles/hljs/solarized-light.js",
		"src_styles_hljs_solarized-light_js"
	],
	"./srcery.js": [
		"./src/styles/hljs/srcery.js",
		"src_styles_hljs_srcery_js"
	],
	"./srcery.min.js": [
		"./src/styles/hljs/srcery.min.js",
		"src_styles_hljs_srcery_min_js"
	],
	"./stackoverflow-dark.js": [
		"./src/styles/hljs/stackoverflow-dark.js",
		"src_styles_hljs_stackoverflow-dark_js"
	],
	"./stackoverflow-dark.min.js": [
		"./src/styles/hljs/stackoverflow-dark.min.js",
		"src_styles_hljs_stackoverflow-dark_min_js"
	],
	"./stackoverflow-light.js": [
		"./src/styles/hljs/stackoverflow-light.js",
		"src_styles_hljs_stackoverflow-light_js"
	],
	"./stackoverflow-light.min.js": [
		"./src/styles/hljs/stackoverflow-light.min.js",
		"src_styles_hljs_stackoverflow-light_min_js"
	],
	"./sunburst.js": [
		"./src/styles/hljs/sunburst.js",
		"src_styles_hljs_sunburst_js"
	],
	"./sunburst.min.js": [
		"./src/styles/hljs/sunburst.min.js",
		"src_styles_hljs_sunburst_min_js"
	],
	"./tokyo-night-dark.js": [
		"./src/styles/hljs/tokyo-night-dark.js",
		"src_styles_hljs_tokyo-night-dark_js"
	],
	"./tokyo-night-dark.min.js": [
		"./src/styles/hljs/tokyo-night-dark.min.js",
		"src_styles_hljs_tokyo-night-dark_min_js"
	],
	"./tokyo-night-light.js": [
		"./src/styles/hljs/tokyo-night-light.js",
		"src_styles_hljs_tokyo-night-light_js"
	],
	"./tokyo-night-light.min.js": [
		"./src/styles/hljs/tokyo-night-light.min.js",
		"src_styles_hljs_tokyo-night-light_min_js"
	],
	"./tomorrow-night-blue.js": [
		"./src/styles/hljs/tomorrow-night-blue.js",
		"src_styles_hljs_tomorrow-night-blue_js"
	],
	"./tomorrow-night-blue.min.js": [
		"./src/styles/hljs/tomorrow-night-blue.min.js",
		"src_styles_hljs_tomorrow-night-blue_min_js"
	],
	"./tomorrow-night-bright.js": [
		"./src/styles/hljs/tomorrow-night-bright.js",
		"src_styles_hljs_tomorrow-night-bright_js"
	],
	"./tomorrow-night-bright.min.js": [
		"./src/styles/hljs/tomorrow-night-bright.min.js",
		"src_styles_hljs_tomorrow-night-bright_min_js"
	],
	"./tomorrow-night-eighties.js": [
		"./src/styles/hljs/tomorrow-night-eighties.js",
		"src_styles_hljs_tomorrow-night-eighties_js"
	],
	"./tomorrow-night.js": [
		"./src/styles/hljs/tomorrow-night.js",
		"src_styles_hljs_tomorrow-night_js"
	],
	"./tomorrow.js": [
		"./src/styles/hljs/tomorrow.js",
		"src_styles_hljs_tomorrow_js"
	],
	"./vs.js": [
		"./src/styles/hljs/vs.js",
		"src_styles_hljs_vs_js"
	],
	"./vs.min.js": [
		"./src/styles/hljs/vs.min.js",
		"src_styles_hljs_vs_min_js"
	],
	"./vs2015.js": [
		"./src/styles/hljs/vs2015.js",
		"src_styles_hljs_vs2015_js"
	],
	"./vs2015.min.js": [
		"./src/styles/hljs/vs2015.min.js",
		"src_styles_hljs_vs2015_min_js"
	],
	"./xcode.js": [
		"./src/styles/hljs/xcode.js",
		"src_styles_hljs_xcode_js"
	],
	"./xcode.min.js": [
		"./src/styles/hljs/xcode.min.js",
		"src_styles_hljs_xcode_min_js"
	],
	"./xt256.js": [
		"./src/styles/hljs/xt256.js",
		"src_styles_hljs_xt256_js"
	],
	"./xt256.min.js": [
		"./src/styles/hljs/xt256.min.js",
		"src_styles_hljs_xt256_min_js"
	],
	"./zenburn.js": [
		"./src/styles/hljs/zenburn.js",
		"src_styles_hljs_zenburn_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/styles/hljs lazy recursive ^\\.\\/.*\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/highlight.js/lib/core.js":
/*!***********************************************!*\
  !*** ./node_modules/highlight.js/lib/core.js ***!
  \***********************************************/
/***/ ((module) => {

/* eslint-disable no-multi-assign */

function deepFreeze(obj) {
  if (obj instanceof Map) {
    obj.clear =
      obj.delete =
      obj.set =
        function () {
          throw new Error('map is read-only');
        };
  } else if (obj instanceof Set) {
    obj.add =
      obj.clear =
      obj.delete =
        function () {
          throw new Error('set is read-only');
        };
  }

  // Freeze self
  Object.freeze(obj);

  Object.getOwnPropertyNames(obj).forEach((name) => {
    const prop = obj[name];
    const type = typeof prop;

    // Freeze prop if it is an object or function and also not already frozen
    if ((type === 'object' || type === 'function') && !Object.isFrozen(prop)) {
      deepFreeze(prop);
    }
  });

  return obj;
}

/** @typedef {import('highlight.js').CallbackResponse} CallbackResponse */
/** @typedef {import('highlight.js').CompiledMode} CompiledMode */
/** @implements CallbackResponse */

class Response {
  /**
   * @param {CompiledMode} mode
   */
  constructor(mode) {
    // eslint-disable-next-line no-undefined
    if (mode.data === undefined) mode.data = {};

    this.data = mode.data;
    this.isMatchIgnored = false;
  }

  ignoreMatch() {
    this.isMatchIgnored = true;
  }
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeHTML(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

/**
 * performs a shallow merge of multiple objects into one
 *
 * @template T
 * @param {T} original
 * @param {Record<string,any>[]} objects
 * @returns {T} a single new object
 */
function inherit$1(original, ...objects) {
  /** @type Record<string,any> */
  const result = Object.create(null);

  for (const key in original) {
    result[key] = original[key];
  }
  objects.forEach(function(obj) {
    for (const key in obj) {
      result[key] = obj[key];
    }
  });
  return /** @type {T} */ (result);
}

/**
 * @typedef {object} Renderer
 * @property {(text: string) => void} addText
 * @property {(node: Node) => void} openNode
 * @property {(node: Node) => void} closeNode
 * @property {() => string} value
 */

/** @typedef {{scope?: string, language?: string, sublanguage?: boolean}} Node */
/** @typedef {{walk: (r: Renderer) => void}} Tree */
/** */

const SPAN_CLOSE = '</span>';

/**
 * Determines if a node needs to be wrapped in <span>
 *
 * @param {Node} node */
const emitsWrappingTags = (node) => {
  // rarely we can have a sublanguage where language is undefined
  // TODO: track down why
  return !!node.scope;
};

/**
 *
 * @param {string} name
 * @param {{prefix:string}} options
 */
const scopeToCSSClass = (name, { prefix }) => {
  // sub-language
  if (name.startsWith("language:")) {
    return name.replace("language:", "language-");
  }
  // tiered scope: comment.line
  if (name.includes(".")) {
    const pieces = name.split(".");
    return [
      `${prefix}${pieces.shift()}`,
      ...(pieces.map((x, i) => `${x}${"_".repeat(i + 1)}`))
    ].join(" ");
  }
  // simple scope
  return `${prefix}${name}`;
};

/** @type {Renderer} */
class HTMLRenderer {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(parseTree, options) {
    this.buffer = "";
    this.classPrefix = options.classPrefix;
    parseTree.walk(this);
  }

  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(text) {
    this.buffer += escapeHTML(text);
  }

  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(node) {
    if (!emitsWrappingTags(node)) return;

    const className = scopeToCSSClass(node.scope,
      { prefix: this.classPrefix });
    this.span(className);
  }

  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(node) {
    if (!emitsWrappingTags(node)) return;

    this.buffer += SPAN_CLOSE;
  }

  /**
   * returns the accumulated buffer
  */
  value() {
    return this.buffer;
  }

  // helpers

  /**
   * Builds a span element
   *
   * @param {string} className */
  span(className) {
    this.buffer += `<span class="${className}">`;
  }
}

/** @typedef {{scope?: string, language?: string, children: Node[]} | string} Node */
/** @typedef {{scope?: string, language?: string, children: Node[]} } DataNode */
/** @typedef {import('highlight.js').Emitter} Emitter */
/**  */

/** @returns {DataNode} */
const newNode = (opts = {}) => {
  /** @type DataNode */
  const result = { children: [] };
  Object.assign(result, opts);
  return result;
};

class TokenTree {
  constructor() {
    /** @type DataNode */
    this.rootNode = newNode();
    this.stack = [this.rootNode];
  }

  get top() {
    return this.stack[this.stack.length - 1];
  }

  get root() { return this.rootNode; }

  /** @param {Node} node */
  add(node) {
    this.top.children.push(node);
  }

  /** @param {string} scope */
  openNode(scope) {
    /** @type Node */
    const node = newNode({ scope });
    this.add(node);
    this.stack.push(node);
  }

  closeNode() {
    if (this.stack.length > 1) {
      return this.stack.pop();
    }
    // eslint-disable-next-line no-undefined
    return undefined;
  }

  closeAllNodes() {
    while (this.closeNode());
  }

  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }

  /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */
  walk(builder) {
    // this does not
    return this.constructor._walk(builder, this.rootNode);
    // this works
    // return TokenTree._walk(builder, this.rootNode);
  }

  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
  static _walk(builder, node) {
    if (typeof node === "string") {
      builder.addText(node);
    } else if (node.children) {
      builder.openNode(node);
      node.children.forEach((child) => this._walk(builder, child));
      builder.closeNode(node);
    }
    return builder;
  }

  /**
   * @param {Node} node
   */
  static _collapse(node) {
    if (typeof node === "string") return;
    if (!node.children) return;

    if (node.children.every(el => typeof el === "string")) {
      // node.text = node.children.join("");
      // delete node.children;
      node.children = [node.children.join("")];
    } else {
      node.children.forEach((child) => {
        TokenTree._collapse(child);
      });
    }
  }
}

/**
  Currently this is all private API, but this is the minimal API necessary
  that an Emitter must implement to fully support the parser.

  Minimal interface:

  - addText(text)
  - __addSublanguage(emitter, subLanguageName)
  - startScope(scope)
  - endScope()
  - finalize()
  - toHTML()

*/

/**
 * @implements {Emitter}
 */
class TokenTreeEmitter extends TokenTree {
  /**
   * @param {*} options
   */
  constructor(options) {
    super();
    this.options = options;
  }

  /**
   * @param {string} text
   */
  addText(text) {
    if (text === "") { return; }

    this.add(text);
  }

  /** @param {string} scope */
  startScope(scope) {
    this.openNode(scope);
  }

  endScope() {
    this.closeNode();
  }

  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  __addSublanguage(emitter, name) {
    /** @type DataNode */
    const node = emitter.root;
    if (name) node.scope = `language:${name}`;

    this.add(node);
  }

  toHTML() {
    const renderer = new HTMLRenderer(this, this.options);
    return renderer.value();
  }

  finalize() {
    this.closeAllNodes();
    return true;
  }
}

/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function lookahead(re) {
  return concat('(?=', re, ')');
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function anyNumberOfTimes(re) {
  return concat('(?:', re, ')*');
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function optional(re) {
  return concat('(?:', re, ')?');
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

/**
 * @param { Array<string | RegExp | Object> } args
 * @returns {object}
 */
function stripOptionsFromArgs(args) {
  const opts = args[args.length - 1];

  if (typeof opts === 'object' && opts.constructor === Object) {
    args.splice(args.length - 1, 1);
    return opts;
  } else {
    return {};
  }
}

/** @typedef { {capture?: boolean} } RegexEitherOptions */

/**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] | [...(RegExp | string)[], RegexEitherOptions]} args
 * @returns {string}
 */
function either(...args) {
  /** @type { object & {capture?: boolean} }  */
  const opts = stripOptionsFromArgs(args);
  const joined = '('
    + (opts.capture ? "" : "?:")
    + args.map((x) => source(x)).join("|") + ")";
  return joined;
}

/**
 * @param {RegExp | string} re
 * @returns {number}
 */
function countMatchGroups(re) {
  return (new RegExp(re.toString() + '|')).exec('').length - 1;
}

/**
 * Does lexeme start with a regular expression match at the beginning
 * @param {RegExp} re
 * @param {string} lexeme
 */
function startsWith(re, lexeme) {
  const match = re && re.exec(lexeme);
  return match && match.index === 0;
}

// BACKREF_RE matches an open parenthesis or backreference. To avoid
// an incorrect parse, it additionally matches the following:
// - [...] elements, where the meaning of parentheses and escapes change
// - other escape sequences, so we do not misparse escape sequences as
//   interesting elements
// - non-matching or lookahead parentheses, which do not capture. These
//   follow the '(' with a '?'.
const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

// **INTERNAL** Not intended for outside usage
// join logically computes regexps.join(separator), but fixes the
// backreferences so they continue to match.
// it also places each individual regular expression into it's own
// match group, keeping track of the sequencing of those match groups
// is currently an exercise for the caller. :-)
/**
 * @param {(string | RegExp)[]} regexps
 * @param {{joinWith: string}} opts
 * @returns {string}
 */
function _rewriteBackreferences(regexps, { joinWith }) {
  let numCaptures = 0;

  return regexps.map((regex) => {
    numCaptures += 1;
    const offset = numCaptures;
    let re = source(regex);
    let out = '';

    while (re.length > 0) {
      const match = BACKREF_RE.exec(re);
      if (!match) {
        out += re;
        break;
      }
      out += re.substring(0, match.index);
      re = re.substring(match.index + match[0].length);
      if (match[0][0] === '\\' && match[1]) {
        // Adjust the backreference.
        out += '\\' + String(Number(match[1]) + offset);
      } else {
        out += match[0];
        if (match[0] === '(') {
          numCaptures++;
        }
      }
    }
    return out;
  }).map(re => `(${re})`).join(joinWith);
}

/** @typedef {import('highlight.js').Mode} Mode */
/** @typedef {import('highlight.js').ModeCallback} ModeCallback */

// Common regexps
const MATCH_NOTHING_RE = /\b\B/;
const IDENT_RE = '[a-zA-Z]\\w*';
const UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
const NUMBER_RE = '\\b\\d+(\\.\\d+)?';
const C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
const BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
const RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

/**
* @param { Partial<Mode> & {binary?: string | RegExp} } opts
*/
const SHEBANG = (opts = {}) => {
  const beginShebang = /^#![ ]*\//;
  if (opts.binary) {
    opts.begin = concat(
      beginShebang,
      /.*\b/,
      opts.binary,
      /\b.*/);
  }
  return inherit$1({
    scope: 'meta',
    begin: beginShebang,
    end: /$/,
    relevance: 0,
    /** @type {ModeCallback} */
    "on:begin": (m, resp) => {
      if (m.index !== 0) resp.ignoreMatch();
    }
  }, opts);
};

// Common modes
const BACKSLASH_ESCAPE = {
  begin: '\\\\[\\s\\S]', relevance: 0
};
const APOS_STRING_MODE = {
  scope: 'string',
  begin: '\'',
  end: '\'',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
};
const QUOTE_STRING_MODE = {
  scope: 'string',
  begin: '"',
  end: '"',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
};
const PHRASAL_WORDS_MODE = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
};
/**
 * Creates a comment mode
 *
 * @param {string | RegExp} begin
 * @param {string | RegExp} end
 * @param {Mode | {}} [modeOptions]
 * @returns {Partial<Mode>}
 */
const COMMENT = function(begin, end, modeOptions = {}) {
  const mode = inherit$1(
    {
      scope: 'comment',
      begin,
      end,
      contains: []
    },
    modeOptions
  );
  mode.contains.push({
    scope: 'doctag',
    // hack to avoid the space from being included. the space is necessary to
    // match here to prevent the plain text rule below from gobbling up doctags
    begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
    excludeBegin: true,
    relevance: 0
  });
  const ENGLISH_WORD = either(
    // list of common 1 and 2 letter words in English
    "I",
    "a",
    "is",
    "so",
    "us",
    "to",
    "at",
    "if",
    "in",
    "it",
    "on",
    // note: this is not an exhaustive list of contractions, just popular ones
    /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, // contractions - can't we'd they're let's, etc
    /[A-Za-z]+[-][a-z]+/, // `no-way`, etc.
    /[A-Za-z][a-z]{2,}/ // allow capitalized words at beginning of sentences
  );
  // looking like plain text, more likely to be a comment
  mode.contains.push(
    {
      // TODO: how to include ", (, ) without breaking grammars that use these for
      // comment delimiters?
      // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
      // ---

      // this tries to find sequences of 3 english words in a row (without any
      // "programming" type syntax) this gives us a strong signal that we've
      // TRULY found a comment - vs perhaps scanning with the wrong language.
      // It's possible to find something that LOOKS like the start of the
      // comment - but then if there is no readable text - good chance it is a
      // false match and not a comment.
      //
      // for a visual example please see:
      // https://github.com/highlightjs/highlight.js/issues/2827

      begin: concat(
        /[ ]+/, // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
        '(',
        ENGLISH_WORD,
        /[.]?[:]?([.][ ]|[ ])/,
        '){3}') // look for 3 words in a row
    }
  );
  return mode;
};
const C_LINE_COMMENT_MODE = COMMENT('//', '$');
const C_BLOCK_COMMENT_MODE = COMMENT('/\\*', '\\*/');
const HASH_COMMENT_MODE = COMMENT('#', '$');
const NUMBER_MODE = {
  scope: 'number',
  begin: NUMBER_RE,
  relevance: 0
};
const C_NUMBER_MODE = {
  scope: 'number',
  begin: C_NUMBER_RE,
  relevance: 0
};
const BINARY_NUMBER_MODE = {
  scope: 'number',
  begin: BINARY_NUMBER_RE,
  relevance: 0
};
const REGEXP_MODE = {
  scope: "regexp",
  begin: /\/(?=[^/\n]*\/)/,
  end: /\/[gimuy]*/,
  contains: [
    BACKSLASH_ESCAPE,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [BACKSLASH_ESCAPE]
    }
  ]
};
const TITLE_MODE = {
  scope: 'title',
  begin: IDENT_RE,
  relevance: 0
};
const UNDERSCORE_TITLE_MODE = {
  scope: 'title',
  begin: UNDERSCORE_IDENT_RE,
  relevance: 0
};
const METHOD_GUARD = {
  // excludes method names from keyword processing
  begin: '\\.\\s*' + UNDERSCORE_IDENT_RE,
  relevance: 0
};

/**
 * Adds end same as begin mechanics to a mode
 *
 * Your mode must include at least a single () match group as that first match
 * group is what is used for comparison
 * @param {Partial<Mode>} mode
 */
const END_SAME_AS_BEGIN = function(mode) {
  return Object.assign(mode,
    {
      /** @type {ModeCallback} */
      'on:begin': (m, resp) => { resp.data._beginMatch = m[1]; },
      /** @type {ModeCallback} */
      'on:end': (m, resp) => { if (resp.data._beginMatch !== m[1]) resp.ignoreMatch(); }
    });
};

var MODES = /*#__PURE__*/Object.freeze({
  __proto__: null,
  APOS_STRING_MODE: APOS_STRING_MODE,
  BACKSLASH_ESCAPE: BACKSLASH_ESCAPE,
  BINARY_NUMBER_MODE: BINARY_NUMBER_MODE,
  BINARY_NUMBER_RE: BINARY_NUMBER_RE,
  COMMENT: COMMENT,
  C_BLOCK_COMMENT_MODE: C_BLOCK_COMMENT_MODE,
  C_LINE_COMMENT_MODE: C_LINE_COMMENT_MODE,
  C_NUMBER_MODE: C_NUMBER_MODE,
  C_NUMBER_RE: C_NUMBER_RE,
  END_SAME_AS_BEGIN: END_SAME_AS_BEGIN,
  HASH_COMMENT_MODE: HASH_COMMENT_MODE,
  IDENT_RE: IDENT_RE,
  MATCH_NOTHING_RE: MATCH_NOTHING_RE,
  METHOD_GUARD: METHOD_GUARD,
  NUMBER_MODE: NUMBER_MODE,
  NUMBER_RE: NUMBER_RE,
  PHRASAL_WORDS_MODE: PHRASAL_WORDS_MODE,
  QUOTE_STRING_MODE: QUOTE_STRING_MODE,
  REGEXP_MODE: REGEXP_MODE,
  RE_STARTERS_RE: RE_STARTERS_RE,
  SHEBANG: SHEBANG,
  TITLE_MODE: TITLE_MODE,
  UNDERSCORE_IDENT_RE: UNDERSCORE_IDENT_RE,
  UNDERSCORE_TITLE_MODE: UNDERSCORE_TITLE_MODE
});

/**
@typedef {import('highlight.js').CallbackResponse} CallbackResponse
@typedef {import('highlight.js').CompilerExt} CompilerExt
*/

// Grammar extensions / plugins
// See: https://github.com/highlightjs/highlight.js/issues/2833

// Grammar extensions allow "syntactic sugar" to be added to the grammar modes
// without requiring any underlying changes to the compiler internals.

// `compileMatch` being the perfect small example of now allowing a grammar
// author to write `match` when they desire to match a single expression rather
// than being forced to use `begin`.  The extension then just moves `match` into
// `begin` when it runs.  Ie, no features have been added, but we've just made
// the experience of writing (and reading grammars) a little bit nicer.

// ------

// TODO: We need negative look-behind support to do this properly
/**
 * Skip a match if it has a preceding dot
 *
 * This is used for `beginKeywords` to prevent matching expressions such as
 * `bob.keyword.do()`. The mode compiler automatically wires this up as a
 * special _internal_ 'on:begin' callback for modes with `beginKeywords`
 * @param {RegExpMatchArray} match
 * @param {CallbackResponse} response
 */
function skipIfHasPrecedingDot(match, response) {
  const before = match.input[match.index - 1];
  if (before === ".") {
    response.ignoreMatch();
  }
}

/**
 *
 * @type {CompilerExt}
 */
function scopeClassName(mode, _parent) {
  // eslint-disable-next-line no-undefined
  if (mode.className !== undefined) {
    mode.scope = mode.className;
    delete mode.className;
  }
}

/**
 * `beginKeywords` syntactic sugar
 * @type {CompilerExt}
 */
function beginKeywords(mode, parent) {
  if (!parent) return;
  if (!mode.beginKeywords) return;

  // for languages with keywords that include non-word characters checking for
  // a word boundary is not sufficient, so instead we check for a word boundary
  // or whitespace - this does no harm in any case since our keyword engine
  // doesn't allow spaces in keywords anyways and we still check for the boundary
  // first
  mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)';
  mode.__beforeBegin = skipIfHasPrecedingDot;
  mode.keywords = mode.keywords || mode.beginKeywords;
  delete mode.beginKeywords;

  // prevents double relevance, the keywords themselves provide
  // relevance, the mode doesn't need to double it
  // eslint-disable-next-line no-undefined
  if (mode.relevance === undefined) mode.relevance = 0;
}

/**
 * Allow `illegal` to contain an array of illegal values
 * @type {CompilerExt}
 */
function compileIllegal(mode, _parent) {
  if (!Array.isArray(mode.illegal)) return;

  mode.illegal = either(...mode.illegal);
}

/**
 * `match` to match a single expression for readability
 * @type {CompilerExt}
 */
function compileMatch(mode, _parent) {
  if (!mode.match) return;
  if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");

  mode.begin = mode.match;
  delete mode.match;
}

/**
 * provides the default 1 relevance to all modes
 * @type {CompilerExt}
 */
function compileRelevance(mode, _parent) {
  // eslint-disable-next-line no-undefined
  if (mode.relevance === undefined) mode.relevance = 1;
}

// allow beforeMatch to act as a "qualifier" for the match
// the full match begin must be [beforeMatch][begin]
const beforeMatchExt = (mode, parent) => {
  if (!mode.beforeMatch) return;
  // starts conflicts with endsParent which we need to make sure the child
  // rule is not matched multiple times
  if (mode.starts) throw new Error("beforeMatch cannot be used with starts");

  const originalMode = Object.assign({}, mode);
  Object.keys(mode).forEach((key) => { delete mode[key]; });

  mode.keywords = originalMode.keywords;
  mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
  mode.starts = {
    relevance: 0,
    contains: [
      Object.assign(originalMode, { endsParent: true })
    ]
  };
  mode.relevance = 0;

  delete originalMode.beforeMatch;
};

// keywords that should have no default relevance value
const COMMON_KEYWORDS = [
  'of',
  'and',
  'for',
  'in',
  'not',
  'or',
  'if',
  'then',
  'parent', // common variable name
  'list', // common variable name
  'value' // common variable name
];

const DEFAULT_KEYWORD_SCOPE = "keyword";

/**
 * Given raw keywords from a language definition, compile them.
 *
 * @param {string | Record<string,string|string[]> | Array<string>} rawKeywords
 * @param {boolean} caseInsensitive
 */
function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
  /** @type {import("highlight.js/private").KeywordDict} */
  const compiledKeywords = Object.create(null);

  // input can be a string of keywords, an array of keywords, or a object with
  // named keys representing scopeName (which can then point to a string or array)
  if (typeof rawKeywords === 'string') {
    compileList(scopeName, rawKeywords.split(" "));
  } else if (Array.isArray(rawKeywords)) {
    compileList(scopeName, rawKeywords);
  } else {
    Object.keys(rawKeywords).forEach(function(scopeName) {
      // collapse all our objects back into the parent object
      Object.assign(
        compiledKeywords,
        compileKeywords(rawKeywords[scopeName], caseInsensitive, scopeName)
      );
    });
  }
  return compiledKeywords;

  // ---

  /**
   * Compiles an individual list of keywords
   *
   * Ex: "for if when while|5"
   *
   * @param {string} scopeName
   * @param {Array<string>} keywordList
   */
  function compileList(scopeName, keywordList) {
    if (caseInsensitive) {
      keywordList = keywordList.map(x => x.toLowerCase());
    }
    keywordList.forEach(function(keyword) {
      const pair = keyword.split('|');
      compiledKeywords[pair[0]] = [scopeName, scoreForKeyword(pair[0], pair[1])];
    });
  }
}

/**
 * Returns the proper score for a given keyword
 *
 * Also takes into account comment keywords, which will be scored 0 UNLESS
 * another score has been manually assigned.
 * @param {string} keyword
 * @param {string} [providedScore]
 */
function scoreForKeyword(keyword, providedScore) {
  // manual scores always win over common keywords
  // so you can force a score of 1 if you really insist
  if (providedScore) {
    return Number(providedScore);
  }

  return commonKeyword(keyword) ? 0 : 1;
}

/**
 * Determines if a given keyword is common or not
 *
 * @param {string} keyword */
function commonKeyword(keyword) {
  return COMMON_KEYWORDS.includes(keyword.toLowerCase());
}

/*

For the reasoning behind this please see:
https://github.com/highlightjs/highlight.js/issues/2880#issuecomment-747275419

*/

/**
 * @type {Record<string, boolean>}
 */
const seenDeprecations = {};

/**
 * @param {string} message
 */
const error = (message) => {
  console.error(message);
};

/**
 * @param {string} message
 * @param {any} args
 */
const warn = (message, ...args) => {
  console.log(`WARN: ${message}`, ...args);
};

/**
 * @param {string} version
 * @param {string} message
 */
const deprecated = (version, message) => {
  if (seenDeprecations[`${version}/${message}`]) return;

  console.log(`Deprecated as of ${version}. ${message}`);
  seenDeprecations[`${version}/${message}`] = true;
};

/* eslint-disable no-throw-literal */

/**
@typedef {import('highlight.js').CompiledMode} CompiledMode
*/

const MultiClassError = new Error();

/**
 * Renumbers labeled scope names to account for additional inner match
 * groups that otherwise would break everything.
 *
 * Lets say we 3 match scopes:
 *
 *   { 1 => ..., 2 => ..., 3 => ... }
 *
 * So what we need is a clean match like this:
 *
 *   (a)(b)(c) => [ "a", "b", "c" ]
 *
 * But this falls apart with inner match groups:
 *
 * (a)(((b)))(c) => ["a", "b", "b", "b", "c" ]
 *
 * Our scopes are now "out of alignment" and we're repeating `b` 3 times.
 * What needs to happen is the numbers are remapped:
 *
 *   { 1 => ..., 2 => ..., 5 => ... }
 *
 * We also need to know that the ONLY groups that should be output
 * are 1, 2, and 5.  This function handles this behavior.
 *
 * @param {CompiledMode} mode
 * @param {Array<RegExp | string>} regexes
 * @param {{key: "beginScope"|"endScope"}} opts
 */
function remapScopeNames(mode, regexes, { key }) {
  let offset = 0;
  const scopeNames = mode[key];
  /** @type Record<number,boolean> */
  const emit = {};
  /** @type Record<number,string> */
  const positions = {};

  for (let i = 1; i <= regexes.length; i++) {
    positions[i + offset] = scopeNames[i];
    emit[i + offset] = true;
    offset += countMatchGroups(regexes[i - 1]);
  }
  // we use _emit to keep track of which match groups are "top-level" to avoid double
  // output from inside match groups
  mode[key] = positions;
  mode[key]._emit = emit;
  mode[key]._multi = true;
}

/**
 * @param {CompiledMode} mode
 */
function beginMultiClass(mode) {
  if (!Array.isArray(mode.begin)) return;

  if (mode.skip || mode.excludeBegin || mode.returnBegin) {
    error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
    throw MultiClassError;
  }

  if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
    error("beginScope must be object");
    throw MultiClassError;
  }

  remapScopeNames(mode, mode.begin, { key: "beginScope" });
  mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
}

/**
 * @param {CompiledMode} mode
 */
function endMultiClass(mode) {
  if (!Array.isArray(mode.end)) return;

  if (mode.skip || mode.excludeEnd || mode.returnEnd) {
    error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
    throw MultiClassError;
  }

  if (typeof mode.endScope !== "object" || mode.endScope === null) {
    error("endScope must be object");
    throw MultiClassError;
  }

  remapScopeNames(mode, mode.end, { key: "endScope" });
  mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
}

/**
 * this exists only to allow `scope: {}` to be used beside `match:`
 * Otherwise `beginScope` would necessary and that would look weird

  {
    match: [ /def/, /\w+/ ]
    scope: { 1: "keyword" , 2: "title" }
  }

 * @param {CompiledMode} mode
 */
function scopeSugar(mode) {
  if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
    mode.beginScope = mode.scope;
    delete mode.scope;
  }
}

/**
 * @param {CompiledMode} mode
 */
function MultiClass(mode) {
  scopeSugar(mode);

  if (typeof mode.beginScope === "string") {
    mode.beginScope = { _wrap: mode.beginScope };
  }
  if (typeof mode.endScope === "string") {
    mode.endScope = { _wrap: mode.endScope };
  }

  beginMultiClass(mode);
  endMultiClass(mode);
}

/**
@typedef {import('highlight.js').Mode} Mode
@typedef {import('highlight.js').CompiledMode} CompiledMode
@typedef {import('highlight.js').Language} Language
@typedef {import('highlight.js').HLJSPlugin} HLJSPlugin
@typedef {import('highlight.js').CompiledLanguage} CompiledLanguage
*/

// compilation

/**
 * Compiles a language definition result
 *
 * Given the raw result of a language definition (Language), compiles this so
 * that it is ready for highlighting code.
 * @param {Language} language
 * @returns {CompiledLanguage}
 */
function compileLanguage(language) {
  /**
   * Builds a regex with the case sensitivity of the current language
   *
   * @param {RegExp | string} value
   * @param {boolean} [global]
   */
  function langRe(value, global) {
    return new RegExp(
      source(value),
      'm'
      + (language.case_insensitive ? 'i' : '')
      + (language.unicodeRegex ? 'u' : '')
      + (global ? 'g' : '')
    );
  }

  /**
    Stores multiple regular expressions and allows you to quickly search for
    them all in a string simultaneously - returning the first match.  It does
    this by creating a huge (a|b|c) regex - each individual item wrapped with ()
    and joined by `|` - using match groups to track position.  When a match is
    found checking which position in the array has content allows us to figure
    out which of the original regexes / match groups triggered the match.

    The match object itself (the result of `Regex.exec`) is returned but also
    enhanced by merging in any meta-data that was registered with the regex.
    This is how we keep track of which mode matched, and what type of rule
    (`illegal`, `begin`, end, etc).
  */
  class MultiRegex {
    constructor() {
      this.matchIndexes = {};
      // @ts-ignore
      this.regexes = [];
      this.matchAt = 1;
      this.position = 0;
    }

    // @ts-ignore
    addRule(re, opts) {
      opts.position = this.position++;
      // @ts-ignore
      this.matchIndexes[this.matchAt] = opts;
      this.regexes.push([opts, re]);
      this.matchAt += countMatchGroups(re) + 1;
    }

    compile() {
      if (this.regexes.length === 0) {
        // avoids the need to check length every time exec is called
        // @ts-ignore
        this.exec = () => null;
      }
      const terminators = this.regexes.map(el => el[1]);
      this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: '|' }), true);
      this.lastIndex = 0;
    }

    /** @param {string} s */
    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex;
      const match = this.matcherRe.exec(s);
      if (!match) { return null; }

      // eslint-disable-next-line no-undefined
      const i = match.findIndex((el, i) => i > 0 && el !== undefined);
      // @ts-ignore
      const matchData = this.matchIndexes[i];
      // trim off any earlier non-relevant match groups (ie, the other regex
      // match groups that make up the multi-matcher)
      match.splice(0, i);

      return Object.assign(match, matchData);
    }
  }

  /*
    Created to solve the key deficiently with MultiRegex - there is no way to
    test for multiple matches at a single location.  Why would we need to do
    that?  In the future a more dynamic engine will allow certain matches to be
    ignored.  An example: if we matched say the 3rd regex in a large group but
    decided to ignore it - we'd need to started testing again at the 4th
    regex... but MultiRegex itself gives us no real way to do that.

    So what this class creates MultiRegexs on the fly for whatever search
    position they are needed.

    NOTE: These additional MultiRegex objects are created dynamically.  For most
    grammars most of the time we will never actually need anything more than the
    first MultiRegex - so this shouldn't have too much overhead.

    Say this is our search group, and we match regex3, but wish to ignore it.

      regex1 | regex2 | regex3 | regex4 | regex5    ' ie, startAt = 0

    What we need is a new MultiRegex that only includes the remaining
    possibilities:

      regex4 | regex5                               ' ie, startAt = 3

    This class wraps all that complexity up in a simple API... `startAt` decides
    where in the array of expressions to start doing the matching. It
    auto-increments, so if a match is found at position 2, then startAt will be
    set to 3.  If the end is reached startAt will return to 0.

    MOST of the time the parser will be setting startAt manually to 0.
  */
  class ResumableMultiRegex {
    constructor() {
      // @ts-ignore
      this.rules = [];
      // @ts-ignore
      this.multiRegexes = [];
      this.count = 0;

      this.lastIndex = 0;
      this.regexIndex = 0;
    }

    // @ts-ignore
    getMatcher(index) {
      if (this.multiRegexes[index]) return this.multiRegexes[index];

      const matcher = new MultiRegex();
      this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
      matcher.compile();
      this.multiRegexes[index] = matcher;
      return matcher;
    }

    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }

    considerAll() {
      this.regexIndex = 0;
    }

    // @ts-ignore
    addRule(re, opts) {
      this.rules.push([re, opts]);
      if (opts.type === "begin") this.count++;
    }

    /** @param {string} s */
    exec(s) {
      const m = this.getMatcher(this.regexIndex);
      m.lastIndex = this.lastIndex;
      let result = m.exec(s);

      // The following is because we have no easy way to say "resume scanning at the
      // existing position but also skip the current rule ONLY". What happens is
      // all prior rules are also skipped which can result in matching the wrong
      // thing. Example of matching "booger":

      // our matcher is [string, "booger", number]
      //
      // ....booger....

      // if "booger" is ignored then we'd really need a regex to scan from the
      // SAME position for only: [string, number] but ignoring "booger" (if it
      // was the first match), a simple resume would scan ahead who knows how
      // far looking only for "number", ignoring potential string matches (or
      // future "booger" matches that might be valid.)

      // So what we do: We execute two matchers, one resuming at the same
      // position, but the second full matcher starting at the position after:

      //     /--- resume first regex match here (for [number])
      //     |/---- full match here for [string, "booger", number]
      //     vv
      // ....booger....

      // Which ever results in a match first is then used. So this 3-4 step
      // process essentially allows us to say "match at this position, excluding
      // a prior rule that was ignored".
      //
      // 1. Match "booger" first, ignore. Also proves that [string] does non match.
      // 2. Resume matching for [number]
      // 3. Match at index + 1 for [string, "booger", number]
      // 4. If #2 and #3 result in matches, which came first?
      if (this.resumingScanAtSamePosition()) {
        if (result && result.index === this.lastIndex) ; else { // use the second matcher result
          const m2 = this.getMatcher(0);
          m2.lastIndex = this.lastIndex + 1;
          result = m2.exec(s);
        }
      }

      if (result) {
        this.regexIndex += result.position + 1;
        if (this.regexIndex === this.count) {
          // wrap-around to considering all matches again
          this.considerAll();
        }
      }

      return result;
    }
  }

  /**
   * Given a mode, builds a huge ResumableMultiRegex that can be used to walk
   * the content and find matches.
   *
   * @param {CompiledMode} mode
   * @returns {ResumableMultiRegex}
   */
  function buildModeRegex(mode) {
    const mm = new ResumableMultiRegex();

    mode.contains.forEach(term => mm.addRule(term.begin, { rule: term, type: "begin" }));

    if (mode.terminatorEnd) {
      mm.addRule(mode.terminatorEnd, { type: "end" });
    }
    if (mode.illegal) {
      mm.addRule(mode.illegal, { type: "illegal" });
    }

    return mm;
  }

  /** skip vs abort vs ignore
   *
   * @skip   - The mode is still entered and exited normally (and contains rules apply),
   *           but all content is held and added to the parent buffer rather than being
   *           output when the mode ends.  Mostly used with `sublanguage` to build up
   *           a single large buffer than can be parsed by sublanguage.
   *
   *             - The mode begin ands ends normally.
   *             - Content matched is added to the parent mode buffer.
   *             - The parser cursor is moved forward normally.
   *
   * @abort  - A hack placeholder until we have ignore.  Aborts the mode (as if it
   *           never matched) but DOES NOT continue to match subsequent `contains`
   *           modes.  Abort is bad/suboptimal because it can result in modes
   *           farther down not getting applied because an earlier rule eats the
   *           content but then aborts.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is added to the mode buffer.
   *             - The parser cursor is moved forward accordingly.
   *
   * @ignore - Ignores the mode (as if it never matched) and continues to match any
   *           subsequent `contains` modes.  Ignore isn't technically possible with
   *           the current parser implementation.
   *
   *             - The mode does not begin.
   *             - Content matched by `begin` is ignored.
   *             - The parser cursor is not moved forward.
   */

  /**
   * Compiles an individual mode
   *
   * This can raise an error if the mode contains certain detectable known logic
   * issues.
   * @param {Mode} mode
   * @param {CompiledMode | null} [parent]
   * @returns {CompiledMode | never}
   */
  function compileMode(mode, parent) {
    const cmode = /** @type CompiledMode */ (mode);
    if (mode.isCompiled) return cmode;

    [
      scopeClassName,
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      compileMatch,
      MultiClass,
      beforeMatchExt
    ].forEach(ext => ext(mode, parent));

    language.compilerExtensions.forEach(ext => ext(mode, parent));

    // __beforeBegin is considered private API, internal use only
    mode.__beforeBegin = null;

    [
      beginKeywords,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      compileIllegal,
      // default to 1 relevance if not specified
      compileRelevance
    ].forEach(ext => ext(mode, parent));

    mode.isCompiled = true;

    let keywordPattern = null;
    if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
      // we need a copy because keywords might be compiled multiple times
      // so we can't go deleting $pattern from the original on the first
      // pass
      mode.keywords = Object.assign({}, mode.keywords);
      keywordPattern = mode.keywords.$pattern;
      delete mode.keywords.$pattern;
    }
    keywordPattern = keywordPattern || /\w+/;

    if (mode.keywords) {
      mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
    }

    cmode.keywordPatternRe = langRe(keywordPattern, true);

    if (parent) {
      if (!mode.begin) mode.begin = /\B|\b/;
      cmode.beginRe = langRe(cmode.begin);
      if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
      if (mode.end) cmode.endRe = langRe(cmode.end);
      cmode.terminatorEnd = source(cmode.end) || '';
      if (mode.endsWithParent && parent.terminatorEnd) {
        cmode.terminatorEnd += (mode.end ? '|' : '') + parent.terminatorEnd;
      }
    }
    if (mode.illegal) cmode.illegalRe = langRe(/** @type {RegExp | string} */ (mode.illegal));
    if (!mode.contains) mode.contains = [];

    mode.contains = [].concat(...mode.contains.map(function(c) {
      return expandOrCloneMode(c === 'self' ? mode : c);
    }));
    mode.contains.forEach(function(c) { compileMode(/** @type Mode */ (c), cmode); });

    if (mode.starts) {
      compileMode(mode.starts, parent);
    }

    cmode.matcher = buildModeRegex(cmode);
    return cmode;
  }

  if (!language.compilerExtensions) language.compilerExtensions = [];

  // self is not valid at the top-level
  if (language.contains && language.contains.includes('self')) {
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  }

  // we need a null object, which inherit will guarantee
  language.classNameAliases = inherit$1(language.classNameAliases || {});

  return compileMode(/** @type Mode */ (language));
}

/**
 * Determines if a mode has a dependency on it's parent or not
 *
 * If a mode does have a parent dependency then often we need to clone it if
 * it's used in multiple places so that each copy points to the correct parent,
 * where-as modes without a parent can often safely be re-used at the bottom of
 * a mode chain.
 *
 * @param {Mode | null} mode
 * @returns {boolean} - is there a dependency on the parent?
 * */
function dependencyOnParent(mode) {
  if (!mode) return false;

  return mode.endsWithParent || dependencyOnParent(mode.starts);
}

/**
 * Expands a mode or clones it if necessary
 *
 * This is necessary for modes with parental dependenceis (see notes on
 * `dependencyOnParent`) and for nodes that have `variants` - which must then be
 * exploded into their own individual modes at compile time.
 *
 * @param {Mode} mode
 * @returns {Mode | Mode[]}
 * */
function expandOrCloneMode(mode) {
  if (mode.variants && !mode.cachedVariants) {
    mode.cachedVariants = mode.variants.map(function(variant) {
      return inherit$1(mode, { variants: null }, variant);
    });
  }

  // EXPAND
  // if we have variants then essentially "replace" the mode with the variants
  // this happens in compileMode, where this function is called from
  if (mode.cachedVariants) {
    return mode.cachedVariants;
  }

  // CLONE
  // if we have dependencies on parents then we need a unique
  // instance of ourselves, so we can be reused with many
  // different parents without issue
  if (dependencyOnParent(mode)) {
    return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
  }

  if (Object.isFrozen(mode)) {
    return inherit$1(mode);
  }

  // no special dependency issues, just return ourselves
  return mode;
}

var version = "11.9.0";

class HTMLInjectionError extends Error {
  constructor(reason, html) {
    super(reason);
    this.name = "HTMLInjectionError";
    this.html = html;
  }
}

/*
Syntax highlighting with language autodetection.
https://highlightjs.org/
*/



/**
@typedef {import('highlight.js').Mode} Mode
@typedef {import('highlight.js').CompiledMode} CompiledMode
@typedef {import('highlight.js').CompiledScope} CompiledScope
@typedef {import('highlight.js').Language} Language
@typedef {import('highlight.js').HLJSApi} HLJSApi
@typedef {import('highlight.js').HLJSPlugin} HLJSPlugin
@typedef {import('highlight.js').PluginEvent} PluginEvent
@typedef {import('highlight.js').HLJSOptions} HLJSOptions
@typedef {import('highlight.js').LanguageFn} LanguageFn
@typedef {import('highlight.js').HighlightedHTMLElement} HighlightedHTMLElement
@typedef {import('highlight.js').BeforeHighlightContext} BeforeHighlightContext
@typedef {import('highlight.js/private').MatchType} MatchType
@typedef {import('highlight.js/private').KeywordData} KeywordData
@typedef {import('highlight.js/private').EnhancedMatch} EnhancedMatch
@typedef {import('highlight.js/private').AnnotatedError} AnnotatedError
@typedef {import('highlight.js').AutoHighlightResult} AutoHighlightResult
@typedef {import('highlight.js').HighlightOptions} HighlightOptions
@typedef {import('highlight.js').HighlightResult} HighlightResult
*/


const escape = escapeHTML;
const inherit = inherit$1;
const NO_MATCH = Symbol("nomatch");
const MAX_KEYWORD_HITS = 7;

/**
 * @param {any} hljs - object that is extended (legacy)
 * @returns {HLJSApi}
 */
const HLJS = function(hljs) {
  // Global internal variables used within the highlight.js library.
  /** @type {Record<string, Language>} */
  const languages = Object.create(null);
  /** @type {Record<string, string>} */
  const aliases = Object.create(null);
  /** @type {HLJSPlugin[]} */
  const plugins = [];

  // safe/production mode - swallows more errors, tries to keep running
  // even if a single syntax or parse hits a fatal error
  let SAFE_MODE = true;
  const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
  /** @type {Language} */
  const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: 'Plain text', contains: [] };

  // Global options used when within external APIs. This is modified when
  // calling the `hljs.configure` function.
  /** @type HLJSOptions */
  let options = {
    ignoreUnescapedHTML: false,
    throwUnescapedHTML: false,
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: 'hljs-',
    cssSelector: 'pre code',
    languages: null,
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
    __emitter: TokenTreeEmitter
  };

  /* Utility functions */

  /**
   * Tests a language name to see if highlighting should be skipped
   * @param {string} languageName
   */
  function shouldNotHighlight(languageName) {
    return options.noHighlightRe.test(languageName);
  }

  /**
   * @param {HighlightedHTMLElement} block - the HTML element to determine language for
   */
  function blockLanguage(block) {
    let classes = block.className + ' ';

    classes += block.parentNode ? block.parentNode.className : '';

    // language-* takes precedence over non-prefixed class names.
    const match = options.languageDetectRe.exec(classes);
    if (match) {
      const language = getLanguage(match[1]);
      if (!language) {
        warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
        warn("Falling back to no-highlight mode for this block.", block);
      }
      return language ? match[1] : 'no-highlight';
    }

    return classes
      .split(/\s+/)
      .find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
  }

  /**
   * Core highlighting function.
   *
   * OLD API
   * highlight(lang, code, ignoreIllegals, continuation)
   *
   * NEW API
   * highlight(code, {lang, ignoreIllegals})
   *
   * @param {string} codeOrLanguageName - the language to use for highlighting
   * @param {string | HighlightOptions} optionsOrCode - the code to highlight
   * @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   *
   * @returns {HighlightResult} Result - an object that represents the result
   * @property {string} language - the language name
   * @property {number} relevance - the relevance score
   * @property {string} value - the highlighted HTML code
   * @property {string} code - the original raw code
   * @property {CompiledMode} top - top of the current mode stack
   * @property {boolean} illegal - indicates whether any illegal matches were found
  */
  function highlight(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
    let code = "";
    let languageName = "";
    if (typeof optionsOrCode === "object") {
      code = codeOrLanguageName;
      ignoreIllegals = optionsOrCode.ignoreIllegals;
      languageName = optionsOrCode.language;
    } else {
      // old API
      deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
      deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
      languageName = codeOrLanguageName;
      code = optionsOrCode;
    }

    // https://github.com/highlightjs/highlight.js/issues/3149
    // eslint-disable-next-line no-undefined
    if (ignoreIllegals === undefined) { ignoreIllegals = true; }

    /** @type {BeforeHighlightContext} */
    const context = {
      code,
      language: languageName
    };
    // the plugin can change the desired language or the code to be highlighted
    // just be changing the object it was passed
    fire("before:highlight", context);

    // a before plugin can usurp the result completely by providing it's own
    // in which case we don't even need to call highlight
    const result = context.result
      ? context.result
      : _highlight(context.language, context.code, ignoreIllegals);

    result.code = context.code;
    // the plugin can change anything in result to suite it
    fire("after:highlight", result);

    return result;
  }

  /**
   * private highlight that's used internally and does not fire callbacks
   *
   * @param {string} languageName - the language to use for highlighting
   * @param {string} codeToHighlight - the code to highlight
   * @param {boolean?} [ignoreIllegals] - whether to ignore illegal matches, default is to bail
   * @param {CompiledMode?} [continuation] - current continuation mode, if any
   * @returns {HighlightResult} - result of the highlight operation
  */
  function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
    const keywordHits = Object.create(null);

    /**
     * Return keyword data if a match is a keyword
     * @param {CompiledMode} mode - current mode
     * @param {string} matchText - the textual match
     * @returns {KeywordData | false}
     */
    function keywordData(mode, matchText) {
      return mode.keywords[matchText];
    }

    function processKeywords() {
      if (!top.keywords) {
        emitter.addText(modeBuffer);
        return;
      }

      let lastIndex = 0;
      top.keywordPatternRe.lastIndex = 0;
      let match = top.keywordPatternRe.exec(modeBuffer);
      let buf = "";

      while (match) {
        buf += modeBuffer.substring(lastIndex, match.index);
        const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
        const data = keywordData(top, word);
        if (data) {
          const [kind, keywordRelevance] = data;
          emitter.addText(buf);
          buf = "";

          keywordHits[word] = (keywordHits[word] || 0) + 1;
          if (keywordHits[word] <= MAX_KEYWORD_HITS) relevance += keywordRelevance;
          if (kind.startsWith("_")) {
            // _ implied for relevance only, do not highlight
            // by applying a class name
            buf += match[0];
          } else {
            const cssClass = language.classNameAliases[kind] || kind;
            emitKeyword(match[0], cssClass);
          }
        } else {
          buf += match[0];
        }
        lastIndex = top.keywordPatternRe.lastIndex;
        match = top.keywordPatternRe.exec(modeBuffer);
      }
      buf += modeBuffer.substring(lastIndex);
      emitter.addText(buf);
    }

    function processSubLanguage() {
      if (modeBuffer === "") return;
      /** @type HighlightResult */
      let result = null;

      if (typeof top.subLanguage === 'string') {
        if (!languages[top.subLanguage]) {
          emitter.addText(modeBuffer);
          return;
        }
        result = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
        continuations[top.subLanguage] = /** @type {CompiledMode} */ (result._top);
      } else {
        result = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
      }

      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Use case in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        relevance += result.relevance;
      }
      emitter.__addSublanguage(result._emitter, result.language);
    }

    function processBuffer() {
      if (top.subLanguage != null) {
        processSubLanguage();
      } else {
        processKeywords();
      }
      modeBuffer = '';
    }

    /**
     * @param {string} text
     * @param {string} scope
     */
    function emitKeyword(keyword, scope) {
      if (keyword === "") return;

      emitter.startScope(scope);
      emitter.addText(keyword);
      emitter.endScope();
    }

    /**
     * @param {CompiledScope} scope
     * @param {RegExpMatchArray} match
     */
    function emitMultiClass(scope, match) {
      let i = 1;
      const max = match.length - 1;
      while (i <= max) {
        if (!scope._emit[i]) { i++; continue; }
        const klass = language.classNameAliases[scope[i]] || scope[i];
        const text = match[i];
        if (klass) {
          emitKeyword(text, klass);
        } else {
          modeBuffer = text;
          processKeywords();
          modeBuffer = "";
        }
        i++;
      }
    }

    /**
     * @param {CompiledMode} mode - new mode to start
     * @param {RegExpMatchArray} match
     */
    function startNewMode(mode, match) {
      if (mode.scope && typeof mode.scope === "string") {
        emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
      }
      if (mode.beginScope) {
        // beginScope just wraps the begin match itself in a scope
        if (mode.beginScope._wrap) {
          emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
          modeBuffer = "";
        } else if (mode.beginScope._multi) {
          // at this point modeBuffer should just be the match
          emitMultiClass(mode.beginScope, match);
          modeBuffer = "";
        }
      }

      top = Object.create(mode, { parent: { value: top } });
      return top;
    }

    /**
     * @param {CompiledMode } mode - the mode to potentially end
     * @param {RegExpMatchArray} match - the latest match
     * @param {string} matchPlusRemainder - match plus remainder of content
     * @returns {CompiledMode | void} - the next mode, or if void continue on in current mode
     */
    function endOfMode(mode, match, matchPlusRemainder) {
      let matched = startsWith(mode.endRe, matchPlusRemainder);

      if (matched) {
        if (mode["on:end"]) {
          const resp = new Response(mode);
          mode["on:end"](match, resp);
          if (resp.isMatchIgnored) matched = false;
        }

        if (matched) {
          while (mode.endsParent && mode.parent) {
            mode = mode.parent;
          }
          return mode;
        }
      }
      // even if on:end fires an `ignore` it's still possible
      // that we might trigger the end node because of a parent mode
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, match, matchPlusRemainder);
      }
    }

    /**
     * Handle matching but then ignoring a sequence of text
     *
     * @param {string} lexeme - string containing full match text
     */
    function doIgnore(lexeme) {
      if (top.matcher.regexIndex === 0) {
        // no more regexes to potentially match here, so we move the cursor forward one
        // space
        modeBuffer += lexeme[0];
        return 1;
      } else {
        // no need to move the cursor, we still have additional regexes to try and
        // match at this very spot
        resumeScanAtSamePosition = true;
        return 0;
      }
    }

    /**
     * Handle the start of a new potential mode match
     *
     * @param {EnhancedMatch} match - the current match
     * @returns {number} how far to advance the parse cursor
     */
    function doBeginMatch(match) {
      const lexeme = match[0];
      const newMode = match.rule;

      const resp = new Response(newMode);
      // first internal before callbacks, then the public ones
      const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
      for (const cb of beforeCallbacks) {
        if (!cb) continue;
        cb(match, resp);
        if (resp.isMatchIgnored) return doIgnore(lexeme);
      }

      if (newMode.skip) {
        modeBuffer += lexeme;
      } else {
        if (newMode.excludeBegin) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (!newMode.returnBegin && !newMode.excludeBegin) {
          modeBuffer = lexeme;
        }
      }
      startNewMode(newMode, match);
      return newMode.returnBegin ? 0 : lexeme.length;
    }

    /**
     * Handle the potential end of mode
     *
     * @param {RegExpMatchArray} match - the current match
     */
    function doEndMatch(match) {
      const lexeme = match[0];
      const matchPlusRemainder = codeToHighlight.substring(match.index);

      const endMode = endOfMode(top, match, matchPlusRemainder);
      if (!endMode) { return NO_MATCH; }

      const origin = top;
      if (top.endScope && top.endScope._wrap) {
        processBuffer();
        emitKeyword(lexeme, top.endScope._wrap);
      } else if (top.endScope && top.endScope._multi) {
        processBuffer();
        emitMultiClass(top.endScope, match);
      } else if (origin.skip) {
        modeBuffer += lexeme;
      } else {
        if (!(origin.returnEnd || origin.excludeEnd)) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (origin.excludeEnd) {
          modeBuffer = lexeme;
        }
      }
      do {
        if (top.scope) {
          emitter.closeNode();
        }
        if (!top.skip && !top.subLanguage) {
          relevance += top.relevance;
        }
        top = top.parent;
      } while (top !== endMode.parent);
      if (endMode.starts) {
        startNewMode(endMode.starts, match);
      }
      return origin.returnEnd ? 0 : lexeme.length;
    }

    function processContinuations() {
      const list = [];
      for (let current = top; current !== language; current = current.parent) {
        if (current.scope) {
          list.unshift(current.scope);
        }
      }
      list.forEach(item => emitter.openNode(item));
    }

    /** @type {{type?: MatchType, index?: number, rule?: Mode}}} */
    let lastMatch = {};

    /**
     *  Process an individual match
     *
     * @param {string} textBeforeMatch - text preceding the match (since the last match)
     * @param {EnhancedMatch} [match] - the match itself
     */
    function processLexeme(textBeforeMatch, match) {
      const lexeme = match && match[0];

      // add non-matched text to the current mode buffer
      modeBuffer += textBeforeMatch;

      if (lexeme == null) {
        processBuffer();
        return 0;
      }

      // we've found a 0 width match and we're stuck, so we need to advance
      // this happens when we have badly behaved rules that have optional matchers to the degree that
      // sometimes they can end up matching nothing at all
      // Ref: https://github.com/highlightjs/highlight.js/issues/2140
      if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
        // spit the "skipped" character that our regex choked on back into the output sequence
        modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
        if (!SAFE_MODE) {
          /** @type {AnnotatedError} */
          const err = new Error(`0 width match regex (${languageName})`);
          err.languageName = languageName;
          err.badRule = lastMatch.rule;
          throw err;
        }
        return 1;
      }
      lastMatch = match;

      if (match.type === "begin") {
        return doBeginMatch(match);
      } else if (match.type === "illegal" && !ignoreIllegals) {
        // illegal match, we do not continue processing
        /** @type {AnnotatedError} */
        const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || '<unnamed>') + '"');
        err.mode = top;
        throw err;
      } else if (match.type === "end") {
        const processed = doEndMatch(match);
        if (processed !== NO_MATCH) {
          return processed;
        }
      }

      // edge case for when illegal matches $ (end of line) which is technically
      // a 0 width match but not a begin/end match so it's not caught by the
      // first handler (when ignoreIllegals is true)
      if (match.type === "illegal" && lexeme === "") {
        // advance so we aren't stuck in an infinite loop
        return 1;
      }

      // infinite loops are BAD, this is a last ditch catch all. if we have a
      // decent number of iterations yet our index (cursor position in our
      // parsing) still 3x behind our index then something is very wrong
      // so we bail
      if (iterations > 100000 && iterations > match.index * 3) {
        const err = new Error('potential infinite loop, way more iterations than matches');
        throw err;
      }

      /*
      Why might be find ourselves here?  An potential end match that was
      triggered but could not be completed.  IE, `doEndMatch` returned NO_MATCH.
      (this could be because a callback requests the match be ignored, etc)

      This causes no real harm other than stopping a few times too many.
      */

      modeBuffer += lexeme;
      return lexeme.length;
    }

    const language = getLanguage(languageName);
    if (!language) {
      error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
      throw new Error('Unknown language: "' + languageName + '"');
    }

    const md = compileLanguage(language);
    let result = '';
    /** @type {CompiledMode} */
    let top = continuation || md;
    /** @type Record<string,CompiledMode> */
    const continuations = {}; // keep continuations for sub-languages
    const emitter = new options.__emitter(options);
    processContinuations();
    let modeBuffer = '';
    let relevance = 0;
    let index = 0;
    let iterations = 0;
    let resumeScanAtSamePosition = false;

    try {
      if (!language.__emitTokens) {
        top.matcher.considerAll();

        for (;;) {
          iterations++;
          if (resumeScanAtSamePosition) {
            // only regexes not matched previously will now be
            // considered for a potential match
            resumeScanAtSamePosition = false;
          } else {
            top.matcher.considerAll();
          }
          top.matcher.lastIndex = index;

          const match = top.matcher.exec(codeToHighlight);
          // console.log("match", match[0], match.rule && match.rule.begin)

          if (!match) break;

          const beforeMatch = codeToHighlight.substring(index, match.index);
          const processedCount = processLexeme(beforeMatch, match);
          index = match.index + processedCount;
        }
        processLexeme(codeToHighlight.substring(index));
      } else {
        language.__emitTokens(codeToHighlight, emitter);
      }

      emitter.finalize();
      result = emitter.toHTML();

      return {
        language: languageName,
        value: result,
        relevance,
        illegal: false,
        _emitter: emitter,
        _top: top
      };
    } catch (err) {
      if (err.message && err.message.includes('Illegal')) {
        return {
          language: languageName,
          value: escape(codeToHighlight),
          illegal: true,
          relevance: 0,
          _illegalBy: {
            message: err.message,
            index,
            context: codeToHighlight.slice(index - 100, index + 100),
            mode: err.mode,
            resultSoFar: result
          },
          _emitter: emitter
        };
      } else if (SAFE_MODE) {
        return {
          language: languageName,
          value: escape(codeToHighlight),
          illegal: false,
          relevance: 0,
          errorRaised: err,
          _emitter: emitter,
          _top: top
        };
      } else {
        throw err;
      }
    }
  }

  /**
   * returns a valid highlight result, without actually doing any actual work,
   * auto highlight starts with this and it's possible for small snippets that
   * auto-detection may not find a better match
   * @param {string} code
   * @returns {HighlightResult}
   */
  function justTextHighlightResult(code) {
    const result = {
      value: escape(code),
      illegal: false,
      relevance: 0,
      _top: PLAINTEXT_LANGUAGE,
      _emitter: new options.__emitter(options)
    };
    result._emitter.addText(code);
    return result;
  }

  /**
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - value (an HTML string with highlighting markup)
  - secondBest (object with the same structure for second-best heuristically
    detected language, may be absent)

    @param {string} code
    @param {Array<string>} [languageSubset]
    @returns {AutoHighlightResult}
  */
  function highlightAuto(code, languageSubset) {
    languageSubset = languageSubset || options.languages || Object.keys(languages);
    const plaintext = justTextHighlightResult(code);

    const results = languageSubset.filter(getLanguage).filter(autoDetection).map(name =>
      _highlight(name, code, false)
    );
    results.unshift(plaintext); // plaintext is always an option

    const sorted = results.sort((a, b) => {
      // sort base on relevance
      if (a.relevance !== b.relevance) return b.relevance - a.relevance;

      // always award the tie to the base language
      // ie if C++ and Arduino are tied, it's more likely to be C++
      if (a.language && b.language) {
        if (getLanguage(a.language).supersetOf === b.language) {
          return 1;
        } else if (getLanguage(b.language).supersetOf === a.language) {
          return -1;
        }
      }

      // otherwise say they are equal, which has the effect of sorting on
      // relevance while preserving the original ordering - which is how ties
      // have historically been settled, ie the language that comes first always
      // wins in the case of a tie
      return 0;
    });

    const [best, secondBest] = sorted;

    /** @type {AutoHighlightResult} */
    const result = best;
    result.secondBest = secondBest;

    return result;
  }

  /**
   * Builds new class name for block given the language name
   *
   * @param {HTMLElement} element
   * @param {string} [currentLang]
   * @param {string} [resultLang]
   */
  function updateClassName(element, currentLang, resultLang) {
    const language = (currentLang && aliases[currentLang]) || resultLang;

    element.classList.add("hljs");
    element.classList.add(`language-${language}`);
  }

  /**
   * Applies highlighting to a DOM node containing code.
   *
   * @param {HighlightedHTMLElement} element - the HTML element to highlight
  */
  function highlightElement(element) {
    /** @type HTMLElement */
    let node = null;
    const language = blockLanguage(element);

    if (shouldNotHighlight(language)) return;

    fire("before:highlightElement",
      { el: element, language });

    if (element.dataset.highlighted) {
      console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", element);
      return;
    }

    // we should be all text, no child nodes (unescaped HTML) - this is possibly
    // an HTML injection attack - it's likely too late if this is already in
    // production (the code has likely already done its damage by the time
    // we're seeing it)... but we yell loudly about this so that hopefully it's
    // more likely to be caught in development before making it to production
    if (element.children.length > 0) {
      if (!options.ignoreUnescapedHTML) {
        console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
        console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
        console.warn("The element with unescaped HTML:");
        console.warn(element);
      }
      if (options.throwUnescapedHTML) {
        const err = new HTMLInjectionError(
          "One of your code blocks includes unescaped HTML.",
          element.innerHTML
        );
        throw err;
      }
    }

    node = element;
    const text = node.textContent;
    const result = language ? highlight(text, { language, ignoreIllegals: true }) : highlightAuto(text);

    element.innerHTML = result.value;
    element.dataset.highlighted = "yes";
    updateClassName(element, language, result.language);
    element.result = {
      language: result.language,
      // TODO: remove with version 11.0
      re: result.relevance,
      relevance: result.relevance
    };
    if (result.secondBest) {
      element.secondBest = {
        language: result.secondBest.language,
        relevance: result.secondBest.relevance
      };
    }

    fire("after:highlightElement", { el: element, result, text });
  }

  /**
   * Updates highlight.js global options with the passed options
   *
   * @param {Partial<HLJSOptions>} userOptions
   */
  function configure(userOptions) {
    options = inherit(options, userOptions);
  }

  // TODO: remove v12, deprecated
  const initHighlighting = () => {
    highlightAll();
    deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  };

  // TODO: remove v12, deprecated
  function initHighlightingOnLoad() {
    highlightAll();
    deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }

  let wantsHighlight = false;

  /**
   * auto-highlights all pre>code elements on the page
   */
  function highlightAll() {
    // if we are called too early in the loading process
    if (document.readyState === "loading") {
      wantsHighlight = true;
      return;
    }

    const blocks = document.querySelectorAll(options.cssSelector);
    blocks.forEach(highlightElement);
  }

  function boot() {
    // if a highlight was requested before DOM was loaded, do now
    if (wantsHighlight) highlightAll();
  }

  // make sure we are in the browser environment
  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('DOMContentLoaded', boot, false);
  }

  /**
   * Register a language grammar module
   *
   * @param {string} languageName
   * @param {LanguageFn} languageDefinition
   */
  function registerLanguage(languageName, languageDefinition) {
    let lang = null;
    try {
      lang = languageDefinition(hljs);
    } catch (error$1) {
      error("Language definition for '{}' could not be registered.".replace("{}", languageName));
      // hard or soft error
      if (!SAFE_MODE) { throw error$1; } else { error(error$1); }
      // languages that have serious errors are replaced with essentially a
      // "plaintext" stand-in so that the code blocks will still get normal
      // css classes applied to them - and one bad language won't break the
      // entire highlighter
      lang = PLAINTEXT_LANGUAGE;
    }
    // give it a temporary name if it doesn't have one in the meta-data
    if (!lang.name) lang.name = languageName;
    languages[languageName] = lang;
    lang.rawDefinition = languageDefinition.bind(null, hljs);

    if (lang.aliases) {
      registerAliases(lang.aliases, { languageName });
    }
  }

  /**
   * Remove a language grammar module
   *
   * @param {string} languageName
   */
  function unregisterLanguage(languageName) {
    delete languages[languageName];
    for (const alias of Object.keys(aliases)) {
      if (aliases[alias] === languageName) {
        delete aliases[alias];
      }
    }
  }

  /**
   * @returns {string[]} List of language internal names
   */
  function listLanguages() {
    return Object.keys(languages);
  }

  /**
   * @param {string} name - name of the language to retrieve
   * @returns {Language | undefined}
   */
  function getLanguage(name) {
    name = (name || '').toLowerCase();
    return languages[name] || languages[aliases[name]];
  }

  /**
   *
   * @param {string|string[]} aliasList - single alias or list of aliases
   * @param {{languageName: string}} opts
   */
  function registerAliases(aliasList, { languageName }) {
    if (typeof aliasList === 'string') {
      aliasList = [aliasList];
    }
    aliasList.forEach(alias => { aliases[alias.toLowerCase()] = languageName; });
  }

  /**
   * Determines if a given language has auto-detection enabled
   * @param {string} name - name of the language
   */
  function autoDetection(name) {
    const lang = getLanguage(name);
    return lang && !lang.disableAutodetect;
  }

  /**
   * Upgrades the old highlightBlock plugins to the new
   * highlightElement API
   * @param {HLJSPlugin} plugin
   */
  function upgradePluginAPI(plugin) {
    // TODO: remove with v12
    if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
      plugin["before:highlightElement"] = (data) => {
        plugin["before:highlightBlock"](
          Object.assign({ block: data.el }, data)
        );
      };
    }
    if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
      plugin["after:highlightElement"] = (data) => {
        plugin["after:highlightBlock"](
          Object.assign({ block: data.el }, data)
        );
      };
    }
  }

  /**
   * @param {HLJSPlugin} plugin
   */
  function addPlugin(plugin) {
    upgradePluginAPI(plugin);
    plugins.push(plugin);
  }

  /**
   * @param {HLJSPlugin} plugin
   */
  function removePlugin(plugin) {
    const index = plugins.indexOf(plugin);
    if (index !== -1) {
      plugins.splice(index, 1);
    }
  }

  /**
   *
   * @param {PluginEvent} event
   * @param {any} args
   */
  function fire(event, args) {
    const cb = event;
    plugins.forEach(function(plugin) {
      if (plugin[cb]) {
        plugin[cb](args);
      }
    });
  }

  /**
   * DEPRECATED
   * @param {HighlightedHTMLElement} el
   */
  function deprecateHighlightBlock(el) {
    deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
    deprecated("10.7.0", "Please use highlightElement now.");

    return highlightElement(el);
  }

  /* Interface definition */
  Object.assign(hljs, {
    highlight,
    highlightAuto,
    highlightAll,
    highlightElement,
    // TODO: Remove with v12 API
    highlightBlock: deprecateHighlightBlock,
    configure,
    initHighlighting,
    initHighlightingOnLoad,
    registerLanguage,
    unregisterLanguage,
    listLanguages,
    getLanguage,
    registerAliases,
    autoDetection,
    inherit,
    addPlugin,
    removePlugin
  });

  hljs.debugMode = function() { SAFE_MODE = false; };
  hljs.safeMode = function() { SAFE_MODE = true; };
  hljs.versionString = version;

  hljs.regex = {
    concat: concat,
    lookahead: lookahead,
    either: either,
    optional: optional,
    anyNumberOfTimes: anyNumberOfTimes
  };

  for (const key in MODES) {
    // @ts-ignore
    if (typeof MODES[key] === "object") {
      // @ts-ignore
      deepFreeze(MODES[key]);
    }
  }

  // merge all the modes/regexes into our main object
  Object.assign(hljs, MODES);

  return hljs;
};

// Other names for the variable may break build script
const highlight = HLJS({});

// returns a new instance of the highlighter to be used for extensions
// check https://github.com/wooorm/lowlight/issues/47
highlight.newInstance = () => HLJS({});

module.exports = highlight;
highlight.HighlightJS = highlight;
highlight.default = highlight;


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./demo/examples-links.js":
/*!********************************!*\
  !*** ./demo/examples-links.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var ExamplesLinks = function ExamplesLinks() {
  var demos = [{
    label: 'Highlight.js (default)',
    path: ''
  }, {
    label: 'Prism.js',
    path: './prism.html'
  }, {
    label: 'Diff',
    path: './diff.html'
  }, {
    label: 'Virtualized',
    path: './virtualized.html'
  }, {
    label: 'Prism async light',
    path: './prism-async-light.html'
  }];
  var baseLiClass = 'demo-nav__li';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: "demo-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "demo-nav__ul"
  }, demos.map(function (demo) {
    var label = demo.label,
      path = demo.path;
    var currentPath = new URL(window.location.href).pathname.split('/').filter(Boolean).pop();
    var isCurrent = path === "./".concat(currentPath) || !path && currentPath === 'demo';
    var itemClass = isCurrent ? "".concat(baseLiClass, " ").concat(baseLiClass, "--current") : baseLiClass;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: itemClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      className: "demo-nav__a",
      href: path || './'
    }, label));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExamplesLinks);

/***/ }),

/***/ "./demo/index.js":
/*!***********************!*\
  !*** ./demo/index.js ***!
  \***********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/index.js */ "./src/index.js");
/* harmony import */ var _examples_links_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples-links.js */ "./demo/examples-links.js");
/* harmony import */ var _styles_hljs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/hljs.js */ "./demo/styles/hljs.js");
/* harmony import */ var _src_languages_hljs_supported_languages_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/languages/hljs/supported-languages.js */ "./src/languages/hljs/supported-languages.js");




function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }






var availableStyles = _styles_hljs_js__WEBPACK_IMPORTED_MODULE_6__["default"];
var availableLanguages = _src_languages_hljs_supported_languages_js__WEBPACK_IMPORTED_MODULE_7__["default"];
var initialCodeString = "function createStyleObject(classNames, style) {\n  return classNames.reduce((styleObject, className) => {\n    return {...styleObject, ...style[className]};\n  }, {});\n}\n\nfunction createClassNameString(classNames) {\n  return classNames.join(' ');\n}\n\n// this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully\n\nfunction createChildren(style, useInlineStyles) {\n  let childrenCount = 0;\n  return children => {\n    childrenCount += 1;\n    return children.map((child, i) => createElement({\n      node: child,\n      style,\n      useInlineStyles,\n      key:`code-segment-${childrenCount}-${i}`\n    }));\n  }\n}\n\nfunction createElement({ node, style, useInlineStyles, key }) {\n  const { properties, type, tagName, value } = node;\n  if (type === \"text\") {\n    return value;\n  } else if (tagName) {\n    const TagName = tagName;\n    const childrenCreator = createChildren(style, useInlineStyles);\n    const props = (\n      useInlineStyles\n      ? { style: createStyleObject(properties.className, style) }\n      : { className: createClassNameString(properties.className) }\n    );\n    const children = childrenCreator(node.children);\n    return <TagName key={key} {...props}>{children}</TagName>;\n  }\n}\n";
var defaultStyle = await __webpack_require__("./src/styles/hljs lazy recursive ^\\.\\/.*\\.js$")("./".concat(availableStyles[0], ".js")).then(function (x) {
  var _x$default;
  return (_x$default = x === null || x === void 0 ? void 0 : x["default"]) !== null && _x$default !== void 0 ? _x$default : x;
});
var Component = function Component(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
      language: 'javascript',
      selectedStyle: availableStyles[0],
      style: defaultStyle,
      code: initialCodeString,
      showLineNumbers: false,
      wrapLongLines: false
    }),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "demo__root demo__root--default"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("h1", null, "React Syntax Highlighter Demo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_examples_links_js__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("aside", {
    className: "options__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "options__option options__option--language"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("select", {
    className: "select",
    value: state.language,
    onChange: function onChange(e) {
      return setState(function (s) {
        return _objectSpread(_objectSpread({}, s), {}, {
          language: e.target.value
        });
      });
    }
  }, availableLanguages.map(function (l) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("option", {
      key: l,
      value: l
    }, l);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "options__option options__option--theme"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("select", {
    className: "select",
    value: state.selectedStyle,
    onChange: ( /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.mark(function _callee(e) {
        var selectedStyle, style;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              selectedStyle = e.target.value;
              _context.next = 3;
              return __webpack_require__("./src/styles/hljs lazy recursive ^\\.\\/.*\\.js$")("./".concat(selectedStyle, ".js")).then(function (x) {
                var _x$default2;
                return (_x$default2 = x === null || x === void 0 ? void 0 : x["default"]) !== null && _x$default2 !== void 0 ? _x$default2 : x;
              });
            case 3:
              style = _context.sent;
              setState(function (s) {
                return _objectSpread(_objectSpread({}, s), {}, {
                  style: style,
                  selectedStyle: selectedStyle
                });
              });
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }())
  }, availableStyles.map(function (s) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("option", {
      key: s,
      value: s
    }, s);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "options__option options__option--line-numbers"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("label", {
    htmlFor: "showLineNumbers",
    className: "option__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("input", {
    type: "checkbox",
    className: "option__checkbox",
    checked: state.showLineNumbers,
    onChange: function onChange() {
      return setState(function (s) {
        return _objectSpread(_objectSpread({}, s), {}, {
          showLineNumbers: !s.showLineNumbers
        });
      });
    },
    id: "showLineNumbers"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    className: "label__text"
  }, "Show line numbers"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "options__option options__option--wrap-long-lines"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("label", {
    htmlFor: "wrapLongLines",
    className: "option__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("input", {
    type: "checkbox",
    className: "option__checkbox",
    checked: state.wrapLongLines,
    onChange: function onChange() {
      return setState(function (s) {
        return _objectSpread(_objectSpread({}, s), {}, {
          wrapLongLines: !s.wrapLongLines
        });
      });
    },
    id: "wrapLongLines"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    className: "label__text"
  }, "Wrap long lines")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("article", {
    className: "example__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
    className: "textarea__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("textarea", {
    rows: 40,
    value: state.code,
    onChange: function onChange(e) {
      return setState(function (s) {
        return _objectSpread(_objectSpread({}, s), {}, {
          code: e.target.value
        });
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    language: state.language,
    style: state.style,
    showLineNumbers: state.showLineNumbers,
    wrapLongLines: state.wrapLongLines,
    wrapLines: true,
    lineProps: function lineProps(lineNumber) {
      return {
        style: {
          display: 'block',
          cursor: 'pointer'
        },
        onClick: function onClick() {
          alert("Line Number Clicked: ".concat(lineNumber));
        }
      };
    }
  }, state.code))));
};
(0,react_dom__WEBPACK_IMPORTED_MODULE_5__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Component, null), document.getElementById('app'));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ "./demo/styles/hljs.js":
/*!*****************************!*\
  !*** ./demo/styles/hljs.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
// This file has been auto-generated by the `npm run build-styles-hljs` task
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (['a11y-dark', 'a11y-dark.min', 'a11y-light', 'a11y-light.min', 'agate', 'agate.min', 'an-old-hope', 'an-old-hope.min', 'androidstudio', 'androidstudio.min', 'arduino-light', 'arduino-light.min', 'arta', 'arta.min', 'ascetic', 'ascetic.min', 'atom-one-dark', 'atom-one-dark-reasonable', 'atom-one-dark-reasonable.min', 'atom-one-dark.min', 'atom-one-light', 'atom-one-light.min', 'brown-paper', 'brown-paper.min', 'codepen-embed', 'codepen-embed.min', 'color-brewer', 'color-brewer.min', 'dark', 'dark.min', 'default-style', 'default.min', 'devibeans', 'devibeans.min', 'docco', 'docco.min', 'far', 'far.min', 'felipec', 'felipec.min', 'foundation', 'foundation.min', 'github', 'github-dark', 'github-dark-dimmed', 'github-dark-dimmed.min', 'github-dark.min', 'github.min', 'gml', 'gml.min', 'googlecode', 'googlecode.min', 'gradient-dark', 'gradient-dark.min', 'gradient-light', 'gradient-light.min', 'grayscale', 'grayscale.min', 'hybrid', 'hybrid.min', 'idea', 'idea.min', 'intellij-light', 'intellij-light.min', 'ir-black', 'ir-black.min', 'isbl-editor-dark', 'isbl-editor-dark.min', 'isbl-editor-light', 'isbl-editor-light.min', 'kimbie-dark', 'kimbie-dark.min', 'kimbie-light', 'kimbie-light.min', 'lightfair', 'lightfair.min', 'lioshi', 'lioshi.min', 'magula', 'magula.min', 'mono-blue', 'mono-blue.min', 'monokai', 'monokai-sublime', 'monokai-sublime.min', 'monokai.min', 'night-owl', 'night-owl.min', 'nnfx-dark', 'nnfx-dark.min', 'nnfx-light', 'nnfx-light.min', 'nord', 'nord.min', 'obsidian', 'obsidian.min', 'panda-syntax-dark', 'panda-syntax-dark.min', 'panda-syntax-light', 'panda-syntax-light.min', 'paraiso-dark', 'paraiso-dark.min', 'paraiso-light', 'paraiso-light.min', 'pojoaque', 'pojoaque.min', 'purebasic', 'purebasic.min', 'qtcreator-dark', 'qtcreator-dark.min', 'qtcreator-light', 'qtcreator-light.min', 'rainbow', 'rainbow.min', 'routeros', 'routeros.min', 'school-book', 'school-book.min', 'shades-of-purple', 'shades-of-purple.min', 'srcery', 'srcery.min', 'stackoverflow-dark', 'stackoverflow-dark.min', 'stackoverflow-light', 'stackoverflow-light.min', 'sunburst', 'sunburst.min', 'tokyo-night-dark', 'tokyo-night-dark.min', 'tokyo-night-light', 'tokyo-night-light.min', 'tomorrow-night-blue', 'tomorrow-night-blue.min', 'tomorrow-night-bright', 'tomorrow-night-bright.min', 'vs', 'vs.min', 'vs2015', 'vs2015.min', 'xcode', 'xcode.min', 'xt256', 'xt256.min']);

/***/ }),

/***/ "./src/async-languages/create-language-async-loader.js":
/*!*************************************************************!*\
  !*** ./src/async-languages/create-language-async-loader.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (name, loader) {
  return /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__.mark(function _callee(registerLanguage) {
      var module;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return loader();
          case 2:
            module = _context.sent;
            registerLanguage(name, module["default"] || module);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
});

/***/ }),

/***/ "./src/async-languages/hljs.js":
/*!*************************************!*\
  !*** ./src/async-languages/hljs.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-language-async-loader.js */ "./src/async-languages/create-language-async-loader.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  oneC: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("oneC", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_oneC */ "react-syntax-highlighter_languages_highlight_oneC").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/1c */ "./node_modules/highlight.js/es/languages/1c.js"));
  }),
  abnf: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("abnf", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_abnf */ "react-syntax-highlighter_languages_highlight_abnf").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/abnf */ "./node_modules/highlight.js/es/languages/abnf.js"));
  }),
  accesslog: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("accesslog", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_accesslog */ "react-syntax-highlighter_languages_highlight_accesslog").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/accesslog */ "./node_modules/highlight.js/es/languages/accesslog.js"));
  }),
  actionscript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("actionscript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_actionscript */ "react-syntax-highlighter_languages_highlight_actionscript").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/actionscript */ "./node_modules/highlight.js/es/languages/actionscript.js"));
  }),
  ada: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ada", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_ada */ "react-syntax-highlighter_languages_highlight_ada").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/ada */ "./node_modules/highlight.js/es/languages/ada.js"));
  }),
  angelscript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("angelscript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_angelscript */ "react-syntax-highlighter_languages_highlight_angelscript").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/angelscript */ "./node_modules/highlight.js/es/languages/angelscript.js"));
  }),
  apache: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("apache", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_apache */ "react-syntax-highlighter_languages_highlight_apache").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/apache */ "./node_modules/highlight.js/es/languages/apache.js"));
  }),
  applescript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("applescript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_applescript */ "react-syntax-highlighter_languages_highlight_applescript").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/applescript */ "./node_modules/highlight.js/es/languages/applescript.js"));
  }),
  arcade: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("arcade", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_arcade */ "react-syntax-highlighter_languages_highlight_arcade").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/arcade */ "./node_modules/highlight.js/es/languages/arcade.js"));
  }),
  arduino: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("arduino", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_arduino */ "react-syntax-highlighter_languages_highlight_arduino").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/arduino */ "./node_modules/highlight.js/es/languages/arduino.js"));
  }),
  armasm: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("armasm", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_armasm */ "react-syntax-highlighter_languages_highlight_armasm").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/armasm */ "./node_modules/highlight.js/es/languages/armasm.js"));
  }),
  asciidoc: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("asciidoc", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_asciidoc */ "react-syntax-highlighter_languages_highlight_asciidoc").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/asciidoc */ "./node_modules/highlight.js/es/languages/asciidoc.js"));
  }),
  aspectj: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("aspectj", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_aspectj */ "react-syntax-highlighter_languages_highlight_aspectj").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/aspectj */ "./node_modules/highlight.js/es/languages/aspectj.js"));
  }),
  autohotkey: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("autohotkey", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_autohotkey */ "react-syntax-highlighter_languages_highlight_autohotkey").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/autohotkey */ "./node_modules/highlight.js/es/languages/autohotkey.js"));
  }),
  autoit: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("autoit", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_autoit */ "react-syntax-highlighter_languages_highlight_autoit").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/autoit */ "./node_modules/highlight.js/es/languages/autoit.js"));
  }),
  avrasm: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("avrasm", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_avrasm */ "react-syntax-highlighter_languages_highlight_avrasm").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/avrasm */ "./node_modules/highlight.js/es/languages/avrasm.js"));
  }),
  awk: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("awk", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_awk */ "react-syntax-highlighter_languages_highlight_awk").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/awk */ "./node_modules/highlight.js/es/languages/awk.js"));
  }),
  axapta: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("axapta", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_axapta */ "react-syntax-highlighter_languages_highlight_axapta").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/axapta */ "./node_modules/highlight.js/es/languages/axapta.js"));
  }),
  bash: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("bash", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_bash */ "react-syntax-highlighter_languages_highlight_bash").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/bash */ "./node_modules/highlight.js/es/languages/bash.js"));
  }),
  basic: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("basic", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_basic */ "react-syntax-highlighter_languages_highlight_basic").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/basic */ "./node_modules/highlight.js/es/languages/basic.js"));
  }),
  bnf: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("bnf", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_bnf */ "react-syntax-highlighter_languages_highlight_bnf").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/bnf */ "./node_modules/highlight.js/es/languages/bnf.js"));
  }),
  brainfuck: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("brainfuck", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_brainfuck */ "react-syntax-highlighter_languages_highlight_brainfuck").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/brainfuck */ "./node_modules/highlight.js/es/languages/brainfuck.js"));
  }),
  c: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("c", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_c */ "react-syntax-highlighter_languages_highlight_c").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/c */ "./node_modules/highlight.js/es/languages/c.js"));
  }),
  cal: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("cal", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_cal */ "react-syntax-highlighter_languages_highlight_cal").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/cal */ "./node_modules/highlight.js/es/languages/cal.js"));
  }),
  capnproto: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("capnproto", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_capnproto */ "react-syntax-highlighter_languages_highlight_capnproto").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/capnproto */ "./node_modules/highlight.js/es/languages/capnproto.js"));
  }),
  ceylon: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ceylon", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_ceylon */ "react-syntax-highlighter_languages_highlight_ceylon").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/ceylon */ "./node_modules/highlight.js/es/languages/ceylon.js"));
  }),
  clean: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("clean", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_clean */ "react-syntax-highlighter_languages_highlight_clean").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/clean */ "./node_modules/highlight.js/es/languages/clean.js"));
  }),
  clojureRepl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("clojureRepl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_clojureRepl */ "react-syntax-highlighter_languages_highlight_clojureRepl").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/clojure-repl */ "./node_modules/highlight.js/es/languages/clojure-repl.js"));
  }),
  clojure: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("clojure", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_clojure */ "react-syntax-highlighter_languages_highlight_clojure").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/clojure */ "./node_modules/highlight.js/es/languages/clojure.js"));
  }),
  cmake: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("cmake", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_cmake */ "react-syntax-highlighter_languages_highlight_cmake").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/cmake */ "./node_modules/highlight.js/es/languages/cmake.js"));
  }),
  coffeescript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("coffeescript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_coffeescript */ "react-syntax-highlighter_languages_highlight_coffeescript").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/coffeescript */ "./node_modules/highlight.js/es/languages/coffeescript.js"));
  }),
  coq: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("coq", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_coq */ "react-syntax-highlighter_languages_highlight_coq").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/coq */ "./node_modules/highlight.js/es/languages/coq.js"));
  }),
  cos: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("cos", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_cos */ "react-syntax-highlighter_languages_highlight_cos").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/cos */ "./node_modules/highlight.js/es/languages/cos.js"));
  }),
  cpp: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("cpp", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_cpp */ "react-syntax-highlighter_languages_highlight_cpp").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/cpp */ "./node_modules/highlight.js/es/languages/cpp.js"));
  }),
  crmsh: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("crmsh", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_crmsh */ "react-syntax-highlighter_languages_highlight_crmsh").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/crmsh */ "./node_modules/highlight.js/es/languages/crmsh.js"));
  }),
  crystal: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("crystal", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_crystal */ "react-syntax-highlighter_languages_highlight_crystal").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/crystal */ "./node_modules/highlight.js/es/languages/crystal.js"));
  }),
  csharp: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("csharp", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_csharp */ "react-syntax-highlighter_languages_highlight_csharp").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/csharp */ "./node_modules/highlight.js/es/languages/csharp.js"));
  }),
  csp: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("csp", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_csp */ "react-syntax-highlighter_languages_highlight_csp").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/csp */ "./node_modules/highlight.js/es/languages/csp.js"));
  }),
  css: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("css", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_css */ "react-syntax-highlighter_languages_highlight_css").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/css */ "./node_modules/highlight.js/es/languages/css.js"));
  }),
  d: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("d", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_d */ "react-syntax-highlighter_languages_highlight_d").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/d */ "./node_modules/highlight.js/es/languages/d.js"));
  }),
  dart: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("dart", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_dart */ "react-syntax-highlighter_languages_highlight_dart").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/dart */ "./node_modules/highlight.js/es/languages/dart.js"));
  }),
  delphi: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("delphi", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_delphi */ "react-syntax-highlighter_languages_highlight_delphi").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/delphi */ "./node_modules/highlight.js/es/languages/delphi.js"));
  }),
  diff: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("diff", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_diff */ "react-syntax-highlighter_languages_highlight_diff").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/diff */ "./node_modules/highlight.js/es/languages/diff.js"));
  }),
  django: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("django", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_django */ "react-syntax-highlighter_languages_highlight_django").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/django */ "./node_modules/highlight.js/es/languages/django.js"));
  }),
  dns: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("dns", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_dns */ "react-syntax-highlighter_languages_highlight_dns").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/dns */ "./node_modules/highlight.js/es/languages/dns.js"));
  }),
  dockerfile: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("dockerfile", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_dockerfile */ "react-syntax-highlighter_languages_highlight_dockerfile").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/dockerfile */ "./node_modules/highlight.js/es/languages/dockerfile.js"));
  }),
  dos: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("dos", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_dos */ "react-syntax-highlighter_languages_highlight_dos").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/dos */ "./node_modules/highlight.js/es/languages/dos.js"));
  }),
  dsconfig: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("dsconfig", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_dsconfig */ "react-syntax-highlighter_languages_highlight_dsconfig").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/dsconfig */ "./node_modules/highlight.js/es/languages/dsconfig.js"));
  }),
  dts: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("dts", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_dts */ "react-syntax-highlighter_languages_highlight_dts").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/dts */ "./node_modules/highlight.js/es/languages/dts.js"));
  }),
  dust: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("dust", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_dust */ "react-syntax-highlighter_languages_highlight_dust").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/dust */ "./node_modules/highlight.js/es/languages/dust.js"));
  }),
  ebnf: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ebnf", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_ebnf */ "react-syntax-highlighter_languages_highlight_ebnf").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/ebnf */ "./node_modules/highlight.js/es/languages/ebnf.js"));
  }),
  elixir: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("elixir", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_elixir */ "react-syntax-highlighter_languages_highlight_elixir").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/elixir */ "./node_modules/highlight.js/es/languages/elixir.js"));
  }),
  elm: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("elm", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_elm */ "react-syntax-highlighter_languages_highlight_elm").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/elm */ "./node_modules/highlight.js/es/languages/elm.js"));
  }),
  erb: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("erb", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_erb */ "react-syntax-highlighter_languages_highlight_erb").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/erb */ "./node_modules/highlight.js/es/languages/erb.js"));
  }),
  erlangRepl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("erlangRepl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_erlangRepl */ "react-syntax-highlighter_languages_highlight_erlangRepl").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/erlang-repl */ "./node_modules/highlight.js/es/languages/erlang-repl.js"));
  }),
  erlang: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("erlang", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_erlang */ "react-syntax-highlighter_languages_highlight_erlang").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/erlang */ "./node_modules/highlight.js/es/languages/erlang.js"));
  }),
  excel: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("excel", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_excel */ "react-syntax-highlighter_languages_highlight_excel").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/excel */ "./node_modules/highlight.js/es/languages/excel.js"));
  }),
  fix: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("fix", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_fix */ "react-syntax-highlighter_languages_highlight_fix").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/fix */ "./node_modules/highlight.js/es/languages/fix.js"));
  }),
  flix: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("flix", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_flix */ "react-syntax-highlighter_languages_highlight_flix").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/flix */ "./node_modules/highlight.js/es/languages/flix.js"));
  }),
  fortran: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("fortran", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_fortran */ "react-syntax-highlighter_languages_highlight_fortran").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/fortran */ "./node_modules/highlight.js/es/languages/fortran.js"));
  }),
  fsharp: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("fsharp", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_fsharp */ "react-syntax-highlighter_languages_highlight_fsharp").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/fsharp */ "./node_modules/highlight.js/es/languages/fsharp.js"));
  }),
  gams: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("gams", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_gams */ "react-syntax-highlighter_languages_highlight_gams").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/gams */ "./node_modules/highlight.js/es/languages/gams.js"));
  }),
  gauss: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("gauss", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_gauss */ "react-syntax-highlighter_languages_highlight_gauss").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/gauss */ "./node_modules/highlight.js/es/languages/gauss.js"));
  }),
  gcode: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("gcode", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_gcode */ "react-syntax-highlighter_languages_highlight_gcode").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/gcode */ "./node_modules/highlight.js/es/languages/gcode.js"));
  }),
  gherkin: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("gherkin", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_gherkin */ "react-syntax-highlighter_languages_highlight_gherkin").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/gherkin */ "./node_modules/highlight.js/es/languages/gherkin.js"));
  }),
  glsl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("glsl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_glsl */ "react-syntax-highlighter_languages_highlight_glsl").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/glsl */ "./node_modules/highlight.js/es/languages/glsl.js"));
  }),
  gml: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("gml", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_gml */ "react-syntax-highlighter_languages_highlight_gml").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/gml */ "./node_modules/highlight.js/es/languages/gml.js"));
  }),
  go: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("go", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_go */ "react-syntax-highlighter_languages_highlight_go").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/go */ "./node_modules/highlight.js/es/languages/go.js"));
  }),
  golo: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("golo", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_golo */ "react-syntax-highlighter_languages_highlight_golo").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/golo */ "./node_modules/highlight.js/es/languages/golo.js"));
  }),
  gradle: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("gradle", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_gradle */ "react-syntax-highlighter_languages_highlight_gradle").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/gradle */ "./node_modules/highlight.js/es/languages/gradle.js"));
  }),
  graphql: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("graphql", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_graphql */ "react-syntax-highlighter_languages_highlight_graphql").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/graphql */ "./node_modules/highlight.js/es/languages/graphql.js"));
  }),
  groovy: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("groovy", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_groovy */ "react-syntax-highlighter_languages_highlight_groovy").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/groovy */ "./node_modules/highlight.js/es/languages/groovy.js"));
  }),
  haml: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("haml", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_haml */ "react-syntax-highlighter_languages_highlight_haml").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/haml */ "./node_modules/highlight.js/es/languages/haml.js"));
  }),
  handlebars: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("handlebars", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_handlebars */ "react-syntax-highlighter_languages_highlight_handlebars").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/handlebars */ "./node_modules/highlight.js/es/languages/handlebars.js"));
  }),
  haskell: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("haskell", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_haskell */ "react-syntax-highlighter_languages_highlight_haskell").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/haskell */ "./node_modules/highlight.js/es/languages/haskell.js"));
  }),
  haxe: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("haxe", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_haxe */ "react-syntax-highlighter_languages_highlight_haxe").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/haxe */ "./node_modules/highlight.js/es/languages/haxe.js"));
  }),
  hsp: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("hsp", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_hsp */ "react-syntax-highlighter_languages_highlight_hsp").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/hsp */ "./node_modules/highlight.js/es/languages/hsp.js"));
  }),
  http: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("http", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_http */ "react-syntax-highlighter_languages_highlight_http").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/http */ "./node_modules/highlight.js/es/languages/http.js"));
  }),
  hy: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("hy", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_hy */ "react-syntax-highlighter_languages_highlight_hy").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/hy */ "./node_modules/highlight.js/es/languages/hy.js"));
  }),
  inform7: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("inform7", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_inform7 */ "react-syntax-highlighter_languages_highlight_inform7").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/inform7 */ "./node_modules/highlight.js/es/languages/inform7.js"));
  }),
  ini: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ini", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_ini */ "react-syntax-highlighter_languages_highlight_ini").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/ini */ "./node_modules/highlight.js/es/languages/ini.js"));
  }),
  irpf90: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("irpf90", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_irpf90 */ "react-syntax-highlighter_languages_highlight_irpf90").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/irpf90 */ "./node_modules/highlight.js/es/languages/irpf90.js"));
  }),
  isbl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("isbl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_isbl */ "react-syntax-highlighter_languages_highlight_isbl").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/isbl */ "./node_modules/highlight.js/es/languages/isbl.js"));
  }),
  java: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("java", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_java */ "react-syntax-highlighter_languages_highlight_java").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/java */ "./node_modules/highlight.js/es/languages/java.js"));
  }),
  javascript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("javascript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_javascript */ "react-syntax-highlighter_languages_highlight_javascript").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/javascript */ "./node_modules/highlight.js/es/languages/javascript.js"));
  }),
  jbossCli: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("jbossCli", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_jbossCli */ "react-syntax-highlighter_languages_highlight_jbossCli").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/jboss-cli */ "./node_modules/highlight.js/es/languages/jboss-cli.js"));
  }),
  json: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("json", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_json */ "react-syntax-highlighter_languages_highlight_json").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/json */ "./node_modules/highlight.js/es/languages/json.js"));
  }),
  juliaRepl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("juliaRepl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_juliaRepl */ "react-syntax-highlighter_languages_highlight_juliaRepl").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/julia-repl */ "./node_modules/highlight.js/es/languages/julia-repl.js"));
  }),
  julia: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("julia", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_julia */ "react-syntax-highlighter_languages_highlight_julia").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/julia */ "./node_modules/highlight.js/es/languages/julia.js"));
  }),
  kotlin: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("kotlin", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_kotlin */ "react-syntax-highlighter_languages_highlight_kotlin").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/kotlin */ "./node_modules/highlight.js/es/languages/kotlin.js"));
  }),
  lasso: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("lasso", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_lasso */ "react-syntax-highlighter_languages_highlight_lasso").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/lasso */ "./node_modules/highlight.js/es/languages/lasso.js"));
  }),
  latex: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("latex", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_latex */ "react-syntax-highlighter_languages_highlight_latex").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/latex */ "./node_modules/highlight.js/es/languages/latex.js"));
  }),
  ldif: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ldif", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_ldif */ "react-syntax-highlighter_languages_highlight_ldif").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/ldif */ "./node_modules/highlight.js/es/languages/ldif.js"));
  }),
  leaf: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("leaf", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_leaf */ "react-syntax-highlighter_languages_highlight_leaf").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/leaf */ "./node_modules/highlight.js/es/languages/leaf.js"));
  }),
  less: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("less", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_less */ "react-syntax-highlighter_languages_highlight_less").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/less */ "./node_modules/highlight.js/es/languages/less.js"));
  }),
  lisp: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("lisp", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_lisp */ "react-syntax-highlighter_languages_highlight_lisp").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/lisp */ "./node_modules/highlight.js/es/languages/lisp.js"));
  }),
  livecodeserver: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("livecodeserver", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_livecodeserver */ "react-syntax-highlighter_languages_highlight_livecodeserver").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/livecodeserver */ "./node_modules/highlight.js/es/languages/livecodeserver.js"));
  }),
  livescript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("livescript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_livescript */ "react-syntax-highlighter_languages_highlight_livescript").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/livescript */ "./node_modules/highlight.js/es/languages/livescript.js"));
  }),
  llvm: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("llvm", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_llvm */ "react-syntax-highlighter_languages_highlight_llvm").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/llvm */ "./node_modules/highlight.js/es/languages/llvm.js"));
  }),
  lsl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("lsl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_lsl */ "react-syntax-highlighter_languages_highlight_lsl").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/lsl */ "./node_modules/highlight.js/es/languages/lsl.js"));
  }),
  lua: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("lua", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_lua */ "react-syntax-highlighter_languages_highlight_lua").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/lua */ "./node_modules/highlight.js/es/languages/lua.js"));
  }),
  makefile: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("makefile", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_makefile */ "react-syntax-highlighter_languages_highlight_makefile").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/makefile */ "./node_modules/highlight.js/es/languages/makefile.js"));
  }),
  markdown: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("markdown", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_markdown */ "react-syntax-highlighter_languages_highlight_markdown").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/markdown */ "./node_modules/highlight.js/es/languages/markdown.js"));
  }),
  mathematica: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("mathematica", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_mathematica */ "react-syntax-highlighter_languages_highlight_mathematica").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/mathematica */ "./node_modules/highlight.js/es/languages/mathematica.js"));
  }),
  matlab: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("matlab", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_matlab */ "react-syntax-highlighter_languages_highlight_matlab").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/matlab */ "./node_modules/highlight.js/es/languages/matlab.js"));
  }),
  maxima: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("maxima", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_maxima */ "react-syntax-highlighter_languages_highlight_maxima").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/maxima */ "./node_modules/highlight.js/es/languages/maxima.js"));
  }),
  mel: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("mel", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_mel */ "react-syntax-highlighter_languages_highlight_mel").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/mel */ "./node_modules/highlight.js/es/languages/mel.js"));
  }),
  mercury: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("mercury", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_mercury */ "react-syntax-highlighter_languages_highlight_mercury").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/mercury */ "./node_modules/highlight.js/es/languages/mercury.js"));
  }),
  mipsasm: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("mipsasm", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_mipsasm */ "react-syntax-highlighter_languages_highlight_mipsasm").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/mipsasm */ "./node_modules/highlight.js/es/languages/mipsasm.js"));
  }),
  mizar: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("mizar", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_mizar */ "react-syntax-highlighter_languages_highlight_mizar").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/mizar */ "./node_modules/highlight.js/es/languages/mizar.js"));
  }),
  mojolicious: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("mojolicious", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_mojolicious */ "react-syntax-highlighter_languages_highlight_mojolicious").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/mojolicious */ "./node_modules/highlight.js/es/languages/mojolicious.js"));
  }),
  monkey: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("monkey", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_monkey */ "react-syntax-highlighter_languages_highlight_monkey").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/monkey */ "./node_modules/highlight.js/es/languages/monkey.js"));
  }),
  moonscript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("moonscript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_moonscript */ "react-syntax-highlighter_languages_highlight_moonscript").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/moonscript */ "./node_modules/highlight.js/es/languages/moonscript.js"));
  }),
  n1ql: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("n1ql", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_n1ql */ "react-syntax-highlighter_languages_highlight_n1ql").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/n1ql */ "./node_modules/highlight.js/es/languages/n1ql.js"));
  }),
  nestedtext: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("nestedtext", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_nestedtext */ "react-syntax-highlighter_languages_highlight_nestedtext").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/nestedtext */ "./node_modules/highlight.js/es/languages/nestedtext.js"));
  }),
  nginx: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("nginx", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_nginx */ "react-syntax-highlighter_languages_highlight_nginx").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/nginx */ "./node_modules/highlight.js/es/languages/nginx.js"));
  }),
  nim: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("nim", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_nim */ "react-syntax-highlighter_languages_highlight_nim").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/nim */ "./node_modules/highlight.js/es/languages/nim.js"));
  }),
  nix: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("nix", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_nix */ "react-syntax-highlighter_languages_highlight_nix").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/nix */ "./node_modules/highlight.js/es/languages/nix.js"));
  }),
  nodeRepl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("nodeRepl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_nodeRepl */ "react-syntax-highlighter_languages_highlight_nodeRepl").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/node-repl */ "./node_modules/highlight.js/es/languages/node-repl.js"));
  }),
  nsis: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("nsis", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_nsis */ "react-syntax-highlighter_languages_highlight_nsis").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/nsis */ "./node_modules/highlight.js/es/languages/nsis.js"));
  }),
  objectivec: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("objectivec", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_objectivec */ "react-syntax-highlighter_languages_highlight_objectivec").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/objectivec */ "./node_modules/highlight.js/es/languages/objectivec.js"));
  }),
  ocaml: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ocaml", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_ocaml */ "react-syntax-highlighter_languages_highlight_ocaml").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/ocaml */ "./node_modules/highlight.js/es/languages/ocaml.js"));
  }),
  openscad: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("openscad", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_openscad */ "react-syntax-highlighter_languages_highlight_openscad").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/openscad */ "./node_modules/highlight.js/es/languages/openscad.js"));
  }),
  oxygene: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("oxygene", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_oxygene */ "react-syntax-highlighter_languages_highlight_oxygene").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/oxygene */ "./node_modules/highlight.js/es/languages/oxygene.js"));
  }),
  parser3: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("parser3", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_parser3 */ "react-syntax-highlighter_languages_highlight_parser3").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/parser3 */ "./node_modules/highlight.js/es/languages/parser3.js"));
  }),
  perl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("perl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_perl */ "react-syntax-highlighter_languages_highlight_perl").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/perl */ "./node_modules/highlight.js/es/languages/perl.js"));
  }),
  pf: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("pf", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_pf */ "react-syntax-highlighter_languages_highlight_pf").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/pf */ "./node_modules/highlight.js/es/languages/pf.js"));
  }),
  pgsql: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("pgsql", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_pgsql */ "react-syntax-highlighter_languages_highlight_pgsql").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/pgsql */ "./node_modules/highlight.js/es/languages/pgsql.js"));
  }),
  phpTemplate: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("phpTemplate", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_phpTemplate */ "react-syntax-highlighter_languages_highlight_phpTemplate").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/php-template */ "./node_modules/highlight.js/es/languages/php-template.js"));
  }),
  php: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("php", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_php */ "react-syntax-highlighter_languages_highlight_php").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/php */ "./node_modules/highlight.js/es/languages/php.js"));
  }),
  plaintext: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("plaintext", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_plaintext */ "react-syntax-highlighter_languages_highlight_plaintext").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/plaintext */ "./node_modules/highlight.js/es/languages/plaintext.js"));
  }),
  pony: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("pony", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_pony */ "react-syntax-highlighter_languages_highlight_pony").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/pony */ "./node_modules/highlight.js/es/languages/pony.js"));
  }),
  powershell: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("powershell", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_powershell */ "react-syntax-highlighter_languages_highlight_powershell").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/powershell */ "./node_modules/highlight.js/es/languages/powershell.js"));
  }),
  processing: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("processing", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_processing */ "react-syntax-highlighter_languages_highlight_processing").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/processing */ "./node_modules/highlight.js/es/languages/processing.js"));
  }),
  profile: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("profile", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_profile */ "react-syntax-highlighter_languages_highlight_profile").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/profile */ "./node_modules/highlight.js/es/languages/profile.js"));
  }),
  prolog: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("prolog", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_prolog */ "react-syntax-highlighter_languages_highlight_prolog").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/prolog */ "./node_modules/highlight.js/es/languages/prolog.js"));
  }),
  properties: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("properties", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_properties */ "react-syntax-highlighter_languages_highlight_properties").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/properties */ "./node_modules/highlight.js/es/languages/properties.js"));
  }),
  protobuf: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("protobuf", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_protobuf */ "react-syntax-highlighter_languages_highlight_protobuf").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/protobuf */ "./node_modules/highlight.js/es/languages/protobuf.js"));
  }),
  puppet: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("puppet", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_puppet */ "react-syntax-highlighter_languages_highlight_puppet").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/puppet */ "./node_modules/highlight.js/es/languages/puppet.js"));
  }),
  purebasic: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("purebasic", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_purebasic */ "react-syntax-highlighter_languages_highlight_purebasic").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/purebasic */ "./node_modules/highlight.js/es/languages/purebasic.js"));
  }),
  pythonRepl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("pythonRepl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_pythonRepl */ "react-syntax-highlighter_languages_highlight_pythonRepl").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/python-repl */ "./node_modules/highlight.js/es/languages/python-repl.js"));
  }),
  python: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("python", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_python */ "react-syntax-highlighter_languages_highlight_python").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/python */ "./node_modules/highlight.js/es/languages/python.js"));
  }),
  q: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("q", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_q */ "react-syntax-highlighter_languages_highlight_q").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/q */ "./node_modules/highlight.js/es/languages/q.js"));
  }),
  qml: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("qml", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_qml */ "react-syntax-highlighter_languages_highlight_qml").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/qml */ "./node_modules/highlight.js/es/languages/qml.js"));
  }),
  r: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("r", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_r */ "react-syntax-highlighter_languages_highlight_r").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/r */ "./node_modules/highlight.js/es/languages/r.js"));
  }),
  reasonml: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("reasonml", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_reasonml */ "react-syntax-highlighter_languages_highlight_reasonml").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/reasonml */ "./node_modules/highlight.js/es/languages/reasonml.js"));
  }),
  rib: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("rib", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_rib */ "react-syntax-highlighter_languages_highlight_rib").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/rib */ "./node_modules/highlight.js/es/languages/rib.js"));
  }),
  roboconf: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("roboconf", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_roboconf */ "react-syntax-highlighter_languages_highlight_roboconf").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/roboconf */ "./node_modules/highlight.js/es/languages/roboconf.js"));
  }),
  routeros: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("routeros", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_routeros */ "react-syntax-highlighter_languages_highlight_routeros").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/routeros */ "./node_modules/highlight.js/es/languages/routeros.js"));
  }),
  rsl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("rsl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_rsl */ "react-syntax-highlighter_languages_highlight_rsl").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/rsl */ "./node_modules/highlight.js/es/languages/rsl.js"));
  }),
  ruby: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ruby", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_ruby */ "react-syntax-highlighter_languages_highlight_ruby").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/ruby */ "./node_modules/highlight.js/es/languages/ruby.js"));
  }),
  ruleslanguage: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ruleslanguage", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_ruleslanguage */ "react-syntax-highlighter_languages_highlight_ruleslanguage").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/ruleslanguage */ "./node_modules/highlight.js/es/languages/ruleslanguage.js"));
  }),
  rust: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("rust", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_rust */ "react-syntax-highlighter_languages_highlight_rust").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/rust */ "./node_modules/highlight.js/es/languages/rust.js"));
  }),
  sas: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("sas", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_sas */ "react-syntax-highlighter_languages_highlight_sas").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/sas */ "./node_modules/highlight.js/es/languages/sas.js"));
  }),
  scala: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("scala", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_scala */ "react-syntax-highlighter_languages_highlight_scala").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/scala */ "./node_modules/highlight.js/es/languages/scala.js"));
  }),
  scheme: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("scheme", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_scheme */ "react-syntax-highlighter_languages_highlight_scheme").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/scheme */ "./node_modules/highlight.js/es/languages/scheme.js"));
  }),
  scilab: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("scilab", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_scilab */ "react-syntax-highlighter_languages_highlight_scilab").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/scilab */ "./node_modules/highlight.js/es/languages/scilab.js"));
  }),
  scss: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("scss", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_scss */ "react-syntax-highlighter_languages_highlight_scss").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/scss */ "./node_modules/highlight.js/es/languages/scss.js"));
  }),
  shell: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("shell", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_shell */ "react-syntax-highlighter_languages_highlight_shell").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/shell */ "./node_modules/highlight.js/es/languages/shell.js"));
  }),
  smali: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("smali", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_smali */ "react-syntax-highlighter_languages_highlight_smali").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/smali */ "./node_modules/highlight.js/es/languages/smali.js"));
  }),
  smalltalk: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("smalltalk", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_smalltalk */ "react-syntax-highlighter_languages_highlight_smalltalk").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/smalltalk */ "./node_modules/highlight.js/es/languages/smalltalk.js"));
  }),
  sml: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("sml", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_sml */ "react-syntax-highlighter_languages_highlight_sml").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/sml */ "./node_modules/highlight.js/es/languages/sml.js"));
  }),
  sqf: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("sqf", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_sqf */ "react-syntax-highlighter_languages_highlight_sqf").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/sqf */ "./node_modules/highlight.js/es/languages/sqf.js"));
  }),
  sql: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("sql", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_sql */ "react-syntax-highlighter_languages_highlight_sql").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/sql */ "./node_modules/highlight.js/es/languages/sql.js"));
  }),
  stan: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("stan", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_stan */ "react-syntax-highlighter_languages_highlight_stan").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/stan */ "./node_modules/highlight.js/es/languages/stan.js"));
  }),
  stata: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("stata", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_stata */ "react-syntax-highlighter_languages_highlight_stata").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/stata */ "./node_modules/highlight.js/es/languages/stata.js"));
  }),
  step21: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("step21", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_step21 */ "react-syntax-highlighter_languages_highlight_step21").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/step21 */ "./node_modules/highlight.js/es/languages/step21.js"));
  }),
  stylus: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("stylus", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_stylus */ "react-syntax-highlighter_languages_highlight_stylus").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/stylus */ "./node_modules/highlight.js/es/languages/stylus.js"));
  }),
  subunit: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("subunit", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_subunit */ "react-syntax-highlighter_languages_highlight_subunit").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/subunit */ "./node_modules/highlight.js/es/languages/subunit.js"));
  }),
  swift: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("swift", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_swift */ "react-syntax-highlighter_languages_highlight_swift").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/swift */ "./node_modules/highlight.js/es/languages/swift.js"));
  }),
  taggerscript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("taggerscript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_taggerscript */ "react-syntax-highlighter_languages_highlight_taggerscript").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/taggerscript */ "./node_modules/highlight.js/es/languages/taggerscript.js"));
  }),
  tap: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("tap", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_tap */ "react-syntax-highlighter_languages_highlight_tap").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/tap */ "./node_modules/highlight.js/es/languages/tap.js"));
  }),
  tcl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("tcl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_tcl */ "react-syntax-highlighter_languages_highlight_tcl").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/tcl */ "./node_modules/highlight.js/es/languages/tcl.js"));
  }),
  thrift: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("thrift", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_thrift */ "react-syntax-highlighter_languages_highlight_thrift").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/thrift */ "./node_modules/highlight.js/es/languages/thrift.js"));
  }),
  tp: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("tp", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_tp */ "react-syntax-highlighter_languages_highlight_tp").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/tp */ "./node_modules/highlight.js/es/languages/tp.js"));
  }),
  twig: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("twig", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_twig */ "react-syntax-highlighter_languages_highlight_twig").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/twig */ "./node_modules/highlight.js/es/languages/twig.js"));
  }),
  typescript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("typescript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_typescript */ "react-syntax-highlighter_languages_highlight_typescript").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/es/languages/typescript.js"));
  }),
  vala: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("vala", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_vala */ "react-syntax-highlighter_languages_highlight_vala").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/vala */ "./node_modules/highlight.js/es/languages/vala.js"));
  }),
  vbnet: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("vbnet", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_vbnet */ "react-syntax-highlighter_languages_highlight_vbnet").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/vbnet */ "./node_modules/highlight.js/es/languages/vbnet.js"));
  }),
  vbscriptHtml: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("vbscriptHtml", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_vbscriptHtml */ "react-syntax-highlighter_languages_highlight_vbscriptHtml").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/vbscript-html */ "./node_modules/highlight.js/es/languages/vbscript-html.js"));
  }),
  vbscript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("vbscript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_vbscript */ "react-syntax-highlighter_languages_highlight_vbscript").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/vbscript */ "./node_modules/highlight.js/es/languages/vbscript.js"));
  }),
  verilog: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("verilog", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_verilog */ "react-syntax-highlighter_languages_highlight_verilog").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/verilog */ "./node_modules/highlight.js/es/languages/verilog.js"));
  }),
  vhdl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("vhdl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_vhdl */ "react-syntax-highlighter_languages_highlight_vhdl").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/vhdl */ "./node_modules/highlight.js/es/languages/vhdl.js"));
  }),
  vim: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("vim", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_vim */ "react-syntax-highlighter_languages_highlight_vim").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/vim */ "./node_modules/highlight.js/es/languages/vim.js"));
  }),
  wasm: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("wasm", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_wasm */ "react-syntax-highlighter_languages_highlight_wasm").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/wasm */ "./node_modules/highlight.js/es/languages/wasm.js"));
  }),
  wren: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("wren", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_wren */ "react-syntax-highlighter_languages_highlight_wren").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/wren */ "./node_modules/highlight.js/es/languages/wren.js"));
  }),
  x86asm: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("x86asm", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_x86asm */ "react-syntax-highlighter_languages_highlight_x86asm").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/x86asm */ "./node_modules/highlight.js/es/languages/x86asm.js"));
  }),
  xl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("xl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_xl */ "react-syntax-highlighter_languages_highlight_xl").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/xl */ "./node_modules/highlight.js/es/languages/xl.js"));
  }),
  xml: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("xml", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_xml */ "react-syntax-highlighter_languages_highlight_xml").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/xml */ "./node_modules/highlight.js/es/languages/xml.js"));
  }),
  xquery: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("xquery", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_xquery */ "react-syntax-highlighter_languages_highlight_xquery").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/xquery */ "./node_modules/highlight.js/es/languages/xquery.js"));
  }),
  yaml: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("yaml", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_yaml */ "react-syntax-highlighter_languages_highlight_yaml").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/yaml */ "./node_modules/highlight.js/es/languages/yaml.js"));
  }),
  zephir: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("zephir", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_highlight_zephir */ "react-syntax-highlighter_languages_highlight_zephir").then(__webpack_require__.bind(__webpack_require__, /*! highlight.js/lib/languages/zephir */ "./node_modules/highlight.js/es/languages/zephir.js"));
  })
});

/***/ }),

/***/ "./src/async-languages/prism.js":
/*!**************************************!*\
  !*** ./src/async-languages/prism.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-language-async-loader.js */ "./src/async-languages/create-language-async-loader.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  abap: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("abap", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_abap */ "react-syntax-highlighter_languages_refractor_abap").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/abap.js */ "./node_modules/refractor/lang/abap.js"));
  }),
  abnf: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("abnf", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_abnf */ "react-syntax-highlighter_languages_refractor_abnf").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/abnf.js */ "./node_modules/refractor/lang/abnf.js"));
  }),
  actionscript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("actionscript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_actionscript */ "react-syntax-highlighter_languages_refractor_actionscript").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/actionscript.js */ "./node_modules/refractor/lang/actionscript.js"));
  }),
  ada: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ada", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_ada */ "react-syntax-highlighter_languages_refractor_ada").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/ada.js */ "./node_modules/refractor/lang/ada.js"));
  }),
  agda: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("agda", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_agda */ "react-syntax-highlighter_languages_refractor_agda").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/agda.js */ "./node_modules/refractor/lang/agda.js"));
  }),
  al: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("al", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_al */ "react-syntax-highlighter_languages_refractor_al").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/al.js */ "./node_modules/refractor/lang/al.js"));
  }),
  antlr4: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("antlr4", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_antlr4 */ "react-syntax-highlighter_languages_refractor_antlr4").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/antlr4.js */ "./node_modules/refractor/lang/antlr4.js"));
  }),
  apacheconf: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("apacheconf", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_apacheconf */ "react-syntax-highlighter_languages_refractor_apacheconf").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/apacheconf.js */ "./node_modules/refractor/lang/apacheconf.js"));
  }),
  apex: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("apex", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_apex */ "react-syntax-highlighter_languages_refractor_apex").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/apex.js */ "./node_modules/refractor/lang/apex.js"));
  }),
  apl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("apl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_apl */ "react-syntax-highlighter_languages_refractor_apl").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/apl.js */ "./node_modules/refractor/lang/apl.js"));
  }),
  applescript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("applescript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_applescript */ "react-syntax-highlighter_languages_refractor_applescript").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/applescript.js */ "./node_modules/refractor/lang/applescript.js"));
  }),
  aql: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("aql", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_aql */ "react-syntax-highlighter_languages_refractor_aql").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/aql.js */ "./node_modules/refractor/lang/aql.js"));
  }),
  arduino: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("arduino", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_arduino */ "react-syntax-highlighter_languages_refractor_arduino").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/arduino.js */ "./node_modules/refractor/lang/arduino.js"));
  }),
  arff: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("arff", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_arff */ "react-syntax-highlighter_languages_refractor_arff").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/arff.js */ "./node_modules/refractor/lang/arff.js"));
  }),
  armasm: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("armasm", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_armasm */ "react-syntax-highlighter_languages_refractor_armasm").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/armasm.js */ "./node_modules/refractor/lang/armasm.js"));
  }),
  arturo: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("arturo", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_arturo */ "react-syntax-highlighter_languages_refractor_arturo").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/arturo.js */ "./node_modules/refractor/lang/arturo.js"));
  }),
  asciidoc: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("asciidoc", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_asciidoc */ "react-syntax-highlighter_languages_refractor_asciidoc").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/asciidoc.js */ "./node_modules/refractor/lang/asciidoc.js"));
  }),
  asm6502: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("asm6502", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_asm6502 */ "react-syntax-highlighter_languages_refractor_asm6502").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/asm6502.js */ "./node_modules/refractor/lang/asm6502.js"));
  }),
  asmatmel: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("asmatmel", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_asmatmel */ "react-syntax-highlighter_languages_refractor_asmatmel").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/asmatmel.js */ "./node_modules/refractor/lang/asmatmel.js"));
  }),
  aspnet: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("aspnet", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_aspnet */[__webpack_require__.e("vendors-node_modules_refractor_lang_csharp_js"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_aspnet")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/aspnet.js */ "./node_modules/refractor/lang/aspnet.js"));
  }),
  autohotkey: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("autohotkey", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_autohotkey */ "react-syntax-highlighter_languages_refractor_autohotkey").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/autohotkey.js */ "./node_modules/refractor/lang/autohotkey.js"));
  }),
  autoit: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("autoit", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_autoit */ "react-syntax-highlighter_languages_refractor_autoit").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/autoit.js */ "./node_modules/refractor/lang/autoit.js"));
  }),
  avisynth: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("avisynth", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_avisynth */ "react-syntax-highlighter_languages_refractor_avisynth").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/avisynth.js */ "./node_modules/refractor/lang/avisynth.js"));
  }),
  avroIdl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("avroIdl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_avroIdl */ "react-syntax-highlighter_languages_refractor_avroIdl").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/avro-idl.js */ "./node_modules/refractor/lang/avro-idl.js"));
  }),
  awk: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("awk", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_awk */ "react-syntax-highlighter_languages_refractor_awk").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/awk.js */ "./node_modules/refractor/lang/awk.js"));
  }),
  bash: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("bash", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_bash */ "react-syntax-highlighter_languages_refractor_bash").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/bash.js */ "./node_modules/refractor/lang/bash.js"));
  }),
  basic: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("basic", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_basic */ "react-syntax-highlighter_languages_refractor_basic").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/basic.js */ "./node_modules/refractor/lang/basic.js"));
  }),
  batch: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("batch", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_batch */ "react-syntax-highlighter_languages_refractor_batch").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/batch.js */ "./node_modules/refractor/lang/batch.js"));
  }),
  bbcode: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("bbcode", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_bbcode */ "react-syntax-highlighter_languages_refractor_bbcode").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/bbcode.js */ "./node_modules/refractor/lang/bbcode.js"));
  }),
  bbj: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("bbj", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_bbj */ "react-syntax-highlighter_languages_refractor_bbj").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/bbj.js */ "./node_modules/refractor/lang/bbj.js"));
  }),
  bicep: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("bicep", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_bicep */ "react-syntax-highlighter_languages_refractor_bicep").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/bicep.js */ "./node_modules/refractor/lang/bicep.js"));
  }),
  birb: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("birb", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_birb */ "react-syntax-highlighter_languages_refractor_birb").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/birb.js */ "./node_modules/refractor/lang/birb.js"));
  }),
  bison: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("bison", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_bison */ "react-syntax-highlighter_languages_refractor_bison").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/bison.js */ "./node_modules/refractor/lang/bison.js"));
  }),
  bnf: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("bnf", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_bnf */ "react-syntax-highlighter_languages_refractor_bnf").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/bnf.js */ "./node_modules/refractor/lang/bnf.js"));
  }),
  bqn: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("bqn", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_bqn */ "react-syntax-highlighter_languages_refractor_bqn").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/bqn.js */ "./node_modules/refractor/lang/bqn.js"));
  }),
  brainfuck: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("brainfuck", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_brainfuck */ "react-syntax-highlighter_languages_refractor_brainfuck").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/brainfuck.js */ "./node_modules/refractor/lang/brainfuck.js"));
  }),
  brightscript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("brightscript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_brightscript */ "react-syntax-highlighter_languages_refractor_brightscript").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/brightscript.js */ "./node_modules/refractor/lang/brightscript.js"));
  }),
  bro: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("bro", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_bro */ "react-syntax-highlighter_languages_refractor_bro").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/bro.js */ "./node_modules/refractor/lang/bro.js"));
  }),
  bsl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("bsl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_bsl */ "react-syntax-highlighter_languages_refractor_bsl").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/bsl.js */ "./node_modules/refractor/lang/bsl.js"));
  }),
  c: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("c", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_c */ "react-syntax-highlighter_languages_refractor_c").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/c.js */ "./node_modules/refractor/lang/c.js"));
  }),
  cfscript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("cfscript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_cfscript */ "react-syntax-highlighter_languages_refractor_cfscript").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/cfscript.js */ "./node_modules/refractor/lang/cfscript.js"));
  }),
  chaiscript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("chaiscript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_chaiscript */ "react-syntax-highlighter_languages_refractor_chaiscript").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/chaiscript.js */ "./node_modules/refractor/lang/chaiscript.js"));
  }),
  cil: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("cil", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_cil */ "react-syntax-highlighter_languages_refractor_cil").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/cil.js */ "./node_modules/refractor/lang/cil.js"));
  }),
  cilkc: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("cilkc", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_cilkc */ "react-syntax-highlighter_languages_refractor_cilkc").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/cilkc.js */ "./node_modules/refractor/lang/cilkc.js"));
  }),
  cilkcpp: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("cilkcpp", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_cilkcpp */ "react-syntax-highlighter_languages_refractor_cilkcpp").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/cilkcpp.js */ "./node_modules/refractor/lang/cilkcpp.js"));
  }),
  clike: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("clike", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_clike */ "react-syntax-highlighter_languages_refractor_clike").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/clike.js */ "./node_modules/refractor/lang/clike.js"));
  }),
  clojure: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("clojure", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_clojure */ "react-syntax-highlighter_languages_refractor_clojure").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/clojure.js */ "./node_modules/refractor/lang/clojure.js"));
  }),
  cmake: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("cmake", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_cmake */ "react-syntax-highlighter_languages_refractor_cmake").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/cmake.js */ "./node_modules/refractor/lang/cmake.js"));
  }),
  cobol: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("cobol", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_cobol */ "react-syntax-highlighter_languages_refractor_cobol").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/cobol.js */ "./node_modules/refractor/lang/cobol.js"));
  }),
  coffeescript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("coffeescript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_coffeescript */ "react-syntax-highlighter_languages_refractor_coffeescript").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/coffeescript.js */ "./node_modules/refractor/lang/coffeescript.js"));
  }),
  concurnas: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("concurnas", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_concurnas */ "react-syntax-highlighter_languages_refractor_concurnas").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/concurnas.js */ "./node_modules/refractor/lang/concurnas.js"));
  }),
  cooklang: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("cooklang", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_cooklang */ "react-syntax-highlighter_languages_refractor_cooklang").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/cooklang.js */ "./node_modules/refractor/lang/cooklang.js"));
  }),
  coq: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("coq", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_coq */ "react-syntax-highlighter_languages_refractor_coq").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/coq.js */ "./node_modules/refractor/lang/coq.js"));
  }),
  cpp: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("cpp", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_cpp */ "react-syntax-highlighter_languages_refractor_cpp").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/cpp.js */ "./node_modules/refractor/lang/cpp.js"));
  }),
  crystal: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("crystal", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_crystal */ "react-syntax-highlighter_languages_refractor_crystal").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/crystal.js */ "./node_modules/refractor/lang/crystal.js"));
  }),
  csharp: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("csharp", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_csharp */[__webpack_require__.e("vendors-node_modules_refractor_lang_csharp_js"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_csharp")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/csharp.js */ "./node_modules/refractor/lang/csharp.js"));
  }),
  cshtml: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("cshtml", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_cshtml */[__webpack_require__.e("vendors-node_modules_refractor_lang_csharp_js"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_cshtml")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/cshtml.js */ "./node_modules/refractor/lang/cshtml.js"));
  }),
  csp: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("csp", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_csp */ "react-syntax-highlighter_languages_refractor_csp").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/csp.js */ "./node_modules/refractor/lang/csp.js"));
  }),
  cssExtras: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("cssExtras", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_cssExtras */ "react-syntax-highlighter_languages_refractor_cssExtras").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/css-extras.js */ "./node_modules/refractor/lang/css-extras.js"));
  }),
  css: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("css", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_css */ "react-syntax-highlighter_languages_refractor_css").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/css.js */ "./node_modules/refractor/lang/css.js"));
  }),
  csv: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("csv", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_csv */ "react-syntax-highlighter_languages_refractor_csv").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/csv.js */ "./node_modules/refractor/lang/csv.js"));
  }),
  cue: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("cue", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_cue */ "react-syntax-highlighter_languages_refractor_cue").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/cue.js */ "./node_modules/refractor/lang/cue.js"));
  }),
  cypher: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("cypher", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_cypher */ "react-syntax-highlighter_languages_refractor_cypher").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/cypher.js */ "./node_modules/refractor/lang/cypher.js"));
  }),
  d: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("d", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_d */ "react-syntax-highlighter_languages_refractor_d").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/d.js */ "./node_modules/refractor/lang/d.js"));
  }),
  dart: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("dart", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_dart */ "react-syntax-highlighter_languages_refractor_dart").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/dart.js */ "./node_modules/refractor/lang/dart.js"));
  }),
  dataweave: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("dataweave", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_dataweave */ "react-syntax-highlighter_languages_refractor_dataweave").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/dataweave.js */ "./node_modules/refractor/lang/dataweave.js"));
  }),
  dax: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("dax", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_dax */ "react-syntax-highlighter_languages_refractor_dax").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/dax.js */ "./node_modules/refractor/lang/dax.js"));
  }),
  dhall: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("dhall", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_dhall */ "react-syntax-highlighter_languages_refractor_dhall").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/dhall.js */ "./node_modules/refractor/lang/dhall.js"));
  }),
  diff: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("diff", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_diff */ "react-syntax-highlighter_languages_refractor_diff").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/diff.js */ "./node_modules/refractor/lang/diff.js"));
  }),
  django: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("django", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_django */[__webpack_require__.e("react-syntax-highlighter_languages_refractor_markupTemplating"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_django")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/django.js */ "./node_modules/refractor/lang/django.js"));
  }),
  dnsZoneFile: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("dnsZoneFile", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_dnsZoneFile */ "react-syntax-highlighter_languages_refractor_dnsZoneFile").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/dns-zone-file.js */ "./node_modules/refractor/lang/dns-zone-file.js"));
  }),
  docker: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("docker", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_docker */ "react-syntax-highlighter_languages_refractor_docker").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/docker.js */ "./node_modules/refractor/lang/docker.js"));
  }),
  dot: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("dot", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_dot */ "react-syntax-highlighter_languages_refractor_dot").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/dot.js */ "./node_modules/refractor/lang/dot.js"));
  }),
  ebnf: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ebnf", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_ebnf */ "react-syntax-highlighter_languages_refractor_ebnf").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/ebnf.js */ "./node_modules/refractor/lang/ebnf.js"));
  }),
  editorconfig: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("editorconfig", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_editorconfig */ "react-syntax-highlighter_languages_refractor_editorconfig").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/editorconfig.js */ "./node_modules/refractor/lang/editorconfig.js"));
  }),
  eiffel: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("eiffel", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_eiffel */ "react-syntax-highlighter_languages_refractor_eiffel").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/eiffel.js */ "./node_modules/refractor/lang/eiffel.js"));
  }),
  ejs: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ejs", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_ejs */[__webpack_require__.e("react-syntax-highlighter_languages_refractor_markupTemplating"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_ejs")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/ejs.js */ "./node_modules/refractor/lang/ejs.js"));
  }),
  elixir: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("elixir", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_elixir */ "react-syntax-highlighter_languages_refractor_elixir").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/elixir.js */ "./node_modules/refractor/lang/elixir.js"));
  }),
  elm: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("elm", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_elm */ "react-syntax-highlighter_languages_refractor_elm").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/elm.js */ "./node_modules/refractor/lang/elm.js"));
  }),
  erb: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("erb", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_erb */[__webpack_require__.e("react-syntax-highlighter_languages_refractor_markupTemplating"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_erb")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/erb.js */ "./node_modules/refractor/lang/erb.js"));
  }),
  erlang: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("erlang", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_erlang */ "react-syntax-highlighter_languages_refractor_erlang").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/erlang.js */ "./node_modules/refractor/lang/erlang.js"));
  }),
  etlua: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("etlua", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_etlua */[__webpack_require__.e("react-syntax-highlighter_languages_refractor_markupTemplating"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_etlua")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/etlua.js */ "./node_modules/refractor/lang/etlua.js"));
  }),
  excelFormula: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("excelFormula", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_excelFormula */ "react-syntax-highlighter_languages_refractor_excelFormula").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/excel-formula.js */ "./node_modules/refractor/lang/excel-formula.js"));
  }),
  factor: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("factor", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_factor */ "react-syntax-highlighter_languages_refractor_factor").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/factor.js */ "./node_modules/refractor/lang/factor.js"));
  }),
  falselang: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("falselang", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_falselang */ "react-syntax-highlighter_languages_refractor_falselang").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/false.js */ "./node_modules/refractor/lang/false.js"));
  }),
  firestoreSecurityRules: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("firestoreSecurityRules", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_firestoreSecurityRules */ "react-syntax-highlighter_languages_refractor_firestoreSecurityRules").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/firestore-security-rules.js */ "./node_modules/refractor/lang/firestore-security-rules.js"));
  }),
  flow: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("flow", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_flow */ "react-syntax-highlighter_languages_refractor_flow").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/flow.js */ "./node_modules/refractor/lang/flow.js"));
  }),
  fortran: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("fortran", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_fortran */ "react-syntax-highlighter_languages_refractor_fortran").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/fortran.js */ "./node_modules/refractor/lang/fortran.js"));
  }),
  fsharp: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("fsharp", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_fsharp */ "react-syntax-highlighter_languages_refractor_fsharp").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/fsharp.js */ "./node_modules/refractor/lang/fsharp.js"));
  }),
  ftl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ftl", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_ftl */[__webpack_require__.e("react-syntax-highlighter_languages_refractor_markupTemplating"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_ftl")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/ftl.js */ "./node_modules/refractor/lang/ftl.js"));
  }),
  gap: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("gap", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_gap */ "react-syntax-highlighter_languages_refractor_gap").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/gap.js */ "./node_modules/refractor/lang/gap.js"));
  }),
  gcode: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("gcode", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_gcode */ "react-syntax-highlighter_languages_refractor_gcode").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/gcode.js */ "./node_modules/refractor/lang/gcode.js"));
  }),
  gdscript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("gdscript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_gdscript */ "react-syntax-highlighter_languages_refractor_gdscript").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/gdscript.js */ "./node_modules/refractor/lang/gdscript.js"));
  }),
  gedcom: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("gedcom", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_gedcom */ "react-syntax-highlighter_languages_refractor_gedcom").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/gedcom.js */ "./node_modules/refractor/lang/gedcom.js"));
  }),
  gettext: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("gettext", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_gettext */ "react-syntax-highlighter_languages_refractor_gettext").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/gettext.js */ "./node_modules/refractor/lang/gettext.js"));
  }),
  gherkin: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("gherkin", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_gherkin */ "react-syntax-highlighter_languages_refractor_gherkin").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/gherkin.js */ "./node_modules/refractor/lang/gherkin.js"));
  }),
  git: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("git", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_git */ "react-syntax-highlighter_languages_refractor_git").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/git.js */ "./node_modules/refractor/lang/git.js"));
  }),
  glsl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("glsl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_glsl */ "react-syntax-highlighter_languages_refractor_glsl").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/glsl.js */ "./node_modules/refractor/lang/glsl.js"));
  }),
  gml: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("gml", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_gml */ "react-syntax-highlighter_languages_refractor_gml").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/gml.js */ "./node_modules/refractor/lang/gml.js"));
  }),
  gn: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("gn", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_gn */ "react-syntax-highlighter_languages_refractor_gn").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/gn.js */ "./node_modules/refractor/lang/gn.js"));
  }),
  goModule: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("goModule", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_goModule */ "react-syntax-highlighter_languages_refractor_goModule").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/go-module.js */ "./node_modules/refractor/lang/go-module.js"));
  }),
  go: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("go", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_go */ "react-syntax-highlighter_languages_refractor_go").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/go.js */ "./node_modules/refractor/lang/go.js"));
  }),
  gradle: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("gradle", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_gradle */ "react-syntax-highlighter_languages_refractor_gradle").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/gradle.js */ "./node_modules/refractor/lang/gradle.js"));
  }),
  graphql: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("graphql", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_graphql */ "react-syntax-highlighter_languages_refractor_graphql").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/graphql.js */ "./node_modules/refractor/lang/graphql.js"));
  }),
  groovy: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("groovy", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_groovy */ "react-syntax-highlighter_languages_refractor_groovy").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/groovy.js */ "./node_modules/refractor/lang/groovy.js"));
  }),
  haml: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("haml", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_haml */[__webpack_require__.e("vendors-node_modules_refractor_lang_haml_js"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_haml")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/haml.js */ "./node_modules/refractor/lang/haml.js"));
  }),
  handlebars: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("handlebars", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_handlebars */[__webpack_require__.e("react-syntax-highlighter_languages_refractor_markupTemplating"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_handlebars")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/handlebars.js */ "./node_modules/refractor/lang/handlebars.js"));
  }),
  haskell: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("haskell", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_haskell */ "react-syntax-highlighter_languages_refractor_haskell").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/haskell.js */ "./node_modules/refractor/lang/haskell.js"));
  }),
  haxe: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("haxe", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_haxe */ "react-syntax-highlighter_languages_refractor_haxe").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/haxe.js */ "./node_modules/refractor/lang/haxe.js"));
  }),
  hcl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("hcl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_hcl */ "react-syntax-highlighter_languages_refractor_hcl").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/hcl.js */ "./node_modules/refractor/lang/hcl.js"));
  }),
  hlsl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("hlsl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_hlsl */ "react-syntax-highlighter_languages_refractor_hlsl").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/hlsl.js */ "./node_modules/refractor/lang/hlsl.js"));
  }),
  hoon: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("hoon", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_hoon */ "react-syntax-highlighter_languages_refractor_hoon").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/hoon.js */ "./node_modules/refractor/lang/hoon.js"));
  }),
  hpkp: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("hpkp", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_hpkp */ "react-syntax-highlighter_languages_refractor_hpkp").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/hpkp.js */ "./node_modules/refractor/lang/hpkp.js"));
  }),
  hsts: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("hsts", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_hsts */ "react-syntax-highlighter_languages_refractor_hsts").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/hsts.js */ "./node_modules/refractor/lang/hsts.js"));
  }),
  http: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("http", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_http */ "react-syntax-highlighter_languages_refractor_http").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/http.js */ "./node_modules/refractor/lang/http.js"));
  }),
  ichigojam: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ichigojam", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_ichigojam */ "react-syntax-highlighter_languages_refractor_ichigojam").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/ichigojam.js */ "./node_modules/refractor/lang/ichigojam.js"));
  }),
  icon: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("icon", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_icon */ "react-syntax-highlighter_languages_refractor_icon").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/icon.js */ "./node_modules/refractor/lang/icon.js"));
  }),
  icuMessageFormat: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("icuMessageFormat", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_icuMessageFormat */ "react-syntax-highlighter_languages_refractor_icuMessageFormat").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/icu-message-format.js */ "./node_modules/refractor/lang/icu-message-format.js"));
  }),
  idris: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("idris", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_idris */ "react-syntax-highlighter_languages_refractor_idris").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/idris.js */ "./node_modules/refractor/lang/idris.js"));
  }),
  iecst: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("iecst", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_iecst */ "react-syntax-highlighter_languages_refractor_iecst").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/iecst.js */ "./node_modules/refractor/lang/iecst.js"));
  }),
  ignore: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ignore", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_ignore */ "react-syntax-highlighter_languages_refractor_ignore").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/ignore.js */ "./node_modules/refractor/lang/ignore.js"));
  }),
  inform7: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("inform7", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_inform7 */ "react-syntax-highlighter_languages_refractor_inform7").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/inform7.js */ "./node_modules/refractor/lang/inform7.js"));
  }),
  ini: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ini", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_ini */ "react-syntax-highlighter_languages_refractor_ini").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/ini.js */ "./node_modules/refractor/lang/ini.js"));
  }),
  io: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("io", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_io */ "react-syntax-highlighter_languages_refractor_io").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/io.js */ "./node_modules/refractor/lang/io.js"));
  }),
  j: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("j", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_j */ "react-syntax-highlighter_languages_refractor_j").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/j.js */ "./node_modules/refractor/lang/j.js"));
  }),
  java: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("java", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_java */ "react-syntax-highlighter_languages_refractor_java").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/java.js */ "./node_modules/refractor/lang/java.js"));
  }),
  javadoc: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("javadoc", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_javadoc */ "react-syntax-highlighter_languages_refractor_javadoc").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/javadoc.js */ "./node_modules/refractor/lang/javadoc.js"));
  }),
  javadoclike: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("javadoclike", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_javadoclike */ "react-syntax-highlighter_languages_refractor_javadoclike").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/javadoclike.js */ "./node_modules/refractor/lang/javadoclike.js"));
  }),
  javascript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("javascript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_javascript */ "react-syntax-highlighter_languages_refractor_javascript").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/javascript.js */ "./node_modules/refractor/lang/javascript.js"));
  }),
  javastacktrace: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("javastacktrace", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_javastacktrace */ "react-syntax-highlighter_languages_refractor_javastacktrace").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/javastacktrace.js */ "./node_modules/refractor/lang/javastacktrace.js"));
  }),
  jexl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("jexl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_jexl */ "react-syntax-highlighter_languages_refractor_jexl").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/jexl.js */ "./node_modules/refractor/lang/jexl.js"));
  }),
  jolie: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("jolie", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_jolie */ "react-syntax-highlighter_languages_refractor_jolie").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/jolie.js */ "./node_modules/refractor/lang/jolie.js"));
  }),
  jq: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("jq", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_jq */ "react-syntax-highlighter_languages_refractor_jq").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/jq.js */ "./node_modules/refractor/lang/jq.js"));
  }),
  jsExtras: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("jsExtras", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_jsExtras */ "react-syntax-highlighter_languages_refractor_jsExtras").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/js-extras.js */ "./node_modules/refractor/lang/js-extras.js"));
  }),
  jsTemplates: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("jsTemplates", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_jsTemplates */[__webpack_require__.e("vendors-node_modules_refractor_lang_js-templates_js"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_jsTemplates")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/js-templates.js */ "./node_modules/refractor/lang/js-templates.js"));
  }),
  jsdoc: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("jsdoc", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_jsdoc */ "react-syntax-highlighter_languages_refractor_jsdoc").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/jsdoc.js */ "./node_modules/refractor/lang/jsdoc.js"));
  }),
  json: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("json", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_json */ "react-syntax-highlighter_languages_refractor_json").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/json.js */ "./node_modules/refractor/lang/json.js"));
  }),
  json5: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("json5", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_json5 */ "react-syntax-highlighter_languages_refractor_json5").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/json5.js */ "./node_modules/refractor/lang/json5.js"));
  }),
  jsonp: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("jsonp", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_jsonp */ "react-syntax-highlighter_languages_refractor_jsonp").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/jsonp.js */ "./node_modules/refractor/lang/jsonp.js"));
  }),
  jsstacktrace: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("jsstacktrace", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_jsstacktrace */ "react-syntax-highlighter_languages_refractor_jsstacktrace").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/jsstacktrace.js */ "./node_modules/refractor/lang/jsstacktrace.js"));
  }),
  jsx: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("jsx", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_jsx */ "react-syntax-highlighter_languages_refractor_jsx").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/jsx.js */ "./node_modules/refractor/lang/jsx.js"));
  }),
  julia: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("julia", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_julia */ "react-syntax-highlighter_languages_refractor_julia").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/julia.js */ "./node_modules/refractor/lang/julia.js"));
  }),
  keepalived: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("keepalived", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_keepalived */ "react-syntax-highlighter_languages_refractor_keepalived").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/keepalived.js */ "./node_modules/refractor/lang/keepalived.js"));
  }),
  keyman: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("keyman", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_keyman */ "react-syntax-highlighter_languages_refractor_keyman").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/keyman.js */ "./node_modules/refractor/lang/keyman.js"));
  }),
  kotlin: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("kotlin", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_kotlin */ "react-syntax-highlighter_languages_refractor_kotlin").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/kotlin.js */ "./node_modules/refractor/lang/kotlin.js"));
  }),
  kumir: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("kumir", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_kumir */ "react-syntax-highlighter_languages_refractor_kumir").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/kumir.js */ "./node_modules/refractor/lang/kumir.js"));
  }),
  kusto: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("kusto", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_kusto */ "react-syntax-highlighter_languages_refractor_kusto").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/kusto.js */ "./node_modules/refractor/lang/kusto.js"));
  }),
  latex: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("latex", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_latex */ "react-syntax-highlighter_languages_refractor_latex").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/latex.js */ "./node_modules/refractor/lang/latex.js"));
  }),
  latte: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("latte", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_latte */[__webpack_require__.e("react-syntax-highlighter_languages_refractor_markupTemplating"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_php"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_latte")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/latte.js */ "./node_modules/refractor/lang/latte.js"));
  }),
  less: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("less", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_less */ "react-syntax-highlighter_languages_refractor_less").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/less.js */ "./node_modules/refractor/lang/less.js"));
  }),
  lilypond: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("lilypond", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_lilypond */ "react-syntax-highlighter_languages_refractor_lilypond").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/lilypond.js */ "./node_modules/refractor/lang/lilypond.js"));
  }),
  linkerScript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("linkerScript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_linkerScript */ "react-syntax-highlighter_languages_refractor_linkerScript").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/linker-script.js */ "./node_modules/refractor/lang/linker-script.js"));
  }),
  liquid: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("liquid", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_liquid */[__webpack_require__.e("react-syntax-highlighter_languages_refractor_markupTemplating"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_liquid")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/liquid.js */ "./node_modules/refractor/lang/liquid.js"));
  }),
  lisp: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("lisp", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_lisp */ "react-syntax-highlighter_languages_refractor_lisp").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/lisp.js */ "./node_modules/refractor/lang/lisp.js"));
  }),
  livescript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("livescript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_livescript */ "react-syntax-highlighter_languages_refractor_livescript").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/livescript.js */ "./node_modules/refractor/lang/livescript.js"));
  }),
  llvm: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("llvm", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_llvm */ "react-syntax-highlighter_languages_refractor_llvm").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/llvm.js */ "./node_modules/refractor/lang/llvm.js"));
  }),
  log: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("log", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_log */ "react-syntax-highlighter_languages_refractor_log").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/log.js */ "./node_modules/refractor/lang/log.js"));
  }),
  lolcode: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("lolcode", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_lolcode */ "react-syntax-highlighter_languages_refractor_lolcode").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/lolcode.js */ "./node_modules/refractor/lang/lolcode.js"));
  }),
  lua: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("lua", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_lua */ "react-syntax-highlighter_languages_refractor_lua").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/lua.js */ "./node_modules/refractor/lang/lua.js"));
  }),
  magma: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("magma", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_magma */ "react-syntax-highlighter_languages_refractor_magma").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/magma.js */ "./node_modules/refractor/lang/magma.js"));
  }),
  makefile: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("makefile", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_makefile */ "react-syntax-highlighter_languages_refractor_makefile").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/makefile.js */ "./node_modules/refractor/lang/makefile.js"));
  }),
  markdown: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("markdown", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_markdown */[__webpack_require__.e("vendors-node_modules_refractor_lang_markdown_js"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_markdown")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/markdown.js */ "./node_modules/refractor/lang/markdown.js"));
  }),
  markupTemplating: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("markupTemplating", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_markupTemplating */ "react-syntax-highlighter_languages_refractor_markupTemplating").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js"));
  }),
  markup: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("markup", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_markup */ "react-syntax-highlighter_languages_refractor_markup").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/markup.js */ "./node_modules/refractor/lang/markup.js"));
  }),
  mata: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("mata", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_mata */ "react-syntax-highlighter_languages_refractor_mata").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/mata.js */ "./node_modules/refractor/lang/mata.js"));
  }),
  matlab: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("matlab", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_matlab */ "react-syntax-highlighter_languages_refractor_matlab").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/matlab.js */ "./node_modules/refractor/lang/matlab.js"));
  }),
  maxscript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("maxscript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_maxscript */ "react-syntax-highlighter_languages_refractor_maxscript").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/maxscript.js */ "./node_modules/refractor/lang/maxscript.js"));
  }),
  mel: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("mel", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_mel */ "react-syntax-highlighter_languages_refractor_mel").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/mel.js */ "./node_modules/refractor/lang/mel.js"));
  }),
  mermaid: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("mermaid", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_mermaid */ "react-syntax-highlighter_languages_refractor_mermaid").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/mermaid.js */ "./node_modules/refractor/lang/mermaid.js"));
  }),
  metafont: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("metafont", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_metafont */ "react-syntax-highlighter_languages_refractor_metafont").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/metafont.js */ "./node_modules/refractor/lang/metafont.js"));
  }),
  mizar: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("mizar", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_mizar */ "react-syntax-highlighter_languages_refractor_mizar").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/mizar.js */ "./node_modules/refractor/lang/mizar.js"));
  }),
  mongodb: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("mongodb", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_mongodb */ "react-syntax-highlighter_languages_refractor_mongodb").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/mongodb.js */ "./node_modules/refractor/lang/mongodb.js"));
  }),
  monkey: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("monkey", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_monkey */ "react-syntax-highlighter_languages_refractor_monkey").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/monkey.js */ "./node_modules/refractor/lang/monkey.js"));
  }),
  moonscript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("moonscript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_moonscript */ "react-syntax-highlighter_languages_refractor_moonscript").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/moonscript.js */ "./node_modules/refractor/lang/moonscript.js"));
  }),
  n1ql: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("n1ql", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_n1ql */ "react-syntax-highlighter_languages_refractor_n1ql").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/n1ql.js */ "./node_modules/refractor/lang/n1ql.js"));
  }),
  n4js: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("n4js", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_n4js */ "react-syntax-highlighter_languages_refractor_n4js").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/n4js.js */ "./node_modules/refractor/lang/n4js.js"));
  }),
  nand2tetrisHdl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("nand2tetrisHdl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_nand2tetrisHdl */ "react-syntax-highlighter_languages_refractor_nand2tetrisHdl").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/nand2tetris-hdl.js */ "./node_modules/refractor/lang/nand2tetris-hdl.js"));
  }),
  naniscript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("naniscript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_naniscript */ "react-syntax-highlighter_languages_refractor_naniscript").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/naniscript.js */ "./node_modules/refractor/lang/naniscript.js"));
  }),
  nasm: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("nasm", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_nasm */ "react-syntax-highlighter_languages_refractor_nasm").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/nasm.js */ "./node_modules/refractor/lang/nasm.js"));
  }),
  neon: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("neon", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_neon */ "react-syntax-highlighter_languages_refractor_neon").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/neon.js */ "./node_modules/refractor/lang/neon.js"));
  }),
  nevod: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("nevod", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_nevod */ "react-syntax-highlighter_languages_refractor_nevod").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/nevod.js */ "./node_modules/refractor/lang/nevod.js"));
  }),
  nginx: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("nginx", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_nginx */ "react-syntax-highlighter_languages_refractor_nginx").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/nginx.js */ "./node_modules/refractor/lang/nginx.js"));
  }),
  nim: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("nim", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_nim */ "react-syntax-highlighter_languages_refractor_nim").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/nim.js */ "./node_modules/refractor/lang/nim.js"));
  }),
  nix: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("nix", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_nix */ "react-syntax-highlighter_languages_refractor_nix").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/nix.js */ "./node_modules/refractor/lang/nix.js"));
  }),
  nsis: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("nsis", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_nsis */ "react-syntax-highlighter_languages_refractor_nsis").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/nsis.js */ "./node_modules/refractor/lang/nsis.js"));
  }),
  objectivec: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("objectivec", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_objectivec */ "react-syntax-highlighter_languages_refractor_objectivec").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/objectivec.js */ "./node_modules/refractor/lang/objectivec.js"));
  }),
  ocaml: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ocaml", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_ocaml */ "react-syntax-highlighter_languages_refractor_ocaml").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/ocaml.js */ "./node_modules/refractor/lang/ocaml.js"));
  }),
  odin: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("odin", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_odin */ "react-syntax-highlighter_languages_refractor_odin").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/odin.js */ "./node_modules/refractor/lang/odin.js"));
  }),
  opencl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("opencl", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_opencl */[__webpack_require__.e("vendors-node_modules_refractor_lang_opencl_js"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_opencl")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/opencl.js */ "./node_modules/refractor/lang/opencl.js"));
  }),
  openqasm: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("openqasm", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_openqasm */ "react-syntax-highlighter_languages_refractor_openqasm").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/openqasm.js */ "./node_modules/refractor/lang/openqasm.js"));
  }),
  oz: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("oz", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_oz */ "react-syntax-highlighter_languages_refractor_oz").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/oz.js */ "./node_modules/refractor/lang/oz.js"));
  }),
  parigp: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("parigp", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_parigp */ "react-syntax-highlighter_languages_refractor_parigp").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/parigp.js */ "./node_modules/refractor/lang/parigp.js"));
  }),
  parser: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("parser", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_parser */ "react-syntax-highlighter_languages_refractor_parser").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/parser.js */ "./node_modules/refractor/lang/parser.js"));
  }),
  pascal: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("pascal", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_pascal */ "react-syntax-highlighter_languages_refractor_pascal").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/pascal.js */ "./node_modules/refractor/lang/pascal.js"));
  }),
  pascaligo: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("pascaligo", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_pascaligo */ "react-syntax-highlighter_languages_refractor_pascaligo").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/pascaligo.js */ "./node_modules/refractor/lang/pascaligo.js"));
  }),
  pcaxis: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("pcaxis", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_pcaxis */ "react-syntax-highlighter_languages_refractor_pcaxis").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/pcaxis.js */ "./node_modules/refractor/lang/pcaxis.js"));
  }),
  peoplecode: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("peoplecode", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_peoplecode */ "react-syntax-highlighter_languages_refractor_peoplecode").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/peoplecode.js */ "./node_modules/refractor/lang/peoplecode.js"));
  }),
  perl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("perl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_perl */ "react-syntax-highlighter_languages_refractor_perl").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/perl.js */ "./node_modules/refractor/lang/perl.js"));
  }),
  phpExtras: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("phpExtras", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_phpExtras */[__webpack_require__.e("react-syntax-highlighter_languages_refractor_markupTemplating"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_php"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_phpExtras")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/php-extras.js */ "./node_modules/refractor/lang/php-extras.js"));
  }),
  php: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("php", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_php */[__webpack_require__.e("react-syntax-highlighter_languages_refractor_markupTemplating"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_php")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/php.js */ "./node_modules/refractor/lang/php.js"));
  }),
  phpdoc: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("phpdoc", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_phpdoc */[__webpack_require__.e("react-syntax-highlighter_languages_refractor_markupTemplating"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_php"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_phpdoc")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/phpdoc.js */ "./node_modules/refractor/lang/phpdoc.js"));
  }),
  plantUml: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("plantUml", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_plantUml */ "react-syntax-highlighter_languages_refractor_plantUml").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/plant-uml.js */ "./node_modules/refractor/lang/plant-uml.js"));
  }),
  plsql: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("plsql", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_plsql */ "react-syntax-highlighter_languages_refractor_plsql").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/plsql.js */ "./node_modules/refractor/lang/plsql.js"));
  }),
  powerquery: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("powerquery", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_powerquery */ "react-syntax-highlighter_languages_refractor_powerquery").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/powerquery.js */ "./node_modules/refractor/lang/powerquery.js"));
  }),
  powershell: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("powershell", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_powershell */ "react-syntax-highlighter_languages_refractor_powershell").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/powershell.js */ "./node_modules/refractor/lang/powershell.js"));
  }),
  processing: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("processing", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_processing */ "react-syntax-highlighter_languages_refractor_processing").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/processing.js */ "./node_modules/refractor/lang/processing.js"));
  }),
  prolog: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("prolog", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_prolog */ "react-syntax-highlighter_languages_refractor_prolog").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/prolog.js */ "./node_modules/refractor/lang/prolog.js"));
  }),
  promql: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("promql", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_promql */ "react-syntax-highlighter_languages_refractor_promql").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/promql.js */ "./node_modules/refractor/lang/promql.js"));
  }),
  properties: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("properties", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_properties */ "react-syntax-highlighter_languages_refractor_properties").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/properties.js */ "./node_modules/refractor/lang/properties.js"));
  }),
  protobuf: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("protobuf", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_protobuf */ "react-syntax-highlighter_languages_refractor_protobuf").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/protobuf.js */ "./node_modules/refractor/lang/protobuf.js"));
  }),
  psl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("psl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_psl */ "react-syntax-highlighter_languages_refractor_psl").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/psl.js */ "./node_modules/refractor/lang/psl.js"));
  }),
  pug: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("pug", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_pug */ "react-syntax-highlighter_languages_refractor_pug").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/pug.js */ "./node_modules/refractor/lang/pug.js"));
  }),
  puppet: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("puppet", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_puppet */ "react-syntax-highlighter_languages_refractor_puppet").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/puppet.js */ "./node_modules/refractor/lang/puppet.js"));
  }),
  pure: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("pure", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_pure */ "react-syntax-highlighter_languages_refractor_pure").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/pure.js */ "./node_modules/refractor/lang/pure.js"));
  }),
  purebasic: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("purebasic", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_purebasic */ "react-syntax-highlighter_languages_refractor_purebasic").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/purebasic.js */ "./node_modules/refractor/lang/purebasic.js"));
  }),
  purescript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("purescript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_purescript */ "react-syntax-highlighter_languages_refractor_purescript").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/purescript.js */ "./node_modules/refractor/lang/purescript.js"));
  }),
  python: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("python", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_python */ "react-syntax-highlighter_languages_refractor_python").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/python.js */ "./node_modules/refractor/lang/python.js"));
  }),
  q: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("q", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_q */ "react-syntax-highlighter_languages_refractor_q").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/q.js */ "./node_modules/refractor/lang/q.js"));
  }),
  qml: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("qml", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_qml */ "react-syntax-highlighter_languages_refractor_qml").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/qml.js */ "./node_modules/refractor/lang/qml.js"));
  }),
  qore: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("qore", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_qore */ "react-syntax-highlighter_languages_refractor_qore").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/qore.js */ "./node_modules/refractor/lang/qore.js"));
  }),
  qsharp: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("qsharp", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_qsharp */ "react-syntax-highlighter_languages_refractor_qsharp").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/qsharp.js */ "./node_modules/refractor/lang/qsharp.js"));
  }),
  r: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("r", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_r */ "react-syntax-highlighter_languages_refractor_r").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/r.js */ "./node_modules/refractor/lang/r.js"));
  }),
  racket: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("racket", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_racket */ "react-syntax-highlighter_languages_refractor_racket").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/racket.js */ "./node_modules/refractor/lang/racket.js"));
  }),
  reason: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("reason", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_reason */ "react-syntax-highlighter_languages_refractor_reason").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/reason.js */ "./node_modules/refractor/lang/reason.js"));
  }),
  regex: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("regex", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_regex */ "react-syntax-highlighter_languages_refractor_regex").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/regex.js */ "./node_modules/refractor/lang/regex.js"));
  }),
  rego: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("rego", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_rego */ "react-syntax-highlighter_languages_refractor_rego").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/rego.js */ "./node_modules/refractor/lang/rego.js"));
  }),
  renpy: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("renpy", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_renpy */ "react-syntax-highlighter_languages_refractor_renpy").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/renpy.js */ "./node_modules/refractor/lang/renpy.js"));
  }),
  rescript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("rescript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_rescript */ "react-syntax-highlighter_languages_refractor_rescript").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/rescript.js */ "./node_modules/refractor/lang/rescript.js"));
  }),
  rest: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("rest", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_rest */ "react-syntax-highlighter_languages_refractor_rest").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/rest.js */ "./node_modules/refractor/lang/rest.js"));
  }),
  rip: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("rip", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_rip */ "react-syntax-highlighter_languages_refractor_rip").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/rip.js */ "./node_modules/refractor/lang/rip.js"));
  }),
  roboconf: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("roboconf", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_roboconf */ "react-syntax-highlighter_languages_refractor_roboconf").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/roboconf.js */ "./node_modules/refractor/lang/roboconf.js"));
  }),
  robotframework: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("robotframework", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_robotframework */ "react-syntax-highlighter_languages_refractor_robotframework").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/robotframework.js */ "./node_modules/refractor/lang/robotframework.js"));
  }),
  ruby: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ruby", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_ruby */ "react-syntax-highlighter_languages_refractor_ruby").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/ruby.js */ "./node_modules/refractor/lang/ruby.js"));
  }),
  rust: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("rust", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_rust */ "react-syntax-highlighter_languages_refractor_rust").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/rust.js */ "./node_modules/refractor/lang/rust.js"));
  }),
  sas: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("sas", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_sas */ "react-syntax-highlighter_languages_refractor_sas").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/sas.js */ "./node_modules/refractor/lang/sas.js"));
  }),
  sass: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("sass", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_sass */ "react-syntax-highlighter_languages_refractor_sass").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/sass.js */ "./node_modules/refractor/lang/sass.js"));
  }),
  scala: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("scala", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_scala */ "react-syntax-highlighter_languages_refractor_scala").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/scala.js */ "./node_modules/refractor/lang/scala.js"));
  }),
  scheme: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("scheme", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_scheme */ "react-syntax-highlighter_languages_refractor_scheme").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/scheme.js */ "./node_modules/refractor/lang/scheme.js"));
  }),
  scss: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("scss", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_scss */ "react-syntax-highlighter_languages_refractor_scss").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/scss.js */ "./node_modules/refractor/lang/scss.js"));
  }),
  shellSession: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("shellSession", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_shellSession */[__webpack_require__.e("react-syntax-highlighter_languages_refractor_bash"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_shellSession")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/shell-session.js */ "./node_modules/refractor/lang/shell-session.js"));
  }),
  smali: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("smali", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_smali */ "react-syntax-highlighter_languages_refractor_smali").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/smali.js */ "./node_modules/refractor/lang/smali.js"));
  }),
  smalltalk: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("smalltalk", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_smalltalk */ "react-syntax-highlighter_languages_refractor_smalltalk").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/smalltalk.js */ "./node_modules/refractor/lang/smalltalk.js"));
  }),
  smarty: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("smarty", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_smarty */[__webpack_require__.e("react-syntax-highlighter_languages_refractor_markupTemplating"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_smarty")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/smarty.js */ "./node_modules/refractor/lang/smarty.js"));
  }),
  sml: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("sml", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_sml */ "react-syntax-highlighter_languages_refractor_sml").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/sml.js */ "./node_modules/refractor/lang/sml.js"));
  }),
  solidity: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("solidity", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_solidity */ "react-syntax-highlighter_languages_refractor_solidity").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/solidity.js */ "./node_modules/refractor/lang/solidity.js"));
  }),
  solutionFile: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("solutionFile", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_solutionFile */ "react-syntax-highlighter_languages_refractor_solutionFile").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/solution-file.js */ "./node_modules/refractor/lang/solution-file.js"));
  }),
  soy: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("soy", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_soy */[__webpack_require__.e("react-syntax-highlighter_languages_refractor_markupTemplating"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_soy")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/soy.js */ "./node_modules/refractor/lang/soy.js"));
  }),
  sparql: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("sparql", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_sparql */ "react-syntax-highlighter_languages_refractor_sparql").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/sparql.js */ "./node_modules/refractor/lang/sparql.js"));
  }),
  splunkSpl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("splunkSpl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_splunkSpl */ "react-syntax-highlighter_languages_refractor_splunkSpl").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/splunk-spl.js */ "./node_modules/refractor/lang/splunk-spl.js"));
  }),
  sqf: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("sqf", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_sqf */[__webpack_require__.e("vendors-node_modules_refractor_lang_sqf_js"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_sqf")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/sqf.js */ "./node_modules/refractor/lang/sqf.js"));
  }),
  sql: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("sql", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_sql */ "react-syntax-highlighter_languages_refractor_sql").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/sql.js */ "./node_modules/refractor/lang/sql.js"));
  }),
  squirrel: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("squirrel", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_squirrel */ "react-syntax-highlighter_languages_refractor_squirrel").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/squirrel.js */ "./node_modules/refractor/lang/squirrel.js"));
  }),
  stan: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("stan", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_stan */ "react-syntax-highlighter_languages_refractor_stan").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/stan.js */ "./node_modules/refractor/lang/stan.js"));
  }),
  stata: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("stata", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_stata */[__webpack_require__.e("vendors-node_modules_refractor_lang_stata_js"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_stata")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/stata.js */ "./node_modules/refractor/lang/stata.js"));
  }),
  stylus: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("stylus", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_stylus */ "react-syntax-highlighter_languages_refractor_stylus").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/stylus.js */ "./node_modules/refractor/lang/stylus.js"));
  }),
  supercollider: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("supercollider", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_supercollider */ "react-syntax-highlighter_languages_refractor_supercollider").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/supercollider.js */ "./node_modules/refractor/lang/supercollider.js"));
  }),
  swift: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("swift", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_swift */ "react-syntax-highlighter_languages_refractor_swift").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/swift.js */ "./node_modules/refractor/lang/swift.js"));
  }),
  systemd: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("systemd", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_systemd */ "react-syntax-highlighter_languages_refractor_systemd").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/systemd.js */ "./node_modules/refractor/lang/systemd.js"));
  }),
  t4Cs: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("t4Cs", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_t4Cs */[__webpack_require__.e("vendors-node_modules_refractor_lang_csharp_js"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_t4Cs")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/t4-cs.js */ "./node_modules/refractor/lang/t4-cs.js"));
  }),
  t4Templating: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("t4Templating", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_t4Templating */ "react-syntax-highlighter_languages_refractor_t4Templating").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/t4-templating.js */ "./node_modules/refractor/lang/t4-templating.js"));
  }),
  t4Vb: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("t4Vb", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_t4Vb */ "react-syntax-highlighter_languages_refractor_t4Vb").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/t4-vb.js */ "./node_modules/refractor/lang/t4-vb.js"));
  }),
  tap: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("tap", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_tap */ "react-syntax-highlighter_languages_refractor_tap").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/tap.js */ "./node_modules/refractor/lang/tap.js"));
  }),
  tcl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("tcl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_tcl */ "react-syntax-highlighter_languages_refractor_tcl").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/tcl.js */ "./node_modules/refractor/lang/tcl.js"));
  }),
  textile: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("textile", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_textile */[__webpack_require__.e("vendors-node_modules_refractor_lang_textile_js"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_textile")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/textile.js */ "./node_modules/refractor/lang/textile.js"));
  }),
  toml: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("toml", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_toml */ "react-syntax-highlighter_languages_refractor_toml").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/toml.js */ "./node_modules/refractor/lang/toml.js"));
  }),
  tremor: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("tremor", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_tremor */ "react-syntax-highlighter_languages_refractor_tremor").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/tremor.js */ "./node_modules/refractor/lang/tremor.js"));
  }),
  tsx: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("tsx", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_tsx */[__webpack_require__.e("react-syntax-highlighter_languages_refractor_jsx"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/tsx.js */ "./node_modules/refractor/lang/tsx.js"));
  }),
  tt2: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("tt2", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_tt2 */[__webpack_require__.e("react-syntax-highlighter_languages_refractor_markupTemplating"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_tt2")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/tt2.js */ "./node_modules/refractor/lang/tt2.js"));
  }),
  turtle: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("turtle", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_turtle */ "react-syntax-highlighter_languages_refractor_turtle").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/turtle.js */ "./node_modules/refractor/lang/turtle.js"));
  }),
  twig: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("twig", function () {
    return Promise.all(/*! import() | react-syntax-highlighter_languages_refractor_twig */[__webpack_require__.e("react-syntax-highlighter_languages_refractor_markupTemplating"), __webpack_require__.e("react-syntax-highlighter_languages_refractor_twig")]).then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/twig.js */ "./node_modules/refractor/lang/twig.js"));
  }),
  typescript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("typescript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_typescript */ "react-syntax-highlighter_languages_refractor_typescript").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/typescript.js */ "./node_modules/refractor/lang/typescript.js"));
  }),
  typoscript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("typoscript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_typoscript */ "react-syntax-highlighter_languages_refractor_typoscript").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/typoscript.js */ "./node_modules/refractor/lang/typoscript.js"));
  }),
  unrealscript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("unrealscript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_unrealscript */ "react-syntax-highlighter_languages_refractor_unrealscript").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/unrealscript.js */ "./node_modules/refractor/lang/unrealscript.js"));
  }),
  uorazor: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("uorazor", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_uorazor */ "react-syntax-highlighter_languages_refractor_uorazor").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/uorazor.js */ "./node_modules/refractor/lang/uorazor.js"));
  }),
  uri: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("uri", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_uri */ "react-syntax-highlighter_languages_refractor_uri").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/uri.js */ "./node_modules/refractor/lang/uri.js"));
  }),
  v: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("v", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_v */ "react-syntax-highlighter_languages_refractor_v").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/v.js */ "./node_modules/refractor/lang/v.js"));
  }),
  vala: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("vala", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_vala */ "react-syntax-highlighter_languages_refractor_vala").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/vala.js */ "./node_modules/refractor/lang/vala.js"));
  }),
  vbnet: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("vbnet", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_vbnet */ "react-syntax-highlighter_languages_refractor_vbnet").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/vbnet.js */ "./node_modules/refractor/lang/vbnet.js"));
  }),
  velocity: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("velocity", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_velocity */ "react-syntax-highlighter_languages_refractor_velocity").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/velocity.js */ "./node_modules/refractor/lang/velocity.js"));
  }),
  verilog: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("verilog", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_verilog */ "react-syntax-highlighter_languages_refractor_verilog").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/verilog.js */ "./node_modules/refractor/lang/verilog.js"));
  }),
  vhdl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("vhdl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_vhdl */ "react-syntax-highlighter_languages_refractor_vhdl").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/vhdl.js */ "./node_modules/refractor/lang/vhdl.js"));
  }),
  vim: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("vim", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_vim */ "react-syntax-highlighter_languages_refractor_vim").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/vim.js */ "./node_modules/refractor/lang/vim.js"));
  }),
  visualBasic: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("visualBasic", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_visualBasic */ "react-syntax-highlighter_languages_refractor_visualBasic").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/visual-basic.js */ "./node_modules/refractor/lang/visual-basic.js"));
  }),
  warpscript: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("warpscript", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_warpscript */ "react-syntax-highlighter_languages_refractor_warpscript").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/warpscript.js */ "./node_modules/refractor/lang/warpscript.js"));
  }),
  wasm: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("wasm", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_wasm */ "react-syntax-highlighter_languages_refractor_wasm").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/wasm.js */ "./node_modules/refractor/lang/wasm.js"));
  }),
  webIdl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("webIdl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_webIdl */ "react-syntax-highlighter_languages_refractor_webIdl").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/web-idl.js */ "./node_modules/refractor/lang/web-idl.js"));
  }),
  wgsl: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("wgsl", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_wgsl */ "react-syntax-highlighter_languages_refractor_wgsl").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/wgsl.js */ "./node_modules/refractor/lang/wgsl.js"));
  }),
  wiki: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("wiki", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_wiki */ "react-syntax-highlighter_languages_refractor_wiki").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/wiki.js */ "./node_modules/refractor/lang/wiki.js"));
  }),
  wolfram: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("wolfram", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_wolfram */ "react-syntax-highlighter_languages_refractor_wolfram").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/wolfram.js */ "./node_modules/refractor/lang/wolfram.js"));
  }),
  wren: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("wren", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_wren */ "react-syntax-highlighter_languages_refractor_wren").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/wren.js */ "./node_modules/refractor/lang/wren.js"));
  }),
  xeora: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("xeora", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_xeora */ "react-syntax-highlighter_languages_refractor_xeora").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/xeora.js */ "./node_modules/refractor/lang/xeora.js"));
  }),
  xmlDoc: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("xmlDoc", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_xmlDoc */ "react-syntax-highlighter_languages_refractor_xmlDoc").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/xml-doc.js */ "./node_modules/refractor/lang/xml-doc.js"));
  }),
  xojo: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("xojo", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_xojo */ "react-syntax-highlighter_languages_refractor_xojo").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/xojo.js */ "./node_modules/refractor/lang/xojo.js"));
  }),
  xquery: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("xquery", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_xquery */ "react-syntax-highlighter_languages_refractor_xquery").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/xquery.js */ "./node_modules/refractor/lang/xquery.js"));
  }),
  yaml: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("yaml", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_yaml */ "react-syntax-highlighter_languages_refractor_yaml").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/yaml.js */ "./node_modules/refractor/lang/yaml.js"));
  }),
  yang: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("yang", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_yang */ "react-syntax-highlighter_languages_refractor_yang").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/yang.js */ "./node_modules/refractor/lang/yang.js"));
  }),
  zig: (0,_create_language_async_loader_js__WEBPACK_IMPORTED_MODULE_0__["default"])("zig", function () {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter_languages_refractor_zig */ "react-syntax-highlighter_languages_refractor_zig").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lang/zig.js */ "./node_modules/refractor/lang/zig.js"));
  })
});

/***/ }),

/***/ "./src/async-syntax-highlighter.js":
/*!*****************************************!*\
  !*** ./src/async-syntax-highlighter.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _highlight_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./highlight.js */ "./src/highlight.js");









function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (options) {
  var _ReactAsyncHighlighter;
  var loader = options.loader,
    isLanguageRegistered = options.isLanguageRegistered,
    registerLanguage = options.registerLanguage,
    languageLoaders = options.languageLoaders,
    noAsyncLoadingLanguages = options.noAsyncLoadingLanguages;
  var ReactAsyncHighlighter = /*#__PURE__*/function (_React$PureComponent) {
    function ReactAsyncHighlighter() {
      (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ReactAsyncHighlighter);
      return _callSuper(this, ReactAsyncHighlighter, arguments);
    }
    (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ReactAsyncHighlighter, _React$PureComponent);
    return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ReactAsyncHighlighter, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        if (!ReactAsyncHighlighter.isRegistered(this.props.language) && languageLoaders) {
          this.loadLanguage();
        }
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this = this;
        if (!ReactAsyncHighlighter.astGeneratorPromise) {
          ReactAsyncHighlighter.loadAstGenerator();
        }
        if (!ReactAsyncHighlighter.astGenerator) {
          ReactAsyncHighlighter.astGeneratorPromise.then(function () {
            _this.forceUpdate();
          });
        }
        if (!ReactAsyncHighlighter.isRegistered(this.props.language) && languageLoaders) {
          this.loadLanguage();
        }
      }
    }, {
      key: "loadLanguage",
      value: function loadLanguage() {
        var _this2 = this;
        var language = this.props.language;
        if (language === 'text') {
          return;
        }
        ReactAsyncHighlighter.loadLanguage(language).then(function () {
          return _this2.forceUpdate();
        })["catch"](function () {});
      }
    }, {
      key: "normalizeLanguage",
      value: function normalizeLanguage(language) {
        return ReactAsyncHighlighter.isSupportedLanguage(language) ? language : 'text';
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(ReactAsyncHighlighter.highlightInstance, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props, {
          language: this.normalizeLanguage(this.props.language),
          astGenerator: ReactAsyncHighlighter.astGenerator
        }));
      }
    }], [{
      key: "preload",
      value: function preload() {
        return ReactAsyncHighlighter.loadAstGenerator();
      }
    }, {
      key: "loadLanguage",
      value: function () {
        var _loadLanguage = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__.mark(function _callee(language) {
          var languageLoader;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                languageLoader = languageLoaders[language];
                if (!(typeof languageLoader === 'function')) {
                  _context.next = 5;
                  break;
                }
                return _context.abrupt("return", languageLoader(ReactAsyncHighlighter.registerLanguage));
              case 5:
                throw new Error("Language ".concat(language, " not supported"));
              case 6:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function loadLanguage(_x) {
          return _loadLanguage.apply(this, arguments);
        }
        return loadLanguage;
      }()
    }, {
      key: "isSupportedLanguage",
      value: function isSupportedLanguage(language) {
        return ReactAsyncHighlighter.isRegistered(language) || typeof languageLoaders[language] === 'function';
      }
    }, {
      key: "loadAstGenerator",
      value: function loadAstGenerator() {
        ReactAsyncHighlighter.astGeneratorPromise = loader().then(function (astGenerator) {
          ReactAsyncHighlighter.astGenerator = astGenerator;
          if (registerLanguage) {
            ReactAsyncHighlighter.languages.forEach(function (language, name) {
              return registerLanguage(astGenerator, name, language);
            });
          }
        });
        return ReactAsyncHighlighter.astGeneratorPromise;
      }
    }]);
  }(react__WEBPACK_IMPORTED_MODULE_9__.PureComponent);
  _ReactAsyncHighlighter = ReactAsyncHighlighter;
  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(ReactAsyncHighlighter, "astGenerator", null);
  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(ReactAsyncHighlighter, "highlightInstance", (0,_highlight_js__WEBPACK_IMPORTED_MODULE_10__["default"])(null, {}));
  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(ReactAsyncHighlighter, "astGeneratorPromise", null);
  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(ReactAsyncHighlighter, "languages", new Map());
  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(ReactAsyncHighlighter, "supportedLanguages", options.supportedLanguages || Object.keys(languageLoaders || {}));
  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(ReactAsyncHighlighter, "isRegistered", function (language) {
    if (noAsyncLoadingLanguages) {
      return true;
    }
    if (!registerLanguage) {
      throw new Error("Current syntax highlighter doesn't support registration of languages");
    }
    if (!_ReactAsyncHighlighter.astGenerator) {
      // Ast generator not available yet, but language will be registered once it is.
      return _ReactAsyncHighlighter.languages.has(language);
    }
    return isLanguageRegistered(_ReactAsyncHighlighter.astGenerator, language);
  });
  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(ReactAsyncHighlighter, "registerLanguage", function (name, language) {
    if (!registerLanguage) {
      throw new Error("Current syntax highlighter doesn't support registration of languages");
    }
    if (_ReactAsyncHighlighter.astGenerator) {
      return registerLanguage(_ReactAsyncHighlighter.astGenerator, name, language);
    } else {
      _ReactAsyncHighlighter.languages.set(name, language);
    }
  });
  return ReactAsyncHighlighter;
});

/***/ }),

/***/ "./src/checkForListedLanguage.js":
/*!***************************************!*\
  !*** ./src/checkForListedLanguage.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (astGenerator, language) {
  var langs = astGenerator.listLanguages();
  return langs.indexOf(language) !== -1;
});

/***/ }),

/***/ "./src/create-element.js":
/*!*******************************!*\
  !*** ./src/create-element.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createChildren: () => (/* binding */ createChildren),
/* harmony export */   createClassNameString: () => (/* binding */ createClassNameString),
/* harmony export */   createStyleObject: () => (/* binding */ createStyleObject),
/* harmony export */   "default": () => (/* binding */ createElement)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


// Get all possible permutations of all power sets
//
// Super simple, non-algorithmic solution since the
// number of class names will not be greater than 4
function powerSetPermutations(arr) {
  var arrLength = arr.length;
  if (arrLength === 0 || arrLength === 1) return arr;
  if (arrLength === 2) {
    // prettier-ignore
    return [arr[0], arr[1], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0])];
  }
  if (arrLength === 3) {
    return [arr[0], arr[1], arr[2], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
  }
  if (arrLength >= 4) {
    // Currently does not support more than 4 extra
    // class names (after `.token` has been removed)
    return [arr[0], arr[1], arr[2], arr[3], "".concat(arr[0], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[3]), "".concat(arr[3], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]), "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]), "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]), "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])];
  }
}
var classNameCombinations = {};
function getClassNameCombinations(classNames) {
  if (classNames.length === 0 || classNames.length === 1) return classNames;
  var key = classNames.join('.');
  if (!classNameCombinations[key]) {
    classNameCombinations[key] = powerSetPermutations(classNames);
  }
  return classNameCombinations[key];
}
function createStyleObject(classNames) {
  var elementStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var stylesheet = arguments.length > 2 ? arguments[2] : undefined;
  var nonTokenClassNames = classNames.filter(function (className) {
    return className !== 'token';
  });
  var classNamesCombinations = getClassNameCombinations(nonTokenClassNames);
  return classNamesCombinations.reduce(function (styleObject, className) {
    return _objectSpread(_objectSpread({}, styleObject), stylesheet[className]);
  }, elementStyle);
}
function createClassNameString(classNames) {
  return classNames.join(' ');
}
function createChildren(stylesheet, useInlineStyles) {
  var childrenCount = 0;
  return function (children) {
    childrenCount += 1;
    return children.map(function (child, i) {
      return createElement({
        node: child,
        stylesheet: stylesheet,
        useInlineStyles: useInlineStyles,
        key: "code-segment-".concat(childrenCount, "-").concat(i)
      });
    });
  };
}
function createElement(_ref) {
  var node = _ref.node,
    stylesheet = _ref.stylesheet,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    useInlineStyles = _ref.useInlineStyles,
    key = _ref.key;
  var properties = node.properties,
    type = node.type,
    TagName = node.tagName,
    value = node.value;
  if (type === 'text') {
    return value;
  } else if (TagName) {
    var childrenCreator = createChildren(stylesheet, useInlineStyles);
    var props;
    if (!useInlineStyles) {
      props = _objectSpread(_objectSpread({}, properties), {}, {
        className: createClassNameString(properties.className)
      });
    } else {
      var allStylesheetSelectors = Object.keys(stylesheet).reduce(function (classes, selector) {
        selector.split('.').forEach(function (className) {
          if (!classes.includes(className)) classes.push(className);
        });
        return classes;
      }, []);

      // For compatibility with older versions of react-syntax-highlighter
      var startingClassName = properties.className && properties.className.includes('token') ? ['token'] : [];
      var className = properties.className && startingClassName.concat(properties.className.filter(function (className) {
        return !allStylesheetSelectors.includes(className);
      }));
      props = _objectSpread(_objectSpread({}, properties), {}, {
        className: createClassNameString(className) || undefined,
        style: createStyleObject(properties.className, Object.assign({}, properties.style, style), stylesheet)
      });
    }
    var children = childrenCreator(node.children);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(TagName, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: key
    }, props), children);
  }
}

/***/ }),

/***/ "./src/default-highlight.js":
/*!**********************************!*\
  !*** ./src/default-highlight.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _highlight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlight.js */ "./src/highlight.js");
/* harmony import */ var _styles_hljs_default_style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/hljs/default-style.js */ "./src/styles/hljs/default-style.js");
/* harmony import */ var lowlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lowlight */ "./node_modules/lowlight/lib/index.js");
/* harmony import */ var _languages_hljs_supported_languages_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./languages/hljs/supported-languages.js */ "./src/languages/hljs/supported-languages.js");




var lowlight = (0,lowlight__WEBPACK_IMPORTED_MODULE_0__.createLowlight)();
var highlighter = (0,_highlight_js__WEBPACK_IMPORTED_MODULE_1__["default"])(lowlight, _styles_hljs_default_style_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
highlighter.supportedLanguages = _languages_hljs_supported_languages_js__WEBPACK_IMPORTED_MODULE_3__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (highlighter);

/***/ }),

/***/ "./src/highlight.js":
/*!**************************!*\
  !*** ./src/highlight.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _create_element_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-element.js */ "./src/create-element.js");
/* harmony import */ var _checkForListedLanguage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkForListedLanguage.js */ "./src/checkForListedLanguage.js");



var _excluded = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



var newLineRegex = /\n/g;
function getNewLines(str) {
  return str.match(newLineRegex);
}
function getAllLineNumbers(_ref) {
  var lines = _ref.lines,
    startingLineNumber = _ref.startingLineNumber,
    style = _ref.style;
  return lines.map(function (_, i) {
    var number = i + startingLineNumber;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
      key: "line-".concat(i),
      className: "react-syntax-highlighter-line-number",
      style: typeof style === 'function' ? style(number) : style
    }, "".concat(number, "\n"));
  });
}
function AllLineNumbers(_ref2) {
  var codeString = _ref2.codeString,
    codeStyle = _ref2.codeStyle,
    _ref2$containerStyle = _ref2.containerStyle,
    containerStyle = _ref2$containerStyle === void 0 ? {
      "float": 'left',
      paddingRight: '10px'
    } : _ref2$containerStyle,
    _ref2$numberStyle = _ref2.numberStyle,
    numberStyle = _ref2$numberStyle === void 0 ? {} : _ref2$numberStyle,
    startingLineNumber = _ref2.startingLineNumber;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("code", {
    style: Object.assign({}, codeStyle, containerStyle)
  }, getAllLineNumbers({
    lines: codeString.replace(/\n$/, '').split('\n'),
    style: numberStyle,
    startingLineNumber: startingLineNumber
  }));
}
function getEmWidthOfNumber(num) {
  return "".concat(num.toString().length, ".25em");
}
function getInlineLineNumber(lineNumber, inlineLineNumberStyle) {
  return {
    type: 'element',
    tagName: 'span',
    properties: {
      key: "line-number--".concat(lineNumber),
      className: ['comment', 'linenumber', 'react-syntax-highlighter-line-number'],
      style: inlineLineNumberStyle
    },
    children: [{
      type: 'text',
      value: lineNumber
    }]
  };
}
function assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber) {
  // minimally necessary styling for line numbers
  var defaultLineNumberStyle = {
    display: 'inline-block',
    minWidth: getEmWidthOfNumber(largestLineNumber),
    paddingRight: '1em',
    textAlign: 'right',
    userSelect: 'none'
  };
  // prep custom styling
  var customLineNumberStyle = typeof lineNumberStyle === 'function' ? lineNumberStyle(lineNumber) : lineNumberStyle;
  // combine
  var assembledStyle = _objectSpread(_objectSpread({}, defaultLineNumberStyle), customLineNumberStyle);
  return assembledStyle;
}
function createLineElement(_ref3) {
  var children = _ref3.children,
    lineNumber = _ref3.lineNumber,
    lineNumberStyle = _ref3.lineNumberStyle,
    largestLineNumber = _ref3.largestLineNumber,
    showInlineLineNumbers = _ref3.showInlineLineNumbers,
    _ref3$lineProps = _ref3.lineProps,
    lineProps = _ref3$lineProps === void 0 ? {} : _ref3$lineProps,
    _ref3$className = _ref3.className,
    className = _ref3$className === void 0 ? [] : _ref3$className,
    showLineNumbers = _ref3.showLineNumbers,
    wrapLongLines = _ref3.wrapLongLines;
  var properties = typeof lineProps === 'function' ? lineProps(lineNumber) : lineProps;
  properties['className'] = className;
  if (lineNumber && showInlineLineNumbers) {
    var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber);
    children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
  }
  if (wrapLongLines & showLineNumbers) {
    properties.style = _objectSpread(_objectSpread({}, properties.style), {}, {
      display: 'flex'
    });
  }
  return {
    type: 'element',
    tagName: 'span',
    properties: properties,
    children: children
  };
}
function flattenCodeTree(tree) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var newTree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if (tree.type === 'root') {
    return flattenCodeTree(tree.children, className, newTree);
  }
  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];
    if (node.type === 'text') {
      newTree.push(createLineElement({
        children: [node],
        className: (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new Set(className))
      }));
    } else if (node.children) {
      var classNames = className.concat(node.properties.className);
      flattenCodeTree(node.children, classNames).forEach(function (i) {
        return newTree.push(i);
      });
    }
  }
  return newTree;
}
function processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines) {
  var _ref4;
  var tree = flattenCodeTree(codeTree.value);
  var newTree = [];
  var lastLineBreakIndex = -1;
  var index = 0;
  function createWrappedLine(children, lineNumber) {
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    return createLineElement({
      children: children,
      lineNumber: lineNumber,
      lineNumberStyle: lineNumberStyle,
      largestLineNumber: largestLineNumber,
      showInlineLineNumbers: showInlineLineNumbers,
      lineProps: lineProps,
      className: className,
      showLineNumbers: showLineNumbers,
      wrapLongLines: wrapLongLines
    });
  }
  function createUnwrappedLine(children, lineNumber) {
    if (showLineNumbers && lineNumber && showInlineLineNumbers) {
      var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber);
      children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
    }
    return children;
  }
  function createLine(children, lineNumber) {
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    return wrapLines || className.length > 0 ? createWrappedLine(children, lineNumber, className) : createUnwrappedLine(children, lineNumber);
  }
  var _loop = function _loop() {
    var node = tree[index];
    var value = node.children[0].value;
    var newLines = getNewLines(value);
    if (newLines) {
      var splitValue = value.split('\n');
      splitValue.forEach(function (text, i) {
        var lineNumber = showLineNumbers && newTree.length + startingLineNumber;
        var newChild = {
          type: 'text',
          value: "".concat(text, "\n")
        };

        // if it's the first line
        if (i === 0) {
          var _children = tree.slice(lastLineBreakIndex + 1, index).concat(createLineElement({
            children: [newChild],
            className: node.properties.className
          }));
          var _line = createLine(_children, lineNumber);
          newTree.push(_line);

          // if it's the last line
        } else if (i === splitValue.length - 1) {
          var stringChild = tree[index + 1] && tree[index + 1].children && tree[index + 1].children[0];
          var lastLineInPreviousSpan = {
            type: 'text',
            value: "".concat(text)
          };
          if (stringChild) {
            var newElem = createLineElement({
              children: [lastLineInPreviousSpan],
              className: node.properties.className
            });
            tree.splice(index + 1, 0, newElem);
          } else {
            var _children2 = [lastLineInPreviousSpan];
            var _line2 = createLine(_children2, lineNumber, node.properties.className);
            newTree.push(_line2);
          }

          // if it's neither the first nor the last line
        } else {
          var _children3 = [newChild];
          var _line3 = createLine(_children3, lineNumber, node.properties.className);
          newTree.push(_line3);
        }
      });
      lastLineBreakIndex = index;
    }
    index++;
  };
  while (index < tree.length) {
    _loop();
  }
  if (lastLineBreakIndex !== tree.length - 1) {
    var children = tree.slice(lastLineBreakIndex + 1, tree.length);
    if (children && children.length) {
      var lineNumber = showLineNumbers && newTree.length + startingLineNumber;
      var line = createLine(children, lineNumber);
      newTree.push(line);
    }
  }
  return wrapLines ? newTree : (_ref4 = []).concat.apply(_ref4, newTree);
}
function defaultRenderer(_ref5) {
  var rows = _ref5.rows,
    stylesheet = _ref5.stylesheet,
    useInlineStyles = _ref5.useInlineStyles;
  return rows.map(function (node, i) {
    return (0,_create_element_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
      node: node,
      stylesheet: stylesheet,
      useInlineStyles: useInlineStyles,
      key: "code-segement".concat(i)
    });
  });
}

// only highlight.js has the highlightAuto method
function isHighlightJs(astGenerator) {
  return astGenerator && typeof astGenerator.highlightAuto !== 'undefined';
}
function getCodeTree(_ref6) {
  var astGenerator = _ref6.astGenerator,
    language = _ref6.language,
    code = _ref6.code,
    defaultCodeValue = _ref6.defaultCodeValue;
  // figure out whether we're using lowlight/highlight or refractor/prism
  // then attempt highlighting accordingly

  // lowlight/highlight?
  if (isHighlightJs(astGenerator)) {
    var hasLanguage = (0,_checkForListedLanguage_js__WEBPACK_IMPORTED_MODULE_5__["default"])(astGenerator, language);
    if (language === 'text') {
      return {
        value: defaultCodeValue,
        language: 'text'
      };
    } else if (hasLanguage) {
      return astGenerator.highlight(language, code);
    } else {
      return astGenerator.highlightAuto(code);
    }
  }

  // must be refractor/prism, then
  try {
    return language && language !== 'text' ? {
      value: astGenerator.highlight(code, language)
    } : {
      value: defaultCodeValue
    };
  } catch (e) {
    return {
      value: defaultCodeValue
    };
  }
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(defaultAstGenerator, defaultStyle) {
  return function SyntaxHighlighter(_ref7) {
    var _codeTree$value$type, _codeTree$value;
    var language = _ref7.language,
      children = _ref7.children,
      _ref7$style = _ref7.style,
      style = _ref7$style === void 0 ? defaultStyle : _ref7$style,
      _ref7$customStyle = _ref7.customStyle,
      customStyle = _ref7$customStyle === void 0 ? {} : _ref7$customStyle,
      _ref7$codeTagProps = _ref7.codeTagProps,
      codeTagProps = _ref7$codeTagProps === void 0 ? {
        className: language ? "language-".concat(language) : undefined,
        style: _objectSpread(_objectSpread({}, style['code[class*="language-"]']), style["code[class*=\"language-".concat(language, "\"]")])
      } : _ref7$codeTagProps,
      _ref7$useInlineStyles = _ref7.useInlineStyles,
      useInlineStyles = _ref7$useInlineStyles === void 0 ? true : _ref7$useInlineStyles,
      _ref7$showLineNumbers = _ref7.showLineNumbers,
      showLineNumbers = _ref7$showLineNumbers === void 0 ? false : _ref7$showLineNumbers,
      _ref7$showInlineLineN = _ref7.showInlineLineNumbers,
      showInlineLineNumbers = _ref7$showInlineLineN === void 0 ? true : _ref7$showInlineLineN,
      _ref7$startingLineNum = _ref7.startingLineNumber,
      startingLineNumber = _ref7$startingLineNum === void 0 ? 1 : _ref7$startingLineNum,
      lineNumberContainerStyle = _ref7.lineNumberContainerStyle,
      _ref7$lineNumberStyle = _ref7.lineNumberStyle,
      lineNumberStyle = _ref7$lineNumberStyle === void 0 ? {} : _ref7$lineNumberStyle,
      wrapLines = _ref7.wrapLines,
      _ref7$wrapLongLines = _ref7.wrapLongLines,
      wrapLongLines = _ref7$wrapLongLines === void 0 ? false : _ref7$wrapLongLines,
      _ref7$lineProps = _ref7.lineProps,
      lineProps = _ref7$lineProps === void 0 ? {} : _ref7$lineProps,
      renderer = _ref7.renderer,
      _ref7$PreTag = _ref7.PreTag,
      PreTag = _ref7$PreTag === void 0 ? 'pre' : _ref7$PreTag,
      _ref7$CodeTag = _ref7.CodeTag,
      CodeTag = _ref7$CodeTag === void 0 ? 'code' : _ref7$CodeTag,
      _ref7$code = _ref7.code,
      code = _ref7$code === void 0 ? (Array.isArray(children) ? children[0] : children) || '' : _ref7$code,
      astGenerator = _ref7.astGenerator,
      rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref7, _excluded);
    astGenerator = astGenerator || defaultAstGenerator;
    var allLineNumbers = showLineNumbers ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(AllLineNumbers, {
      containerStyle: lineNumberContainerStyle,
      codeStyle: codeTagProps.style || {},
      numberStyle: lineNumberStyle,
      startingLineNumber: startingLineNumber,
      codeString: code
    }) : null;
    var defaultPreStyle = style.hljs || style['pre[class*="language-"]'] || {
      backgroundColor: '#fff'
    };
    var generatorClassName = isHighlightJs(astGenerator) ? 'hljs' : 'prismjs';
    var preProps = useInlineStyles ? Object.assign({}, rest, {
      style: Object.assign({}, defaultPreStyle, customStyle)
    }) : Object.assign({}, rest, {
      className: rest.className ? "".concat(generatorClassName, " ").concat(rest.className) : generatorClassName,
      style: Object.assign({}, customStyle)
    });
    if (wrapLongLines) {
      codeTagProps.style = _objectSpread(_objectSpread({}, codeTagProps.style), {}, {
        whiteSpace: 'pre-wrap'
      });
    } else {
      codeTagProps.style = _objectSpread(_objectSpread({}, codeTagProps.style), {}, {
        whiteSpace: 'pre'
      });
    }
    if (!astGenerator) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(PreTag, preProps, allLineNumbers, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(CodeTag, codeTagProps, code));
    }

    /*
     * Some custom renderers rely on individual row elements so we need to turn wrapLines on
     * if renderer is provided and wrapLines is undefined.
     */
    if (wrapLines === undefined && renderer || wrapLongLines) wrapLines = true;
    renderer = renderer || defaultRenderer;
    var defaultCodeValue = [{
      type: 'text',
      value: code
    }];
    var codeTree = getCodeTree({
      astGenerator: astGenerator,
      language: language,
      code: code,
      defaultCodeValue: defaultCodeValue
    });
    if (codeTree.language === null) {
      codeTree.value = defaultCodeValue;
    }
    if (((_codeTree$value$type = codeTree === null || codeTree === void 0 || (_codeTree$value = codeTree.value) === null || _codeTree$value === void 0 ? void 0 : _codeTree$value.type) !== null && _codeTree$value$type !== void 0 ? _codeTree$value$type : codeTree === null || codeTree === void 0 ? void 0 : codeTree.type) === 'root') {
      var _codeTree$value$child, _codeTree$value2;
      codeTree.value = (_codeTree$value$child = codeTree === null || codeTree === void 0 || (_codeTree$value2 = codeTree.value) === null || _codeTree$value2 === void 0 ? void 0 : _codeTree$value2.children) !== null && _codeTree$value$child !== void 0 ? _codeTree$value$child : codeTree === null || codeTree === void 0 ? void 0 : codeTree.children;
    }

    // determine largest line number so that we can force minWidth on all linenumber elements
    var lineCount = codeTree.value.length;
    if (lineCount === 1 && codeTree.value[0].type === 'text') {
      // Since codeTree for an unparsable text (e.g. 'a\na\na') is [{ type: 'text', value: 'a\na\na' }]
      lineCount = codeTree.value[0].value.split('\n').length;
    }
    var largestLineNumber = lineCount + startingLineNumber;
    var rows = processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(PreTag, preProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(CodeTag, codeTagProps, !showInlineLineNumbers && allLineNumbers, renderer({
      rows: rows,
      stylesheet: style,
      useInlineStyles: useInlineStyles
    })));
  };
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Light: () => (/* reexport safe */ _light_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   LightAsync: () => (/* reexport safe */ _light_async_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Prism: () => (/* reexport safe */ _prism_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   PrismAsync: () => (/* reexport safe */ _prism_async_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   PrismAsyncLight: () => (/* reexport safe */ _prism_async_light_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   PrismLight: () => (/* reexport safe */ _prism_light_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   createElement: () => (/* reexport safe */ _create_element_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _default_highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-highlight.js */ "./src/default-highlight.js");
/* harmony import */ var _light_async_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./light-async.js */ "./src/light-async.js");
/* harmony import */ var _light_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./light.js */ "./src/light.js");
/* harmony import */ var _prism_async_light_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prism-async-light.js */ "./src/prism-async-light.js");
/* harmony import */ var _prism_async_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prism-async.js */ "./src/prism-async.js");
/* harmony import */ var _prism_light_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prism-light.js */ "./src/prism-light.js");
/* harmony import */ var _prism_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prism.js */ "./src/prism.js");
/* harmony import */ var _create_element_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-element.js */ "./src/create-element.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default_highlight_js__WEBPACK_IMPORTED_MODULE_0__["default"]);








/***/ }),

/***/ "./src/languages/hljs/supported-languages.js":
/*!***************************************************!*\
  !*** ./src/languages/hljs/supported-languages.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
// This file has been auto-generated by the `npm run build-languages-hljs` task
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (['1c', 'abnf', 'accesslog', 'actionscript', 'ada', 'angelscript', 'apache', 'applescript', 'arcade', 'arduino', 'armasm', 'asciidoc', 'aspectj', 'autohotkey', 'autoit', 'avrasm', 'awk', 'axapta', 'bash', 'basic', 'bnf', 'brainfuck', 'c', 'cal', 'capnproto', 'ceylon', 'clean', 'clojure-repl', 'clojure', 'cmake', 'coffeescript', 'coq', 'cos', 'cpp', 'crmsh', 'crystal', 'csharp', 'csp', 'css', 'd', 'dart', 'delphi', 'diff', 'django', 'dns', 'dockerfile', 'dos', 'dsconfig', 'dts', 'dust', 'ebnf', 'elixir', 'elm', 'erb', 'erlang-repl', 'erlang', 'excel', 'fix', 'flix', 'fortran', 'fsharp', 'gams', 'gauss', 'gcode', 'gherkin', 'glsl', 'gml', 'go', 'golo', 'gradle', 'graphql', 'groovy', 'haml', 'handlebars', 'haskell', 'haxe', 'hsp', 'http', 'hy', 'inform7', 'ini', 'irpf90', 'isbl', 'java', 'javascript', 'jboss-cli', 'json', 'julia-repl', 'julia', 'kotlin', 'lasso', 'latex', 'ldif', 'leaf', 'less', 'lisp', 'livecodeserver', 'livescript', 'llvm', 'lsl', 'lua', 'makefile', 'markdown', 'mathematica', 'matlab', 'maxima', 'mel', 'mercury', 'mipsasm', 'mizar', 'mojolicious', 'monkey', 'moonscript', 'n1ql', 'nestedtext', 'nginx', 'nim', 'nix', 'node-repl', 'nsis', 'objectivec', 'ocaml', 'openscad', 'oxygene', 'parser3', 'perl', 'pf', 'pgsql', 'php-template', 'php', 'plaintext', 'pony', 'powershell', 'processing', 'profile', 'prolog', 'properties', 'protobuf', 'puppet', 'purebasic', 'python-repl', 'python', 'q', 'qml', 'r', 'reasonml', 'rib', 'roboconf', 'routeros', 'rsl', 'ruby', 'ruleslanguage', 'rust', 'sas', 'scala', 'scheme', 'scilab', 'scss', 'shell', 'smali', 'smalltalk', 'sml', 'sqf', 'sql', 'stan', 'stata', 'step21', 'stylus', 'subunit', 'swift', 'taggerscript', 'tap', 'tcl', 'thrift', 'tp', 'twig', 'typescript', 'vala', 'vbnet', 'vbscript-html', 'vbscript', 'verilog', 'vhdl', 'vim', 'wasm', 'wren', 'x86asm', 'xl', 'xml', 'xquery', 'yaml', 'zephir']);

/***/ }),

/***/ "./src/languages/prism/supported-languages.js":
/*!****************************************************!*\
  !*** ./src/languages/prism/supported-languages.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
// This file has been auto-generated by the `npm run build-languages-prism` task
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (['abap', 'abnf', 'actionscript', 'ada', 'agda', 'al', 'antlr4', 'apacheconf', 'apex', 'apl', 'applescript', 'aql', 'arduino', 'arff', 'armasm', 'arturo', 'asciidoc', 'asm6502', 'asmatmel', 'aspnet', 'autohotkey', 'autoit', 'avisynth', 'avro-idl', 'awk', 'bash', 'basic', 'batch', 'bbcode', 'bbj', 'bicep', 'birb', 'bison', 'bnf', 'bqn', 'brainfuck', 'brightscript', 'bro', 'bsl', 'c', 'cfscript', 'chaiscript', 'cil', 'cilkc', 'cilkcpp', 'clike', 'clojure', 'cmake', 'cobol', 'coffeescript', 'concurnas', 'cooklang', 'coq', 'cpp', 'crystal', 'csharp', 'cshtml', 'csp', 'css-extras', 'css', 'csv', 'cue', 'cypher', 'd', 'dart', 'dataweave', 'dax', 'dhall', 'diff', 'django', 'dns-zone-file', 'docker', 'dot', 'ebnf', 'editorconfig', 'eiffel', 'ejs', 'elixir', 'elm', 'erb', 'erlang', 'etlua', 'excel-formula', 'factor', 'false', 'firestore-security-rules', 'flow', 'fortran', 'fsharp', 'ftl', 'gap', 'gcode', 'gdscript', 'gedcom', 'gettext', 'gherkin', 'git', 'glsl', 'gml', 'gn', 'go-module', 'go', 'gradle', 'graphql', 'groovy', 'haml', 'handlebars', 'haskell', 'haxe', 'hcl', 'hlsl', 'hoon', 'hpkp', 'hsts', 'http', 'ichigojam', 'icon', 'icu-message-format', 'idris', 'iecst', 'ignore', 'inform7', 'ini', 'io', 'j', 'java', 'javadoc', 'javadoclike', 'javascript', 'javastacktrace', 'jexl', 'jolie', 'jq', 'js-extras', 'js-templates', 'jsdoc', 'json', 'json5', 'jsonp', 'jsstacktrace', 'jsx', 'julia', 'keepalived', 'keyman', 'kotlin', 'kumir', 'kusto', 'latex', 'latte', 'less', 'lilypond', 'linker-script', 'liquid', 'lisp', 'livescript', 'llvm', 'log', 'lolcode', 'lua', 'magma', 'makefile', 'markdown', 'markup-templating', 'markup', 'mata', 'matlab', 'maxscript', 'mel', 'mermaid', 'metafont', 'mizar', 'mongodb', 'monkey', 'moonscript', 'n1ql', 'n4js', 'nand2tetris-hdl', 'naniscript', 'nasm', 'neon', 'nevod', 'nginx', 'nim', 'nix', 'nsis', 'objectivec', 'ocaml', 'odin', 'opencl', 'openqasm', 'oz', 'parigp', 'parser', 'pascal', 'pascaligo', 'pcaxis', 'peoplecode', 'perl', 'php-extras', 'php', 'phpdoc', 'plant-uml', 'plsql', 'powerquery', 'powershell', 'processing', 'prolog', 'promql', 'properties', 'protobuf', 'psl', 'pug', 'puppet', 'pure', 'purebasic', 'purescript', 'python', 'q', 'qml', 'qore', 'qsharp', 'r', 'racket', 'reason', 'regex', 'rego', 'renpy', 'rescript', 'rest', 'rip', 'roboconf', 'robotframework', 'ruby', 'rust', 'sas', 'sass', 'scala', 'scheme', 'scss', 'shell-session', 'smali', 'smalltalk', 'smarty', 'sml', 'solidity', 'solution-file', 'soy', 'sparql', 'splunk-spl', 'sqf', 'sql', 'squirrel', 'stan', 'stata', 'stylus', 'supercollider', 'swift', 'systemd', 't4-cs', 't4-templating', 't4-vb', 'tap', 'tcl', 'textile', 'toml', 'tremor', 'tsx', 'tt2', 'turtle', 'twig', 'typescript', 'typoscript', 'unrealscript', 'uorazor', 'uri', 'v', 'vala', 'vbnet', 'velocity', 'verilog', 'vhdl', 'vim', 'visual-basic', 'warpscript', 'wasm', 'web-idl', 'wgsl', 'wiki', 'wolfram', 'wren', 'xeora', 'xml-doc', 'xojo', 'xquery', 'yaml', 'yang', 'zig']);

/***/ }),

/***/ "./src/light-async.js":
/*!****************************!*\
  !*** ./src/light-async.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _async_syntax_highlighter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async-syntax-highlighter.js */ "./src/async-syntax-highlighter.js");
/* harmony import */ var _async_languages_hljs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./async-languages/hljs.js */ "./src/async-languages/hljs.js");
/* harmony import */ var _checkForListedLanguage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkForListedLanguage.js */ "./src/checkForListedLanguage.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_async_syntax_highlighter_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
  loader: function loader() {
    return Promise.all(/*! import() | react-syntax-highlighter/lowlight-import */[__webpack_require__.e("react-syntax-highlighter_languages_highlight_mathematica"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_isbl"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_gml"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_oneC"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_sqf"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_maxima"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_pgsql"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_swift"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_x86asm"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_typescript"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_arduino"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_mel"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_javascript"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_less"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_stata"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_gauss"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_scss"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_stylus"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_fsharp"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_css"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_php"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_lsl"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_sql"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_cpp"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_stan"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_vim"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_verilog"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_livecodeserver"), __webpack_require__.e("react-syntax-highlighter_languages_highlight_nsis"), __webpack_require__.e("react-syntax-highlighter/lowlight-import")]).then(__webpack_require__.bind(__webpack_require__, /*! lowlight */ "./node_modules/lowlight/index.js")).then(function (module) {
      // Webpack 3 returns module.exports as default as module, but webpack 4 returns module.exports as module.default
      return (module["default"] || module).createLowlight();
    });
  },
  isLanguageRegistered: function isLanguageRegistered(instance, language) {
    return !!(0,_checkForListedLanguage_js__WEBPACK_IMPORTED_MODULE_1__["default"])(instance, language);
  },
  languageLoaders: _async_languages_hljs_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  registerLanguage: function registerLanguage(instance, name, language) {
    return instance.registerLanguage(name, language);
  }
}));

/***/ }),

/***/ "./src/light.js":
/*!**********************!*\
  !*** ./src/light.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _highlight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlight.js */ "./src/highlight.js");
/* harmony import */ var lowlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lowlight */ "./node_modules/lowlight/lib/index.js");


var lowlight = (0,lowlight__WEBPACK_IMPORTED_MODULE_0__.createLowlight)();
var SyntaxHighlighter = (0,_highlight_js__WEBPACK_IMPORTED_MODULE_1__["default"])(lowlight, {});
SyntaxHighlighter.registerLanguage = lowlight.register;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SyntaxHighlighter);

/***/ }),

/***/ "./src/prism-async-light.js":
/*!**********************************!*\
  !*** ./src/prism-async-light.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _async_syntax_highlighter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async-syntax-highlighter.js */ "./src/async-syntax-highlighter.js");
/* harmony import */ var _async_languages_prism_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./async-languages/prism.js */ "./src/async-languages/prism.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_async_syntax_highlighter_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
  loader: function loader() {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter/refractor-core-import */ "react-syntax-highlighter/refractor-core-import").then(__webpack_require__.bind(__webpack_require__, /*! refractor/lib/core.js */ "./node_modules/refractor/lib/core.js")).then(function (module) {
      // Webpack 3 returns module.exports as default as module, but webpack 4 returns module.exports as module.default
      return (module["default"] || module).refractor;
    });
  },
  isLanguageRegistered: function isLanguageRegistered(instance, language) {
    return instance.registered(language);
  },
  languageLoaders: _async_languages_prism_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  registerLanguage: function registerLanguage(instance, name, language) {
    return instance.register(language);
  }
}));

/***/ }),

/***/ "./src/prism-async.js":
/*!****************************!*\
  !*** ./src/prism-async.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _async_syntax_highlighter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async-syntax-highlighter.js */ "./src/async-syntax-highlighter.js");
/* harmony import */ var _languages_prism_supported_languages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languages/prism/supported-languages.js */ "./src/languages/prism/supported-languages.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_async_syntax_highlighter_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
  loader: function loader() {
    return __webpack_require__.e(/*! import() | react-syntax-highlighter/refractor-import */ "react-syntax-highlighter/refractor-import").then(__webpack_require__.bind(__webpack_require__, /*! refractor */ "./node_modules/refractor/index.js")).then(function (module) {
      // Webpack 3 returns module.exports as default as module, but webpack 4 returns module.exports as module.default
      return (module["default"] || module).refractor;
    });
  },
  noAsyncLoadingLanguages: true,
  supportedLanguages: _languages_prism_supported_languages_js__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/prism-light.js":
/*!****************************!*\
  !*** ./src/prism-light.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlight.js */ "./src/highlight.js");
/* harmony import */ var refractor_lib_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! refractor/lib/core.js */ "./node_modules/refractor/lib/core.js");


var SyntaxHighlighter = (0,_highlight_js__WEBPACK_IMPORTED_MODULE_0__["default"])(refractor_lib_core_js__WEBPACK_IMPORTED_MODULE_1__.refractor, {});
SyntaxHighlighter.registerLanguage = function (_, language) {
  return refractor_lib_core_js__WEBPACK_IMPORTED_MODULE_1__.refractor.register(language);
};
SyntaxHighlighter.alias = function (name, aliases) {
  return refractor_lib_core_js__WEBPACK_IMPORTED_MODULE_1__.refractor.alias(name, aliases);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SyntaxHighlighter);

/***/ }),

/***/ "./src/prism.js":
/*!**********************!*\
  !*** ./src/prism.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlight.js */ "./src/highlight.js");
/* harmony import */ var _styles_prism_prism_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/prism/prism.js */ "./src/styles/prism/prism.js");
/* harmony import */ var refractor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! refractor */ "./node_modules/refractor/lib/common.js");
/* harmony import */ var _languages_prism_supported_languages_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./languages/prism/supported-languages.js */ "./src/languages/prism/supported-languages.js");




var highlighter = (0,_highlight_js__WEBPACK_IMPORTED_MODULE_0__["default"])(refractor__WEBPACK_IMPORTED_MODULE_1__.refractor, _styles_prism_prism_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
highlighter.supportedLanguages = _languages_prism_supported_languages_js__WEBPACK_IMPORTED_MODULE_3__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (highlighter);

/***/ }),

/***/ "./src/styles/hljs/default-style.js":
/*!******************************************!*\
  !*** ./src/styles/hljs/default-style.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "re code.hljs": {
    "display": "block",
    "overflowX": "auto",
    "padding": "1em"
  },
  "ode.hljs": {
    "padding": "3px 5px"
  },
  "hljs": {
    "background": "#F3F3F3",
    "color": "#444"
  },
  "hljs-subst": {},
  "hljs-formula": {},
  "hljs-attr": {},
  "hljs-property": {},
  "hljs-params": {},
  "hljs-comment": {
    "color": "#697070"
  },
  "hljs-tag": {
    "color": "#444a"
  },
  "hljs-punctuation": {
    "color": "#444a"
  },
  "hljs-tag .hljs-name": {
    "color": "#444"
  },
  "hljs-tag .hljs-attr": {
    "color": "#444"
  },
  "hljs-keyword": {
    "fontWeight": "bold"
  },
  "hljs-attribute": {
    "fontWeight": "bold"
  },
  "hljs-selector-tag": {
    "fontWeight": "bold"
  },
  "hljs-meta .hljs-keyword": {
    "fontWeight": "bold"
  },
  "hljs-doctag": {
    "fontWeight": "bold"
  },
  "hljs-name": {
    "fontWeight": "bold"
  },
  "hljs-type": {
    "color": "#880000"
  },
  "hljs-string": {
    "color": "#880000"
  },
  "hljs-number": {
    "color": "#880000"
  },
  "hljs-selector-id": {
    "color": "#880000"
  },
  "hljs-selector-class": {
    "color": "#880000"
  },
  "hljs-quote": {
    "color": "#880000"
  },
  "hljs-template-tag": {
    "color": "#880000"
  },
  "hljs-deletion": {
    "color": "#880000"
  },
  "hljs-title": {
    "color": "#880000",
    "fontWeight": "bold"
  },
  "hljs-section": {
    "color": "#880000",
    "fontWeight": "bold"
  },
  "hljs-regexp": {
    "color": "#ab5656"
  },
  "hljs-symbol": {
    "color": "#ab5656"
  },
  "hljs-variable": {
    "color": "#ab5656"
  },
  "hljs-template-variable": {
    "color": "#ab5656"
  },
  "hljs-link": {
    "color": "#ab5656"
  },
  "hljs-selector-attr": {
    "color": "#ab5656"
  },
  "hljs-operator": {
    "color": "#ab5656"
  },
  "hljs-selector-pseudo": {
    "color": "#ab5656"
  },
  "hljs-literal": {
    "color": "#695"
  },
  "hljs-built_in": {
    "color": "#397300"
  },
  "hljs-bullet": {
    "color": "#397300"
  },
  "hljs-code": {
    "color": "#397300"
  },
  "hljs-addition": {
    "color": "#397300"
  },
  "hljs-meta": {
    "color": "#1f7199"
  },
  "hljs-meta .hljs-string": {
    "color": "#38a"
  },
  "hljs-emphasis": {
    "fontStyle": "italic"
  },
  "hljs-strong": {
    "fontWeight": "bold"
  }
});

/***/ }),

/***/ "./src/styles/prism/prism.js":
/*!***********************************!*\
  !*** ./src/styles/prism/prism.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "code[class*=\"language-\"]": {
    "color": "black",
    "background": "none",
    "textShadow": "0 1px white",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "fontSize": "1em",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]": {
    "color": "black",
    "background": "#f5f2f0",
    "textShadow": "0 1px white",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "fontSize": "1em",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto"
  },
  "pre[class*=\"language-\"]::-moz-selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  "pre[class*=\"language-\"] ::-moz-selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  "code[class*=\"language-\"]::-moz-selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  "code[class*=\"language-\"] ::-moz-selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  "pre[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  "pre[class*=\"language-\"] ::selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  "code[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  "code[class*=\"language-\"] ::selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "background": "#f5f2f0",
    "padding": ".1em",
    "borderRadius": ".3em",
    "whiteSpace": "normal"
  },
  "comment": {
    "color": "slategray"
  },
  "prolog": {
    "color": "slategray"
  },
  "doctype": {
    "color": "slategray"
  },
  "cdata": {
    "color": "slategray"
  },
  "punctuation": {
    "color": "#999"
  },
  "namespace": {
    "Opacity": ".7"
  },
  "property": {
    "color": "#905"
  },
  "tag": {
    "color": "#905"
  },
  "boolean": {
    "color": "#905"
  },
  "number": {
    "color": "#905"
  },
  "constant": {
    "color": "#905"
  },
  "symbol": {
    "color": "#905"
  },
  "deleted": {
    "color": "#905"
  },
  "selector": {
    "color": "#690"
  },
  "attr-name": {
    "color": "#690"
  },
  "string": {
    "color": "#690"
  },
  "char": {
    "color": "#690"
  },
  "builtin": {
    "color": "#690"
  },
  "inserted": {
    "color": "#690"
  },
  "operator": {
    "color": "#9a6e3a",
    "background": "hsla(0, 0%, 100%, .5)"
  },
  "entity": {
    "color": "#9a6e3a",
    "background": "hsla(0, 0%, 100%, .5)",
    "cursor": "help"
  },
  "url": {
    "color": "#9a6e3a",
    "background": "hsla(0, 0%, 100%, .5)"
  },
  ".language-css .token.string": {
    "color": "#9a6e3a",
    "background": "hsla(0, 0%, 100%, .5)"
  },
  ".style .token.string": {
    "color": "#9a6e3a",
    "background": "hsla(0, 0%, 100%, .5)"
  },
  "atrule": {
    "color": "#07a"
  },
  "attr-value": {
    "color": "#07a"
  },
  "keyword": {
    "color": "#07a"
  },
  "function": {
    "color": "#DD4A68"
  },
  "class-name": {
    "color": "#DD4A68"
  },
  "regex": {
    "color": "#e90"
  },
  "important": {
    "color": "#e90",
    "fontWeight": "bold"
  },
  "variable": {
    "color": "#e90"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  }
});

/***/ }),

/***/ "./node_modules/character-entities-legacy/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/character-entities-legacy/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   characterEntitiesLegacy: () => (/* binding */ characterEntitiesLegacy)
/* harmony export */ });
/**
 * List of legacy HTML named character references that don’t need a trailing semicolon.
 *
 * @type {Array<string>}
 */
const characterEntitiesLegacy = [
  'AElig',
  'AMP',
  'Aacute',
  'Acirc',
  'Agrave',
  'Aring',
  'Atilde',
  'Auml',
  'COPY',
  'Ccedil',
  'ETH',
  'Eacute',
  'Ecirc',
  'Egrave',
  'Euml',
  'GT',
  'Iacute',
  'Icirc',
  'Igrave',
  'Iuml',
  'LT',
  'Ntilde',
  'Oacute',
  'Ocirc',
  'Ograve',
  'Oslash',
  'Otilde',
  'Ouml',
  'QUOT',
  'REG',
  'THORN',
  'Uacute',
  'Ucirc',
  'Ugrave',
  'Uuml',
  'Yacute',
  'aacute',
  'acirc',
  'acute',
  'aelig',
  'agrave',
  'amp',
  'aring',
  'atilde',
  'auml',
  'brvbar',
  'ccedil',
  'cedil',
  'cent',
  'copy',
  'curren',
  'deg',
  'divide',
  'eacute',
  'ecirc',
  'egrave',
  'eth',
  'euml',
  'frac12',
  'frac14',
  'frac34',
  'gt',
  'iacute',
  'icirc',
  'iexcl',
  'igrave',
  'iquest',
  'iuml',
  'laquo',
  'lt',
  'macr',
  'micro',
  'middot',
  'nbsp',
  'not',
  'ntilde',
  'oacute',
  'ocirc',
  'ograve',
  'ordf',
  'ordm',
  'oslash',
  'otilde',
  'ouml',
  'para',
  'plusmn',
  'pound',
  'quot',
  'raquo',
  'reg',
  'sect',
  'shy',
  'sup1',
  'sup2',
  'sup3',
  'szlig',
  'thorn',
  'times',
  'uacute',
  'ucirc',
  'ugrave',
  'uml',
  'uuml',
  'yacute',
  'yen',
  'yuml'
]


/***/ }),

/***/ "./node_modules/character-reference-invalid/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/character-reference-invalid/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   characterReferenceInvalid: () => (/* binding */ characterReferenceInvalid)
/* harmony export */ });
/**
 * Map of invalid numeric character references to their replacements, according to HTML.
 *
 * @type {Record<number, string>}
 */
const characterReferenceInvalid = {
  0: '�',
  128: '€',
  130: '‚',
  131: 'ƒ',
  132: '„',
  133: '…',
  134: '†',
  135: '‡',
  136: 'ˆ',
  137: '‰',
  138: 'Š',
  139: '‹',
  140: 'Œ',
  142: 'Ž',
  145: '‘',
  146: '’',
  147: '“',
  148: '”',
  149: '•',
  150: '–',
  151: '—',
  152: '˜',
  153: '™',
  154: 'š',
  155: '›',
  156: 'œ',
  158: 'ž',
  159: 'Ÿ'
}


/***/ }),

/***/ "./node_modules/comma-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/comma-separated-tokens/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   stringify: () => (/* binding */ stringify)
/* harmony export */ });
/**
 * @typedef Options
 *   Configuration for `stringify`.
 * @property {boolean} [padLeft=true]
 *   Whether to pad a space before a token.
 * @property {boolean} [padRight=false]
 *   Whether to pad a space after a token.
 */

/**
 * @typedef {Options} StringifyOptions
 *   Please use `StringifyOptions` instead.
 */

/**
 * Parse comma-separated tokens to an array.
 *
 * @param {string} value
 *   Comma-separated tokens.
 * @returns {Array<string>}
 *   List of tokens.
 */
function parse(value) {
  /** @type {Array<string>} */
  const tokens = []
  const input = String(value || '')
  let index = input.indexOf(',')
  let start = 0
  /** @type {boolean} */
  let end = false

  while (!end) {
    if (index === -1) {
      index = input.length
      end = true
    }

    const token = input.slice(start, index).trim()

    if (token || !end) {
      tokens.push(token)
    }

    start = index + 1
    index = input.indexOf(',', start)
  }

  return tokens
}

/**
 * Serialize an array of strings or numbers to comma-separated tokens.
 *
 * @param {Array<string|number>} values
 *   List of tokens.
 * @param {Options} [options]
 *   Configuration for `stringify` (optional).
 * @returns {string}
 *   Comma-separated tokens.
 */
function stringify(values, options) {
  const settings = options || {}

  // Ensure the last empty entry is seen.
  const input = values[values.length - 1] === '' ? [...values, ''] : values

  return input
    .join(
      (settings.padRight ? ' ' : '') +
        ',' +
        (settings.padLeft === false ? '' : ' ')
    )
    .trim()
}


/***/ }),

/***/ "./node_modules/decode-named-character-reference/index.dom.js":
/*!********************************************************************!*\
  !*** ./node_modules/decode-named-character-reference/index.dom.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodeNamedCharacterReference: () => (/* binding */ decodeNamedCharacterReference)
/* harmony export */ });
/// <reference lib="dom" />

/* eslint-env browser */

const element = document.createElement('i')

/**
 * @param {string} value
 * @returns {string|false}
 */
function decodeNamedCharacterReference(value) {
  const characterReference = '&' + value + ';'
  element.innerHTML = characterReference
  const char = element.textContent

  // Some named character references do not require the closing semicolon
  // (`&not`, for instance), which leads to situations where parsing the assumed
  // named reference of `&notit;` will result in the string `¬it;`.
  // When we encounter a trailing semicolon after parsing, and the character
  // reference to decode was not a semicolon (`&semi;`), we can assume that the
  // matching was not complete.
  // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
  // yield `null`.
  if (char.charCodeAt(char.length - 1) === 59 /* `;` */ && value !== 'semi') {
    return false
  }

  // If the decoded string is equal to the input, the character reference was
  // not valid.
  // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
  // yield `null`.
  return char === characterReference ? false : char
}


/***/ }),

/***/ "./node_modules/dequal/dist/index.mjs":
/*!********************************************!*\
  !*** ./node_modules/dequal/dist/index.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dequal: () => (/* binding */ dequal)
/* harmony export */ });
var has = Object.prototype.hasOwnProperty;

function find(iter, tar, key) {
	for (key of iter.keys()) {
		if (dequal(key, tar)) return key;
	}
}

function dequal(foo, bar) {
	var ctor, len, tmp;
	if (foo === bar) return true;

	if (foo && bar && (ctor=foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();

		if (ctor === Array) {
			if ((len=foo.length) === bar.length) {
				while (len-- && dequal(foo[len], bar[len]));
			}
			return len === -1;
		}

		if (ctor === Set) {
			if (foo.size !== bar.size) {
				return false;
			}
			for (len of foo) {
				tmp = len;
				if (tmp && typeof tmp === 'object') {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!bar.has(tmp)) return false;
			}
			return true;
		}

		if (ctor === Map) {
			if (foo.size !== bar.size) {
				return false;
			}
			for (len of foo) {
				tmp = len[0];
				if (tmp && typeof tmp === 'object') {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!dequal(len[1], bar.get(tmp))) {
					return false;
				}
			}
			return true;
		}

		if (ctor === ArrayBuffer) {
			foo = new Uint8Array(foo);
			bar = new Uint8Array(bar);
		} else if (ctor === DataView) {
			if ((len=foo.byteLength) === bar.byteLength) {
				while (len-- && foo.getInt8(len) === bar.getInt8(len));
			}
			return len === -1;
		}

		if (ArrayBuffer.isView(foo)) {
			if ((len=foo.byteLength) === bar.byteLength) {
				while (len-- && foo[len] === bar[len]);
			}
			return len === -1;
		}

		if (!ctor || typeof foo === 'object') {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}

	return foo !== foo && bar !== bar;
}


/***/ }),

/***/ "./node_modules/devlop/lib/development.js":
/*!************************************************!*\
  !*** ./node_modules/devlop/lib/development.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deprecate: () => (/* binding */ deprecate),
/* harmony export */   equal: () => (/* binding */ equal),
/* harmony export */   ok: () => (/* binding */ ok),
/* harmony export */   unreachable: () => (/* binding */ unreachable)
/* harmony export */ });
/* harmony import */ var dequal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dequal */ "./node_modules/dequal/dist/index.mjs");


/**
 * @type {Set<string>}
 */
const codesWarned = new Set()

class AssertionError extends Error {
  name = /** @type {const} */ ('Assertion')
  code = /** @type {const} */ ('ERR_ASSERTION')

  /**
   * Create an assertion error.
   *
   * @param {string} message
   *   Message explaining error.
   * @param {unknown} actual
   *   Value.
   * @param {unknown} expected
   *   Baseline.
   * @param {string} operator
   *   Name of equality operation.
   * @param {boolean} generated
   *   Whether `message` is a custom message or not
   * @returns
   *   Instance.
   */
  // eslint-disable-next-line max-params
  constructor(message, actual, expected, operator, generated) {
    super(message)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }

    /**
     * @type {unknown}
     */
    this.actual = actual

    /**
     * @type {unknown}
     */
    this.expected = expected

    /**
     * @type {boolean}
     */
    this.generated = generated

    /**
     * @type {string}
     */
    this.operator = operator
  }
}

class DeprecationError extends Error {
  name = /** @type {const} */ ('DeprecationWarning')

  /**
   * Create a deprecation message.
   *
   * @param {string} message
   *   Message explaining deprecation.
   * @param {string | undefined} code
   *   Deprecation identifier; deprecation messages will be generated only once per code.
   * @returns
   *   Instance.
   */
  constructor(message, code) {
    super(message)

    /**
     * @type {string | undefined}
     */
    this.code = code
  }
}

/**
 * Wrap a function or class to show a deprecation message when first called.
 *
 * > 👉 **Important**: only shows a message when the `development` condition is
 * > used, does nothing in production.
 *
 * When the resulting wrapped `fn` is called, emits a warning once to
 * `console.error` (`stderr`).
 * If a code is given, one warning message will be emitted in total per code.
 *
 * @template {Function} T
 *   Function or class kind.
 * @param {T} fn
 *   Function or class.
 * @param {string} message
 *   Message explaining deprecation.
 * @param {string | null | undefined} [code]
 *   Deprecation identifier (optional); deprecation messages will be generated
 *   only once per code.
 * @returns {T}
 *   Wrapped `fn`.
 */
function deprecate(fn, message, code) {
  let warned = false

  // The wrapper will keep the same prototype as fn to maintain prototype chain
  Object.setPrototypeOf(deprecated, fn)

  // @ts-expect-error: it’s perfect, typescript…
  return deprecated

  /**
   * @this {unknown}
   * @param  {...Array<unknown>} args
   * @returns {unknown}
   */
  function deprecated(...args) {
    if (!warned) {
      warned = true

      if (typeof code === 'string' && codesWarned.has(code)) {
        // Empty.
      } else {
        console.error(new DeprecationError(message, code || undefined))

        if (typeof code === 'string') codesWarned.add(code)
      }
    }

    return new.target
      ? Reflect.construct(fn, args, new.target)
      : Reflect.apply(fn, this, args)
  }
}

/**
 * Assert deep strict equivalence.
 *
 * > 👉 **Important**: only asserts when the `development` condition is used,
 * > does nothing in production.
 *
 * @template {unknown} T
 *   Expected kind.
 * @param {unknown} actual
 *   Value.
 * @param {T} expected
 *   Baseline.
 * @param {Error | string | null | undefined} [message]
 *   Message for assertion error (default: `'Expected values to be deeply equal'`).
 * @returns {asserts actual is T}
 *   Nothing; throws when `actual` is not deep strict equal to `expected`.
 * @throws {AssertionError}
 *   Throws when `actual` is not deep strict equal to `expected`.
 */
function equal(actual, expected, message) {
  assert(
    (0,dequal__WEBPACK_IMPORTED_MODULE_0__.dequal)(actual, expected),
    actual,
    expected,
    'equal',
    'Expected values to be deeply equal',
    message
  )
}

/**
 * Assert if `value` is truthy.
 *
 * > 👉 **Important**: only asserts when the `development` condition is used,
 * > does nothing in production.
 *
 * @param {unknown} value
 *   Value to assert.
 * @param {Error | string | null | undefined} [message]
 *   Message for assertion error (default: `'Expected value to be truthy'`).
 * @returns {asserts value}
 *   Nothing; throws when `value` is falsey.
 * @throws {AssertionError}
 *   Throws when `value` is falsey.
 */
function ok(value, message) {
  assert(
    Boolean(value),
    false,
    true,
    'ok',
    'Expected value to be truthy',
    message
  )
}

/**
 * Assert that a code path never happens.
 *
 * > 👉 **Important**: only asserts when the `development` condition is used,
 * > does nothing in production.
 *
 * @param {Error | string | null | undefined} [message]
 *   Message for assertion error (default: `'Unreachable'`).
 * @returns {never}
 *   Nothing; always throws.
 * @throws {AssertionError}
 *   Throws when `value` is falsey.
 */
function unreachable(message) {
  assert(false, false, true, 'ok', 'Unreachable', message)
}

/**
 * @param {boolean} bool
 *   Whether to skip this operation.
 * @param {unknown} actual
 *   Actual value.
 * @param {unknown} expected
 *   Expected value.
 * @param {string} operator
 *   Operator.
 * @param {string} defaultMessage
 *   Default message for operation.
 * @param {Error | string | null | undefined} userMessage
 *   User-provided message.
 * @returns {asserts bool}
 *   Nothing; throws when falsey.
 */
// eslint-disable-next-line max-params
function assert(bool, actual, expected, operator, defaultMessage, userMessage) {
  if (!bool) {
    throw userMessage instanceof Error
      ? userMessage
      : new AssertionError(
          userMessage || defaultMessage,
          actual,
          expected,
          operator,
          !userMessage
        )
  }
}


/***/ }),

/***/ "./node_modules/hast-util-parse-selector/lib/index.js":
/*!************************************************************!*\
  !*** ./node_modules/hast-util-parse-selector/lib/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseSelector: () => (/* binding */ parseSelector)
/* harmony export */ });
/**
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('hast').Element} Element
 */

const search = /[#.]/g

/**
 * Create a hast element from a simple CSS selector.
 *
 * @template {string} Selector
 *   Type of selector.
 * @template {string} [DefaultTagName='div']
 *   Type of default tag name.
 * @param {Selector | null | undefined} [selector]
 *   Simple CSS selector.
 *
 *   Can contain a tag name (`foo`), classes (`.bar`), and an ID (`#baz`).
 *   Multiple classes are allowed.
 *   Uses the last ID if multiple IDs are found.
 * @param {DefaultTagName | null | undefined} [defaultTagName='div']
 *   Tag name to use if `selector` does not specify one (default: `'div'`).
 * @returns {Element & {tagName: import('./extract.js').ExtractTagName<Selector, DefaultTagName>}}
 *   Built element.
 */
function parseSelector(selector, defaultTagName) {
  const value = selector || ''
  /** @type {Properties} */
  const props = {}
  let start = 0
  /** @type {string | undefined} */
  let previous
  /** @type {string | undefined} */
  let tagName

  while (start < value.length) {
    search.lastIndex = start
    const match = search.exec(value)
    const subvalue = value.slice(start, match ? match.index : value.length)

    if (subvalue) {
      if (!previous) {
        tagName = subvalue
      } else if (previous === '#') {
        props.id = subvalue
      } else if (Array.isArray(props.className)) {
        props.className.push(subvalue)
      } else {
        props.className = [subvalue]
      }

      start += subvalue.length
    }

    if (match) {
      previous = match[0]
      start++
    }
  }

  return {
    type: 'element',
    // @ts-expect-error: fine.
    tagName: tagName || defaultTagName || 'div',
    properties: props,
    children: []
  }
}


/***/ }),

/***/ "./node_modules/hastscript/lib/core.js":
/*!*********************************************!*\
  !*** ./node_modules/hastscript/lib/core.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   core: () => (/* binding */ core)
/* harmony export */ });
/* harmony import */ var property_information__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! property-information */ "./node_modules/property-information/lib/find.js");
/* harmony import */ var property_information__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! property-information */ "./node_modules/property-information/lib/normalize.js");
/* harmony import */ var hast_util_parse_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hast-util-parse-selector */ "./node_modules/hast-util-parse-selector/lib/index.js");
/* harmony import */ var space_separated_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! space-separated-tokens */ "./node_modules/space-separated-tokens/index.js");
/* harmony import */ var comma_separated_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! comma-separated-tokens */ "./node_modules/comma-separated-tokens/index.js");
/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Content} Content
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Properties} Properties
 * @typedef {import('property-information').Info} Info
 * @typedef {import('property-information').Schema} Schema
 */

/**
 * @typedef {Content | Root} Node
 *   Any concrete `hast` node.
 * @typedef {Root | Element} HResult
 *   Result from a `h` (or `s`) call.
 *
 * @typedef {string | number} HStyleValue
 *   Value for a CSS style field.
 * @typedef {Record<string, HStyleValue>} HStyle
 *   Supported value of a `style` prop.
 * @typedef {string | number | boolean | null | undefined} HPrimitiveValue
 *   Primitive property value.
 * @typedef {Array<string | number>} HArrayValue
 *   List of property values for space- or comma separated values (such as `className`).
 * @typedef {HPrimitiveValue | HArrayValue} HPropertyValue
 *   Primitive value or list value.
 * @typedef {{[property: string]: HPropertyValue | HStyle}} HProperties
 *   Acceptable value for element properties.
 *
 * @typedef {string | number | null | undefined} HPrimitiveChild
 *   Primitive children, either ignored (nullish), or turned into text nodes.
 * @typedef {Array<Node | HPrimitiveChild>} HArrayChild
 *   List of children.
 * @typedef {Node | HPrimitiveChild | HArrayChild} HChild
 *   Acceptable child value.
 */






const buttonTypes = new Set(['menu', 'submit', 'reset', 'button'])

const own = {}.hasOwnProperty

/**
 * @param {Schema} schema
 * @param {string} defaultTagName
 * @param {Array<string>} [caseSensitive]
 */
function core(schema, defaultTagName, caseSensitive) {
  const adjust = caseSensitive && createAdjustMap(caseSensitive)

  const h =
    /**
     * @type {{
     *   (): Root
     *   (selector: null | undefined, ...children: Array<HChild>): Root
     *   (selector: string, properties?: HProperties, ...children: Array<HChild>): Element
     *   (selector: string, ...children: Array<HChild>): Element
     * }}
     */
    (
      /**
       * Hyperscript compatible DSL for creating virtual hast trees.
       *
       * @param {string | null} [selector]
       * @param {HProperties | HChild} [properties]
       * @param {Array<HChild>} children
       * @returns {HResult}
       */
      function (selector, properties, ...children) {
        let index = -1
        /** @type {HResult} */
        let node

        if (selector === undefined || selector === null) {
          node = {type: 'root', children: []}
          // @ts-expect-error Properties are not supported for roots.
          children.unshift(properties)
        } else {
          node = (0,hast_util_parse_selector__WEBPACK_IMPORTED_MODULE_0__.parseSelector)(selector, defaultTagName)
          // Normalize the name.
          node.tagName = node.tagName.toLowerCase()
          if (adjust && own.call(adjust, node.tagName)) {
            node.tagName = adjust[node.tagName]
          }

          // Handle props.
          if (isProperties(properties, node.tagName)) {
            /** @type {string} */
            let key

            for (key in properties) {
              if (own.call(properties, key)) {
                // @ts-expect-error `node.properties` is set.
                addProperty(schema, node.properties, key, properties[key])
              }
            }
          } else {
            children.unshift(properties)
          }
        }

        // Handle children.
        while (++index < children.length) {
          addChild(node.children, children[index])
        }

        if (node.type === 'element' && node.tagName === 'template') {
          node.content = {type: 'root', children: node.children}
          node.children = []
        }

        return node
      }
    )

  return h
}

/**
 * @param {HProperties | HChild} value
 * @param {string} name
 * @returns {value is HProperties}
 */
function isProperties(value, name) {
  if (
    value === null ||
    value === undefined ||
    typeof value !== 'object' ||
    Array.isArray(value)
  ) {
    return false
  }

  if (name === 'input' || !value.type || typeof value.type !== 'string') {
    return true
  }

  if ('children' in value && Array.isArray(value.children)) {
    return false
  }

  if (name === 'button') {
    return buttonTypes.has(value.type.toLowerCase())
  }

  return !('value' in value)
}

/**
 * @param {Schema} schema
 * @param {Properties} properties
 * @param {string} key
 * @param {HStyle | HPropertyValue} value
 * @returns {void}
 */
function addProperty(schema, properties, key, value) {
  const info = (0,property_information__WEBPACK_IMPORTED_MODULE_1__.find)(schema, key)
  let index = -1
  /** @type {HPropertyValue} */
  let result

  // Ignore nullish and NaN values.
  if (value === undefined || value === null) return

  if (typeof value === 'number') {
    // Ignore NaN.
    if (Number.isNaN(value)) return

    result = value
  }
  // Booleans.
  else if (typeof value === 'boolean') {
    result = value
  }
  // Handle list values.
  else if (typeof value === 'string') {
    if (info.spaceSeparated) {
      result = (0,space_separated_tokens__WEBPACK_IMPORTED_MODULE_2__.parse)(value)
    } else if (info.commaSeparated) {
      result = (0,comma_separated_tokens__WEBPACK_IMPORTED_MODULE_3__.parse)(value)
    } else if (info.commaOrSpaceSeparated) {
      result = (0,space_separated_tokens__WEBPACK_IMPORTED_MODULE_2__.parse)((0,comma_separated_tokens__WEBPACK_IMPORTED_MODULE_3__.parse)(value).join(' '))
    } else {
      result = parsePrimitive(info, info.property, value)
    }
  } else if (Array.isArray(value)) {
    result = value.concat()
  } else {
    result = info.property === 'style' ? style(value) : String(value)
  }

  if (Array.isArray(result)) {
    /** @type {Array<string | number>} */
    const finalResult = []

    while (++index < result.length) {
      // @ts-expect-error Assume no booleans in array.
      finalResult[index] = parsePrimitive(info, info.property, result[index])
    }

    result = finalResult
  }

  // Class names (which can be added both on the `selector` and here).
  if (info.property === 'className' && Array.isArray(properties.className)) {
    // @ts-expect-error Assume no booleans in `className`.
    result = properties.className.concat(result)
  }

  properties[info.property] = result
}

/**
 * @param {Array<Content>} nodes
 * @param {HChild} value
 * @returns {void}
 */
function addChild(nodes, value) {
  let index = -1

  if (value === undefined || value === null) {
    // Empty.
  } else if (typeof value === 'string' || typeof value === 'number') {
    nodes.push({type: 'text', value: String(value)})
  } else if (Array.isArray(value)) {
    while (++index < value.length) {
      addChild(nodes, value[index])
    }
  } else if (typeof value === 'object' && 'type' in value) {
    if (value.type === 'root') {
      addChild(nodes, value.children)
    } else {
      nodes.push(value)
    }
  } else {
    throw new Error('Expected node, nodes, or string, got `' + value + '`')
  }
}

/**
 * Parse a single primitives.
 *
 * @param {Info} info
 * @param {string} name
 * @param {HPrimitiveValue} value
 * @returns {HPrimitiveValue}
 */
function parsePrimitive(info, name, value) {
  if (typeof value === 'string') {
    if (info.number && value && !Number.isNaN(Number(value))) {
      return Number(value)
    }

    if (
      (info.boolean || info.overloadedBoolean) &&
      (value === '' || (0,property_information__WEBPACK_IMPORTED_MODULE_4__.normalize)(value) === (0,property_information__WEBPACK_IMPORTED_MODULE_4__.normalize)(name))
    ) {
      return true
    }
  }

  return value
}

/**
 * Serialize a `style` object as a string.
 *
 * @param {HStyle} value
 *   Style object.
 * @returns {string}
 *   CSS string.
 */
function style(value) {
  /** @type {Array<string>} */
  const result = []
  /** @type {string} */
  let key

  for (key in value) {
    if (own.call(value, key)) {
      result.push([key, value[key]].join(': '))
    }
  }

  return result.join('; ')
}

/**
 * Create a map to adjust casing.
 *
 * @param {Array<string>} values
 *   List of properly cased keys.
 * @returns {Record<string, string>}
 *   Map of lowercase keys to uppercase keys.
 */
function createAdjustMap(values) {
  /** @type {Record<string, string>} */
  const result = {}
  let index = -1

  while (++index < values.length) {
    result[values[index].toLowerCase()] = values[index]
  }

  return result
}


/***/ }),

/***/ "./node_modules/hastscript/lib/html.js":
/*!*********************************************!*\
  !*** ./node_modules/hastscript/lib/html.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var property_information__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! property-information */ "./node_modules/property-information/index.js");
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/hastscript/lib/core.js");
/**
 * @typedef {import('./core.js').HChild} Child
 *   Acceptable child value.
 * @typedef {import('./core.js').HProperties} Properties
 *   Acceptable value for element properties.
 * @typedef {import('./core.js').HResult} Result
 *   Result from a `h` (or `s`) call.
 *
 * @typedef {import('./jsx-classic.js').Element} h.JSX.Element
 * @typedef {import('./jsx-classic.js').IntrinsicAttributes} h.JSX.IntrinsicAttributes
 * @typedef {import('./jsx-classic.js').IntrinsicElements} h.JSX.IntrinsicElements
 * @typedef {import('./jsx-classic.js').ElementChildrenAttribute} h.JSX.ElementChildrenAttribute
 */




const h = (0,_core_js__WEBPACK_IMPORTED_MODULE_0__.core)(property_information__WEBPACK_IMPORTED_MODULE_1__.html, 'div')


/***/ }),

/***/ "./node_modules/highlight.js/es/core.js":
/*!**********************************************!*\
  !*** ./node_modules/highlight.js/es/core.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HighlightJS: () => (/* reexport default export from named module */ _lib_core_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/core.js */ "./node_modules/highlight.js/lib/core.js");
// https://nodejs.org/api/packages.html#packages_writing_dual_packages_while_avoiding_or_minimizing_hazards


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_core_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./node_modules/is-alphabetical/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-alphabetical/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAlphabetical: () => (/* binding */ isAlphabetical)
/* harmony export */ });
/**
 * Check if the given character code, or the character code at the first
 * character, is alphabetical.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is alphabetical.
 */
function isAlphabetical(character) {
  const code =
    typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 && code <= 122) /* a-z */ ||
    (code >= 65 && code <= 90) /* A-Z */
  )
}


/***/ }),

/***/ "./node_modules/is-alphanumerical/index.js":
/*!*************************************************!*\
  !*** ./node_modules/is-alphanumerical/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAlphanumerical: () => (/* binding */ isAlphanumerical)
/* harmony export */ });
/* harmony import */ var is_alphabetical__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-alphabetical */ "./node_modules/is-alphabetical/index.js");
/* harmony import */ var is_decimal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js");



/**
 * Check if the given character code, or the character code at the first
 * character, is alphanumerical.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is alphanumerical.
 */
function isAlphanumerical(character) {
  return (0,is_alphabetical__WEBPACK_IMPORTED_MODULE_0__.isAlphabetical)(character) || (0,is_decimal__WEBPACK_IMPORTED_MODULE_1__.isDecimal)(character)
}


/***/ }),

/***/ "./node_modules/is-decimal/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-decimal/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDecimal: () => (/* binding */ isDecimal)
/* harmony export */ });
/**
 * Check if the given character code, or the character code at the first
 * character, is decimal.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is a decimal
 */
function isDecimal(character) {
  const code =
    typeof character === 'string' ? character.charCodeAt(0) : character

  return code >= 48 && code <= 57 /* 0-9 */
}


/***/ }),

/***/ "./node_modules/is-hexadecimal/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-hexadecimal/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isHexadecimal: () => (/* binding */ isHexadecimal)
/* harmony export */ });
/**
 * Check if the given character code, or the character code at the first
 * character, is hexadecimal.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is hexadecimal
 */
function isHexadecimal(character) {
  const code =
    typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 /* a */ && code <= 102) /* z */ ||
    (code >= 65 /* A */ && code <= 70) /* Z */ ||
    (code >= 48 /* A */ && code <= 57) /* Z */
  )
}


/***/ }),

/***/ "./node_modules/lowlight/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/lowlight/lib/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLowlight: () => (/* binding */ createLowlight)
/* harmony export */ });
/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devlop */ "./node_modules/devlop/lib/development.js");
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/core */ "./node_modules/highlight.js/es/core.js");
/**
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').ElementContent} ElementContent
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').RootData} RootData
 *
 * @typedef {import('highlight.js').Emitter} Emitter
 * @typedef {import('highlight.js').HLJSOptions} HljsOptions
 * @typedef {import('highlight.js').HighlightResult} HighlightResult
 * @typedef {import('highlight.js').LanguageFn} LanguageFn
 */

/**
 * @typedef {Object} ExtraOptions
 *   Extra fields.
 * @property {ReadonlyArray<string> | null | undefined} [subset]
 *   List of allowed languages (default: all registered languages).
 *
 * @typedef {Object} Options
 *   Configuration for `highlight`.
 * @property {string | null | undefined} [prefix='hljs-']
 *   Class prefix (default: `'hljs-'`).
 *
 * @typedef {Options & ExtraOptions} AutoOptions
 *   Configuration for `highlightAuto`.
 */




/** @type {AutoOptions} */
const emptyOptions = {}

const defaultPrefix = 'hljs-'

/**
 * Create a `lowlight` instance.
 *
 * @param {Readonly<Record<string, LanguageFn>> | null | undefined} [grammars]
 *   Grammars to add (optional).
 * @returns
 *   Lowlight.
 */
function createLowlight(grammars) {
  const high = highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__["default"].newInstance()

  if (grammars) {
    register(grammars)
  }

  return {
    highlight,
    highlightAuto,
    listLanguages,
    register,
    registerAlias,
    registered
  }

  /**
   * Highlight `value` (code) as `language` (name).
   *
   * @example
   *   ```js
   *   import {common, createLowlight} from 'lowlight'
   *
   *   const lowlight = createLowlight(common)
   *
   *   console.log(lowlight.highlight('css', 'em { color: red }'))
   *   ```
   *
   *   Yields:
   *
   *   ```js
   *   {type: 'root', children: [Array], data: {language: 'css', relevance: 3}}
   *   ```
   *
   * @param {string} language
   *   Programming language name.
   * @param {string} value
   *   Code to highlight.
   * @param {Readonly<Options> | null | undefined} [options={}]
   *   Configuration (optional).
   * @returns {Root}
   *   Tree; with the following `data` fields: `language` (`string`), detected
   *   programming language name; `relevance` (`number`), how sure lowlight is
   *   that the given code is in the language.
   */
  function highlight(language, value, options) {
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(typeof language === 'string', 'expected `string` as `name`')
    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(typeof value === 'string', 'expected `string` as `value`')
    const settings = options || emptyOptions
    const prefix =
      typeof settings.prefix === 'string' ? settings.prefix : defaultPrefix

    if (!high.getLanguage(language)) {
      throw new Error('Unknown language: `' + language + '` is not registered')
    }

    // See: <https://github.com/highlightjs/highlight.js/issues/3621#issuecomment-1528841888>
    high.configure({__emitter: HastEmitter, classPrefix: prefix})

    const result = /** @type {HighlightResult & {_emitter: HastEmitter}} */ (
      high.highlight(value, {ignoreIllegals: true, language})
    )

    // `highlight.js` seems to use this (currently) for broken grammars, so let’s
    // keep it in there just to be sure.
    /* c8 ignore next 5 */
    if (result.errorRaised) {
      throw new Error('Could not highlight with `Highlight.js`', {
        cause: result.errorRaised
      })
    }

    const root = result._emitter.root

    // Cast because it is always defined.
    const data = /** @type {RootData} */ (root.data)

    data.language = result.language
    data.relevance = result.relevance

    return root
  }

  /**
   * Highlight `value` (code) and guess its programming language.
   *
   * @example
   *   ```js
   *   import {common, createLowlight} from 'lowlight'
   *
   *   const lowlight = createLowlight(common)
   *
   *   console.log(lowlight.highlightAuto('"hello, " + name + "!"'))
   *   ```
   *
   *   Yields:
   *
   *   ```js
   *   {type: 'root', children: [Array], data: {language: 'arduino', relevance: 2}}
   *   ```
   *
   * @param {string} value
   *   Code to highlight.
   * @param {Readonly<AutoOptions> | null | undefined} [options={}]
   *   Configuration (optional).
   * @returns {Root}
   *   Tree; with the following `data` fields: `language` (`string`), detected
   *   programming language name; `relevance` (`number`), how sure lowlight is
   *   that the given code is in the language.
   */
  function highlightAuto(value, options) {
    (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(typeof value === 'string', 'expected `string` as `value`')
    const settings = options || emptyOptions
    const subset = settings.subset || listLanguages()

    let index = -1
    let relevance = 0
    /** @type {Root | undefined} */
    let result

    while (++index < subset.length) {
      const name = subset[index]

      if (!high.getLanguage(name)) continue

      const current = highlight(name, value, options)

      if (
        current.data &&
        current.data.relevance !== undefined &&
        current.data.relevance > relevance
      ) {
        relevance = current.data.relevance
        result = current
      }
    }

    return (
      result || {
        type: 'root',
        children: [],
        data: {language: undefined, relevance}
      }
    )
  }

  /**
   * List registered languages.
   *
   * @example
   *   ```js
   *   import {createLowlight} from 'lowlight'
   *   import markdown from 'highlight.js/lib/languages/markdown'
   *
   *   const lowlight = createLowlight()
   *
   *   console.log(lowlight.listLanguages()) // => []
   *
   *   lowlight.register({markdown})
   *
   *   console.log(lowlight.listLanguages()) // => ['markdown']
   *   ```
   *
   * @returns {Array<string>}
   *   Names of registered language.
   */
  function listLanguages() {
    return high.listLanguages()
  }

  /**
   * Register languages.
   *
   * @example
   *   ```js
   *   import {createLowlight} from 'lowlight'
   *   import xml from 'highlight.js/lib/languages/xml'
   *
   *   const lowlight = createLowlight()
   *
   *   lowlight.register({xml})
   *
   *   // Note: `html` is an alias for `xml`.
   *   console.log(lowlight.highlight('html', '<em>Emphasis</em>'))
   *   ```
   *
   *   Yields:
   *
   *   ```js
   *   {type: 'root', children: [Array], data: {language: 'html', relevance: 2}}
   *   ```
   *
   * @overload
   * @param {Readonly<Record<string, LanguageFn>>} grammars
   * @returns {undefined}
   *
   * @overload
   * @param {string} name
   * @param {LanguageFn} grammar
   * @returns {undefined}
   *
   * @param {Readonly<Record<string, LanguageFn>> | string} grammarsOrName
   *   Grammars or programming language name.
   * @param {LanguageFn | undefined} [grammar]
   *   Grammar, if with name.
   * @returns {undefined}
   *   Nothing.
   */
  function register(grammarsOrName, grammar) {
    if (typeof grammarsOrName === 'string') {
      (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(grammar !== undefined, 'expected `grammar`')
      high.registerLanguage(grammarsOrName, grammar)
    } else {
      /** @type {string} */
      let name

      for (name in grammarsOrName) {
        if (Object.hasOwn(grammarsOrName, name)) {
          high.registerLanguage(name, grammarsOrName[name])
        }
      }
    }
  }

  /**
   * Register aliases.
   *
   * @example
   *   ```js
   *   import {createLowlight} from 'lowlight'
   *   import markdown from 'highlight.js/lib/languages/markdown'
   *
   *   const lowlight = createLowlight()
   *
   *   lowlight.register({markdown})
   *
   *   // lowlight.highlight('mdown', '<em>Emphasis</em>')
   *   // ^ would throw: Error: Unknown language: `mdown` is not registered
   *
   *   lowlight.registerAlias({markdown: ['mdown', 'mkdn', 'mdwn', 'ron']})
   *   lowlight.highlight('mdown', '<em>Emphasis</em>')
   *   // ^ Works!
   *   ```
   *
   * @overload
   * @param {Readonly<Record<string, ReadonlyArray<string> | string>>} aliases
   * @returns {undefined}
   *
   * @overload
   * @param {string} language
   * @param {ReadonlyArray<string> | string} alias
   * @returns {undefined}
   *
   * @param {Readonly<Record<string, ReadonlyArray<string> | string>> | string} aliasesOrName
   *   Map of programming language names to one or more aliases, or programming
   *   language name.
   * @param {ReadonlyArray<string> | string | undefined} [alias]
   *   One or more aliases for the programming language, if with `name`.
   * @returns {undefined}
   *   Nothing.
   */
  function registerAlias(aliasesOrName, alias) {
    if (typeof aliasesOrName === 'string') {
      (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(alias !== undefined)
      high.registerAliases(
        // Note: copy needed because hljs doesn’t accept readonly arrays yet.
        typeof alias === 'string' ? alias : [...alias],
        {languageName: aliasesOrName}
      )
    } else {
      /** @type {string} */
      let key

      for (key in aliasesOrName) {
        if (Object.hasOwn(aliasesOrName, key)) {
          const aliases = aliasesOrName[key]
          high.registerAliases(
            // Note: copy needed because hljs doesn’t accept readonly arrays yet.
            typeof aliases === 'string' ? aliases : [...aliases],
            {languageName: key}
          )
        }
      }
    }
  }

  /**
   * Check whether an alias or name is registered.
   *
   * @example
   *   ```js
   *   import {createLowlight} from 'lowlight'
   *   import javascript from 'highlight.js/lib/languages/javascript'
   *
   *   const lowlight = createLowlight({javascript})
   *
   *   console.log(lowlight.registered('funkyscript')) // => `false`
   *
   *   lowlight.registerAlias({javascript: 'funkyscript'})
   *   console.log(lowlight.registered('funkyscript')) // => `true`
   *   ```
   *
   * @param {string} aliasOrName
   *   Name of a language or alias for one.
   * @returns {boolean}
   *   Whether `aliasOrName` is registered.
   */
  function registered(aliasOrName) {
    return Boolean(high.getLanguage(aliasOrName))
  }
}

/** @type {Emitter} */
class HastEmitter {
  /**
   * @param {Readonly<HljsOptions>} options
   *   Configuration.
   * @returns
   *   Instance.
   */
  constructor(options) {
    /** @type {HljsOptions} */
    this.options = options
    /** @type {Root} */
    this.root = {
      type: 'root',
      children: [],
      data: {language: undefined, relevance: 0}
    }
    /** @type {[Root, ...Array<Element>]} */
    this.stack = [this.root]
  }

  /**
   * @param {string} value
   *   Text to add.
   * @returns {undefined}
   *   Nothing.
   *
   */
  addText(value) {
    if (value === '') return

    const current = this.stack[this.stack.length - 1]
    const tail = current.children[current.children.length - 1]

    if (tail && tail.type === 'text') {
      tail.value += value
    } else {
      current.children.push({type: 'text', value})
    }
  }

  /**
   *
   * @param {unknown} rawName
   *   Name to add.
   * @returns {undefined}
   *   Nothing.
   */
  startScope(rawName) {
    this.openNode(String(rawName))
  }

  /**
   * @returns {undefined}
   *   Nothing.
   */
  endScope() {
    this.closeNode()
  }

  /**
   * @param {HastEmitter} other
   *   Other emitter.
   * @param {string} name
   *   Name of the sublanguage.
   * @returns {undefined}
   *   Nothing.
   */
  __addSublanguage(other, name) {
    const current = this.stack[this.stack.length - 1]
    // Assume only element content.
    const results = /** @type {Array<ElementContent>} */ (other.root.children)

    if (name) {
      current.children.push({
        type: 'element',
        tagName: 'span',
        properties: {className: [name]},
        children: results
      })
    } else {
      current.children.push(...results)
    }
  }

  /**
   * @param {string} name
   *   Name to add.
   * @returns {undefined}
   *   Nothing.
   */
  openNode(name) {
    const self = this
    // First “class” gets the prefix. Rest gets a repeated underscore suffix.
    // See: <https://github.com/highlightjs/highlight.js/commit/51806aa>
    // See: <https://github.com/wooorm/lowlight/issues/43>
    const className = name.split('.').map(function (d, i) {
      return i ? d + '_'.repeat(i) : self.options.classPrefix + d
    })
    const current = this.stack[this.stack.length - 1]
    /** @type {Element} */
    const child = {
      type: 'element',
      tagName: 'span',
      properties: {className},
      children: []
    }

    current.children.push(child)
    this.stack.push(child)
  }

  /**
   * @returns {undefined}
   *   Nothing.
   */
  closeNode() {
    this.stack.pop()
  }

  /**
   * @returns {undefined}
   *   Nothing.
   */
  finalize() {}

  /**
   * @returns {string}
   *   Nothing.
   */
  toHTML() {
    return ''
  }
}


/***/ }),

/***/ "./node_modules/parse-entities/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/parse-entities/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseEntities: () => (/* binding */ parseEntities)
/* harmony export */ });
/* harmony import */ var character_entities_legacy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! character-entities-legacy */ "./node_modules/character-entities-legacy/index.js");
/* harmony import */ var character_reference_invalid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! character-reference-invalid */ "./node_modules/character-reference-invalid/index.js");
/* harmony import */ var is_decimal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js");
/* harmony import */ var is_hexadecimal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! is-hexadecimal */ "./node_modules/is-hexadecimal/index.js");
/* harmony import */ var is_alphanumerical__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-alphanumerical */ "./node_modules/is-alphanumerical/index.js");
/* harmony import */ var decode_named_character_reference__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! decode-named-character-reference */ "./node_modules/decode-named-character-reference/index.dom.js");
/**
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} Position
 */








const fromCharCode = String.fromCharCode

// Warning messages.
const messages = [
  '',
  /* 1: Non terminated (named) */
  'Named character references must be terminated by a semicolon',
  /* 2: Non terminated (numeric) */
  'Numeric character references must be terminated by a semicolon',
  /* 3: Empty (named) */
  'Named character references cannot be empty',
  /* 4: Empty (numeric) */
  'Numeric character references cannot be empty',
  /* 5: Unknown (named) */
  'Named character references must be known',
  /* 6: Disallowed (numeric) */
  'Numeric character references cannot be disallowed',
  /* 7: Prohibited (numeric) */
  'Numeric character references cannot be outside the permissible Unicode range'
]

/**
 * Parse HTML character references.
 *
 * @param {string} value
 * @param {import('../index.js').Options} [options={}]
 */
function parseEntities(value, options = {}) {
  const additional =
    typeof options.additional === 'string'
      ? options.additional.charCodeAt(0)
      : options.additional
  /** @type {Array<string>} */
  const result = []
  let index = 0
  let lines = -1
  let queue = ''
  /** @type {Point|undefined} */
  let point
  /** @type {Array<number>|undefined} */
  let indent

  if (options.position) {
    if ('start' in options.position || 'indent' in options.position) {
      // @ts-expect-error: points don’t have indent.
      indent = options.position.indent
      // @ts-expect-error: points don’t have indent.
      point = options.position.start
    } else {
      point = options.position
    }
  }

  let line = (point ? point.line : 0) || 1
  let column = (point ? point.column : 0) || 1

  // Cache the current point.
  let previous = now()
  /** @type {number|undefined} */
  let character

  // Ensure the algorithm walks over the first character (inclusive).
  index--

  while (++index <= value.length) {
    // If the previous character was a newline.
    if (character === 10 /* `\n` */) {
      column = (indent ? indent[lines] : 0) || 1
    }

    character = value.charCodeAt(index)

    if (character === 38 /* `&` */) {
      const following = value.charCodeAt(index + 1)

      // The behavior depends on the identity of the next character.
      if (
        following === 9 /* `\t` */ ||
        following === 10 /* `\n` */ ||
        following === 12 /* `\f` */ ||
        following === 32 /* ` ` */ ||
        following === 38 /* `&` */ ||
        following === 60 /* `<` */ ||
        Number.isNaN(following) ||
        (additional && following === additional)
      ) {
        // Not a character reference.
        // No characters are consumed, and nothing is returned.
        // This is not an error, either.
        queue += fromCharCode(character)
        column++
        continue
      }

      const start = index + 1
      let begin = start
      let end = start
      /** @type {string} */
      let type

      if (following === 35 /* `#` */) {
        // Numerical reference.
        end = ++begin

        // The behavior further depends on the next character.
        const following = value.charCodeAt(end)

        if (following === 88 /* `X` */ || following === 120 /* `x` */) {
          // ASCII hexadecimal digits.
          type = 'hexadecimal'
          end = ++begin
        } else {
          // ASCII decimal digits.
          type = 'decimal'
        }
      } else {
        // Named reference.
        type = 'named'
      }

      let characterReferenceCharacters = ''
      let characterReference = ''
      let characters = ''
      // Each type of character reference accepts different characters.
      // This test is used to detect whether a reference has ended (as the semicolon
      // is not strictly needed).
      const test =
        type === 'named'
          ? is_alphanumerical__WEBPACK_IMPORTED_MODULE_0__.isAlphanumerical
          : type === 'decimal'
          ? is_decimal__WEBPACK_IMPORTED_MODULE_1__.isDecimal
          : is_hexadecimal__WEBPACK_IMPORTED_MODULE_2__.isHexadecimal

      end--

      while (++end <= value.length) {
        const following = value.charCodeAt(end)

        if (!test(following)) {
          break
        }

        characters += fromCharCode(following)

        // Check if we can match a legacy named reference.
        // If so, we cache that as the last viable named reference.
        // This ensures we do not need to walk backwards later.
        if (type === 'named' && character_entities_legacy__WEBPACK_IMPORTED_MODULE_3__.characterEntitiesLegacy.includes(characters)) {
          characterReferenceCharacters = characters
          // @ts-expect-error: always able to decode.
          characterReference = (0,decode_named_character_reference__WEBPACK_IMPORTED_MODULE_4__.decodeNamedCharacterReference)(characters)
        }
      }

      let terminated = value.charCodeAt(end) === 59 /* `;` */

      if (terminated) {
        end++

        const namedReference =
          type === 'named' ? (0,decode_named_character_reference__WEBPACK_IMPORTED_MODULE_4__.decodeNamedCharacterReference)(characters) : false

        if (namedReference) {
          characterReferenceCharacters = characters
          characterReference = namedReference
        }
      }

      let diff = 1 + end - start
      let reference = ''

      if (!terminated && options.nonTerminated === false) {
        // Empty.
      } else if (!characters) {
        // An empty (possible) reference is valid, unless it’s numeric (thus an
        // ampersand followed by an octothorp).
        if (type !== 'named') {
          warning(4 /* Empty (numeric) */, diff)
        }
      } else if (type === 'named') {
        // An ampersand followed by anything unknown, and not terminated, is
        // invalid.
        if (terminated && !characterReference) {
          warning(5 /* Unknown (named) */, 1)
        } else {
          // If there’s something after an named reference which is not known,
          // cap the reference.
          if (characterReferenceCharacters !== characters) {
            end = begin + characterReferenceCharacters.length
            diff = 1 + end - begin
            terminated = false
          }

          // If the reference is not terminated, warn.
          if (!terminated) {
            const reason = characterReferenceCharacters
              ? 1 /* Non terminated (named) */
              : 3 /* Empty (named) */

            if (options.attribute) {
              const following = value.charCodeAt(end)

              if (following === 61 /* `=` */) {
                warning(reason, diff)
                characterReference = ''
              } else if ((0,is_alphanumerical__WEBPACK_IMPORTED_MODULE_0__.isAlphanumerical)(following)) {
                characterReference = ''
              } else {
                warning(reason, diff)
              }
            } else {
              warning(reason, diff)
            }
          }
        }

        reference = characterReference
      } else {
        if (!terminated) {
          // All nonterminated numeric references are not rendered, and emit a
          // warning.
          warning(2 /* Non terminated (numeric) */, diff)
        }

        // When terminated and numerical, parse as either hexadecimal or
        // decimal.
        let referenceCode = Number.parseInt(
          characters,
          type === 'hexadecimal' ? 16 : 10
        )

        // Emit a warning when the parsed number is prohibited, and replace with
        // replacement character.
        if (prohibited(referenceCode)) {
          warning(7 /* Prohibited (numeric) */, diff)
          reference = fromCharCode(65533 /* `�` */)
        } else if (referenceCode in character_reference_invalid__WEBPACK_IMPORTED_MODULE_5__.characterReferenceInvalid) {
          // Emit a warning when the parsed number is disallowed, and replace by
          // an alternative.
          warning(6 /* Disallowed (numeric) */, diff)
          reference = character_reference_invalid__WEBPACK_IMPORTED_MODULE_5__.characterReferenceInvalid[referenceCode]
        } else {
          // Parse the number.
          let output = ''

          // Emit a warning when the parsed number should not be used.
          if (disallowed(referenceCode)) {
            warning(6 /* Disallowed (numeric) */, diff)
          }

          // Serialize the number.
          if (referenceCode > 0xffff) {
            referenceCode -= 0x10000
            output += fromCharCode((referenceCode >>> (10 & 0x3ff)) | 0xd800)
            referenceCode = 0xdc00 | (referenceCode & 0x3ff)
          }

          reference = output + fromCharCode(referenceCode)
        }
      }

      // Found it!
      // First eat the queued characters as normal text, then eat a reference.
      if (reference) {
        flush()

        previous = now()
        index = end - 1
        column += end - start + 1
        result.push(reference)
        const next = now()
        next.offset++

        if (options.reference) {
          options.reference.call(
            options.referenceContext,
            reference,
            {start: previous, end: next},
            value.slice(start - 1, end)
          )
        }

        previous = next
      } else {
        // If we could not find a reference, queue the checked characters (as
        // normal characters), and move the pointer to their end.
        // This is possible because we can be certain neither newlines nor
        // ampersands are included.
        characters = value.slice(start - 1, end)
        queue += characters
        column += characters.length
        index = end - 1
      }
    } else {
      // Handle anything other than an ampersand, including newlines and EOF.
      if (character === 10 /* `\n` */) {
        line++
        lines++
        column = 0
      }

      if (Number.isNaN(character)) {
        flush()
      } else {
        queue += fromCharCode(character)
        column++
      }
    }
  }

  // Return the reduced nodes.
  return result.join('')

  // Get current position.
  function now() {
    return {
      line,
      column,
      offset: index + ((point ? point.offset : 0) || 0)
    }
  }

  /**
   * Handle the warning.
   *
   * @param {1|2|3|4|5|6|7} code
   * @param {number} offset
   */
  function warning(code, offset) {
    /** @type {ReturnType<now>} */
    let position

    if (options.warning) {
      position = now()
      position.column += offset
      position.offset += offset

      options.warning.call(
        options.warningContext,
        messages[code],
        position,
        code
      )
    }
  }

  /**
   * Flush `queue` (normal text).
   * Macro invoked before each reference and at the end of `value`.
   * Does nothing when `queue` is empty.
   */
  function flush() {
    if (queue) {
      result.push(queue)

      if (options.text) {
        options.text.call(options.textContext, queue, {
          start: previous,
          end: now()
        })
      }

      queue = ''
    }
  }
}

/**
 * Check if `character` is outside the permissible unicode range.
 *
 * @param {number} code
 * @returns {boolean}
 */
function prohibited(code) {
  return (code >= 0xd800 && code <= 0xdfff) || code > 0x10ffff
}

/**
 * Check if `character` is disallowed.
 *
 * @param {number} code
 * @returns {boolean}
 */
function disallowed(code) {
  return (
    (code >= 0x0001 && code <= 0x0008) ||
    code === 0x000b ||
    (code >= 0x000d && code <= 0x001f) ||
    (code >= 0x007f && code <= 0x009f) ||
    (code >= 0xfdd0 && code <= 0xfdef) ||
    (code & 0xffff) === 0xffff ||
    (code & 0xffff) === 0xfffe
  )
}


/***/ }),

/***/ "./node_modules/property-information/index.js":
/*!****************************************************!*\
  !*** ./node_modules/property-information/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   find: () => (/* reexport safe */ _lib_find_js__WEBPACK_IMPORTED_MODULE_0__.find),
/* harmony export */   hastToReact: () => (/* reexport safe */ _lib_hast_to_react_js__WEBPACK_IMPORTED_MODULE_1__.hastToReact),
/* harmony export */   html: () => (/* binding */ html),
/* harmony export */   normalize: () => (/* reexport safe */ _lib_normalize_js__WEBPACK_IMPORTED_MODULE_2__.normalize),
/* harmony export */   svg: () => (/* binding */ svg)
/* harmony export */ });
/* harmony import */ var _lib_util_merge_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/util/merge.js */ "./node_modules/property-information/lib/util/merge.js");
/* harmony import */ var _lib_xlink_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/xlink.js */ "./node_modules/property-information/lib/xlink.js");
/* harmony import */ var _lib_xml_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/xml.js */ "./node_modules/property-information/lib/xml.js");
/* harmony import */ var _lib_xmlns_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/xmlns.js */ "./node_modules/property-information/lib/xmlns.js");
/* harmony import */ var _lib_aria_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/aria.js */ "./node_modules/property-information/lib/aria.js");
/* harmony import */ var _lib_html_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/html.js */ "./node_modules/property-information/lib/html.js");
/* harmony import */ var _lib_svg_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/svg.js */ "./node_modules/property-information/lib/svg.js");
/* harmony import */ var _lib_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/find.js */ "./node_modules/property-information/lib/find.js");
/* harmony import */ var _lib_hast_to_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/hast-to-react.js */ "./node_modules/property-information/lib/hast-to-react.js");
/* harmony import */ var _lib_normalize_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/normalize.js */ "./node_modules/property-information/lib/normalize.js");
/**
 * @typedef {import('./lib/util/info.js').Info} Info
 * @typedef {import('./lib/util/schema.js').Schema} Schema
 */












const html = (0,_lib_util_merge_js__WEBPACK_IMPORTED_MODULE_3__.merge)([_lib_xml_js__WEBPACK_IMPORTED_MODULE_4__.xml, _lib_xlink_js__WEBPACK_IMPORTED_MODULE_5__.xlink, _lib_xmlns_js__WEBPACK_IMPORTED_MODULE_6__.xmlns, _lib_aria_js__WEBPACK_IMPORTED_MODULE_7__.aria, _lib_html_js__WEBPACK_IMPORTED_MODULE_8__.html], 'html')
const svg = (0,_lib_util_merge_js__WEBPACK_IMPORTED_MODULE_3__.merge)([_lib_xml_js__WEBPACK_IMPORTED_MODULE_4__.xml, _lib_xlink_js__WEBPACK_IMPORTED_MODULE_5__.xlink, _lib_xmlns_js__WEBPACK_IMPORTED_MODULE_6__.xmlns, _lib_aria_js__WEBPACK_IMPORTED_MODULE_7__.aria, _lib_svg_js__WEBPACK_IMPORTED_MODULE_9__.svg], 'svg')


/***/ }),

/***/ "./node_modules/property-information/lib/aria.js":
/*!*******************************************************!*\
  !*** ./node_modules/property-information/lib/aria.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aria: () => (/* binding */ aria)
/* harmony export */ });
/* harmony import */ var _util_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/types.js */ "./node_modules/property-information/lib/util/types.js");
/* harmony import */ var _util_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/create.js */ "./node_modules/property-information/lib/util/create.js");



const aria = (0,_util_create_js__WEBPACK_IMPORTED_MODULE_0__.create)({
  transform(_, prop) {
    return prop === 'role' ? prop : 'aria-' + prop.slice(4).toLowerCase()
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaAutoComplete: null,
    ariaBusy: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaChecked: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaColCount: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaColIndex: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaColSpan: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaControls: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.spaceSeparated,
    ariaDetails: null,
    ariaDisabled: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaDropEffect: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaFlowTo: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.spaceSeparated,
    ariaGrabbed: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaHasPopup: null,
    ariaHidden: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.spaceSeparated,
    ariaLevel: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaLive: null,
    ariaModal: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaMultiLine: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaMultiSelectable: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaOrientation: null,
    ariaOwns: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaPressed: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaReadOnly: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaRelevant: null,
    ariaRequired: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaRoleDescription: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.spaceSeparated,
    ariaRowCount: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaRowIndex: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaRowSpan: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaSelected: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanish,
    ariaSetSize: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaSort: null,
    ariaValueMax: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaValueMin: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaValueNow: _util_types_js__WEBPACK_IMPORTED_MODULE_1__.number,
    ariaValueText: null,
    role: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/lib/find.js":
/*!*******************************************************!*\
  !*** ./node_modules/property-information/lib/find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   find: () => (/* binding */ find)
/* harmony export */ });
/* harmony import */ var _normalize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalize.js */ "./node_modules/property-information/lib/normalize.js");
/* harmony import */ var _util_defined_info_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/defined-info.js */ "./node_modules/property-information/lib/util/defined-info.js");
/* harmony import */ var _util_info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/info.js */ "./node_modules/property-information/lib/util/info.js");
/**
 * @typedef {import('./util/schema.js').Schema} Schema
 */





const valid = /^data[-\w.:]+$/i
const dash = /-[a-z]/g
const cap = /[A-Z]/g

/**
 * @param {Schema} schema
 * @param {string} value
 * @returns {Info}
 */
function find(schema, value) {
  const normal = (0,_normalize_js__WEBPACK_IMPORTED_MODULE_0__.normalize)(value)
  let prop = value
  let Type = _util_info_js__WEBPACK_IMPORTED_MODULE_1__.Info

  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]]
  }

  if (normal.length > 4 && normal.slice(0, 4) === 'data' && valid.test(value)) {
    // Attribute or property.
    if (value.charAt(4) === '-') {
      // Turn it into a property.
      const rest = value.slice(5).replace(dash, camelcase)
      prop = 'data' + rest.charAt(0).toUpperCase() + rest.slice(1)
    } else {
      // Turn it into an attribute.
      const rest = value.slice(4)

      if (!dash.test(rest)) {
        let dashes = rest.replace(cap, kebab)

        if (dashes.charAt(0) !== '-') {
          dashes = '-' + dashes
        }

        value = 'data' + dashes
      }
    }

    Type = _util_defined_info_js__WEBPACK_IMPORTED_MODULE_2__.DefinedInfo
  }

  return new Type(prop, value)
}

/**
 * @param {string} $0
 * @returns {string}
 */
function kebab($0) {
  return '-' + $0.toLowerCase()
}

/**
 * @param {string} $0
 * @returns {string}
 */
function camelcase($0) {
  return $0.charAt(1).toUpperCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/hast-to-react.js":
/*!****************************************************************!*\
  !*** ./node_modules/property-information/lib/hast-to-react.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hastToReact: () => (/* binding */ hastToReact)
/* harmony export */ });
/**
 * `hast` is close to `React`, but differs in a couple of cases.
 *
 * To get a React property from a hast property, check if it is in
 * `hastToReact`, if it is, then use the corresponding value,
 * otherwise, use the hast property.
 *
 * @type {Record<string, string>}
 */
const hastToReact = {
  classId: 'classID',
  dataType: 'datatype',
  itemId: 'itemID',
  strokeDashArray: 'strokeDasharray',
  strokeDashOffset: 'strokeDashoffset',
  strokeLineCap: 'strokeLinecap',
  strokeLineJoin: 'strokeLinejoin',
  strokeMiterLimit: 'strokeMiterlimit',
  typeOf: 'typeof',
  xLinkActuate: 'xlinkActuate',
  xLinkArcRole: 'xlinkArcrole',
  xLinkHref: 'xlinkHref',
  xLinkRole: 'xlinkRole',
  xLinkShow: 'xlinkShow',
  xLinkTitle: 'xlinkTitle',
  xLinkType: 'xlinkType',
  xmlnsXLink: 'xmlnsXlink'
}


/***/ }),

/***/ "./node_modules/property-information/lib/html.js":
/*!*******************************************************!*\
  !*** ./node_modules/property-information/lib/html.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   html: () => (/* binding */ html)
/* harmony export */ });
/* harmony import */ var _util_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/types.js */ "./node_modules/property-information/lib/util/types.js");
/* harmony import */ var _util_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/create.js */ "./node_modules/property-information/lib/util/create.js");
/* harmony import */ var _util_case_insensitive_transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/case-insensitive-transform.js */ "./node_modules/property-information/lib/util/case-insensitive-transform.js");




const html = (0,_util_create_js__WEBPACK_IMPORTED_MODULE_0__.create)({
  space: 'html',
  attributes: {
    acceptcharset: 'accept-charset',
    classname: 'class',
    htmlfor: 'for',
    httpequiv: 'http-equiv'
  },
  transform: _util_case_insensitive_transform_js__WEBPACK_IMPORTED_MODULE_1__.caseInsensitiveTransform,
  mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaSeparated,
    acceptCharset: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    accessKey: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    allowPaymentRequest: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    allowUserMedia: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    alt: null,
    as: null,
    async: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    autoCapitalize: null,
    autoComplete: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    autoFocus: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    autoPlay: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    blocking: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    capture: null,
    charSet: null,
    checked: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    cite: null,
    className: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    cols: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    colSpan: null,
    content: null,
    contentEditable: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.booleanish,
    controls: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    controlsList: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    coords: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number | _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    defer: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    dir: null,
    dirName: null,
    disabled: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    download: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.overloadedBoolean,
    draggable: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.booleanish,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    formTarget: null,
    headers: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    height: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    hidden: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    high: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    href: null,
    hrefLang: null,
    htmlFor: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    httpEquiv: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    itemId: null,
    itemProp: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    itemRef: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    itemScope: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    itemType: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    low: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    manifest: null,
    max: null,
    maxLength: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    media: null,
    method: null,
    min: null,
    minLength: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    multiple: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    muted: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    name: null,
    nonce: null,
    noModule: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    noValidate: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    optimum: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    pattern: null,
    ping: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    placeholder: null,
    playsInline: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    referrerPolicy: null,
    rel: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    required: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    reversed: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    rows: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    rowSpan: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    sandbox: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    scope: null,
    scoped: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    seamless: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    selected: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    shadowRootClonable: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    shadowRootDelegatesFocus: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    shadowRootMode: null,
    shape: null,
    size: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    sizes: null,
    slot: null,
    span: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    spellCheck: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    step: null,
    style: null,
    tabIndex: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    useMap: null,
    value: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.booleanish,
    width: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    wrap: null,
    writingSuggestions: null,

    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null, // Several. Use CSS `text-align` instead,
    aLink: null, // `<body>`. Use CSS `a:active {color}` instead
    archive: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated, // `<object>`. List of URIs to archives
    axis: null, // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null, // `<body>`. Use CSS `background-image` instead
    bgColor: null, // `<body>` and table elements. Use CSS `background-color` instead
    border: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number, // `<table>`. Use CSS `border-width` instead,
    borderColor: null, // `<table>`. Use CSS `border-color` instead,
    bottomMargin: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number, // `<body>`
    cellPadding: null, // `<table>`
    cellSpacing: null, // `<table>`
    char: null, // Several table elements. When `align=char`, sets the character to align on
    charOff: null, // Several table elements. When `char`, offsets the alignment
    classId: null, // `<object>`
    clear: null, // `<br>`. Use CSS `clear` instead
    code: null, // `<object>`
    codeBase: null, // `<object>`
    codeType: null, // `<object>`
    color: null, // `<font>` and `<hr>`. Use CSS instead
    compact: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean, // Lists. Use CSS to reduce space between items instead
    declare: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean, // `<object>`
    event: null, // `<script>`
    face: null, // `<font>`. Use CSS instead
    frame: null, // `<table>`
    frameBorder: null, // `<iframe>`. Use CSS `border` instead
    hSpace: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number, // `<img>` and `<object>`
    leftMargin: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number, // `<body>`
    link: null, // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null, // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null, // `<img>`. Use a `<picture>`
    marginHeight: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number, // `<body>`
    marginWidth: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number, // `<body>`
    noResize: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean, // `<frame>`
    noHref: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean, // `<area>`. Use no href instead of an explicit `nohref`
    noShade: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean, // `<hr>`. Use background-color and height instead of borders
    noWrap: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean, // `<td>` and `<th>`
    object: null, // `<applet>`
    profile: null, // `<head>`
    prompt: null, // `<isindex>`
    rev: null, // `<link>`
    rightMargin: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number, // `<body>`
    rules: null, // `<table>`
    scheme: null, // `<meta>`
    scrolling: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.booleanish, // `<frame>`. Use overflow in the child context
    standby: null, // `<object>`
    summary: null, // `<table>`
    text: null, // `<body>`. Use CSS `color` instead
    topMargin: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number, // `<body>`
    valueType: null, // `<param>`
    version: null, // `<html>`. Use a doctype.
    vAlign: null, // Several. Use CSS `vertical-align` instead
    vLink: null, // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number, // `<img>` and `<object>`

    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    disableRemotePlayback: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    prefix: null,
    property: null,
    results: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    security: null,
    unselectable: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/lib/normalize.js":
/*!************************************************************!*\
  !*** ./node_modules/property-information/lib/normalize.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalize: () => (/* binding */ normalize)
/* harmony export */ });
/**
 * @param {string} value
 * @returns {string}
 */
function normalize(value) {
  return value.toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/svg.js":
/*!******************************************************!*\
  !*** ./node_modules/property-information/lib/svg.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   svg: () => (/* binding */ svg)
/* harmony export */ });
/* harmony import */ var _util_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/types.js */ "./node_modules/property-information/lib/util/types.js");
/* harmony import */ var _util_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/create.js */ "./node_modules/property-information/lib/util/create.js");
/* harmony import */ var _util_case_sensitive_transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/case-sensitive-transform.js */ "./node_modules/property-information/lib/util/case-sensitive-transform.js");




const svg = (0,_util_create_js__WEBPACK_IMPORTED_MODULE_0__.create)({
  space: 'svg',
  attributes: {
    accentHeight: 'accent-height',
    alignmentBaseline: 'alignment-baseline',
    arabicForm: 'arabic-form',
    baselineShift: 'baseline-shift',
    capHeight: 'cap-height',
    className: 'class',
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    crossOrigin: 'crossorigin',
    dataType: 'datatype',
    dominantBaseline: 'dominant-baseline',
    enableBackground: 'enable-background',
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    hrefLang: 'hreflang',
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    horizOriginY: 'horiz-origin-y',
    imageRendering: 'image-rendering',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    navDown: 'nav-down',
    navDownLeft: 'nav-down-left',
    navDownRight: 'nav-down-right',
    navLeft: 'nav-left',
    navNext: 'nav-next',
    navPrev: 'nav-prev',
    navRight: 'nav-right',
    navUp: 'nav-up',
    navUpLeft: 'nav-up-left',
    navUpRight: 'nav-up-right',
    onAbort: 'onabort',
    onActivate: 'onactivate',
    onAfterPrint: 'onafterprint',
    onBeforePrint: 'onbeforeprint',
    onBegin: 'onbegin',
    onCancel: 'oncancel',
    onCanPlay: 'oncanplay',
    onCanPlayThrough: 'oncanplaythrough',
    onChange: 'onchange',
    onClick: 'onclick',
    onClose: 'onclose',
    onCopy: 'oncopy',
    onCueChange: 'oncuechange',
    onCut: 'oncut',
    onDblClick: 'ondblclick',
    onDrag: 'ondrag',
    onDragEnd: 'ondragend',
    onDragEnter: 'ondragenter',
    onDragExit: 'ondragexit',
    onDragLeave: 'ondragleave',
    onDragOver: 'ondragover',
    onDragStart: 'ondragstart',
    onDrop: 'ondrop',
    onDurationChange: 'ondurationchange',
    onEmptied: 'onemptied',
    onEnd: 'onend',
    onEnded: 'onended',
    onError: 'onerror',
    onFocus: 'onfocus',
    onFocusIn: 'onfocusin',
    onFocusOut: 'onfocusout',
    onHashChange: 'onhashchange',
    onInput: 'oninput',
    onInvalid: 'oninvalid',
    onKeyDown: 'onkeydown',
    onKeyPress: 'onkeypress',
    onKeyUp: 'onkeyup',
    onLoad: 'onload',
    onLoadedData: 'onloadeddata',
    onLoadedMetadata: 'onloadedmetadata',
    onLoadStart: 'onloadstart',
    onMessage: 'onmessage',
    onMouseDown: 'onmousedown',
    onMouseEnter: 'onmouseenter',
    onMouseLeave: 'onmouseleave',
    onMouseMove: 'onmousemove',
    onMouseOut: 'onmouseout',
    onMouseOver: 'onmouseover',
    onMouseUp: 'onmouseup',
    onMouseWheel: 'onmousewheel',
    onOffline: 'onoffline',
    onOnline: 'ononline',
    onPageHide: 'onpagehide',
    onPageShow: 'onpageshow',
    onPaste: 'onpaste',
    onPause: 'onpause',
    onPlay: 'onplay',
    onPlaying: 'onplaying',
    onPopState: 'onpopstate',
    onProgress: 'onprogress',
    onRateChange: 'onratechange',
    onRepeat: 'onrepeat',
    onReset: 'onreset',
    onResize: 'onresize',
    onScroll: 'onscroll',
    onSeeked: 'onseeked',
    onSeeking: 'onseeking',
    onSelect: 'onselect',
    onShow: 'onshow',
    onStalled: 'onstalled',
    onStorage: 'onstorage',
    onSubmit: 'onsubmit',
    onSuspend: 'onsuspend',
    onTimeUpdate: 'ontimeupdate',
    onToggle: 'ontoggle',
    onUnload: 'onunload',
    onVolumeChange: 'onvolumechange',
    onWaiting: 'onwaiting',
    onZoom: 'onzoom',
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pointerEvents: 'pointer-events',
    referrerPolicy: 'referrerpolicy',
    renderingIntent: 'rendering-intent',
    shapeRendering: 'shape-rendering',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    strokeDashArray: 'stroke-dasharray',
    strokeDashOffset: 'stroke-dashoffset',
    strokeLineCap: 'stroke-linecap',
    strokeLineJoin: 'stroke-linejoin',
    strokeMiterLimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    tabIndex: 'tabindex',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    transformOrigin: 'transform-origin',
    typeOf: 'typeof',
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    vectorEffect: 'vector-effect',
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    xHeight: 'x-height',
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: 'playbackorder',
    timelineBegin: 'timelinebegin'
  },
  transform: _util_case_sensitive_transform_js__WEBPACK_IMPORTED_MODULE_1__.caseSensitiveTransform,
  properties: {
    about: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    accentHeight: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    amplitude: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    arabicForm: null,
    ascent: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    attributeName: null,
    attributeType: null,
    azimuth: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    by: null,
    calcMode: null,
    capHeight: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    className: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    diffuseConstant: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    direction: null,
    display: null,
    dur: null,
    divisor: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    dominantBaseline: null,
    download: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaSeparated,
    g2: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaSeparated,
    glyphName: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    horizOriginX: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    horizOriginY: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    id: null,
    ideographic: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    k: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    k1: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    k2: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    k3: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    k4: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    kernelMatrix: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null, // SEMI_COLON_SEPARATED
    keySplines: null, // SEMI_COLON_SEPARATED
    keyTimes: null, // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    overlineThickness: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    pointsAtY: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    pointsAtZ: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    rev: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    requiredFeatures: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    requiredFonts: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    requiredFormats: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    specularExponent: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    strikethroughThickness: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    string: null,
    stroke: null,
    strokeDashArray: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    strokeOpacity: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    strokeWidth: null,
    style: null,
    surfaceScale: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    tabIndex: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    tableValues: null,
    target: null,
    targetX: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    targetY: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.commaOrSpaceSeparated,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    underlineThickness: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    values: null,
    vAlphabetic: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    vMathematical: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    vectorEffect: null,
    vHanging: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    vIdeographic: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    version: null,
    vertAdvY: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    vertOriginX: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    vertOriginY: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: _util_types_js__WEBPACK_IMPORTED_MODULE_2__.number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/lib/util/case-insensitive-transform.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/property-information/lib/util/case-insensitive-transform.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   caseInsensitiveTransform: () => (/* binding */ caseInsensitiveTransform)
/* harmony export */ });
/* harmony import */ var _case_sensitive_transform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./case-sensitive-transform.js */ "./node_modules/property-information/lib/util/case-sensitive-transform.js");


/**
 * @param {Record<string, string>} attributes
 * @param {string} property
 * @returns {string}
 */
function caseInsensitiveTransform(attributes, property) {
  return (0,_case_sensitive_transform_js__WEBPACK_IMPORTED_MODULE_0__.caseSensitiveTransform)(attributes, property.toLowerCase())
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/case-sensitive-transform.js":
/*!********************************************************************************!*\
  !*** ./node_modules/property-information/lib/util/case-sensitive-transform.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   caseSensitiveTransform: () => (/* binding */ caseSensitiveTransform)
/* harmony export */ });
/**
 * @param {Record<string, string>} attributes
 * @param {string} attribute
 * @returns {string}
 */
function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/create.js":
/*!**************************************************************!*\
  !*** ./node_modules/property-information/lib/util/create.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   create: () => (/* binding */ create)
/* harmony export */ });
/* harmony import */ var _normalize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../normalize.js */ "./node_modules/property-information/lib/normalize.js");
/* harmony import */ var _schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema.js */ "./node_modules/property-information/lib/util/schema.js");
/* harmony import */ var _defined_info_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defined-info.js */ "./node_modules/property-information/lib/util/defined-info.js");
/**
 * @typedef {import('./schema.js').Properties} Properties
 * @typedef {import('./schema.js').Normal} Normal
 *
 * @typedef {Record<string, string>} Attributes
 *
 * @typedef {Object} Definition
 * @property {Record<string, number|null>} properties
 * @property {(attributes: Attributes, property: string) => string} transform
 * @property {string} [space]
 * @property {Attributes} [attributes]
 * @property {Array<string>} [mustUseProperty]
 */





const own = {}.hasOwnProperty

/**
 * @param {Definition} definition
 * @returns {Schema}
 */
function create(definition) {
  /** @type {Properties} */
  const property = {}
  /** @type {Normal} */
  const normal = {}
  /** @type {string} */
  let prop

  for (prop in definition.properties) {
    if (own.call(definition.properties, prop)) {
      const value = definition.properties[prop]
      const info = new _defined_info_js__WEBPACK_IMPORTED_MODULE_0__.DefinedInfo(
        prop,
        definition.transform(definition.attributes || {}, prop),
        value,
        definition.space
      )

      if (
        definition.mustUseProperty &&
        definition.mustUseProperty.includes(prop)
      ) {
        info.mustUseProperty = true
      }

      property[prop] = info

      normal[(0,_normalize_js__WEBPACK_IMPORTED_MODULE_1__.normalize)(prop)] = prop
      normal[(0,_normalize_js__WEBPACK_IMPORTED_MODULE_1__.normalize)(info.attribute)] = prop
    }
  }

  return new _schema_js__WEBPACK_IMPORTED_MODULE_2__.Schema(property, normal, definition.space)
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/defined-info.js":
/*!********************************************************************!*\
  !*** ./node_modules/property-information/lib/util/defined-info.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefinedInfo: () => (/* binding */ DefinedInfo)
/* harmony export */ });
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info.js */ "./node_modules/property-information/lib/util/info.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./node_modules/property-information/lib/util/types.js");



/** @type {Array<keyof types>} */
// @ts-expect-error: hush.
const checks = Object.keys(_types_js__WEBPACK_IMPORTED_MODULE_0__)

class DefinedInfo extends _info_js__WEBPACK_IMPORTED_MODULE_1__.Info {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(property, attribute, mask, space) {
    let index = -1

    super(property, attribute)

    mark(this, 'space', space)

    if (typeof mask === 'number') {
      while (++index < checks.length) {
        const check = checks[index]
        mark(this, checks[index], (mask & _types_js__WEBPACK_IMPORTED_MODULE_0__[check]) === _types_js__WEBPACK_IMPORTED_MODULE_0__[check])
      }
    }
  }
}

DefinedInfo.prototype.defined = true

/**
 * @param {DefinedInfo} values
 * @param {string} key
 * @param {unknown} value
 */
function mark(values, key, value) {
  if (value) {
    // @ts-expect-error: assume `value` matches the expected value of `key`.
    values[key] = value
  }
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/info.js":
/*!************************************************************!*\
  !*** ./node_modules/property-information/lib/util/info.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Info: () => (/* binding */ Info)
/* harmony export */ });
class Info {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */
  constructor(property, attribute) {
    /** @type {string} */
    this.property = property
    /** @type {string} */
    this.attribute = attribute
  }
}

/** @type {string|null} */
Info.prototype.space = null
Info.prototype.boolean = false
Info.prototype.booleanish = false
Info.prototype.overloadedBoolean = false
Info.prototype.number = false
Info.prototype.commaSeparated = false
Info.prototype.spaceSeparated = false
Info.prototype.commaOrSpaceSeparated = false
Info.prototype.mustUseProperty = false
Info.prototype.defined = false


/***/ }),

/***/ "./node_modules/property-information/lib/util/merge.js":
/*!*************************************************************!*\
  !*** ./node_modules/property-information/lib/util/merge.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   merge: () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _schema_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema.js */ "./node_modules/property-information/lib/util/schema.js");
/**
 * @typedef {import('./schema.js').Properties} Properties
 * @typedef {import('./schema.js').Normal} Normal
 */



/**
 * @param {Schema[]} definitions
 * @param {string} [space]
 * @returns {Schema}
 */
function merge(definitions, space) {
  /** @type {Properties} */
  const property = {}
  /** @type {Normal} */
  const normal = {}
  let index = -1

  while (++index < definitions.length) {
    Object.assign(property, definitions[index].property)
    Object.assign(normal, definitions[index].normal)
  }

  return new _schema_js__WEBPACK_IMPORTED_MODULE_0__.Schema(property, normal, space)
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/schema.js":
/*!**************************************************************!*\
  !*** ./node_modules/property-information/lib/util/schema.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Schema: () => (/* binding */ Schema)
/* harmony export */ });
/**
 * @typedef {import('./info.js').Info} Info
 * @typedef {Record<string, Info>} Properties
 * @typedef {Record<string, string>} Normal
 */

class Schema {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(property, normal, space) {
    this.property = property
    this.normal = normal
    if (space) {
      this.space = space
    }
  }
}

/** @type {Properties} */
Schema.prototype.property = {}
/** @type {Normal} */
Schema.prototype.normal = {}
/** @type {string|null} */
Schema.prototype.space = null


/***/ }),

/***/ "./node_modules/property-information/lib/util/types.js":
/*!*************************************************************!*\
  !*** ./node_modules/property-information/lib/util/types.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boolean: () => (/* binding */ boolean),
/* harmony export */   booleanish: () => (/* binding */ booleanish),
/* harmony export */   commaOrSpaceSeparated: () => (/* binding */ commaOrSpaceSeparated),
/* harmony export */   commaSeparated: () => (/* binding */ commaSeparated),
/* harmony export */   number: () => (/* binding */ number),
/* harmony export */   overloadedBoolean: () => (/* binding */ overloadedBoolean),
/* harmony export */   spaceSeparated: () => (/* binding */ spaceSeparated)
/* harmony export */ });
let powers = 0

const boolean = increment()
const booleanish = increment()
const overloadedBoolean = increment()
const number = increment()
const spaceSeparated = increment()
const commaSeparated = increment()
const commaOrSpaceSeparated = increment()

function increment() {
  return 2 ** ++powers
}


/***/ }),

/***/ "./node_modules/property-information/lib/xlink.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/lib/xlink.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   xlink: () => (/* binding */ xlink)
/* harmony export */ });
/* harmony import */ var _util_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/create.js */ "./node_modules/property-information/lib/util/create.js");


const xlink = (0,_util_create_js__WEBPACK_IMPORTED_MODULE_0__.create)({
  space: 'xlink',
  transform(_, prop) {
    return 'xlink:' + prop.slice(5).toLowerCase()
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/lib/xml.js":
/*!******************************************************!*\
  !*** ./node_modules/property-information/lib/xml.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   xml: () => (/* binding */ xml)
/* harmony export */ });
/* harmony import */ var _util_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/create.js */ "./node_modules/property-information/lib/util/create.js");


const xml = (0,_util_create_js__WEBPACK_IMPORTED_MODULE_0__.create)({
  space: 'xml',
  transform(_, prop) {
    return 'xml:' + prop.slice(3).toLowerCase()
  },
  properties: {xmlLang: null, xmlBase: null, xmlSpace: null}
})


/***/ }),

/***/ "./node_modules/property-information/lib/xmlns.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/lib/xmlns.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   xmlns: () => (/* binding */ xmlns)
/* harmony export */ });
/* harmony import */ var _util_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/create.js */ "./node_modules/property-information/lib/util/create.js");
/* harmony import */ var _util_case_insensitive_transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/case-insensitive-transform.js */ "./node_modules/property-information/lib/util/case-insensitive-transform.js");



const xmlns = (0,_util_create_js__WEBPACK_IMPORTED_MODULE_0__.create)({
  space: 'xmlns',
  attributes: {xmlnsxlink: 'xmlns:xlink'},
  transform: _util_case_insensitive_transform_js__WEBPACK_IMPORTED_MODULE_1__.caseInsensitiveTransform,
  properties: {xmlns: null, xmlnsXLink: null}
})


/***/ }),

/***/ "./node_modules/refractor/lang/arduino.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/arduino.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ arduino)
/* harmony export */ });
/* harmony import */ var _cpp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cpp.js */ "./node_modules/refractor/lang/cpp.js");
// @ts-nocheck

arduino.displayName = 'arduino'
arduino.aliases = ['ino']

/** @type {import('../core.js').Syntax} */
function arduino(Prism) {
  Prism.register(_cpp_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.arduino = Prism.languages.extend('cpp', {
    keyword:
      /\b(?:String|array|bool|boolean|break|byte|case|catch|continue|default|do|double|else|finally|for|function|goto|if|in|instanceof|int|integer|long|loop|new|null|return|setup|string|switch|throw|try|void|while|word)\b/,
    constant:
      /\b(?:ANALOG_MESSAGE|DEFAULT|DIGITAL_MESSAGE|EXTERNAL|FIRMATA_STRING|HIGH|INPUT|INPUT_PULLUP|INTERNAL|INTERNAL1V1|INTERNAL2V56|LED_BUILTIN|LOW|OUTPUT|REPORT_ANALOG|REPORT_DIGITAL|SET_PIN_MODE|SYSEX_START|SYSTEM_RESET)\b/,
    builtin:
      /\b(?:Audio|BSSID|Bridge|Client|Console|EEPROM|Esplora|EsploraTFT|Ethernet|EthernetClient|EthernetServer|EthernetUDP|File|FileIO|FileSystem|Firmata|GPRS|GSM|GSMBand|GSMClient|GSMModem|GSMPIN|GSMScanner|GSMServer|GSMVoiceCall|GSM_SMS|HttpClient|IPAddress|IRread|Keyboard|KeyboardController|LiquidCrystal|LiquidCrystal_I2C|Mailbox|Mouse|MouseController|PImage|Process|RSSI|RobotControl|RobotMotor|SD|SPI|SSID|Scheduler|Serial|Server|Servo|SoftwareSerial|Stepper|Stream|TFT|Task|USBHost|WiFi|WiFiClient|WiFiServer|WiFiUDP|Wire|YunClient|YunServer|abs|addParameter|analogRead|analogReadResolution|analogReference|analogWrite|analogWriteResolution|answerCall|attach|attachGPRS|attachInterrupt|attached|autoscroll|available|background|beep|begin|beginPacket|beginSD|beginSMS|beginSpeaker|beginTFT|beginTransmission|beginWrite|bit|bitClear|bitRead|bitSet|bitWrite|blink|blinkVersion|buffer|changePIN|checkPIN|checkPUK|checkReg|circle|cityNameRead|cityNameWrite|clear|clearScreen|click|close|compassRead|config|connect|connected|constrain|cos|countryNameRead|countryNameWrite|createChar|cursor|debugPrint|delay|delayMicroseconds|detach|detachInterrupt|digitalRead|digitalWrite|disconnect|display|displayLogos|drawBMP|drawCompass|encryptionType|end|endPacket|endSMS|endTransmission|endWrite|exists|exitValue|fill|find|findUntil|flush|gatewayIP|get|getAsynchronously|getBand|getButton|getCurrentCarrier|getIMEI|getKey|getModifiers|getOemKey|getPINUsed|getResult|getSignalStrength|getSocket|getVoiceCallStatus|getXChange|getYChange|hangCall|height|highByte|home|image|interrupts|isActionDone|isDirectory|isListening|isPIN|isPressed|isValid|keyPressed|keyReleased|keyboardRead|knobRead|leftToRight|line|lineFollowConfig|listen|listenOnLocalhost|loadImage|localIP|lowByte|macAddress|maintain|map|max|messageAvailable|micros|millis|min|mkdir|motorsStop|motorsWrite|mouseDragged|mouseMoved|mousePressed|mouseReleased|move|noAutoscroll|noBlink|noBuffer|noCursor|noDisplay|noFill|noInterrupts|noListenOnLocalhost|noStroke|noTone|onReceive|onRequest|open|openNextFile|overflow|parseCommand|parseFloat|parseInt|parsePacket|pauseMode|peek|pinMode|playFile|playMelody|point|pointTo|position|pow|prepare|press|print|printFirmwareVersion|printVersion|println|process|processInput|pulseIn|put|random|randomSeed|read|readAccelerometer|readBlue|readButton|readBytes|readBytesUntil|readGreen|readJoystickButton|readJoystickSwitch|readJoystickX|readJoystickY|readLightSensor|readMessage|readMicrophone|readNetworks|readRed|readSlider|readString|readStringUntil|readTemperature|ready|rect|release|releaseAll|remoteIP|remoteNumber|remotePort|remove|requestFrom|retrieveCallingNumber|rewindDirectory|rightToLeft|rmdir|robotNameRead|robotNameWrite|run|runAsynchronously|runShellCommand|runShellCommandAsynchronously|running|scanNetworks|scrollDisplayLeft|scrollDisplayRight|seek|sendAnalog|sendDigitalPortPair|sendDigitalPorts|sendString|sendSysex|serialEvent|setBand|setBitOrder|setClockDivider|setCursor|setDNS|setDataMode|setFirmwareVersion|setMode|setPINUsed|setSpeed|setTextSize|setTimeout|shiftIn|shiftOut|shutdown|sin|size|sqrt|startLoop|step|stop|stroke|subnetMask|switchPIN|tan|tempoWrite|text|tone|transfer|tuneWrite|turn|updateIR|userNameRead|userNameWrite|voiceCall|waitContinue|width|write|writeBlue|writeGreen|writeJSON|writeMessage|writeMicroseconds|writeRGB|writeRed|yield)\b/
  })
  Prism.languages.ino = Prism.languages.arduino
}


/***/ }),

/***/ "./node_modules/refractor/lang/bash.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/bash.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bash)
/* harmony export */ });
// @ts-nocheck
bash.displayName = 'bash'
bash.aliases = ['sh', 'shell']

/** @type {import('../core.js').Syntax} */
function bash(Prism) {
  ;(function (Prism) {
    // $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
    // + LC_ALL, RANDOM, REPLY, SECONDS.
    // + make sure PS1..4 are here as they are not always set,
    // - some useless things.
    var envVars =
      '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b'
    var commandAfterHeredoc = {
      pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
      lookbehind: true,
      alias: 'punctuation',
      // this looks reasonably well in all themes
      inside: null // see below
    }

    var insideString = {
      bash: commandAfterHeredoc,
      environment: {
        pattern: RegExp('\\$' + envVars),
        alias: 'constant'
      },
      variable: [
        // [0]: Arithmetic Environment
        {
          pattern: /\$?\(\([\s\S]+?\)\)/,
          greedy: true,
          inside: {
            // If there is a $ sign at the beginning highlight $(( and )) as variable
            variable: [
              {
                pattern: /(^\$\(\([\s\S]+)\)\)/,
                lookbehind: true
              },
              /^\$\(\(/
            ],
            number:
              /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
            // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
            operator:
              /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
            // If there is no $ sign at the beginning highlight (( and )) as punctuation
            punctuation: /\(\(?|\)\)?|,|;/
          }
        },
        // [1]: Command Substitution
        {
          pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
          greedy: true,
          inside: {
            variable: /^\$\(|^`|\)$|`$/
          }
        },
        // [2]: Brace expansion
        {
          pattern: /\$\{[^}]+\}/,
          greedy: true,
          inside: {
            operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
            punctuation: /[\[\]]/,
            environment: {
              pattern: RegExp('(\\{)' + envVars),
              lookbehind: true,
              alias: 'constant'
            }
          }
        },
        /\$(?:\w+|[#?*!@$])/
      ],
      // Escape sequences from echo and printf's manuals, and escaped quotes.
      entity:
        /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
    }
    Prism.languages.bash = {
      shebang: {
        pattern: /^#!\s*\/.*/,
        alias: 'important'
      },
      comment: {
        pattern: /(^|[^"{\\$])#.*/,
        lookbehind: true
      },
      'function-name': [
        // a) function foo {
        // b) foo() {
        // c) function foo() {
        // but not “foo {”
        {
          // a) and c)
          pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
          lookbehind: true,
          alias: 'function'
        },
        {
          // b)
          pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
          alias: 'function'
        }
      ],
      // Highlight variable names as variables in for and select beginnings.
      'for-or-select': {
        pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
        alias: 'variable',
        lookbehind: true
      },
      // Highlight variable names as variables in the left-hand part
      // of assignments (“=” and “+=”).
      'assign-left': {
        pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
        inside: {
          environment: {
            pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + envVars),
            lookbehind: true,
            alias: 'constant'
          }
        },
        alias: 'variable',
        lookbehind: true
      },
      // Highlight parameter names as variables
      parameter: {
        pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
        alias: 'variable',
        lookbehind: true
      },
      string: [
        // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
        {
          pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
          lookbehind: true,
          greedy: true,
          inside: insideString
        },
        // Here-document with quotes around the tag
        // → No expansion (so no “inside”).
        {
          pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
          lookbehind: true,
          greedy: true,
          inside: {
            bash: commandAfterHeredoc
          }
        },
        // “Normal” string
        {
          // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
          pattern:
            /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
          lookbehind: true,
          greedy: true,
          inside: insideString
        },
        {
          // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
          pattern: /(^|[^$\\])'[^']*'/,
          lookbehind: true,
          greedy: true
        },
        {
          // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
          pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
          greedy: true,
          inside: {
            entity: insideString.entity
          }
        }
      ],
      environment: {
        pattern: RegExp('\\$?' + envVars),
        alias: 'constant'
      },
      variable: insideString.variable,
      function: {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
        lookbehind: true
      },
      keyword: {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
        lookbehind: true
      },
      // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
      builtin: {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
        lookbehind: true,
        // Alias added to make those easier to distinguish from strings.
        alias: 'class-name'
      },
      boolean: {
        pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
        lookbehind: true
      },
      'file-descriptor': {
        pattern: /\B&\d\b/,
        alias: 'important'
      },
      operator: {
        // Lots of redirections here, but not just that.
        pattern:
          /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
        inside: {
          'file-descriptor': {
            pattern: /^\d/,
            alias: 'important'
          }
        }
      },
      punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
      number: {
        pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
        lookbehind: true
      }
    }
    commandAfterHeredoc.inside = Prism.languages.bash

    /* Patterns in command substitution. */
    var toBeCopied = [
      'comment',
      'function-name',
      'for-or-select',
      'assign-left',
      'parameter',
      'string',
      'environment',
      'function',
      'keyword',
      'builtin',
      'boolean',
      'file-descriptor',
      'operator',
      'punctuation',
      'number'
    ]
    var inside = insideString.variable[1].inside
    for (var i = 0; i < toBeCopied.length; i++) {
      inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]]
    }
    Prism.languages.sh = Prism.languages.bash
    Prism.languages.shell = Prism.languages.bash
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/basic.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/basic.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ basic)
/* harmony export */ });
// @ts-nocheck
basic.displayName = 'basic'
basic.aliases = []

/** @type {import('../core.js').Syntax} */
function basic(Prism) {
  Prism.languages.basic = {
    comment: {
      pattern: /(?:!|REM\b).+/i,
      inside: {
        keyword: /^REM/i
      }
    },
    string: {
      pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^\w +\-.])*"/,
      greedy: true
    },
    number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,
    keyword:
      /\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SELECT CASE|SHARED|SHELL|SINGLE|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,
    function:
      /\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,
    operator: /<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,
    punctuation: /[,;:()]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/c.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/c.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck

c.displayName = 'c'
c.aliases = []

/** @type {import('../core.js').Syntax} */
function c(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.c = Prism.languages.extend('clike', {
    comment: {
      pattern:
        /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: true
    },
    string: {
      // https://en.cppreference.com/w/c/language/string_literal
      pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
      greedy: true
    },
    'class-name': {
      pattern:
        /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
      lookbehind: true
    },
    keyword:
      /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    number:
      /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
  })
  Prism.languages.insertBefore('c', 'string', {
    char: {
      // https://en.cppreference.com/w/c/language/character_constant
      pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
      greedy: true
    }
  })
  Prism.languages.insertBefore('c', 'string', {
    macro: {
      // allow for multiline macro definitions
      // spaces after the # character compile fine with gcc
      pattern:
        /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
      lookbehind: true,
      greedy: true,
      alias: 'property',
      inside: {
        string: [
          {
            // highlight the path of the include statement as a string
            pattern: /^(#\s*include\s*)<[^>]+>/,
            lookbehind: true
          },
          Prism.languages.c['string']
        ],
        char: Prism.languages.c['char'],
        comment: Prism.languages.c['comment'],
        'macro-name': [
          {
            pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
            lookbehind: true
          },
          {
            pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
            lookbehind: true,
            alias: 'function'
          }
        ],
        // highlight macro directives as keywords
        directive: {
          pattern: /^(#\s*)[a-z]+/,
          lookbehind: true,
          alias: 'keyword'
        },
        'directive-hash': /^#/,
        punctuation: /##|\\(?=[\r\n])/,
        expression: {
          pattern: /\S[\s\S]*/,
          inside: Prism.languages.c
        }
      }
    }
  })
  Prism.languages.insertBefore('c', 'function', {
    // highlight predefined macros as constants
    constant:
      /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
  })
  delete Prism.languages.c['boolean']
}


/***/ }),

/***/ "./node_modules/refractor/lang/clike.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/clike.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clike)
/* harmony export */ });
// @ts-nocheck
clike.displayName = 'clike'
clike.aliases = []

/** @type {import('../core.js').Syntax} */
function clike(Prism) {
  Prism.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true,
        greedy: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'class-name': {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: true,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword:
      /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/cpp.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/cpp.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cpp)
/* harmony export */ });
/* harmony import */ var _c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c.js */ "./node_modules/refractor/lang/c.js");
// @ts-nocheck

cpp.displayName = 'cpp'
cpp.aliases = []

/** @type {import('../core.js').Syntax} */
function cpp(Prism) {
  Prism.register(_c_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    var keyword =
      /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/
    var modName = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(
      /<keyword>/g,
      function () {
        return keyword.source
      }
    )
    Prism.languages.cpp = Prism.languages.extend('c', {
      'class-name': [
        {
          pattern: RegExp(
            /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
              /<keyword>/g,
              function () {
                return keyword.source
              }
            )
          ),
          lookbehind: true
        },
        // This is intended to capture the class name of method implementations like:
        //   void foo::bar() const {}
        // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
        // it starts with an uppercase letter. This approximation should give decent results.
        /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
        // This will capture the class name before destructors like:
        //   Foo::~Foo() {}
        /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
        // This also intends to capture the class name of method implementations but here the class has template
        // parameters, so it can't be a namespace (until C++ adds generic namespaces).
        /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
      ],
      keyword: keyword,
      number: {
        pattern:
          /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
        greedy: true
      },
      operator:
        />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
      boolean: /\b(?:false|true)\b/
    })
    Prism.languages.insertBefore('cpp', 'string', {
      module: {
        // https://en.cppreference.com/w/cpp/language/modules
        pattern: RegExp(
          /(\b(?:import|module)\s+)/.source +
            '(?:' +
            // header-name
            /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source +
            '|' +
            // module name or partition or both
            /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(
              /<mod-name>/g,
              function () {
                return modName
              }
            ) +
            ')'
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          string: /^[<"][\s\S]+/,
          operator: /:/,
          punctuation: /\./
        }
      },
      'raw-string': {
        pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
        alias: 'string',
        greedy: true
      }
    })
    Prism.languages.insertBefore('cpp', 'keyword', {
      'generic-function': {
        pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
        inside: {
          function: /^\w+/,
          generic: {
            pattern: /<[\s\S]+/,
            alias: 'class-name',
            inside: Prism.languages.cpp
          }
        }
      }
    })
    Prism.languages.insertBefore('cpp', 'operator', {
      'double-colon': {
        pattern: /::/,
        alias: 'punctuation'
      }
    })
    Prism.languages.insertBefore('cpp', 'class-name', {
      // the base clause is an optional list of parent classes
      // https://en.cppreference.com/w/cpp/language/class
      'base-clause': {
        pattern:
          /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
        lookbehind: true,
        greedy: true,
        inside: Prism.languages.extend('cpp', {})
      }
    })
    Prism.languages.insertBefore(
      'inside',
      'double-colon',
      {
        // All untokenized words that are not namespaces should be class names
        'class-name': /\b[a-z_]\w*\b(?!\s*::)/i
      },
      Prism.languages.cpp['base-clause']
    )
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/csharp.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/csharp.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ csharp)
/* harmony export */ });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck

csharp.displayName = 'csharp'
csharp.aliases = ['cs', 'dotnet']

/** @type {import('../core.js').Syntax} */
function csharp(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    /**
     * Replaces all placeholders "<<n>>" of given pattern with the n-th replacement (zero based).
     *
     * Note: This is a simple text based replacement. Be careful when using backreferences!
     *
     * @param {string} pattern the given pattern.
     * @param {string[]} replacements a list of replacement which can be inserted into the given pattern.
     * @returns {string} the pattern with all placeholders replaced with their corresponding replacements.
     * @example replace(/a<<0>>a/.source, [/b+/.source]) === /a(?:b+)a/.source
     */
    function replace(pattern, replacements) {
      return pattern.replace(/<<(\d+)>>/g, function (m, index) {
        return '(?:' + replacements[+index] + ')'
      })
    }
    /**
     * @param {string} pattern
     * @param {string[]} replacements
     * @param {string} [flags]
     * @returns {RegExp}
     */
    function re(pattern, replacements, flags) {
      return RegExp(replace(pattern, replacements), flags || '')
    }

    /**
     * Creates a nested pattern where all occurrences of the string `<<self>>` are replaced with the pattern itself.
     *
     * @param {string} pattern
     * @param {number} depthLog2
     * @returns {string}
     */
    function nested(pattern, depthLog2) {
      for (var i = 0; i < depthLog2; i++) {
        pattern = pattern.replace(/<<self>>/g, function () {
          return '(?:' + pattern + ')'
        })
      }
      return pattern.replace(/<<self>>/g, '[^\\s\\S]')
    }

    // https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/
    var keywordKinds = {
      // keywords which represent a return or variable type
      type: 'bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void',
      // keywords which are used to declare a type
      typeDeclaration: 'class enum interface record struct',
      // contextual keywords
      // ("var" and "dynamic" are missing because they are used like types)
      contextual:
        'add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)',
      // all other keywords
      other:
        'abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield'
    }

    // keywords
    function keywordsToPattern(words) {
      return '\\b(?:' + words.trim().replace(/ /g, '|') + ')\\b'
    }
    var typeDeclarationKeywords = keywordsToPattern(
      keywordKinds.typeDeclaration
    )
    var keywords = RegExp(
      keywordsToPattern(
        keywordKinds.type +
          ' ' +
          keywordKinds.typeDeclaration +
          ' ' +
          keywordKinds.contextual +
          ' ' +
          keywordKinds.other
      )
    )
    var nonTypeKeywords = keywordsToPattern(
      keywordKinds.typeDeclaration +
        ' ' +
        keywordKinds.contextual +
        ' ' +
        keywordKinds.other
    )
    var nonContextualKeywords = keywordsToPattern(
      keywordKinds.type +
        ' ' +
        keywordKinds.typeDeclaration +
        ' ' +
        keywordKinds.other
    )

    // types
    var generic = nested(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2) // the idea behind the other forbidden characters is to prevent false positives. Same for tupleElement.
    var nestedRound = nested(/\((?:[^()]|<<self>>)*\)/.source, 2)
    var name = /@?\b[A-Za-z_]\w*\b/.source
    var genericName = replace(/<<0>>(?:\s*<<1>>)?/.source, [name, generic])
    var identifier = replace(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [
      nonTypeKeywords,
      genericName
    ])
    var array = /\[\s*(?:,\s*)*\]/.source
    var typeExpressionWithoutTuple = replace(
      /<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,
      [identifier, array]
    )
    var tupleElement = replace(
      /[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,
      [generic, nestedRound, array]
    )
    var tuple = replace(/\(<<0>>+(?:,<<0>>+)+\)/.source, [tupleElement])
    var typeExpression = replace(
      /(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,
      [tuple, identifier, array]
    )
    var typeInside = {
      keyword: keywords,
      punctuation: /[<>()?,.:[\]]/
    }

    // strings & characters
    // https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#character-literals
    // https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#string-literals
    var character = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source // simplified pattern
    var regularString = /"(?:\\.|[^\\"\r\n])*"/.source
    var verbatimString = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source
    Prism.languages.csharp = Prism.languages.extend('clike', {
      string: [
        {
          pattern: re(/(^|[^$\\])<<0>>/.source, [verbatimString]),
          lookbehind: true,
          greedy: true
        },
        {
          pattern: re(/(^|[^@$\\])<<0>>/.source, [regularString]),
          lookbehind: true,
          greedy: true
        }
      ],
      'class-name': [
        {
          // Using static
          // using static System.Math;
          pattern: re(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [
            identifier
          ]),
          lookbehind: true,
          inside: typeInside
        },
        {
          // Using alias (type)
          // using Project = PC.MyCompany.Project;
          pattern: re(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [
            name,
            typeExpression
          ]),
          lookbehind: true,
          inside: typeInside
        },
        {
          // Using alias (alias)
          // using Project = PC.MyCompany.Project;
          pattern: re(/(\busing\s+)<<0>>(?=\s*=)/.source, [name]),
          lookbehind: true
        },
        {
          // Type declarations
          // class Foo<A, B>
          // interface Foo<out A, B>
          pattern: re(/(\b<<0>>\s+)<<1>>/.source, [
            typeDeclarationKeywords,
            genericName
          ]),
          lookbehind: true,
          inside: typeInside
        },
        {
          // Single catch exception declaration
          // catch(Foo)
          // (things like catch(Foo e) is covered by variable declaration)
          pattern: re(/(\bcatch\s*\(\s*)<<0>>/.source, [identifier]),
          lookbehind: true,
          inside: typeInside
        },
        {
          // Name of the type parameter of generic constraints
          // where Foo : class
          pattern: re(/(\bwhere\s+)<<0>>/.source, [name]),
          lookbehind: true
        },
        {
          // Casts and checks via as and is.
          // as Foo<A>, is Bar<B>
          // (things like if(a is Foo b) is covered by variable declaration)
          pattern: re(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [
            typeExpressionWithoutTuple
          ]),
          lookbehind: true,
          inside: typeInside
        },
        {
          // Variable, field and parameter declaration
          // (Foo bar, Bar baz, Foo[,,] bay, Foo<Bar, FooBar<Bar>> bax)
          pattern: re(
            /\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/
              .source,
            [typeExpression, nonContextualKeywords, name]
          ),
          inside: typeInside
        }
      ],
      keyword: keywords,
      // https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#literals
      number:
        /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
      operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
      punctuation: /\?\.?|::|[{}[\];(),.:]/
    })
    Prism.languages.insertBefore('csharp', 'number', {
      range: {
        pattern: /\.\./,
        alias: 'operator'
      }
    })
    Prism.languages.insertBefore('csharp', 'punctuation', {
      'named-parameter': {
        pattern: re(/([(,]\s*)<<0>>(?=\s*:)/.source, [name]),
        lookbehind: true,
        alias: 'punctuation'
      }
    })
    Prism.languages.insertBefore('csharp', 'class-name', {
      namespace: {
        // namespace Foo.Bar {}
        // using Foo.Bar;
        pattern: re(
          /(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,
          [name]
        ),
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      },
      'type-expression': {
        // default(Foo), typeof(Foo<Bar>), sizeof(int)
        pattern: re(
          /(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/
            .source,
          [nestedRound]
        ),
        lookbehind: true,
        alias: 'class-name',
        inside: typeInside
      },
      'return-type': {
        // Foo<Bar> ForBar(); Foo IFoo.Bar() => 0
        // int this[int index] => 0; T IReadOnlyList<T>.this[int index] => this[index];
        // int Foo => 0; int Foo { get; set } = 0;
        pattern: re(
          /<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,
          [typeExpression, identifier]
        ),
        inside: typeInside,
        alias: 'class-name'
      },
      'constructor-invocation': {
        // new List<Foo<Bar[]>> { }
        pattern: re(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [typeExpression]),
        lookbehind: true,
        inside: typeInside,
        alias: 'class-name'
      },
      /*'explicit-implementation': {
// int IFoo<Foo>.Bar => 0; void IFoo<Foo<Foo>>.Foo<T>();
pattern: replace(/\b<<0>>(?=\.<<1>>)/, className, methodOrPropertyDeclaration),
inside: classNameInside,
alias: 'class-name'
},*/
      'generic-method': {
        // foo<Bar>()
        pattern: re(/<<0>>\s*<<1>>(?=\s*\()/.source, [name, generic]),
        inside: {
          function: re(/^<<0>>/.source, [name]),
          generic: {
            pattern: RegExp(generic),
            alias: 'class-name',
            inside: typeInside
          }
        }
      },
      'type-list': {
        // The list of types inherited or of generic constraints
        // class Foo<F> : Bar, IList<FooBar>
        // where F : Bar, IList<int>
        pattern: re(
          /\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/
            .source,
          [
            typeDeclarationKeywords,
            genericName,
            name,
            typeExpression,
            keywords.source,
            nestedRound,
            /\bnew\s*\(\s*\)/.source
          ]
        ),
        lookbehind: true,
        inside: {
          'record-arguments': {
            pattern: re(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [
              genericName,
              nestedRound
            ]),
            lookbehind: true,
            greedy: true,
            inside: Prism.languages.csharp
          },
          keyword: keywords,
          'class-name': {
            pattern: RegExp(typeExpression),
            greedy: true,
            inside: typeInside
          },
          punctuation: /[,()]/
        }
      },
      preprocessor: {
        pattern: /(^[\t ]*)#.*/m,
        lookbehind: true,
        alias: 'property',
        inside: {
          // highlight preprocessor directives as keywords
          directive: {
            pattern:
              /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
            lookbehind: true,
            alias: 'keyword'
          }
        }
      }
    })

    // attributes
    var regularStringOrCharacter = regularString + '|' + character
    var regularStringCharacterOrComment = replace(
      /\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,
      [regularStringOrCharacter]
    )
    var roundExpression = nested(
      replace(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [
        regularStringCharacterOrComment
      ]),
      2
    )

    // https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/#attribute-targets
    var attrTarget =
      /\b(?:assembly|event|field|method|module|param|property|return|type)\b/
        .source
    var attr = replace(/<<0>>(?:\s*\(<<1>>*\))?/.source, [
      identifier,
      roundExpression
    ])
    Prism.languages.insertBefore('csharp', 'class-name', {
      attribute: {
        // Attributes
        // [Foo], [Foo(1), Bar(2, Prop = "foo")], [return: Foo(1), Bar(2)], [assembly: Foo(Bar)]
        pattern: re(
          /((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/
            .source,
          [attrTarget, attr]
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          target: {
            pattern: re(/^<<0>>(?=\s*:)/.source, [attrTarget]),
            alias: 'keyword'
          },
          'attribute-arguments': {
            pattern: re(/\(<<0>>*\)/.source, [roundExpression]),
            inside: Prism.languages.csharp
          },
          'class-name': {
            pattern: RegExp(identifier),
            inside: {
              punctuation: /\./
            }
          },
          punctuation: /[:,]/
        }
      }
    })

    // string interpolation
    var formatString = /:[^}\r\n]+/.source
    // multi line
    var mInterpolationRound = nested(
      replace(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [
        regularStringCharacterOrComment
      ]),
      2
    )
    var mInterpolation = replace(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [
      mInterpolationRound,
      formatString
    ])
    // single line
    var sInterpolationRound = nested(
      replace(
        /[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/
          .source,
        [regularStringOrCharacter]
      ),
      2
    )
    var sInterpolation = replace(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [
      sInterpolationRound,
      formatString
    ])
    function createInterpolationInside(interpolation, interpolationRound) {
      return {
        interpolation: {
          pattern: re(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [interpolation]),
          lookbehind: true,
          inside: {
            'format-string': {
              pattern: re(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [
                interpolationRound,
                formatString
              ]),
              lookbehind: true,
              inside: {
                punctuation: /^:/
              }
            },
            punctuation: /^\{|\}$/,
            expression: {
              pattern: /[\s\S]+/,
              alias: 'language-csharp',
              inside: Prism.languages.csharp
            }
          }
        },
        string: /[\s\S]+/
      }
    }
    Prism.languages.insertBefore('csharp', 'string', {
      'interpolation-string': [
        {
          pattern: re(
            /(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,
            [mInterpolation]
          ),
          lookbehind: true,
          greedy: true,
          inside: createInterpolationInside(mInterpolation, mInterpolationRound)
        },
        {
          pattern: re(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [
            sInterpolation
          ]),
          lookbehind: true,
          greedy: true,
          inside: createInterpolationInside(sInterpolation, sInterpolationRound)
        }
      ],
      char: {
        pattern: RegExp(character),
        greedy: true
      }
    })
    Prism.languages.dotnet = Prism.languages.cs = Prism.languages.csharp
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/css.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/css.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ css)
/* harmony export */ });
// @ts-nocheck
css.displayName = 'css'
css.aliases = []

/** @type {import('../core.js').Syntax} */
function css(Prism) {
  ;(function (Prism) {
    var string =
      /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/
    Prism.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp(
          '@[\\w-](?:' +
            /[^;{\s"']|\s+(?!\s)/.source +
            '|' +
            string.source +
            ')*?' +
            /(?:;|(?=\s*\{))/.source
        ),
        inside: {
          rule: /^@[\w-]+/,
          'selector-function-argument': {
            pattern:
              /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: true,
            alias: 'selector'
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: true
          }
          // See rest below
        }
      },

      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp(
          '\\burl\\((?:' +
            string.source +
            '|' +
            /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
            ')\\)',
          'i'
        ),
        greedy: true,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp('^' + string.source + '$'),
            alias: 'url'
          }
        }
      },
      selector: {
        pattern: RegExp(
          '(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' +
            string.source +
            ')*(?=\\s*\\{)'
        ),
        lookbehind: true
      },
      string: {
        pattern: string,
        greedy: true
      },
      property: {
        pattern:
          /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: true
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: true
      },
      punctuation: /[(){};:,]/
    }
    Prism.languages.css['atrule'].inside.rest = Prism.languages.css
    var markup = Prism.languages.markup
    if (markup) {
      markup.tag.addInlined('style', 'css')
      markup.tag.addAttribute('style', 'css')
    }
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/diff.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/diff.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ diff)
/* harmony export */ });
// @ts-nocheck
diff.displayName = 'diff'
diff.aliases = []

/** @type {import('../core.js').Syntax} */
function diff(Prism) {
  ;(function (Prism) {
    Prism.languages.diff = {
      coord: [
        // Match all kinds of coord lines (prefixed by "+++", "---" or "***").
        /^(?:\*{3}|-{3}|\+{3}).*$/m,
        // Match "@@ ... @@" coord lines in unified diff.
        /^@@.*@@$/m,
        // Match coord lines in normal diff (starts with a number).
        /^\d.*$/m
      ]

      // deleted, inserted, unchanged, diff
    }

    /**
     * A map from the name of a block to its line prefix.
     *
     * @type {Object<string, string>}
     */
    var PREFIXES = {
      'deleted-sign': '-',
      'deleted-arrow': '<',
      'inserted-sign': '+',
      'inserted-arrow': '>',
      unchanged: ' ',
      diff: '!'
    }

    // add a token for each prefix
    Object.keys(PREFIXES).forEach(function (name) {
      var prefix = PREFIXES[name]
      var alias = []
      if (!/^\w+$/.test(name)) {
        // "deleted-sign" -> "deleted"
        alias.push(/\w+/.exec(name)[0])
      }
      if (name === 'diff') {
        alias.push('bold')
      }
      Prism.languages.diff[name] = {
        pattern: RegExp(
          '^(?:[' + prefix + '].*(?:\r\n?|\n|(?![\\s\\S])))+',
          'm'
        ),
        alias: alias,
        inside: {
          line: {
            pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
            lookbehind: true
          },
          prefix: {
            pattern: /[\s\S]/,
            alias: /\w+/.exec(name)[0]
          }
        }
      }
    })

    // make prefixes available to Diff plugin
    Object.defineProperty(Prism.languages.diff, 'PREFIXES', {
      value: PREFIXES
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/go.js":
/*!*******************************************!*\
  !*** ./node_modules/refractor/lang/go.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ go)
/* harmony export */ });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck

go.displayName = 'go'
go.aliases = []

/** @type {import('../core.js').Syntax} */
function go(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.go = Prism.languages.extend('clike', {
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
      lookbehind: true,
      greedy: true
    },
    keyword:
      /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
    boolean: /\b(?:_|false|iota|nil|true)\b/,
    number: [
      // binary and octal integers
      /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
      // hexadecimal integers and floats
      /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
      // decimal integers and floats
      /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i
    ],
    operator:
      /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
    builtin:
      /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
  })
  Prism.languages.insertBefore('go', 'string', {
    char: {
      pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
      greedy: true
    }
  })
  delete Prism.languages.go['class-name']
}


/***/ }),

/***/ "./node_modules/refractor/lang/ini.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/ini.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ini)
/* harmony export */ });
// @ts-nocheck
ini.displayName = 'ini'
ini.aliases = []

/** @type {import('../core.js').Syntax} */
function ini(Prism) {
  Prism.languages.ini = {
    /**
     * The component mimics the behavior of the Win32 API parser.
     *
     * @see {@link https://github.com/PrismJS/prism/issues/2775#issuecomment-787477723}
     */

    comment: {
      pattern: /(^[ \f\t\v]*)[#;][^\n\r]*/m,
      lookbehind: true
    },
    section: {
      pattern: /(^[ \f\t\v]*)\[[^\n\r\]]*\]?/m,
      lookbehind: true,
      inside: {
        'section-name': {
          pattern: /(^\[[ \f\t\v]*)[^ \f\t\v\]]+(?:[ \f\t\v]+[^ \f\t\v\]]+)*/,
          lookbehind: true,
          alias: 'selector'
        },
        punctuation: /\[|\]/
      }
    },
    key: {
      pattern:
        /(^[ \f\t\v]*)[^ \f\n\r\t\v=]+(?:[ \f\t\v]+[^ \f\n\r\t\v=]+)*(?=[ \f\t\v]*=)/m,
      lookbehind: true,
      alias: 'attr-name'
    },
    value: {
      pattern: /(=[ \f\t\v]*)[^ \f\n\r\t\v]+(?:[ \f\t\v]+[^ \f\n\r\t\v]+)*/,
      lookbehind: true,
      alias: 'attr-value',
      inside: {
        'inner-value': {
          pattern: /^("|').+(?=\1$)/,
          lookbehind: true
        }
      }
    },
    punctuation: /=/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/java.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/java.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ java)
/* harmony export */ });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck

java.displayName = 'java'
java.aliases = []

/** @type {import('../core.js').Syntax} */
function java(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    var keywords =
      /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/

    // full package (optional) + parent classes (optional)
    var classNamePrefix = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source

    // based on the java naming conventions
    var className = {
      pattern: RegExp(
        /(^|[^\w.])/.source +
          classNamePrefix +
          /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source
      ),
      lookbehind: true,
      inside: {
        namespace: {
          pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
          inside: {
            punctuation: /\./
          }
        },
        punctuation: /\./
      }
    }
    Prism.languages.java = Prism.languages.extend('clike', {
      string: {
        pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
        lookbehind: true,
        greedy: true
      },
      'class-name': [
        className,
        {
          // variables, parameters, and constructor references
          // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
          pattern: RegExp(
            /(^|[^\w.])/.source +
              classNamePrefix +
              /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/
                .source
          ),
          lookbehind: true,
          inside: className.inside
        },
        {
          // class names based on keyword
          // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
          pattern: RegExp(
            /(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/
              .source +
              classNamePrefix +
              /[A-Z]\w*\b/.source
          ),
          lookbehind: true,
          inside: className.inside
        }
      ],
      keyword: keywords,
      function: [
        Prism.languages.clike.function,
        {
          pattern: /(::\s*)[a-z_]\w*/,
          lookbehind: true
        }
      ],
      number:
        /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
      operator: {
        pattern:
          /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
        lookbehind: true
      },
      constant: /\b[A-Z][A-Z_\d]+\b/
    })
    Prism.languages.insertBefore('java', 'string', {
      'triple-quoted-string': {
        // http://openjdk.java.net/jeps/355#Description
        pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
        greedy: true,
        alias: 'string'
      },
      char: {
        pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
        greedy: true
      }
    })
    Prism.languages.insertBefore('java', 'class-name', {
      annotation: {
        pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
        lookbehind: true,
        alias: 'punctuation'
      },
      generics: {
        pattern:
          /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
        inside: {
          'class-name': className,
          keyword: keywords,
          punctuation: /[<>(),.:]/,
          operator: /[?&|]/
        }
      },
      import: [
        {
          pattern: RegExp(
            /(\bimport\s+)/.source +
              classNamePrefix +
              /(?:[A-Z]\w*|\*)(?=\s*;)/.source
          ),
          lookbehind: true,
          inside: {
            namespace: className.inside.namespace,
            punctuation: /\./,
            operator: /\*/,
            'class-name': /\w+/
          }
        },
        {
          pattern: RegExp(
            /(\bimport\s+static\s+)/.source +
              classNamePrefix +
              /(?:\w+|\*)(?=\s*;)/.source
          ),
          lookbehind: true,
          alias: 'static',
          inside: {
            namespace: className.inside.namespace,
            static: /\b\w+$/,
            punctuation: /\./,
            operator: /\*/,
            'class-name': /\w+/
          }
        }
      ],
      namespace: {
        pattern: RegExp(
          /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(
            /<keyword>/g,
            function () {
              return keywords.source
            }
          )
        ),
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      }
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/javascript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/javascript.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ javascript)
/* harmony export */ });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck

javascript.displayName = 'javascript'
javascript.aliases = ['js']

/** @type {import('../core.js').Syntax} */
function javascript(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.javascript = Prism.languages.extend('clike', {
    'class-name': [
      Prism.languages.clike['class-name'],
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: true
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: true
      },
      {
        pattern:
          /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function:
      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source +
          '(?:' +
          // constant
          (/NaN|Infinity/.source +
            '|' +
            // binary integer
            /0[bB][01]+(?:_[01]+)*n?/.source +
            '|' +
            // octal integer
            /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
            '|' +
            // hexadecimal integer
            /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
            '|' +
            // decimal bigint
            /\d+(?:_\d+)*n/.source +
            '|' +
            // decimal number (integer or float) but no bigint
            /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
              .source) +
          ')' +
          /(?![\w$])/.source
      ),
      lookbehind: true
    },
    operator:
      /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  })
  Prism.languages.javascript['class-name'][0].pattern =
    /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/
  Prism.languages.insertBefore('javascript', 'keyword', {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
          // Regex pattern:
          // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
          // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
          // with the only syntax, so we have to define 2 different regex patterns.
          /\//.source +
          '(?:' +
          /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/
            .source +
          '|' +
          // `v` flag syntax. This supports 3 levels of nested character classes.
          /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/
            .source +
          ')' +
          // lookahead
          /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/
            .source
      ),
      lookbehind: true,
      greedy: true,
      inside: {
        'regex-source': {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: true,
          alias: 'language-regex',
          inside: Prism.languages.regex
        },
        'regex-delimiter': /^\/|\/$/,
        'regex-flags': /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    'function-variable': {
      pattern:
        /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: 'function'
    },
    parameter: [
      {
        pattern:
          /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      {
        pattern:
          /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      {
        pattern:
          /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  })
  Prism.languages.insertBefore('javascript', 'string', {
    hashbang: {
      pattern: /^#!.*/,
      greedy: true,
      alias: 'comment'
    },
    'template-string': {
      pattern:
        /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: true,
      inside: {
        'template-punctuation': {
          pattern: /^`|`$/,
          alias: 'string'
        },
        interpolation: {
          pattern:
            /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: true,
          inside: {
            'interpolation-punctuation': {
              pattern: /^\$\{|\}$/,
              alias: 'punctuation'
            },
            rest: Prism.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    'string-property': {
      pattern:
        /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: true,
      greedy: true,
      alias: 'property'
    }
  })
  Prism.languages.insertBefore('javascript', 'operator', {
    'literal-property': {
      pattern:
        /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: true,
      alias: 'property'
    }
  })
  if (Prism.languages.markup) {
    Prism.languages.markup.tag.addInlined('script', 'javascript')

    // add attribute support for all DOM events.
    // https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
    Prism.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
        .source,
      'javascript'
    )
  }
  Prism.languages.js = Prism.languages.javascript
}


/***/ }),

/***/ "./node_modules/refractor/lang/json.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/json.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ json)
/* harmony export */ });
// @ts-nocheck
json.displayName = 'json'
json.aliases = ['webmanifest']

/** @type {import('../core.js').Syntax} */
function json(Prism) {
  // https://www.json.org/json-en.html
  Prism.languages.json = {
    property: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
      lookbehind: true,
      greedy: true
    },
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      lookbehind: true,
      greedy: true
    },
    comment: {
      pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: true
    },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: {
      pattern: /\bnull\b/,
      alias: 'keyword'
    }
  }
  Prism.languages.webmanifest = Prism.languages.json
}


/***/ }),

/***/ "./node_modules/refractor/lang/kotlin.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/kotlin.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ kotlin)
/* harmony export */ });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck

kotlin.displayName = 'kotlin'
kotlin.aliases = ['kt', 'kts']

/** @type {import('../core.js').Syntax} */
function kotlin(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    Prism.languages.kotlin = Prism.languages.extend('clike', {
      keyword: {
        // The lookbehind prevents wrong highlighting of e.g. kotlin.properties.get
        pattern:
          /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
        lookbehind: true
      },
      function: [
        {
          pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,
          greedy: true
        },
        {
          pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,
          lookbehind: true,
          greedy: true
        }
      ],
      number:
        /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
      operator:
        /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
    })
    delete Prism.languages.kotlin['class-name']
    var interpolationInside = {
      'interpolation-punctuation': {
        pattern: /^\$\{?|\}$/,
        alias: 'punctuation'
      },
      expression: {
        pattern: /[\s\S]+/,
        inside: Prism.languages.kotlin
      }
    }
    Prism.languages.insertBefore('kotlin', 'string', {
      // https://kotlinlang.org/spec/expressions.html#string-interpolation-expressions
      'string-literal': [
        {
          pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
          alias: 'multiline',
          inside: {
            interpolation: {
              pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i,
              inside: interpolationInside
            },
            string: /[\s\S]+/
          }
        },
        {
          pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,
          alias: 'singleline',
          inside: {
            interpolation: {
              pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,
              lookbehind: true,
              inside: interpolationInside
            },
            string: /[\s\S]+/
          }
        }
      ],
      char: {
        // https://kotlinlang.org/spec/expressions.html#character-literals
        pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,
        greedy: true
      }
    })
    delete Prism.languages.kotlin['string']
    Prism.languages.insertBefore('kotlin', 'keyword', {
      annotation: {
        pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
        alias: 'builtin'
      }
    })
    Prism.languages.insertBefore('kotlin', 'function', {
      label: {
        pattern: /\b\w+@|@\w+\b/,
        alias: 'symbol'
      }
    })
    Prism.languages.kt = Prism.languages.kotlin
    Prism.languages.kts = Prism.languages.kotlin
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/less.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/less.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ less)
/* harmony export */ });
/* harmony import */ var _css_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css.js */ "./node_modules/refractor/lang/css.js");
// @ts-nocheck

less.displayName = 'less'
less.aliases = []

/** @type {import('../core.js').Syntax} */
function less(Prism) {
  Prism.register(_css_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  /* FIXME :
:extend() is not handled specifically : its highlighting is buggy.
Mixin usage must be inside a ruleset to be highlighted.
At-rules (e.g. import) containing interpolations are buggy.
Detached rulesets are highlighted as at-rules.
A comment before a mixin usage prevents the latter to be properly highlighted.
*/

  Prism.languages.less = Prism.languages.extend('css', {
    comment: [
      /\/\*[\s\S]*?\*\//,
      {
        pattern: /(^|[^\\])\/\/.*/,
        lookbehind: true
      }
    ],
    atrule: {
      pattern:
        /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
      inside: {
        punctuation: /[:()]/
      }
    },
    // selectors and mixins are considered the same
    selector: {
      pattern:
        /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
      inside: {
        // mixin parameters
        variable: /@+[\w-]+/
      }
    },
    property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
    operator: /[+\-*\/]/
  })
  Prism.languages.insertBefore('less', 'property', {
    variable: [
      // Variable declaration (the colon must be consumed!)
      {
        pattern: /@[\w-]+\s*:/,
        inside: {
          punctuation: /:/
        }
      },
      // Variable usage
      /@@?[\w-]+/
    ],
    'mixin-usage': {
      pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
      lookbehind: true,
      alias: 'function'
    }
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/lua.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/lua.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ lua)
/* harmony export */ });
// @ts-nocheck
lua.displayName = 'lua'
lua.aliases = []

/** @type {import('../core.js').Syntax} */
function lua(Prism) {
  Prism.languages.lua = {
    comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
    // \z may be used to skip the following space
    string: {
      pattern:
        /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
      greedy: true
    },
    number:
      /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
    keyword:
      /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
    function: /(?!\d)\w+(?=\s*(?:[({]))/,
    operator: [
      /[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
      {
        // Match ".." but don't break "..."
        pattern: /(^|[^.])\.\.(?!\.)/,
        lookbehind: true
      }
    ],
    punctuation: /[\[\](){},;]|\.+|:+/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/makefile.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/makefile.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ makefile)
/* harmony export */ });
// @ts-nocheck
makefile.displayName = 'makefile'
makefile.aliases = []

/** @type {import('../core.js').Syntax} */
function makefile(Prism) {
  Prism.languages.makefile = {
    comment: {
      pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
      lookbehind: true
    },
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'builtin-target': {
      pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
      alias: 'builtin'
    },
    target: {
      pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
      alias: 'symbol',
      inside: {
        variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
      }
    },
    variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
    // Directives
    keyword:
      /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
    function: {
      pattern:
        /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
      lookbehind: true
    },
    operator: /(?:::|[?:+!])?=|[|@]/,
    punctuation: /[:;(){}]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/markdown.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/markdown.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ markdown)
/* harmony export */ });
/* harmony import */ var _markup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup.js */ "./node_modules/refractor/lang/markup.js");
// @ts-nocheck

markdown.displayName = 'markdown'
markdown.aliases = ['md']

/** @type {import('../core.js').Syntax} */
function markdown(Prism) {
  Prism.register(_markup_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    // Allow only one line break
    var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source

    /**
     * This function is intended for the creation of the bold or italic pattern.
     *
     * This also adds a lookbehind group to the given pattern to ensure that the pattern is not backslash-escaped.
     *
     * _Note:_ Keep in mind that this adds a capturing group.
     *
     * @param {string} pattern
     * @returns {RegExp}
     */
    function createInline(pattern) {
      pattern = pattern.replace(/<inner>/g, function () {
        return inner
      })
      return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + pattern + ')')
    }
    var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
      .source
    var tableRow =
      /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
        /__/g,
        function () {
          return tableCell
        }
      )
    var tableLine =
      /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
        .source
    Prism.languages.markdown = Prism.languages.extend('markup', {})
    Prism.languages.insertBefore('markdown', 'prolog', {
      'front-matter-block': {
        pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
        lookbehind: true,
        greedy: true,
        inside: {
          punctuation: /^---|---$/,
          'front-matter': {
            pattern: /\S+(?:\s+\S+)*/,
            alias: ['yaml', 'language-yaml'],
            inside: Prism.languages.yaml
          }
        }
      },
      blockquote: {
        // > ...
        pattern: /^>(?:[\t ]*>)*/m,
        alias: 'punctuation'
      },
      table: {
        pattern: RegExp(
          '^' + tableRow + tableLine + '(?:' + tableRow + ')*',
          'm'
        ),
        inside: {
          'table-data-rows': {
            pattern: RegExp(
              '^(' + tableRow + tableLine + ')(?:' + tableRow + ')*$'
            ),
            lookbehind: true,
            inside: {
              'table-data': {
                pattern: RegExp(tableCell),
                inside: Prism.languages.markdown
              },
              punctuation: /\|/
            }
          },
          'table-line': {
            pattern: RegExp('^(' + tableRow + ')' + tableLine + '$'),
            lookbehind: true,
            inside: {
              punctuation: /\||:?-{3,}:?/
            }
          },
          'table-header-row': {
            pattern: RegExp('^' + tableRow + '$'),
            inside: {
              'table-header': {
                pattern: RegExp(tableCell),
                alias: 'important',
                inside: Prism.languages.markdown
              },
              punctuation: /\|/
            }
          }
        }
      },
      code: [
        {
          // Prefixed by 4 spaces or 1 tab and preceded by an empty line
          pattern:
            /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
          lookbehind: true,
          alias: 'keyword'
        },
        {
          // ```optional language
          // code block
          // ```
          pattern: /^```[\s\S]*?^```$/m,
          greedy: true,
          inside: {
            'code-block': {
              pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
              lookbehind: true
            },
            'code-language': {
              pattern: /^(```).+/,
              lookbehind: true
            },
            punctuation: /```/
          }
        }
      ],
      title: [
        {
          // title 1
          // =======

          // title 2
          // -------
          pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
          alias: 'important',
          inside: {
            punctuation: /==+$|--+$/
          }
        },
        {
          // # title 1
          // ###### title 6
          pattern: /(^\s*)#.+/m,
          lookbehind: true,
          alias: 'important',
          inside: {
            punctuation: /^#+|#+$/
          }
        }
      ],
      hr: {
        // ***
        // ---
        // * * *
        // -----------
        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
        lookbehind: true,
        alias: 'punctuation'
      },
      list: {
        // * item
        // + item
        // - item
        // 1. item
        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
        lookbehind: true,
        alias: 'punctuation'
      },
      'url-reference': {
        // [id]: http://example.com "Optional title"
        // [id]: http://example.com 'Optional title'
        // [id]: http://example.com (Optional title)
        // [id]: <http://example.com> "Optional title"
        pattern:
          /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
          variable: {
            pattern: /^(!?\[)[^\]]+/,
            lookbehind: true
          },
          string:
            /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
          punctuation: /^[\[\]!:]|[<>]/
        },
        alias: 'url'
      },
      bold: {
        // **strong**
        // __strong__

        // allow one nested instance of italic text using the same delimiter
        pattern: createInline(
          /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
            .source
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          content: {
            pattern: /(^..)[\s\S]+(?=..$)/,
            lookbehind: true,
            inside: {} // see below
          },

          punctuation: /\*\*|__/
        }
      },
      italic: {
        // *em*
        // _em_

        // allow one nested instance of bold text using the same delimiter
        pattern: createInline(
          /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
            .source
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          content: {
            pattern: /(^.)[\s\S]+(?=.$)/,
            lookbehind: true,
            inside: {} // see below
          },

          punctuation: /[*_]/
        }
      },
      strike: {
        // ~~strike through~~
        // ~strike~
        // eslint-disable-next-line regexp/strict
        pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
        lookbehind: true,
        greedy: true,
        inside: {
          content: {
            pattern: /(^~~?)[\s\S]+(?=\1$)/,
            lookbehind: true,
            inside: {} // see below
          },

          punctuation: /~~?/
        }
      },
      'code-snippet': {
        // `code`
        // ``code``
        pattern:
          /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
        lookbehind: true,
        greedy: true,
        alias: ['code', 'keyword']
      },
      url: {
        // [example](http://example.com "Optional title")
        // [example][id]
        // [example] [id]
        pattern: createInline(
          /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
            .source
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          operator: /^!/,
          content: {
            pattern: /(^\[)[^\]]+(?=\])/,
            lookbehind: true,
            inside: {} // see below
          },

          variable: {
            pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
            lookbehind: true
          },
          url: {
            pattern: /(^\]\()[^\s)]+/,
            lookbehind: true
          },
          string: {
            pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
            lookbehind: true
          }
        }
      }
    })
    ;['url', 'bold', 'italic', 'strike'].forEach(function (token) {
      ;['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (
        inside
      ) {
        if (token !== inside) {
          Prism.languages.markdown[token].inside.content.inside[inside] =
            Prism.languages.markdown[inside]
        }
      })
    })
    Prism.hooks.add('after-tokenize', function (env) {
      if (env.language !== 'markdown' && env.language !== 'md') {
        return
      }
      function walkTokens(tokens) {
        if (!tokens || typeof tokens === 'string') {
          return
        }
        for (var i = 0, l = tokens.length; i < l; i++) {
          var token = tokens[i]
          if (token.type !== 'code') {
            walkTokens(token.content)
            continue
          }

          /*
           * Add the correct `language-xxxx` class to this code block. Keep in mind that the `code-language` token
           * is optional. But the grammar is defined so that there is only one case we have to handle:
           *
           * token.content = [
           *     <span class="punctuation">```</span>,
           *     <span class="code-language">xxxx</span>,
           *     '\n', // exactly one new lines (\r or \n or \r\n)
           *     <span class="code-block">...</span>,
           *     '\n', // exactly one new lines again
           *     <span class="punctuation">```</span>
           * ];
           */

          var codeLang = token.content[1]
          var codeBlock = token.content[3]
          if (
            codeLang &&
            codeBlock &&
            codeLang.type === 'code-language' &&
            codeBlock.type === 'code-block' &&
            typeof codeLang.content === 'string'
          ) {
            // this might be a language that Prism does not support

            // do some replacements to support C++, C#, and F#
            var lang = codeLang.content
              .replace(/\b#/g, 'sharp')
              .replace(/\b\+\+/g, 'pp')
            // only use the first word
            lang = (/[a-z][\w-]*/i.exec(lang) || [''])[0].toLowerCase()
            var alias = 'language-' + lang

            // add alias
            if (!codeBlock.alias) {
              codeBlock.alias = [alias]
            } else if (typeof codeBlock.alias === 'string') {
              codeBlock.alias = [codeBlock.alias, alias]
            } else {
              codeBlock.alias.push(alias)
            }
          }
        }
      }
      walkTokens(env.tokens)
    })
    Prism.hooks.add('wrap', function (env) {
      if (env.type !== 'code-block') {
        return
      }
      var codeLang = ''
      for (var i = 0, l = env.classes.length; i < l; i++) {
        var cls = env.classes[i]
        var match = /language-(.+)/.exec(cls)
        if (match) {
          codeLang = match[1]
          break
        }
      }
      var grammar = Prism.languages[codeLang]
      if (!grammar) {
        if (codeLang && codeLang !== 'none' && Prism.plugins.autoloader) {
          var id =
            'md-' +
            new Date().valueOf() +
            '-' +
            Math.floor(Math.random() * 1e16)
          env.attributes['id'] = id
          Prism.plugins.autoloader.loadLanguages(codeLang, function () {
            var ele = document.getElementById(id)
            if (ele) {
              ele.innerHTML = Prism.highlight(
                ele.textContent,
                Prism.languages[codeLang],
                codeLang
              )
            }
          })
        }
      } else {
        env.content = Prism.highlight(env.content.value, grammar, codeLang)
      }
    })
    var tagPattern = RegExp(Prism.languages.markup.tag.pattern.source, 'gi')

    /**
     * A list of known entity names.
     *
     * This will always be incomplete to save space. The current list is the one used by lowdash's unescape function.
     *
     * @see {@link https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/unescape.js#L2}
     */
    var KNOWN_ENTITY_NAMES = {
      amp: '&',
      lt: '<',
      gt: '>',
      quot: '"'
    }

    // IE 11 doesn't support `String.fromCodePoint`
    var fromCodePoint = String.fromCodePoint || String.fromCharCode

    /**
     * Returns the text content of a given HTML source code string.
     *
     * @param {string} html
     * @returns {string}
     */
    function textContent(html) {
      // remove all tags
      var text = html.replace(tagPattern, '')

      // decode known entities
      text = text.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (m, code) {
        code = code.toLowerCase()
        if (code[0] === '#') {
          var value
          if (code[1] === 'x') {
            value = parseInt(code.slice(2), 16)
          } else {
            value = Number(code.slice(1))
          }
          return fromCodePoint(value)
        } else {
          var known = KNOWN_ENTITY_NAMES[code]
          if (known) {
            return known
          }

          // unable to decode
          return m
        }
      })
      return text
    }
    Prism.languages.md = Prism.languages.markdown
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/markup-templating.js":
/*!**********************************************************!*\
  !*** ./node_modules/refractor/lang/markup-templating.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ markupTemplating)
/* harmony export */ });
/* harmony import */ var _markup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup.js */ "./node_modules/refractor/lang/markup.js");
// @ts-nocheck

markupTemplating.displayName = 'markup-templating'
markupTemplating.aliases = []

/** @type {import('../core.js').Syntax} */
function markupTemplating(Prism) {
  Prism.register(_markup_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    /**
     * Returns the placeholder for the given language id and index.
     *
     * @param {string} language
     * @param {string|number} index
     * @returns {string}
     */
    function getPlaceholder(language, index) {
      return '___' + language.toUpperCase() + index + '___'
    }
    Object.defineProperties((Prism.languages['markup-templating'] = {}), {
      buildPlaceholders: {
        /**
         * Tokenize all inline templating expressions matching `placeholderPattern`.
         *
         * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
         * `true` will be replaced.
         *
         * @param {object} env The environment of the `before-tokenize` hook.
         * @param {string} language The language id.
         * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
         * @param {(match: string) => boolean} [replaceFilter]
         */
        value: function (env, language, placeholderPattern, replaceFilter) {
          if (env.language !== language) {
            return
          }
          var tokenStack = (env.tokenStack = [])
          env.code = env.code.replace(placeholderPattern, function (match) {
            if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
              return match
            }
            var i = tokenStack.length
            var placeholder

            // Check for existing strings
            while (
              env.code.indexOf((placeholder = getPlaceholder(language, i))) !==
              -1
            ) {
              ++i
            }

            // Create a sparse array
            tokenStack[i] = match
            return placeholder
          })

          // Switch the grammar to markup
          env.grammar = Prism.languages.markup
        }
      },
      tokenizePlaceholders: {
        /**
         * Replace placeholders with proper tokens after tokenizing.
         *
         * @param {object} env The environment of the `after-tokenize` hook.
         * @param {string} language The language id.
         */
        value: function (env, language) {
          if (env.language !== language || !env.tokenStack) {
            return
          }

          // Switch the grammar back
          env.grammar = Prism.languages[language]
          var j = 0
          var keys = Object.keys(env.tokenStack)
          function walkTokens(tokens) {
            for (var i = 0; i < tokens.length; i++) {
              // all placeholders are replaced already
              if (j >= keys.length) {
                break
              }
              var token = tokens[i]
              if (
                typeof token === 'string' ||
                (token.content && typeof token.content === 'string')
              ) {
                var k = keys[j]
                var t = env.tokenStack[k]
                var s = typeof token === 'string' ? token : token.content
                var placeholder = getPlaceholder(language, k)
                var index = s.indexOf(placeholder)
                if (index > -1) {
                  ++j
                  var before = s.substring(0, index)
                  var middle = new Prism.Token(
                    language,
                    Prism.tokenize(t, env.grammar),
                    'language-' + language,
                    t
                  )
                  var after = s.substring(index + placeholder.length)
                  var replacement = []
                  if (before) {
                    replacement.push.apply(replacement, walkTokens([before]))
                  }
                  replacement.push(middle)
                  if (after) {
                    replacement.push.apply(replacement, walkTokens([after]))
                  }
                  if (typeof token === 'string') {
                    tokens.splice.apply(tokens, [i, 1].concat(replacement))
                  } else {
                    token.content = replacement
                  }
                }
              } else if (
                token.content /* && typeof token.content !== 'string' */
              ) {
                walkTokens(token.content)
              }
            }
            return tokens
          }
          walkTokens(env.tokens)
        }
      }
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/markup.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/markup.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ markup)
/* harmony export */ });
// @ts-nocheck
markup.displayName = 'markup'
markup.aliases = ['atom', 'html', 'mathml', 'rss', 'ssml', 'svg', 'xml']

/** @type {import('../core.js').Syntax} */
function markup(Prism) {
  Prism.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: true
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: true
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern:
        /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: true,
      inside: {
        'internal-subset': {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: true,
          greedy: true,
          inside: null // see below
        },

        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: true
        },
        punctuation: /^<!|>$|[[\]]/,
        'doctype-tag': /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: true
    },
    tag: {
      pattern:
        /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: true,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        'special-attr': [],
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: 'attr-equals'
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: true
              }
            ]
          }
        },
        punctuation: /\/?>/,
        'attr-name': {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: 'named-entity'
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }
  Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
    Prism.languages.markup['entity']
  Prism.languages.markup['doctype'].inside['internal-subset'].inside =
    Prism.languages.markup

  // Plugin to make entity title show the real entity, idea by Roman Komarov
  Prism.hooks.add('wrap', function (env) {
    if (env.type === 'entity') {
      env.attributes['title'] = env.content.value.replace(/&amp;/, '&')
    }
  })
  Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function addInlined(tagName, lang) {
      var includedCdataInside = {}
      includedCdataInside['language-' + lang] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: true,
        inside: Prism.languages[lang]
      }
      includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i
      var inside = {
        'included-cdata': {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: includedCdataInside
        }
      }
      inside['language-' + lang] = {
        pattern: /[\s\S]+/,
        inside: Prism.languages[lang]
      }
      var def = {}
      def[tagName] = {
        pattern: RegExp(
          /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
            /__/g,
            function () {
              return tagName
            }
          ),
          'i'
        ),
        lookbehind: true,
        greedy: true,
        inside: inside
      }
      Prism.languages.insertBefore('markup', 'cdata', def)
    }
  })
  Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function (attrName, lang) {
      Prism.languages.markup.tag.inside['special-attr'].push({
        pattern: RegExp(
          /(^|["'\s])/.source +
            '(?:' +
            attrName +
            ')' +
            /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          'i'
        ),
        lookbehind: true,
        inside: {
          'attr-name': /^[^\s=]+/,
          'attr-value': {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: true,
                alias: [lang, 'language-' + lang],
                inside: Prism.languages[lang]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: 'attr-equals'
                },
                /"|'/
              ]
            }
          }
        }
      })
    }
  })
  Prism.languages.html = Prism.languages.markup
  Prism.languages.mathml = Prism.languages.markup
  Prism.languages.svg = Prism.languages.markup
  Prism.languages.xml = Prism.languages.extend('markup', {})
  Prism.languages.ssml = Prism.languages.xml
  Prism.languages.atom = Prism.languages.xml
  Prism.languages.rss = Prism.languages.xml
}


/***/ }),

/***/ "./node_modules/refractor/lang/objectivec.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/objectivec.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ objectivec)
/* harmony export */ });
/* harmony import */ var _c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./c.js */ "./node_modules/refractor/lang/c.js");
// @ts-nocheck

objectivec.displayName = 'objectivec'
objectivec.aliases = ['objc']

/** @type {import('../core.js').Syntax} */
function objectivec(Prism) {
  Prism.register(_c_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.objectivec = Prism.languages.extend('c', {
    string: {
      pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
      greedy: true
    },
    keyword:
      /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
    operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
  })
  delete Prism.languages.objectivec['class-name']
  Prism.languages.objc = Prism.languages.objectivec
}


/***/ }),

/***/ "./node_modules/refractor/lang/perl.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/perl.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ perl)
/* harmony export */ });
// @ts-nocheck
perl.displayName = 'perl'
perl.aliases = []

/** @type {import('../core.js').Syntax} */
function perl(Prism) {
  ;(function (Prism) {
    var brackets =
      /(?:\((?:[^()\\]|\\[\s\S])*\)|\{(?:[^{}\\]|\\[\s\S])*\}|\[(?:[^[\]\\]|\\[\s\S])*\]|<(?:[^<>\\]|\\[\s\S])*>)/
        .source
    Prism.languages.perl = {
      comment: [
        {
          // POD
          pattern: /(^\s*)=\w[\s\S]*?=cut.*/m,
          lookbehind: true,
          greedy: true
        },
        {
          pattern: /(^|[^\\$])#.*/,
          lookbehind: true,
          greedy: true
        }
      ],
      // TODO Could be nice to handle Heredoc too.
      string: [
        {
          pattern: RegExp(
            /\b(?:q|qq|qw|qx)(?![a-zA-Z0-9])\s*/.source +
              '(?:' +
              [
                // q/.../
                /([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
                // q a...a
                // eslint-disable-next-line regexp/strict
                /([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2/.source,
                // q(...)
                // q{...}
                // q[...]
                // q<...>
                brackets
              ].join('|') +
              ')'
          ),
          greedy: true
        },
        // "...", `...`
        {
          pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/,
          greedy: true
        },
        // '...'
        // FIXME Multi-line single-quoted strings are not supported as they would break variables containing '
        {
          pattern: /'(?:[^'\\\r\n]|\\.)*'/,
          greedy: true
        }
      ],
      regex: [
        {
          pattern: RegExp(
            /\b(?:m|qr)(?![a-zA-Z0-9])\s*/.source +
              '(?:' +
              [
                // m/.../
                /([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
                // m a...a
                // eslint-disable-next-line regexp/strict
                /([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2/.source,
                // m(...)
                // m{...}
                // m[...]
                // m<...>
                brackets
              ].join('|') +
              ')' +
              /[msixpodualngc]*/.source
          ),
          greedy: true
        },
        // The lookbehinds prevent -s from breaking
        {
          pattern: RegExp(
            /(^|[^-])\b(?:s|tr|y)(?![a-zA-Z0-9])\s*/.source +
              '(?:' +
              [
                // s/.../.../
                // eslint-disable-next-line regexp/strict
                /([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2/
                  .source,
                // s a...a...a
                // eslint-disable-next-line regexp/strict
                /([a-zA-Z0-9])(?:(?!\3)[^\\]|\\[\s\S])*\3(?:(?!\3)[^\\]|\\[\s\S])*\3/
                  .source,
                // s(...)(...)
                // s{...}{...}
                // s[...][...]
                // s<...><...>
                // s(...)[...]
                brackets + /\s*/.source + brackets
              ].join('|') +
              ')' +
              /[msixpodualngcer]*/.source
          ),
          lookbehind: true,
          greedy: true
        },
        // /.../
        // The look-ahead tries to prevent two divisions on
        // the same line from being highlighted as regex.
        // This does not support multi-line regex.
        {
          pattern:
            /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|x|xor)\b))/,
          greedy: true
        }
      ],
      // FIXME Not sure about the handling of ::, ', and #
      variable: [
        // ${^POSTMATCH}
        /[&*$@%]\{\^[A-Z]+\}/,
        // $^V
        /[&*$@%]\^[A-Z_]/,
        // ${...}
        /[&*$@%]#?(?=\{)/,
        // $foo
        /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+(?![\w$]))+(?:::)*/,
        // $1
        /[&*$@%]\d+/,
        // $_, @_, %!
        // The negative lookahead prevents from breaking the %= operator
        /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/
      ],
      filehandle: {
        // <>, <FOO>, _
        pattern: /<(?![<=])\S*?>|\b_\b/,
        alias: 'symbol'
      },
      'v-string': {
        // v1.2, 1.2.3
        pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,
        alias: 'string'
      },
      function: {
        pattern: /(\bsub[ \t]+)\w+/,
        lookbehind: true
      },
      keyword:
        /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
      number:
        /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
      operator:
        /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|xor)\b/,
      punctuation: /[{}[\];(),:]/
    }
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/php.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/php.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ php)
/* harmony export */ });
/* harmony import */ var _markup_templating_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js");
// @ts-nocheck

php.displayName = 'php'
php.aliases = []

/** @type {import('../core.js').Syntax} */
function php(Prism) {
  Prism.register(_markup_templating_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  /**
   * Original by Aaron Harun: http://aahacreative.com/2012/07/31/php-syntax-highlighting-prism/
   * Modified by Miles Johnson: http://milesj.me
   * Rewritten by Tom Pavelec
   *
   * Supports PHP 5.3 - 8.0
   */
  ;(function (Prism) {
    var comment = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/
    var constant = [
      {
        pattern: /\b(?:false|true)\b/i,
        alias: 'boolean'
      },
      {
        pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
        greedy: true,
        lookbehind: true
      },
      {
        pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
        greedy: true,
        lookbehind: true
      },
      /\b(?:null)\b/i,
      /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/
    ]
    var number =
      /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i
    var operator =
      /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/
    var punctuation = /[{}\[\](),:;]/
    Prism.languages.php = {
      delimiter: {
        pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
        alias: 'important'
      },
      comment: comment,
      variable: /\$+(?:\w+\b|(?=\{))/,
      package: {
        pattern:
          /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
        lookbehind: true,
        inside: {
          punctuation: /\\/
        }
      },
      'class-name-definition': {
        pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
        lookbehind: true,
        alias: 'class-name'
      },
      'function-definition': {
        pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
        lookbehind: true,
        alias: 'function'
      },
      keyword: [
        {
          pattern:
            /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
          alias: 'type-casting',
          greedy: true,
          lookbehind: true
        },
        {
          pattern:
            /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
          alias: 'type-hint',
          greedy: true,
          lookbehind: true
        },
        {
          pattern:
            /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,
          alias: 'return-type',
          greedy: true,
          lookbehind: true
        },
        {
          pattern:
            /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
          alias: 'type-declaration',
          greedy: true
        },
        {
          pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
          alias: 'type-declaration',
          greedy: true,
          lookbehind: true
        },
        {
          pattern: /\b(?:parent|self|static)(?=\s*::)/i,
          alias: 'static-context',
          greedy: true
        },
        {
          // yield from
          pattern: /(\byield\s+)from\b/i,
          lookbehind: true
        },
        // `class` is always a keyword unlike other keywords
        /\bclass\b/i,
        {
          // https://www.php.net/manual/en/reserved.keywords.php
          //
          // keywords cannot be preceded by "->"
          // the complex lookbehind means `(?<!(?:->|::)\s*)`
          pattern:
            /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
          lookbehind: true
        }
      ],
      'argument-name': {
        pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,
        lookbehind: true
      },
      'class-name': [
        {
          pattern:
            /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
          greedy: true,
          lookbehind: true
        },
        {
          pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
          greedy: true,
          lookbehind: true
        },
        {
          pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
          greedy: true
        },
        {
          pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
          alias: 'class-name-fully-qualified',
          greedy: true,
          lookbehind: true,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
          alias: 'class-name-fully-qualified',
          greedy: true,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern:
            /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
          alias: 'class-name-fully-qualified',
          greedy: true,
          lookbehind: true,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /\b[a-z_]\w*(?=\s*\$)/i,
          alias: 'type-declaration',
          greedy: true
        },
        {
          pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
          alias: ['class-name-fully-qualified', 'type-declaration'],
          greedy: true,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /\b[a-z_]\w*(?=\s*::)/i,
          alias: 'static-context',
          greedy: true
        },
        {
          pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
          alias: ['class-name-fully-qualified', 'static-context'],
          greedy: true,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
          alias: 'type-hint',
          greedy: true,
          lookbehind: true
        },
        {
          pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
          alias: ['class-name-fully-qualified', 'type-hint'],
          greedy: true,
          lookbehind: true,
          inside: {
            punctuation: /\\/
          }
        },
        {
          pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
          alias: 'return-type',
          greedy: true,
          lookbehind: true
        },
        {
          pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
          alias: ['class-name-fully-qualified', 'return-type'],
          greedy: true,
          lookbehind: true,
          inside: {
            punctuation: /\\/
          }
        }
      ],
      constant: constant,
      function: {
        pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
        lookbehind: true,
        inside: {
          punctuation: /\\/
        }
      },
      property: {
        pattern: /(->\s*)\w+/,
        lookbehind: true
      },
      number: number,
      operator: operator,
      punctuation: punctuation
    }
    var string_interpolation = {
      pattern:
        /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
      lookbehind: true,
      inside: Prism.languages.php
    }
    var string = [
      {
        pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
        alias: 'nowdoc-string',
        greedy: true,
        inside: {
          delimiter: {
            pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
            alias: 'symbol',
            inside: {
              punctuation: /^<<<'?|[';]$/
            }
          }
        }
      },
      {
        pattern:
          /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
        alias: 'heredoc-string',
        greedy: true,
        inside: {
          delimiter: {
            pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
            alias: 'symbol',
            inside: {
              punctuation: /^<<<"?|[";]$/
            }
          },
          interpolation: string_interpolation
        }
      },
      {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        alias: 'backtick-quoted-string',
        greedy: true
      },
      {
        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
        alias: 'single-quoted-string',
        greedy: true
      },
      {
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        alias: 'double-quoted-string',
        greedy: true,
        inside: {
          interpolation: string_interpolation
        }
      }
    ]
    Prism.languages.insertBefore('php', 'variable', {
      string: string,
      attribute: {
        pattern:
          /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
        greedy: true,
        inside: {
          'attribute-content': {
            pattern: /^(#\[)[\s\S]+(?=\]$)/,
            lookbehind: true,
            // inside can appear subset of php
            inside: {
              comment: comment,
              string: string,
              'attribute-class-name': [
                {
                  pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
                  alias: 'class-name',
                  greedy: true,
                  lookbehind: true
                },
                {
                  pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
                  alias: ['class-name', 'class-name-fully-qualified'],
                  greedy: true,
                  lookbehind: true,
                  inside: {
                    punctuation: /\\/
                  }
                }
              ],
              constant: constant,
              number: number,
              operator: operator,
              punctuation: punctuation
            }
          },
          delimiter: {
            pattern: /^#\[|\]$/,
            alias: 'punctuation'
          }
        }
      }
    })
    Prism.hooks.add('before-tokenize', function (env) {
      if (!/<\?/.test(env.code)) {
        return
      }
      var phpPattern =
        /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g
      Prism.languages['markup-templating'].buildPlaceholders(
        env,
        'php',
        phpPattern
      )
    })
    Prism.hooks.add('after-tokenize', function (env) {
      Prism.languages['markup-templating'].tokenizePlaceholders(env, 'php')
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/python.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/python.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ python)
/* harmony export */ });
// @ts-nocheck
python.displayName = 'python'
python.aliases = ['py']

/** @type {import('../core.js').Syntax} */
function python(Prism) {
  Prism.languages.python = {
    comment: {
      pattern: /(^|[^\\])#.*/,
      lookbehind: true,
      greedy: true
    },
    'string-interpolation': {
      pattern:
        /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
      greedy: true,
      inside: {
        interpolation: {
          // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
          pattern:
            /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
          lookbehind: true,
          inside: {
            'format-spec': {
              pattern: /(:)[^:(){}]+(?=\}$)/,
              lookbehind: true
            },
            'conversion-option': {
              pattern: /![sra](?=[:}]$)/,
              alias: 'punctuation'
            },
            rest: null
          }
        },
        string: /[\s\S]+/
      }
    },
    'triple-quoted-string': {
      pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
      greedy: true,
      alias: 'string'
    },
    string: {
      pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
      greedy: true
    },
    function: {
      pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
      lookbehind: true
    },
    'class-name': {
      pattern: /(\bclass\s+)\w+/i,
      lookbehind: true
    },
    decorator: {
      pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
      lookbehind: true,
      alias: ['annotation', 'punctuation'],
      inside: {
        punctuation: /\./
      }
    },
    keyword:
      /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    builtin:
      /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    boolean: /\b(?:False|None|True)\b/,
    number:
      /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    punctuation: /[{}[\];(),.:]/
  }
  Prism.languages.python['string-interpolation'].inside[
    'interpolation'
  ].inside.rest = Prism.languages.python
  Prism.languages.py = Prism.languages.python
}


/***/ }),

/***/ "./node_modules/refractor/lang/r.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/r.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r)
/* harmony export */ });
// @ts-nocheck
r.displayName = 'r'
r.aliases = []

/** @type {import('../core.js').Syntax} */
function r(Prism) {
  Prism.languages.r = {
    comment: /#.*/,
    string: {
      pattern: /(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'percent-operator': {
      // Includes user-defined operators
      // and %%, %*%, %/%, %in%, %o%, %x%
      pattern: /%[^%\s]*%/,
      alias: 'operator'
    },
    boolean: /\b(?:FALSE|TRUE)\b/,
    ellipsis: /\.\.(?:\.|\d+)/,
    number: [
      /\b(?:Inf|NaN)\b/,
      /(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/
    ],
    keyword:
      /\b(?:NA|NA_character_|NA_complex_|NA_integer_|NA_real_|NULL|break|else|for|function|if|in|next|repeat|while)\b/,
    operator: /->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,
    punctuation: /[(){}\[\],;]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/regex.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/regex.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ regex)
/* harmony export */ });
// @ts-nocheck
regex.displayName = 'regex'
regex.aliases = []

/** @type {import('../core.js').Syntax} */
function regex(Prism) {
  ;(function (Prism) {
    var specialEscape = {
      pattern: /\\[\\(){}[\]^$+*?|.]/,
      alias: 'escape'
    }
    var escape =
      /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/
    var charSet = {
      pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i,
      alias: 'class-name'
    }
    var charSetWithoutDot = {
      pattern: /\\[wsd]|\\p\{[^{}]+\}/i,
      alias: 'class-name'
    }
    var rangeChar = '(?:[^\\\\-]|' + escape.source + ')'
    var range = RegExp(rangeChar + '-' + rangeChar)

    // the name of a capturing group
    var groupName = {
      pattern: /(<|')[^<>']+(?=[>']$)/,
      lookbehind: true,
      alias: 'variable'
    }
    Prism.languages.regex = {
      'char-class': {
        pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
        lookbehind: true,
        inside: {
          'char-class-negation': {
            pattern: /(^\[)\^/,
            lookbehind: true,
            alias: 'operator'
          },
          'char-class-punctuation': {
            pattern: /^\[|\]$/,
            alias: 'punctuation'
          },
          range: {
            pattern: range,
            inside: {
              escape: escape,
              'range-punctuation': {
                pattern: /-/,
                alias: 'operator'
              }
            }
          },
          'special-escape': specialEscape,
          'char-set': charSetWithoutDot,
          escape: escape
        }
      },
      'special-escape': specialEscape,
      'char-set': charSet,
      backreference: [
        {
          // a backreference which is not an octal escape
          pattern: /\\(?![123][0-7]{2})[1-9]/,
          alias: 'keyword'
        },
        {
          pattern: /\\k<[^<>']+>/,
          alias: 'keyword',
          inside: {
            'group-name': groupName
          }
        }
      ],
      anchor: {
        pattern: /[$^]|\\[ABbGZz]/,
        alias: 'function'
      },
      escape: escape,
      group: [
        {
          // https://docs.oracle.com/javase/10/docs/api/java/util/regex/Pattern.html
          // https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference?view=netframework-4.7.2#grouping-constructs

          // (), (?<name>), (?'name'), (?>), (?:), (?=), (?!), (?<=), (?<!), (?is-m), (?i-m:)
          pattern:
            /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
          alias: 'punctuation',
          inside: {
            'group-name': groupName
          }
        },
        {
          pattern: /\)/,
          alias: 'punctuation'
        }
      ],
      quantifier: {
        pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,
        alias: 'number'
      },
      alternation: {
        pattern: /\|/,
        alias: 'keyword'
      }
    }
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/ruby.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/ruby.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ruby)
/* harmony export */ });
/* harmony import */ var _clike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clike.js */ "./node_modules/refractor/lang/clike.js");
// @ts-nocheck

ruby.displayName = 'ruby'
ruby.aliases = ['rb']

/** @type {import('../core.js').Syntax} */
function ruby(Prism) {
  Prism.register(_clike_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  /**
   * Original by Samuel Flores
   *
   * Adds the following new token classes:
   *     constant, builtin, variable, symbol, regex
   */
  ;(function (Prism) {
    Prism.languages.ruby = Prism.languages.extend('clike', {
      comment: {
        pattern: /#.*|^=begin\s[\s\S]*?^=end/m,
        greedy: true
      },
      'class-name': {
        pattern:
          /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,
        lookbehind: true,
        inside: {
          punctuation: /[.\\]/
        }
      },
      keyword:
        /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
      operator:
        /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,
      punctuation: /[(){}[\].,;]/
    })
    Prism.languages.insertBefore('ruby', 'operator', {
      'double-colon': {
        pattern: /::/,
        alias: 'punctuation'
      }
    })
    var interpolation = {
      pattern: /((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,
      lookbehind: true,
      inside: {
        content: {
          pattern: /^(#\{)[\s\S]+(?=\}$)/,
          lookbehind: true,
          inside: Prism.languages.ruby
        },
        delimiter: {
          pattern: /^#\{|\}$/,
          alias: 'punctuation'
        }
      }
    }
    delete Prism.languages.ruby.function
    var percentExpression =
      '(?:' +
      [
        /([^a-zA-Z0-9\s{(\[<=])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
        /\((?:[^()\\]|\\[\s\S]|\((?:[^()\\]|\\[\s\S])*\))*\)/.source,
        /\{(?:[^{}\\]|\\[\s\S]|\{(?:[^{}\\]|\\[\s\S])*\})*\}/.source,
        /\[(?:[^\[\]\\]|\\[\s\S]|\[(?:[^\[\]\\]|\\[\s\S])*\])*\]/.source,
        /<(?:[^<>\\]|\\[\s\S]|<(?:[^<>\\]|\\[\s\S])*>)*>/.source
      ].join('|') +
      ')'
    var symbolName =
      /(?:"(?:\\.|[^"\\\r\n])*"|(?:\b[a-zA-Z_]\w*|[^\s\0-\x7F]+)[?!]?|\$.)/
        .source
    Prism.languages.insertBefore('ruby', 'keyword', {
      'regex-literal': [
        {
          pattern: RegExp(
            /%r/.source + percentExpression + /[egimnosux]{0,6}/.source
          ),
          greedy: true,
          inside: {
            interpolation: interpolation,
            regex: /[\s\S]+/
          }
        },
        {
          pattern:
            /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
          lookbehind: true,
          greedy: true,
          inside: {
            interpolation: interpolation,
            regex: /[\s\S]+/
          }
        }
      ],
      variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
      symbol: [
        {
          pattern: RegExp(/(^|[^:]):/.source + symbolName),
          lookbehind: true,
          greedy: true
        },
        {
          pattern: RegExp(
            /([\r\n{(,][ \t]*)/.source + symbolName + /(?=:(?!:))/.source
          ),
          lookbehind: true,
          greedy: true
        }
      ],
      'method-definition': {
        pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,
        lookbehind: true,
        inside: {
          function: /\b\w+$/,
          keyword: /^self\b/,
          'class-name': /^\w+/,
          punctuation: /\./
        }
      }
    })
    Prism.languages.insertBefore('ruby', 'string', {
      'string-literal': [
        {
          pattern: RegExp(/%[qQiIwWs]?/.source + percentExpression),
          greedy: true,
          inside: {
            interpolation: interpolation,
            string: /[\s\S]+/
          }
        },
        {
          pattern:
            /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
          greedy: true,
          inside: {
            interpolation: interpolation,
            string: /[\s\S]+/
          }
        },
        {
          pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
          alias: 'heredoc-string',
          greedy: true,
          inside: {
            delimiter: {
              pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,
              inside: {
                symbol: /\b\w+/,
                punctuation: /^<<[-~]?/
              }
            },
            interpolation: interpolation,
            string: /[\s\S]+/
          }
        },
        {
          pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
          alias: 'heredoc-string',
          greedy: true,
          inside: {
            delimiter: {
              pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,
              inside: {
                symbol: /\b\w+/,
                punctuation: /^<<[-~]?'|'$/
              }
            },
            string: /[\s\S]+/
          }
        }
      ],
      'command-literal': [
        {
          pattern: RegExp(/%x/.source + percentExpression),
          greedy: true,
          inside: {
            interpolation: interpolation,
            command: {
              pattern: /[\s\S]+/,
              alias: 'string'
            }
          }
        },
        {
          pattern: /`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,
          greedy: true,
          inside: {
            interpolation: interpolation,
            command: {
              pattern: /[\s\S]+/,
              alias: 'string'
            }
          }
        }
      ]
    })
    delete Prism.languages.ruby.string
    Prism.languages.insertBefore('ruby', 'number', {
      builtin:
        /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
      constant: /\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/
    })
    Prism.languages.rb = Prism.languages.ruby
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/rust.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/rust.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rust)
/* harmony export */ });
// @ts-nocheck
rust.displayName = 'rust'
rust.aliases = []

/** @type {import('../core.js').Syntax} */
function rust(Prism) {
  ;(function (Prism) {
    var multilineComment = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source
    for (var i = 0; i < 2; i++) {
      // support 4 levels of nested comments
      multilineComment = multilineComment.replace(/<self>/g, function () {
        return multilineComment
      })
    }
    multilineComment = multilineComment.replace(/<self>/g, function () {
      return /[^\s\S]/.source
    })
    Prism.languages.rust = {
      comment: [
        {
          pattern: RegExp(/(^|[^\\])/.source + multilineComment),
          lookbehind: true,
          greedy: true
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: true,
          greedy: true
        }
      ],
      string: {
        pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
        greedy: true
      },
      char: {
        pattern:
          /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
        greedy: true
      },
      attribute: {
        pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
        greedy: true,
        alias: 'attr-name',
        inside: {
          string: null // see below
        }
      },

      // Closure params should not be confused with bitwise OR |
      'closure-params': {
        pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
        lookbehind: true,
        greedy: true,
        inside: {
          'closure-punctuation': {
            pattern: /^\||\|$/,
            alias: 'punctuation'
          },
          rest: null // see below
        }
      },

      'lifetime-annotation': {
        pattern: /'\w+/,
        alias: 'symbol'
      },
      'fragment-specifier': {
        pattern: /(\$\w+:)[a-z]+/,
        lookbehind: true,
        alias: 'punctuation'
      },
      variable: /\$\w+/,
      'function-definition': {
        pattern: /(\bfn\s+)\w+/,
        lookbehind: true,
        alias: 'function'
      },
      'type-definition': {
        pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
        lookbehind: true,
        alias: 'class-name'
      },
      'module-declaration': [
        {
          pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
          lookbehind: true,
          alias: 'namespace'
        },
        {
          pattern:
            /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
          lookbehind: true,
          alias: 'namespace',
          inside: {
            punctuation: /::/
          }
        }
      ],
      keyword: [
        // https://github.com/rust-lang/reference/blob/master/src/keywords.md
        /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
        // primitives and str
        // https://doc.rust-lang.org/stable/rust-by-example/primitives.html
        /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/
      ],
      // functions can technically start with an upper-case letter, but this will introduce a lot of false positives
      // and Rust's naming conventions recommend snake_case anyway.
      // https://doc.rust-lang.org/1.0.0/style/style/naming/README.html
      function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
      macro: {
        pattern: /\b\w+!/,
        alias: 'property'
      },
      constant: /\b[A-Z_][A-Z_\d]+\b/,
      'class-name': /\b[A-Z]\w*\b/,
      namespace: {
        pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
        inside: {
          punctuation: /::/
        }
      },
      // Hex, oct, bin, dec numbers with visual separators and type suffix
      number:
        /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
      boolean: /\b(?:false|true)\b/,
      punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
      operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
    }
    Prism.languages.rust['closure-params'].inside.rest = Prism.languages.rust
    Prism.languages.rust['attribute'].inside['string'] =
      Prism.languages.rust['string']
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/sass.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/sass.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sass)
/* harmony export */ });
/* harmony import */ var _css_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css.js */ "./node_modules/refractor/lang/css.js");
// @ts-nocheck

sass.displayName = 'sass'
sass.aliases = []

/** @type {import('../core.js').Syntax} */
function sass(Prism) {
  Prism.register(_css_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    Prism.languages.sass = Prism.languages.extend('css', {
      // Sass comments don't need to be closed, only indented
      comment: {
        pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
        lookbehind: true,
        greedy: true
      }
    })
    Prism.languages.insertBefore('sass', 'atrule', {
      // We want to consume the whole line
      'atrule-line': {
        // Includes support for = and + shortcuts
        pattern: /^(?:[ \t]*)[@+=].+/m,
        greedy: true,
        inside: {
          atrule: /(?:@[\w-]+|[+=])/
        }
      }
    })
    delete Prism.languages.sass.atrule
    var variable = /\$[-\w]+|#\{\$[-\w]+\}/
    var operator = [
      /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,
      {
        pattern: /(\s)-(?=\s)/,
        lookbehind: true
      }
    ]
    Prism.languages.insertBefore('sass', 'property', {
      // We want to consume the whole line
      'variable-line': {
        pattern: /^[ \t]*\$.+/m,
        greedy: true,
        inside: {
          punctuation: /:/,
          variable: variable,
          operator: operator
        }
      },
      // We want to consume the whole line
      'property-line': {
        pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
        greedy: true,
        inside: {
          property: [
            /[^:\s]+(?=\s*:)/,
            {
              pattern: /(:)[^:\s]+/,
              lookbehind: true
            }
          ],
          punctuation: /:/,
          variable: variable,
          operator: operator,
          important: Prism.languages.sass.important
        }
      }
    })
    delete Prism.languages.sass.property
    delete Prism.languages.sass.important

    // Now that whole lines for other patterns are consumed,
    // what's left should be selectors
    Prism.languages.insertBefore('sass', 'punctuation', {
      selector: {
        pattern:
          /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
        lookbehind: true,
        greedy: true
      }
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/scss.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/scss.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ scss)
/* harmony export */ });
/* harmony import */ var _css_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css.js */ "./node_modules/refractor/lang/css.js");
// @ts-nocheck

scss.displayName = 'scss'
scss.aliases = []

/** @type {import('../core.js').Syntax} */
function scss(Prism) {
  Prism.register(_css_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.scss = Prism.languages.extend('css', {
    comment: {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    },
    atrule: {
      pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
      inside: {
        rule: /@[\w-]+/
        // See rest below
      }
    },

    // url, compassified
    url: /(?:[-a-z]+-)?url(?=\()/i,
    // CSS selector regex is not appropriate for Sass
    // since there can be lot more things (var, @ directive, nesting..)
    // a selector must start at the end of a property or after a brace (end of other rules or nesting)
    // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
    // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
    // can "pass" as a selector- e.g: proper#{$erty})
    // this one was hard to do, so please be careful if you edit this one :)
    selector: {
      // Initial look-ahead is used to prevent matching of blank selectors
      pattern:
        /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
      inside: {
        parent: {
          pattern: /&/,
          alias: 'important'
        },
        placeholder: /%[-\w]+/,
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
      }
    },
    property: {
      pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
      inside: {
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
      }
    }
  })
  Prism.languages.insertBefore('scss', 'atrule', {
    keyword: [
      /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
      {
        pattern: /( )(?:from|through)(?= )/,
        lookbehind: true
      }
    ]
  })
  Prism.languages.insertBefore('scss', 'important', {
    // var and interpolated vars
    variable: /\$[-\w]+|#\{\$[-\w]+\}/
  })
  Prism.languages.insertBefore('scss', 'function', {
    'module-modifier': {
      pattern: /\b(?:as|hide|show|with)\b/i,
      alias: 'keyword'
    },
    placeholder: {
      pattern: /%[-\w]+/,
      alias: 'selector'
    },
    statement: {
      pattern: /\B!(?:default|optional)\b/i,
      alias: 'keyword'
    },
    boolean: /\b(?:false|true)\b/,
    null: {
      pattern: /\bnull\b/,
      alias: 'keyword'
    },
    operator: {
      pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
      lookbehind: true
    }
  })
  Prism.languages.scss['atrule'].inside.rest = Prism.languages.scss
}


/***/ }),

/***/ "./node_modules/refractor/lang/sql.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/sql.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sql)
/* harmony export */ });
// @ts-nocheck
sql.displayName = 'sql'
sql.aliases = []

/** @type {import('../core.js').Syntax} */
function sql(Prism) {
  Prism.languages.sql = {
    comment: {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
      lookbehind: true
    },
    variable: [
      {
        pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
        greedy: true
      },
      /@[\w.$]+/
    ],
    string: {
      pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
      greedy: true,
      lookbehind: true
    },
    identifier: {
      pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
      greedy: true,
      lookbehind: true,
      inside: {
        punctuation: /^`|`$/
      }
    },
    function:
      /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
    // Should we highlight user defined functions too?
    keyword:
      /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
    boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
    number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
    operator:
      /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
    punctuation: /[;[\]()`,.]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/swift.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/swift.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ swift)
/* harmony export */ });
// @ts-nocheck
swift.displayName = 'swift'
swift.aliases = []

/** @type {import('../core.js').Syntax} */
function swift(Prism) {
  Prism.languages.swift = {
    comment: {
      // Nested comments are supported up to 2 levels
      pattern:
        /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
      lookbehind: true,
      greedy: true
    },
    'string-literal': [
      // https://docs.swift.org/swift-book/LanguageGuide/StringsAndCharacters.html
      {
        pattern: RegExp(
          /(^|[^"#])/.source +
            '(?:' +
            // single-line string
            /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/
              .source +
            '|' +
            // multi-line string
            /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/
              .source +
            ')' +
            /(?!["#])/.source
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          interpolation: {
            pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
            lookbehind: true,
            inside: null // see below
          },

          'interpolation-punctuation': {
            pattern: /^\)|\\\($/,
            alias: 'punctuation'
          },
          punctuation: /\\(?=[\r\n])/,
          string: /[\s\S]+/
        }
      },
      {
        pattern: RegExp(
          /(^|[^"#])(#+)/.source +
            '(?:' +
            // single-line string
            /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/
              .source +
            '|' +
            // multi-line string
            /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source +
            ')' +
            '\\2'
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          interpolation: {
            pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
            lookbehind: true,
            inside: null // see below
          },

          'interpolation-punctuation': {
            pattern: /^\)|\\#+\($/,
            alias: 'punctuation'
          },
          string: /[\s\S]+/
        }
      }
    ],
    directive: {
      // directives with conditions
      pattern: RegExp(
        /#/.source +
          '(?:' +
          (/(?:elseif|if)\b/.source +
            '(?:[ \t]*' +
            // This regex is a little complex. It's equivalent to this:
            //   (?:![ \t]*)?(?:\b\w+\b(?:[ \t]*<round>)?|<round>)(?:[ \t]*(?:&&|\|\|))?
            // where <round> is a general parentheses expression.
            /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/
              .source +
            ')+') +
          '|' +
          /(?:else|endif)\b/.source +
          ')'
      ),
      alias: 'property',
      inside: {
        'directive-name': /^#\w+/,
        boolean: /\b(?:false|true)\b/,
        number: /\b\d+(?:\.\d+)*\b/,
        operator: /!|&&|\|\||[<>]=?/,
        punctuation: /[(),]/
      }
    },
    literal: {
      pattern:
        /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
      alias: 'constant'
    },
    'other-directive': {
      pattern: /#\w+\b/,
      alias: 'property'
    },
    attribute: {
      pattern: /@\w+/,
      alias: 'atrule'
    },
    'function-definition': {
      pattern: /(\bfunc\s+)\w+/,
      lookbehind: true,
      alias: 'function'
    },
    label: {
      // https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID141
      pattern:
        /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
      lookbehind: true,
      alias: 'important'
    },
    keyword:
      /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
    boolean: /\b(?:false|true)\b/,
    nil: {
      pattern: /\bnil\b/,
      alias: 'constant'
    },
    'short-argument': /\$\d+\b/,
    omit: {
      pattern: /\b_\b/,
      alias: 'keyword'
    },
    number:
      /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
    // A class name must start with an upper-case letter and be either 1 letter long or contain a lower-case letter.
    'class-name': /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
    // Operators are generic in Swift. Developers can even create new operators (e.g. +++).
    // https://docs.swift.org/swift-book/ReferenceManual/zzSummaryOfTheGrammar.html#ID481
    // This regex only supports ASCII operators.
    operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
    punctuation: /[{}[\]();,.:\\]/
  }
  Prism.languages.swift['string-literal'].forEach(function (rule) {
    rule.inside['interpolation'].inside = Prism.languages.swift
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/typescript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/typescript.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ typescript)
/* harmony export */ });
/* harmony import */ var _javascript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascript.js */ "./node_modules/refractor/lang/javascript.js");
// @ts-nocheck

typescript.displayName = 'typescript'
typescript.aliases = ['ts']

/** @type {import('../core.js').Syntax} */
function typescript(Prism) {
  Prism.register(_javascript_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  ;(function (Prism) {
    Prism.languages.typescript = Prism.languages.extend('javascript', {
      'class-name': {
        pattern:
          /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: true,
        greedy: true,
        inside: null // see below
      },

      builtin:
        /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
    })

    // The keywords TypeScript adds to JavaScript
    Prism.languages.typescript.keyword.push(
      /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
      // keywords that have to be followed by an identifier
      /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
      // This is for `import type *, {}`
      /\btype\b(?=\s*(?:[\{*]|$))/
    )

    // doesn't work with TS because TS is too complex
    delete Prism.languages.typescript['parameter']
    delete Prism.languages.typescript['literal-property']

    // a version of typescript specifically for highlighting types
    var typeInside = Prism.languages.extend('typescript', {})
    delete typeInside['class-name']
    Prism.languages.typescript['class-name'].inside = typeInside
    Prism.languages.insertBefore('typescript', 'function', {
      decorator: {
        pattern: /@[$\w\xA0-\uFFFF]+/,
        inside: {
          at: {
            pattern: /^@/,
            alias: 'operator'
          },
          function: /^[\s\S]+/
        }
      },
      'generic-function': {
        // e.g. foo<T extends "bar" | "baz">( ...
        pattern:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
        greedy: true,
        inside: {
          function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
          generic: {
            pattern: /<[\s\S]+/,
            // everything after the first <
            alias: 'class-name',
            inside: typeInside
          }
        }
      }
    })
    Prism.languages.ts = Prism.languages.typescript
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/vbnet.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/vbnet.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ vbnet)
/* harmony export */ });
/* harmony import */ var _basic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic.js */ "./node_modules/refractor/lang/basic.js");
// @ts-nocheck

vbnet.displayName = 'vbnet'
vbnet.aliases = []

/** @type {import('../core.js').Syntax} */
function vbnet(Prism) {
  Prism.register(_basic_js__WEBPACK_IMPORTED_MODULE_0__["default"])
  Prism.languages.vbnet = Prism.languages.extend('basic', {
    comment: [
      {
        pattern: /(?:!|REM\b).+/i,
        inside: {
          keyword: /^REM/i
        }
      },
      {
        pattern: /(^|[^\\:])'.*/,
        lookbehind: true,
        greedy: true
      }
    ],
    string: {
      pattern: /(^|[^"])"(?:""|[^"])*"(?!")/,
      lookbehind: true,
      greedy: true
    },
    keyword:
      /(?:\b(?:ADDHANDLER|ADDRESSOF|ALIAS|AND|ANDALSO|AS|BEEP|BLOAD|BOOLEAN|BSAVE|BYREF|BYTE|BYVAL|CALL(?: ABSOLUTE)?|CASE|CATCH|CBOOL|CBYTE|CCHAR|CDATE|CDBL|CDEC|CHAIN|CHAR|CHDIR|CINT|CLASS|CLEAR|CLNG|CLOSE|CLS|COBJ|COM|COMMON|CONST|CONTINUE|CSBYTE|CSHORT|CSNG|CSTR|CTYPE|CUINT|CULNG|CUSHORT|DATA|DATE|DECIMAL|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DEFAULT|DELEGATE|DIM|DIRECTCAST|DO|DOUBLE|ELSE|ELSEIF|END|ENUM|ENVIRON|ERASE|ERROR|EVENT|EXIT|FALSE|FIELD|FILES|FINALLY|FOR(?: EACH)?|FRIEND|FUNCTION|GET|GETTYPE|GETXMLNAMESPACE|GLOBAL|GOSUB|GOTO|HANDLES|IF|IMPLEMENTS|IMPORTS|IN|INHERITS|INPUT|INTEGER|INTERFACE|IOCTL|IS|ISNOT|KEY|KILL|LET|LIB|LIKE|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|ME|MKDIR|MOD|MODULE|MUSTINHERIT|MUSTOVERRIDE|MYBASE|MYCLASS|NAME|NAMESPACE|NARROWING|NEW|NEXT|NOT|NOTHING|NOTINHERITABLE|NOTOVERRIDABLE|OBJECT|OF|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPERATOR|OPTION(?: BASE)?|OPTIONAL|OR|ORELSE|OUT|OVERLOADS|OVERRIDABLE|OVERRIDES|PARAMARRAY|PARTIAL|POKE|PRIVATE|PROPERTY|PROTECTED|PUBLIC|PUT|RAISEEVENT|READ|READONLY|REDIM|REM|REMOVEHANDLER|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SBYTE|SELECT(?: CASE)?|SET|SHADOWS|SHARED|SHELL|SHORT|SINGLE|SLEEP|STATIC|STEP|STOP|STRING|STRUCTURE|SUB|SWAP|SYNCLOCK|SYSTEM|THEN|THROW|TIMER|TO|TROFF|TRON|TRUE|TRY|TRYCAST|TYPE|TYPEOF|UINTEGER|ULONG|UNLOCK|UNTIL|USHORT|USING|VIEW PRINT|WAIT|WEND|WHEN|WHILE|WIDENING|WITH|WITHEVENTS|WRITE|WRITEONLY|XOR)|\B(?:#CONST|#ELSE|#ELSEIF|#END|#IF))(?:\$|\b)/i,
    punctuation: /[,;:(){}]/
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/yaml.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/yaml.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ yaml)
/* harmony export */ });
// @ts-nocheck
yaml.displayName = 'yaml'
yaml.aliases = ['yml']

/** @type {import('../core.js').Syntax} */
function yaml(Prism) {
  ;(function (Prism) {
    // https://yaml.org/spec/1.2/spec.html#c-ns-anchor-property
    // https://yaml.org/spec/1.2/spec.html#c-ns-alias-node
    var anchorOrAlias = /[*&][^\s[\]{},]+/
    // https://yaml.org/spec/1.2/spec.html#c-ns-tag-property
    var tag =
      /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/
    // https://yaml.org/spec/1.2/spec.html#c-ns-properties(n,c)
    var properties =
      '(?:' +
      tag.source +
      '(?:[ \t]+' +
      anchorOrAlias.source +
      ')?|' +
      anchorOrAlias.source +
      '(?:[ \t]+' +
      tag.source +
      ')?)'
    // https://yaml.org/spec/1.2/spec.html#ns-plain(n,c)
    // This is a simplified version that doesn't support "#" and multiline keys
    // All these long scarry character classes are simplified versions of YAML's characters
    var plainKey =
      /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
        /<PLAIN>/g,
        function () {
          return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
            .source
        }
      )
    var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source

    /**
     *
     * @param {string} value
     * @param {string} [flags]
     * @returns {RegExp}
     */
    function createValuePattern(value, flags) {
      flags = (flags || '').replace(/m/g, '') + 'm' // add m flag
      var pattern =
        /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
          .replace(/<<prop>>/g, function () {
            return properties
          })
          .replace(/<<value>>/g, function () {
            return value
          })
      return RegExp(pattern, flags)
    }
    Prism.languages.yaml = {
      scalar: {
        pattern: RegExp(
          /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
            /<<prop>>/g,
            function () {
              return properties
            }
          )
        ),
        lookbehind: true,
        alias: 'string'
      },
      comment: /#.*/,
      key: {
        pattern: RegExp(
          /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
            .replace(/<<prop>>/g, function () {
              return properties
            })
            .replace(/<<key>>/g, function () {
              return '(?:' + plainKey + '|' + string + ')'
            })
        ),
        lookbehind: true,
        greedy: true,
        alias: 'atrule'
      },
      directive: {
        pattern: /(^[ \t]*)%.+/m,
        lookbehind: true,
        alias: 'important'
      },
      datetime: {
        pattern: createValuePattern(
          /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
            .source
        ),
        lookbehind: true,
        alias: 'number'
      },
      boolean: {
        pattern: createValuePattern(/false|true/.source, 'i'),
        lookbehind: true,
        alias: 'important'
      },
      null: {
        pattern: createValuePattern(/null|~/.source, 'i'),
        lookbehind: true,
        alias: 'important'
      },
      string: {
        pattern: createValuePattern(string),
        lookbehind: true,
        greedy: true
      },
      number: {
        pattern: createValuePattern(
          /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
            .source,
          'i'
        ),
        lookbehind: true
      },
      tag: tag,
      important: anchorOrAlias,
      punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
    }
    Prism.languages.yml = Prism.languages.yaml
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lib/common.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lib/common.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   refractor: () => (/* reexport safe */ _core_js__WEBPACK_IMPORTED_MODULE_0__.refractor)
/* harmony export */ });
/* harmony import */ var _lang_clike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lang/clike.js */ "./node_modules/refractor/lang/clike.js");
/* harmony import */ var _lang_c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lang/c.js */ "./node_modules/refractor/lang/c.js");
/* harmony import */ var _lang_cpp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lang/cpp.js */ "./node_modules/refractor/lang/cpp.js");
/* harmony import */ var _lang_arduino_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lang/arduino.js */ "./node_modules/refractor/lang/arduino.js");
/* harmony import */ var _lang_bash_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lang/bash.js */ "./node_modules/refractor/lang/bash.js");
/* harmony import */ var _lang_csharp_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lang/csharp.js */ "./node_modules/refractor/lang/csharp.js");
/* harmony import */ var _lang_markup_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lang/markup.js */ "./node_modules/refractor/lang/markup.js");
/* harmony import */ var _lang_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lang/css.js */ "./node_modules/refractor/lang/css.js");
/* harmony import */ var _lang_diff_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lang/diff.js */ "./node_modules/refractor/lang/diff.js");
/* harmony import */ var _lang_go_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lang/go.js */ "./node_modules/refractor/lang/go.js");
/* harmony import */ var _lang_ini_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lang/ini.js */ "./node_modules/refractor/lang/ini.js");
/* harmony import */ var _lang_java_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lang/java.js */ "./node_modules/refractor/lang/java.js");
/* harmony import */ var _lang_regex_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lang/regex.js */ "./node_modules/refractor/lang/regex.js");
/* harmony import */ var _lang_javascript_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lang/javascript.js */ "./node_modules/refractor/lang/javascript.js");
/* harmony import */ var _lang_json_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lang/json.js */ "./node_modules/refractor/lang/json.js");
/* harmony import */ var _lang_kotlin_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lang/kotlin.js */ "./node_modules/refractor/lang/kotlin.js");
/* harmony import */ var _lang_less_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lang/less.js */ "./node_modules/refractor/lang/less.js");
/* harmony import */ var _lang_lua_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../lang/lua.js */ "./node_modules/refractor/lang/lua.js");
/* harmony import */ var _lang_makefile_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../lang/makefile.js */ "./node_modules/refractor/lang/makefile.js");
/* harmony import */ var _lang_yaml_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../lang/yaml.js */ "./node_modules/refractor/lang/yaml.js");
/* harmony import */ var _lang_markdown_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../lang/markdown.js */ "./node_modules/refractor/lang/markdown.js");
/* harmony import */ var _lang_objectivec_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../lang/objectivec.js */ "./node_modules/refractor/lang/objectivec.js");
/* harmony import */ var _lang_perl_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../lang/perl.js */ "./node_modules/refractor/lang/perl.js");
/* harmony import */ var _lang_markup_templating_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../lang/markup-templating.js */ "./node_modules/refractor/lang/markup-templating.js");
/* harmony import */ var _lang_php_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../lang/php.js */ "./node_modules/refractor/lang/php.js");
/* harmony import */ var _lang_python_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../lang/python.js */ "./node_modules/refractor/lang/python.js");
/* harmony import */ var _lang_r_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../lang/r.js */ "./node_modules/refractor/lang/r.js");
/* harmony import */ var _lang_ruby_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../lang/ruby.js */ "./node_modules/refractor/lang/ruby.js");
/* harmony import */ var _lang_rust_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../lang/rust.js */ "./node_modules/refractor/lang/rust.js");
/* harmony import */ var _lang_sass_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../lang/sass.js */ "./node_modules/refractor/lang/sass.js");
/* harmony import */ var _lang_scss_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../lang/scss.js */ "./node_modules/refractor/lang/scss.js");
/* harmony import */ var _lang_sql_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../lang/sql.js */ "./node_modules/refractor/lang/sql.js");
/* harmony import */ var _lang_swift_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../lang/swift.js */ "./node_modules/refractor/lang/swift.js");
/* harmony import */ var _lang_typescript_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../lang/typescript.js */ "./node_modules/refractor/lang/typescript.js");
/* harmony import */ var _lang_basic_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../lang/basic.js */ "./node_modules/refractor/lang/basic.js");
/* harmony import */ var _lang_vbnet_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../lang/vbnet.js */ "./node_modules/refractor/lang/vbnet.js");
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/refractor/lib/core.js");
/**
 * @typedef {import('./core.js').RefractorRoot} RefractorRoot
 * @typedef {import('./core.js').RefractorElement} RefractorElement
 * @typedef {import('./core.js').Text} Text
 * @typedef {import('./core.js').Grammar} Grammar
 * @typedef {import('./core.js').Syntax} Syntax
 */






































_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_clike_js__WEBPACK_IMPORTED_MODULE_1__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_c_js__WEBPACK_IMPORTED_MODULE_2__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_cpp_js__WEBPACK_IMPORTED_MODULE_3__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_arduino_js__WEBPACK_IMPORTED_MODULE_4__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_bash_js__WEBPACK_IMPORTED_MODULE_5__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_csharp_js__WEBPACK_IMPORTED_MODULE_6__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_markup_js__WEBPACK_IMPORTED_MODULE_7__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_css_js__WEBPACK_IMPORTED_MODULE_8__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_diff_js__WEBPACK_IMPORTED_MODULE_9__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_go_js__WEBPACK_IMPORTED_MODULE_10__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_ini_js__WEBPACK_IMPORTED_MODULE_11__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_java_js__WEBPACK_IMPORTED_MODULE_12__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_regex_js__WEBPACK_IMPORTED_MODULE_13__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_javascript_js__WEBPACK_IMPORTED_MODULE_14__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_json_js__WEBPACK_IMPORTED_MODULE_15__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_kotlin_js__WEBPACK_IMPORTED_MODULE_16__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_less_js__WEBPACK_IMPORTED_MODULE_17__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_lua_js__WEBPACK_IMPORTED_MODULE_18__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_makefile_js__WEBPACK_IMPORTED_MODULE_19__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_yaml_js__WEBPACK_IMPORTED_MODULE_20__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_markdown_js__WEBPACK_IMPORTED_MODULE_21__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_objectivec_js__WEBPACK_IMPORTED_MODULE_22__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_perl_js__WEBPACK_IMPORTED_MODULE_23__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_markup_templating_js__WEBPACK_IMPORTED_MODULE_24__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_php_js__WEBPACK_IMPORTED_MODULE_25__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_python_js__WEBPACK_IMPORTED_MODULE_26__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_r_js__WEBPACK_IMPORTED_MODULE_27__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_ruby_js__WEBPACK_IMPORTED_MODULE_28__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_rust_js__WEBPACK_IMPORTED_MODULE_29__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_sass_js__WEBPACK_IMPORTED_MODULE_30__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_scss_js__WEBPACK_IMPORTED_MODULE_31__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_sql_js__WEBPACK_IMPORTED_MODULE_32__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_swift_js__WEBPACK_IMPORTED_MODULE_33__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_typescript_js__WEBPACK_IMPORTED_MODULE_34__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_basic_js__WEBPACK_IMPORTED_MODULE_35__["default"])
_core_js__WEBPACK_IMPORTED_MODULE_0__.refractor.register(_lang_vbnet_js__WEBPACK_IMPORTED_MODULE_36__["default"])




/***/ }),

/***/ "./node_modules/refractor/lib/core.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lib/core.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   refractor: () => (/* binding */ refractor)
/* harmony export */ });
/* harmony import */ var hastscript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hastscript */ "./node_modules/hastscript/lib/html.js");
/* harmony import */ var parse_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parse-entities */ "./node_modules/parse-entities/lib/index.js");
/* harmony import */ var _prism_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prism-core.js */ "./node_modules/refractor/lib/prism-core.js");
/**
 * @typedef _Token A hidden Prism token
 * @property {string} type
 * @property {string} content
 * @property {string} alias
 * @property {number} length
 *
 * @typedef _Env A hidden Prism environment
 * @property {string} type
 * @property {string} tag
 * @property {Text|RefractorElement|Array<Text|RefractorElement>} content
 * @property {Array<string>} classes
 * @property {Record<string, string>} attributes
 * @property {string} language
 *
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Text} Text
 * @typedef {Omit<Element, 'children'> & {children: Array<RefractorElement|Text>}} RefractorElement
 * @typedef {Omit<Root, 'children'> & {children: Array<RefractorElement|Text>}} RefractorRoot
 *
 * @typedef {import('prismjs').Languages} Languages
 * @typedef {import('prismjs').Grammar} Grammar Whatever this is, Prism handles it.
 * @typedef {((prism: unknown) => void) & {displayName: string, aliases?: Array<string>}} Syntax A refractor syntax function
 *
 * @typedef Refractor Virtual syntax highlighting
 * @property {highlight} highlight
 * @property {alias} alias
 * @property {register} register
 * @property {registered} registered
 * @property {listLanguages} listLanguages
 * @property {Languages} languages
 */

// Load all stuff in `prism.js` itself, except for `prism-file-highlight.js`.
// The wrapped non-leaky grammars are loaded instead of Prism’s originals.




const own = {}.hasOwnProperty

// Inherit.
function Refractor() {}

Refractor.prototype = _prism_core_js__WEBPACK_IMPORTED_MODULE_0__.Prism

/** @type {Refractor} */
// @ts-expect-error: TS is wrong.
const refractor = new Refractor()

// Create.
refractor.highlight = highlight
refractor.register = register
refractor.alias = alias
refractor.registered = registered
refractor.listLanguages = listLanguages

// @ts-expect-error Overwrite Prism.
refractor.util.encode = encode
// @ts-expect-error Overwrite Prism.
refractor.Token.stringify = stringify

/**
 * Highlight `value` (code) as `language` (programming language).
 *
 * @param {string} value
 *   Code to highlight.
 * @param {string|Grammar} language
 *   Programming language name, alias, or grammar.
 * @returns {RefractorRoot}
 *   Node representing highlighted code.
 */
function highlight(value, language) {
  if (typeof value !== 'string') {
    throw new TypeError('Expected `string` for `value`, got `' + value + '`')
  }

  /** @type {Grammar} */
  let grammar
  /** @type {string|undefined} */
  let name

  // `name` is a grammar object.
  // This was called internally by Prism.js before 1.28.0.
  /* c8 ignore next 2 */
  if (language && typeof language === 'object') {
    grammar = language
  } else {
    name = language

    if (typeof name !== 'string') {
      throw new TypeError('Expected `string` for `name`, got `' + name + '`')
    }

    if (own.call(refractor.languages, name)) {
      grammar = refractor.languages[name]
    } else {
      throw new Error('Unknown language: `' + name + '` is not registered')
    }
  }

  return {
    type: 'root',
    // @ts-expect-error: we hacked Prism to accept and return the things we want.
    children: _prism_core_js__WEBPACK_IMPORTED_MODULE_0__.Prism.highlight.call(refractor, value, grammar, name)
  }
}

/**
 * Register a syntax.
 *
 * @param {Syntax} syntax
 *   Language function made for refractor, as in, the files in
 *   `refractor/lang/*.js`.
 * @returns {void}
 */
function register(syntax) {
  if (typeof syntax !== 'function' || !syntax.displayName) {
    throw new Error('Expected `function` for `syntax`, got `' + syntax + '`')
  }

  // Do not duplicate registrations.
  if (!own.call(refractor.languages, syntax.displayName)) {
    syntax(refractor)
  }
}

/**
 * Register aliases for already registered languages.
 *
 * @param {Record<string, string|Array<string>>|string} language
 * @param {string|Array<string>} [alias]
 * @returns {void}
 */
function alias(language, alias) {
  const languages = refractor.languages
  /** @type {Record<string, string|Array<string>>} */
  let map = {}

  if (typeof language === 'string') {
    if (alias) {
      map[language] = alias
    }
  } else {
    map = language
  }

  /** @type {string} */
  let key

  for (key in map) {
    if (own.call(map, key)) {
      const value = map[key]
      const list = typeof value === 'string' ? [value] : value
      let index = -1

      while (++index < list.length) {
        languages[list[index]] = languages[key]
      }
    }
  }
}

/**
 * Check whether an `alias` or `language` is registered.
 *
 * @param {string} aliasOrLanguage
 * @returns {boolean}
 */
function registered(aliasOrLanguage) {
  if (typeof aliasOrLanguage !== 'string') {
    throw new TypeError(
      'Expected `string` for `aliasOrLanguage`, got `' + aliasOrLanguage + '`'
    )
  }

  return own.call(refractor.languages, aliasOrLanguage)
}

/**
 * List all registered languages (names and aliases).
 *
 * @returns {Array<string>}
 */
function listLanguages() {
  const languages = refractor.languages
  /** @type {Array<string>} */
  const list = []
  /** @type {string} */
  let language

  for (language in languages) {
    if (
      own.call(languages, language) &&
      typeof languages[language] === 'object'
    ) {
      list.push(language)
    }
  }

  return list
}

/**
 * @param {string|_Token|Array<string|_Token>} value
 * @param {string} language
 * @returns {Text|RefractorElement|Array<Text|RefractorElement>}
 */
function stringify(value, language) {
  if (typeof value === 'string') {
    return {type: 'text', value}
  }

  if (Array.isArray(value)) {
    /** @type {Array<Text|RefractorElement>} */
    const result = []
    let index = -1

    while (++index < value.length) {
      if (
        value[index] !== '' &&
        value[index] !== null &&
        value[index] !== undefined
      ) {
        // @ts-expect-error Assume no sub-arrays.
        result.push(stringify(value[index], language))
      }
    }

    return result
  }

  /** @type {_Env} */
  const env = {
    type: value.type,
    content: stringify(value.content, language),
    tag: 'span',
    classes: ['token', value.type],
    attributes: {},
    language
  }

  if (value.alias) {
    env.classes.push(
      ...(typeof value.alias === 'string' ? [value.alias] : value.alias)
    )
  }

  // @ts-expect-error Prism.
  refractor.hooks.run('wrap', env)

  // @ts-expect-error Hush, it’s fine.
  return (0,hastscript__WEBPACK_IMPORTED_MODULE_1__.h)(
    env.tag + '.' + env.classes.join('.'),
    attributes(env.attributes),
    env.content
  )
}

/**
 * @template {unknown} T
 * @param {T} tokens
 * @returns {T}
 */
function encode(tokens) {
  return tokens
}

/**
 * @param {Record<string, string>} attrs
 * @returns {Record<string, string>}
 */
function attributes(attrs) {
  /** @type {string} */
  let key

  for (key in attrs) {
    if (own.call(attrs, key)) {
      attrs[key] = (0,parse_entities__WEBPACK_IMPORTED_MODULE_2__.parseEntities)(attrs[key])
    }
  }

  return attrs
}


/***/ }),

/***/ "./node_modules/refractor/lib/prism-core.js":
/*!**************************************************!*\
  !*** ./node_modules/refractor/lib/prism-core.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Prism: () => (/* binding */ Prism)
/* harmony export */ });
// @ts-nocheck

// This is a slimmed down version of `prism-core.js`, to remove globals,
// document, workers, `util.encode`, `Token.stringify`

// Private helper vars
var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i
var uniqueId = 0

// The grammar object for plaintext
var plainTextGrammar = {}

var _ = {
  /**
   * A namespace for utility methods.
   *
   * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
   * change or disappear at any time.
   *
   * @namespace
   * @memberof Prism
   */
  util: {
    /**
     * Returns the name of the type of the given value.
     *
     * @param {any} o
     * @returns {string}
     * @example
     * type(null)      === 'Null'
     * type(undefined) === 'Undefined'
     * type(123)       === 'Number'
     * type('foo')     === 'String'
     * type(true)      === 'Boolean'
     * type([1, 2])    === 'Array'
     * type({})        === 'Object'
     * type(String)    === 'Function'
     * type(/abc+/)    === 'RegExp'
     */
    type: function (o) {
      return Object.prototype.toString.call(o).slice(8, -1)
    },

    /**
     * Returns a unique number for the given object. Later calls will still return the same number.
     *
     * @param {Object} obj
     * @returns {number}
     */
    objId: function (obj) {
      if (!obj['__id']) {
        Object.defineProperty(obj, '__id', {value: ++uniqueId})
      }
      return obj['__id']
    },

    /**
     * Creates a deep clone of the given object.
     *
     * The main intended use of this function is to clone language definitions.
     *
     * @param {T} o
     * @param {Record<number, any>} [visited]
     * @returns {T}
     * @template T
     */
    clone: function deepClone(o, visited) {
      visited = visited || {}

      var clone
      var id
      switch (_.util.type(o)) {
        case 'Object':
          id = _.util.objId(o)
          if (visited[id]) {
            return visited[id]
          }
          clone = /** @type {Record<string, any>} */ ({})
          visited[id] = clone

          for (var key in o) {
            if (o.hasOwnProperty(key)) {
              clone[key] = deepClone(o[key], visited)
            }
          }

          return /** @type {any} */ (clone)

        case 'Array':
          id = _.util.objId(o)
          if (visited[id]) {
            return visited[id]
          }
          clone = []
          visited[id] = clone

          o.forEach(function (v, i) {
            clone[i] = deepClone(v, visited)
          })

          return /** @type {any} */ (clone)

        default:
          return o
      }
    }
  },

  /**
   * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
   *
   * @namespace
   * @memberof Prism
   * @public
   */
  languages: {
    /**
     * The grammar for plain, unformatted text.
     */
    plain: plainTextGrammar,
    plaintext: plainTextGrammar,
    text: plainTextGrammar,
    txt: plainTextGrammar,

    /**
     * Creates a deep copy of the language with the given id and appends the given tokens.
     *
     * If a token in `redef` also appears in the copied language, then the existing token in the copied language
     * will be overwritten at its original position.
     *
     * ## Best practices
     *
     * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
     * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
     * understand the language definition because, normally, the order of tokens matters in Prism grammars.
     *
     * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
     * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
     *
     * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
     * @param {Grammar} redef The new tokens to append.
     * @returns {Grammar} The new language created.
     * @public
     * @example
     * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
     *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
     *     // at its original position
     *     'comment': { ... },
     *     // CSS doesn't have a 'color' token, so this token will be appended
     *     'color': /\b(?:red|green|blue)\b/
     * });
     */
    extend: function (id, redef) {
      var lang = _.util.clone(_.languages[id])

      for (var key in redef) {
        lang[key] = redef[key]
      }

      return lang
    },

    /**
     * Inserts tokens _before_ another token in a language definition or any other grammar.
     *
     * ## Usage
     *
     * This helper method makes it easy to modify existing languages. For example, the CSS language definition
     * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
     * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
     * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
     * this:
     *
     * ```js
     * Prism.languages.markup.style = {
     *     // token
     * };
     * ```
     *
     * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
     * before existing tokens. For the CSS example above, you would use it like this:
     *
     * ```js
     * Prism.languages.insertBefore('markup', 'cdata', {
     *     'style': {
     *         // token
     *     }
     * });
     * ```
     *
     * ## Special cases
     *
     * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
     * will be ignored.
     *
     * This behavior can be used to insert tokens after `before`:
     *
     * ```js
     * Prism.languages.insertBefore('markup', 'comment', {
     *     'comment': Prism.languages.markup.comment,
     *     // tokens after 'comment'
     * });
     * ```
     *
     * ## Limitations
     *
     * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
     * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
     * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
     * deleting properties which is necessary to insert at arbitrary positions.
     *
     * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
     * Instead, it will create a new object and replace all references to the target object with the new one. This
     * can be done without temporarily deleting properties, so the iteration order is well-defined.
     *
     * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
     * you hold the target object in a variable, then the value of the variable will not change.
     *
     * ```js
     * var oldMarkup = Prism.languages.markup;
     * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
     *
     * assert(oldMarkup !== Prism.languages.markup);
     * assert(newMarkup === Prism.languages.markup);
     * ```
     *
     * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
     * object to be modified.
     * @param {string} before The key to insert before.
     * @param {Grammar} insert An object containing the key-value pairs to be inserted.
     * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
     * object to be modified.
     *
     * Defaults to `Prism.languages`.
     * @returns {Grammar} The new grammar object.
     * @public
     */
    insertBefore: function (inside, before, insert, root) {
      root = root || /** @type {any} */ (_.languages)
      var grammar = root[inside]
      /** @type {Grammar} */
      var ret = {}

      for (var token in grammar) {
        if (grammar.hasOwnProperty(token)) {
          if (token == before) {
            for (var newToken in insert) {
              if (insert.hasOwnProperty(newToken)) {
                ret[newToken] = insert[newToken]
              }
            }
          }

          // Do not insert token which also occur in insert. See #1525
          if (!insert.hasOwnProperty(token)) {
            ret[token] = grammar[token]
          }
        }
      }

      var old = root[inside]
      root[inside] = ret

      // Update references in other language definitions
      _.languages.DFS(_.languages, function (key, value) {
        if (value === old && key != inside) {
          this[key] = ret
        }
      })

      return ret
    },

    // Traverse a language definition with Depth First Search
    DFS: function DFS(o, callback, type, visited) {
      visited = visited || {}

      var objId = _.util.objId

      for (var i in o) {
        if (o.hasOwnProperty(i)) {
          callback.call(o, i, o[i], type || i)

          var property = o[i]
          var propertyType = _.util.type(property)

          if (propertyType === 'Object' && !visited[objId(property)]) {
            visited[objId(property)] = true
            DFS(property, callback, null, visited)
          } else if (propertyType === 'Array' && !visited[objId(property)]) {
            visited[objId(property)] = true
            DFS(property, callback, i, visited)
          }
        }
      }
    }
  },

  plugins: {},

  /**
   * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
   * and the language definitions to use, and returns a string with the HTML produced.
   *
   * The following hooks will be run:
   * 1. `before-tokenize`
   * 2. `after-tokenize`
   * 3. `wrap`: On each {@link Token}.
   *
   * @param {string} text A string with the code to be highlighted.
   * @param {Grammar} grammar An object containing the tokens to use.
   *
   * Usually a language definition like `Prism.languages.markup`.
   * @param {string} language The name of the language definition passed to `grammar`.
   * @returns {string} The highlighted HTML.
   * @memberof Prism
   * @public
   * @example
   * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
   */
  highlight: function (text, grammar, language) {
    var env = {
      code: text,
      grammar: grammar,
      language: language
    }
    _.hooks.run('before-tokenize', env)
    if (!env.grammar) {
      throw new Error('The language "' + env.language + '" has no grammar.')
    }
    env.tokens = _.tokenize(env.code, env.grammar)
    _.hooks.run('after-tokenize', env)
    return Token.stringify(_.util.encode(env.tokens), env.language)
  },

  /**
   * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
   * and the language definitions to use, and returns an array with the tokenized code.
   *
   * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
   *
   * This method could be useful in other contexts as well, as a very crude parser.
   *
   * @param {string} text A string with the code to be highlighted.
   * @param {Grammar} grammar An object containing the tokens to use.
   *
   * Usually a language definition like `Prism.languages.markup`.
   * @returns {TokenStream} An array of strings and tokens, a token stream.
   * @memberof Prism
   * @public
   * @example
   * let code = `var foo = 0;`;
   * let tokens = Prism.tokenize(code, Prism.languages.javascript);
   * tokens.forEach(token => {
   *     if (token instanceof Prism.Token && token.type === 'number') {
   *         console.log(`Found numeric literal: ${token.content}`);
   *     }
   * });
   */
  tokenize: function (text, grammar) {
    var rest = grammar.rest
    if (rest) {
      for (var token in rest) {
        grammar[token] = rest[token]
      }

      delete grammar.rest
    }

    var tokenList = new LinkedList()
    addAfter(tokenList, tokenList.head, text)

    matchGrammar(text, tokenList, grammar, tokenList.head, 0)

    return toArray(tokenList)
  },

  /**
   * @namespace
   * @memberof Prism
   * @public
   */
  hooks: {
    all: {},

    /**
     * Adds the given callback to the list of callbacks for the given hook.
     *
     * The callback will be invoked when the hook it is registered for is run.
     * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
     *
     * One callback function can be registered to multiple hooks and the same hook multiple times.
     *
     * @param {string} name The name of the hook.
     * @param {HookCallback} callback The callback function which is given environment variables.
     * @public
     */
    add: function (name, callback) {
      var hooks = _.hooks.all

      hooks[name] = hooks[name] || []

      hooks[name].push(callback)
    },

    /**
     * Runs a hook invoking all registered callbacks with the given environment variables.
     *
     * Callbacks will be invoked synchronously and in the order in which they were registered.
     *
     * @param {string} name The name of the hook.
     * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
     * @public
     */
    run: function (name, env) {
      var callbacks = _.hooks.all[name]

      if (!callbacks || !callbacks.length) {
        return
      }

      for (var i = 0, callback; (callback = callbacks[i++]); ) {
        callback(env)
      }
    }
  },

  Token: Token
}

// Typescript note:
// The following can be used to import the Token type in JSDoc:
//
//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

/**
 * Creates a new token.
 *
 * @param {string} type See {@link Token#type type}
 * @param {string | TokenStream} content See {@link Token#content content}
 * @param {string|string[]} [alias] The alias(es) of the token.
 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
 * @class
 * @global
 * @public
 */
function Token(type, content, alias, matchedStr) {
  /**
   * The type of the token.
   *
   * This is usually the key of a pattern in a {@link Grammar}.
   *
   * @type {string}
   * @see GrammarToken
   * @public
   */
  this.type = type
  /**
   * The strings or tokens contained by this token.
   *
   * This will be a token stream if the pattern matched also defined an `inside` grammar.
   *
   * @type {string | TokenStream}
   * @public
   */
  this.content = content
  /**
   * The alias(es) of the token.
   *
   * @type {string|string[]}
   * @see GrammarToken
   * @public
   */
  this.alias = alias
  // Copy of the full string this token was created from
  this.length = (matchedStr || '').length | 0
}

/**
 * A token stream is an array of strings and {@link Token Token} objects.
 *
 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
 * them.
 *
 * 1. No adjacent strings.
 * 2. No empty strings.
 *
 *    The only exception here is the token stream that only contains the empty string and nothing else.
 *
 * @typedef {Array<string | Token>} TokenStream
 * @global
 * @public
 */

/**
 * @param {RegExp} pattern
 * @param {number} pos
 * @param {string} text
 * @param {boolean} lookbehind
 * @returns {RegExpExecArray | null}
 */
function matchPattern(pattern, pos, text, lookbehind) {
  pattern.lastIndex = pos
  var match = pattern.exec(text)
  if (match && lookbehind && match[1]) {
    // change the match to remove the text matched by the Prism lookbehind group
    var lookbehindLength = match[1].length
    match.index += lookbehindLength
    match[0] = match[0].slice(lookbehindLength)
  }
  return match
}

/**
 * @param {string} text
 * @param {LinkedList<string | Token>} tokenList
 * @param {any} grammar
 * @param {LinkedListNode<string | Token>} startNode
 * @param {number} startPos
 * @param {RematchOptions} [rematch]
 * @returns {void}
 * @private
 *
 * @typedef RematchOptions
 * @property {string} cause
 * @property {number} reach
 */
function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
  for (var token in grammar) {
    if (!grammar.hasOwnProperty(token) || !grammar[token]) {
      continue
    }

    var patterns = grammar[token]
    patterns = Array.isArray(patterns) ? patterns : [patterns]

    for (var j = 0; j < patterns.length; ++j) {
      if (rematch && rematch.cause == token + ',' + j) {
        return
      }

      var patternObj = patterns[j]
      var inside = patternObj.inside
      var lookbehind = !!patternObj.lookbehind
      var greedy = !!patternObj.greedy
      var alias = patternObj.alias

      if (greedy && !patternObj.pattern.global) {
        // Without the global flag, lastIndex won't work
        var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0]
        patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g')
      }

      /** @type {RegExp} */
      var pattern = patternObj.pattern || patternObj

      for (
        // iterate the token list and keep track of the current token/string position
        var currentNode = startNode.next, pos = startPos;
        currentNode !== tokenList.tail;
        pos += currentNode.value.length, currentNode = currentNode.next
      ) {
        if (rematch && pos >= rematch.reach) {
          break
        }

        var str = currentNode.value

        if (tokenList.length > text.length) {
          // Something went terribly wrong, ABORT, ABORT!
          return
        }

        if (str instanceof Token) {
          continue
        }

        var removeCount = 1 // this is the to parameter of removeBetween
        var match

        if (greedy) {
          match = matchPattern(pattern, pos, text, lookbehind)
          if (!match || match.index >= text.length) {
            break
          }

          var from = match.index
          var to = match.index + match[0].length
          var p = pos

          // find the node that contains the match
          p += currentNode.value.length
          while (from >= p) {
            currentNode = currentNode.next
            p += currentNode.value.length
          }
          // adjust pos (and p)
          p -= currentNode.value.length
          pos = p

          // the current node is a Token, then the match starts inside another Token, which is invalid
          if (currentNode.value instanceof Token) {
            continue
          }

          // find the last node which is affected by this match
          for (
            var k = currentNode;
            k !== tokenList.tail && (p < to || typeof k.value === 'string');
            k = k.next
          ) {
            removeCount++
            p += k.value.length
          }
          removeCount--

          // replace with the new match
          str = text.slice(pos, p)
          match.index -= pos
        } else {
          match = matchPattern(pattern, 0, str, lookbehind)
          if (!match) {
            continue
          }
        }

        // eslint-disable-next-line no-redeclare
        var from = match.index
        var matchStr = match[0]
        var before = str.slice(0, from)
        var after = str.slice(from + matchStr.length)

        var reach = pos + str.length
        if (rematch && reach > rematch.reach) {
          rematch.reach = reach
        }

        var removeFrom = currentNode.prev

        if (before) {
          removeFrom = addAfter(tokenList, removeFrom, before)
          pos += before.length
        }

        removeRange(tokenList, removeFrom, removeCount)

        var wrapped = new Token(
          token,
          inside ? _.tokenize(matchStr, inside) : matchStr,
          alias,
          matchStr
        )
        currentNode = addAfter(tokenList, removeFrom, wrapped)

        if (after) {
          addAfter(tokenList, currentNode, after)
        }

        if (removeCount > 1) {
          // at least one Token object was removed, so we have to do some rematching
          // this can only happen if the current pattern is greedy

          /** @type {RematchOptions} */
          var nestedRematch = {
            cause: token + ',' + j,
            reach: reach
          }
          matchGrammar(
            text,
            tokenList,
            grammar,
            currentNode.prev,
            pos,
            nestedRematch
          )

          // the reach might have been extended because of the rematching
          if (rematch && nestedRematch.reach > rematch.reach) {
            rematch.reach = nestedRematch.reach
          }
        }
      }
    }
  }
}

/**
 * @typedef LinkedListNode
 * @property {T} value
 * @property {LinkedListNode<T> | null} prev The previous node.
 * @property {LinkedListNode<T> | null} next The next node.
 * @template T
 * @private
 */

/**
 * @template T
 * @private
 */
function LinkedList() {
  /** @type {LinkedListNode<T>} */
  var head = {value: null, prev: null, next: null}
  /** @type {LinkedListNode<T>} */
  var tail = {value: null, prev: head, next: null}
  head.next = tail

  /** @type {LinkedListNode<T>} */
  this.head = head
  /** @type {LinkedListNode<T>} */
  this.tail = tail
  this.length = 0
}

/**
 * Adds a new node with the given value to the list.
 *
 * @param {LinkedList<T>} list
 * @param {LinkedListNode<T>} node
 * @param {T} value
 * @returns {LinkedListNode<T>} The added node.
 * @template T
 */
function addAfter(list, node, value) {
  // assumes that node != list.tail && values.length >= 0
  var next = node.next

  var newNode = {value: value, prev: node, next: next}
  node.next = newNode
  next.prev = newNode
  list.length++

  return newNode
}
/**
 * Removes `count` nodes after the given node. The given node will not be removed.
 *
 * @param {LinkedList<T>} list
 * @param {LinkedListNode<T>} node
 * @param {number} count
 * @template T
 */
function removeRange(list, node, count) {
  var next = node.next
  for (var i = 0; i < count && next !== list.tail; i++) {
    next = next.next
  }
  node.next = next
  next.prev = node
  list.length -= i
}
/**
 * @param {LinkedList<T>} list
 * @returns {T[]}
 * @template T
 */
function toArray(list) {
  var array = []
  var node = list.head.next
  while (node !== list.tail) {
    array.push(node.value)
    node = node.next
  }
  return array
}

const Prism = _

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 */

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 */

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */


/***/ }),

/***/ "./node_modules/space-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/space-separated-tokens/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   stringify: () => (/* binding */ stringify)
/* harmony export */ });
/**
 * Parse space-separated tokens to an array of strings.
 *
 * @param {string} value
 *   Space-separated tokens.
 * @returns {Array<string>}
 *   List of tokens.
 */
function parse(value) {
  const input = String(value || '').trim()
  return input ? input.split(/[ \t\n\r\f]+/g) : []
}

/**
 * Serialize an array of strings as space separated-tokens.
 *
 * @param {Array<string|number>} values
 *   List of tokens.
 * @returns {string}
 *   Space-separated tokens.
 */
function stringify(values) {
  return values.join(' ').trim()
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "react-syntax-highlighter:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "build/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"demo": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_syntax_highlighter"] = self["webpackChunkreact_syntax_highlighter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./demo/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=demo-build.js.map