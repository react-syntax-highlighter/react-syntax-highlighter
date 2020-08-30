import React from 'react';

// Get all possible permutations of all power sets
//
// Super simple, non-algorithmic solution since the
// number of class names will not be greater than 3
function powerSetPermutations(arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr;
  if (arr.length === 2) {
    return [arr[0], arr[1], `${arr[0]}.${arr[1]}`, `${arr[1]}.${arr[0]}`];
  }
  if (arr.length >= 3) {
    // Currently does not support more than 3 class names
    return [
      arr[0],
      arr[1],
      arr[2],
      `${arr[0]}.${arr[1]}`,
      `${arr[0]}.${arr[2]}`,
      `${arr[1]}.${arr[0]}`,
      `${arr[1]}.${arr[2]}`,
      `${arr[2]}.${arr[0]}`,
      `${arr[2]}.${arr[1]}`,
      `${arr[0]}.${arr[1]}.${arr[2]}`,
      `${arr[0]}.${arr[2]}.${arr[1]}`,
      `${arr[1]}.${arr[0]}.${arr[2]}`,
      `${arr[1]}.${arr[2]}.${arr[0]}`,
      `${arr[2]}.${arr[0]}.${arr[1]}`,
      `${arr[2]}.${arr[1]}.${arr[0]}`
    ];
  }
}

const classNameCombinations = {};
function getClassNameCombinations(classNames) {
  if (classNames.length === 0) return [];
  if (classNames.length === 1) return classNames;
  const key = classNames.join('.');
  if (!classNameCombinations[key]) {
    classNameCombinations[key] = powerSetPermutations(classNames);
  }
  return classNameCombinations[key];
}

export function createStyleObject(classNames, elementStyle = {}, stylesheet) {
  const nonTokenClassNames = classNames.filter(
    className => className !== 'token'
  );
  const classNamesCombinations = getClassNameCombinations(nonTokenClassNames);
  return classNamesCombinations.reduce((styleObject, className) => {
    return { ...styleObject, ...stylesheet[className] };
  }, elementStyle);
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

    let props;

    if (useInlineStyles) {
      const allStylesheetSelectors = [
        ...new Set(
          Object.keys(stylesheet)
            .map(selector => selector.split('.'))
            .flat()
        )
      ];
      const className =
        properties.className &&
        properties.className.filter(className =>
          allStylesheetSelectors.includes(className)
        );

      props = {
        ...properties,
        className: createClassNameString(className),
        style: createStyleObject(
          properties.className,
          Object.assign({}, properties.style, style),
          stylesheet
        )
      };
    } else {
      props = {
        ...properties,
        className: createClassNameString(properties.className)
      };
    }

    const children = childrenCreator(node.children);
    return (
      <TagName key={key} {...props}>
        {children}
      </TagName>
    );
  }
}
