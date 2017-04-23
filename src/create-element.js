import React from 'react';

export function createStyleObject(classNames, elementStyle = {}, stylesheet) {
  return classNames.reduce((styleObject, className) => {
    return {...styleObject, ...stylesheet[className]};
  }, elementStyle);
}

export function createClassNameString(classNames) {
  return classNames.join(' ');
}


export function createChildren(stylesheet, useInlineStyles) {
  let childrenCount = 0;
  return children => {
    childrenCount += 1;
    return children.map((child, i) => createElement({
      node: child,
      stylesheet,
      useInlineStyles,
      key:`code-segment-${childrenCount}-${i}`
    }));
  }
}

export default function createElement({ node, stylesheet, style = {}, useInlineStyles, key }) {
  const { properties, type, tagName: TagName, value } = node;
  if (type === 'text') {
    return value;
  } else if (TagName) {
    const childrenCreator = createChildren(stylesheet, useInlineStyles);
    const props = (
      useInlineStyles
      ?
      { 
        style: createStyleObject(
          properties.className, 
          Object.assign({}, properties.style, style), 
          stylesheet
        ) 
      }
      :
      { className: createClassNameString(properties.className) }
    );
    const children = childrenCreator(node.children);
    return <TagName key={key} {...props}>{children}</TagName>;
  }
}