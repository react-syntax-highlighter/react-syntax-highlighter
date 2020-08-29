import React from 'react';

function recursivePermute(arr, permutation = []) {
  return arr.length === 0
    ? [permutation]
    : arr.flatMap((item, i, arr) =>
        recursivePermute(
          arr.filter((_, j) => j !== i),
          [...permutation, item]
        )
      );
}

const permutations = {};
function permute(arr) {
  const key = arr.join('.');
  if (!permutations[key]) {
    permutations[key] = recursivePermute(arr);
  }
  return permutations[key];
}

function getSubArrays(arr) {
  if (arr.length === 1) return [arr];
  else {
    const subarr = getSubArrays(arr.slice(1));
    return subarr.concat(
      subarr.map(el => el.concat(arr[0])),
      [[arr[0]]]
    );
  }
}

const classNameCombinations = {};
function getClassNameCombinations(classNames) {
  if (classNames.length === 0) return [];
  if (classNames.length === 1) return classNames;
  const key = classNames.join('.');
  if (!classNameCombinations[key]) {
    classNameCombinations[key] = getSubArrays(classNames)
      .flatMap(classNames =>
        classNames.length > 1 ? permute(classNames) : [classNames]
      )
      // Less specific (fewer class names) to more specific (more class names)
      .sort((a, b) => (a.length < b.length ? -1 : 1))
      .map(arr => arr.join('.'));
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
