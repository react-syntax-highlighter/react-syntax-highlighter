import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
export function createStyleObject(classNames) {
  var elementStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var stylesheet = arguments.length > 2 ? arguments[2] : undefined;
  return classNames.reduce(function (styleObject, className) {
    return _objectSpread({}, styleObject, stylesheet[className]);
  }, elementStyle);
}
export function createClassNameString(classNames) {
  return classNames.join(' ');
}
export function createChildren(stylesheet, useInlineStyles) {
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
export default function createElement(_ref) {
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
    var nonStylesheetClassNames = useInlineStyles && properties.className && properties.className.filter(function (className) {
      return !stylesheet[className];
    });
    var className = nonStylesheetClassNames && nonStylesheetClassNames.length ? nonStylesheetClassNames : undefined;
    var props = useInlineStyles ? _objectSpread({}, properties, {
      className: className && createClassNameString(className)
    }, {
      style: createStyleObject(properties.className, Object.assign({}, properties.style, style), stylesheet)
    }) : _objectSpread({}, properties, {
      className: createClassNameString(properties.className)
    });
    var children = childrenCreator(node.children);
    return React.createElement(TagName, _extends({
      key: key
    }, props), children);
  }
}