import React from 'react';

const classSelectorClassNames = {};
function classSelectorToClassNames(selector) {
  if (!selector.includes(".")) return null;
  if (!classSelectorClassNames[selector]) {
    classSelectorClassNames[selector] = selector.split(".").filter(Boolean);
  }
  return classSelectorClassNames[selector];
}

// Is array1 a subset of array2
function isSubset(array1, array2) {
  if (!array1 || !array2) return false;
  if (!Array.isArray(array1) || !Array.isArray(array2)) return false;
  const intersection = array1.filter((element) => array2.includes(element));
  return intersection.length === array1.length;
}

export function createStyleObject(classNames, elementStyle = {}, stylesheet) {
  const newStyles = Object.entries(stylesheet).reduce(
    (newStyleObject, [selector, styles]) => {
      if (classNames.includes(selector)) {
        return { ...styles, ...newStyleObject };
      } else if (isSubset(classSelectorToClassNames(selector), classNames)) {
        return { ...newStyleObject, ...styles };
      }
      return newStyleObject;
    },
    {}
  );
  return { ...elementStyle, ...newStyles };
}

export function createClassNameString(classNames) {
  return classNames.join(' ');
}

export function createChildren(stylesheet, useInlineStyles) {
  let childrenCount = 0;
  return children => {
    childrenCount += 1;
    return children.map((child, i) =>
      createElement({
        node: child,
        stylesheet,
        useInlineStyles,
        key: `code-segment-${childrenCount}-${i}`
      })
    );
  };
}

export default function createElement({
  node,
  stylesheet,
  style = {},
  useInlineStyles,
  key
}) {
  const { properties, type, tagName: TagName, value } = node;
  if (type === 'text') {
    return value;
  } else if (TagName) {
    const childrenCreator = createChildren(stylesheet, useInlineStyles);
    const nonStylesheetClassNames =
      useInlineStyles &&
      properties.className &&
      properties.className.filter(className => !stylesheet[className]);
    const className =
      nonStylesheetClassNames && nonStylesheetClassNames.length
        ? nonStylesheetClassNames
        : undefined;
    const props = useInlineStyles
      ? {
          ...properties,
          ...{ className: className && createClassNameString(className) },
          style: createStyleObject(
            properties.className,
            Object.assign({}, properties.style, style),
            stylesheet
          )
        }
      : {
          ...properties,
          className: createClassNameString(properties.className)
        };
    const children = childrenCreator(node.children);
    return (
      <TagName key={key} {...props}>
        {children}
      </TagName>
    );
  }
}
