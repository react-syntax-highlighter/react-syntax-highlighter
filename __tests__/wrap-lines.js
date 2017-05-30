import React from 'react';
import renderer from 'react-test-renderer';
import SyntaxHighlighter from "../src/index.js";

const code = `const woah = fun => fun + 1;
const dude = woah(2) + 3;
function thisIsAFunction() {
  return [1,2,3].map(n => n + 1).filter(n !== 3);
}
console.log('making up fake code is really hard');

function itIs() {
  return 'no seriously really it is';
}
`;

const javaCode = "package com.javatest;\n\npublic class BubbleSort {\n  /**\n   * Applies bubble sort to an array and returns whether the array was sorted correctly.\n   */\n  public boolean checkSort(int[] a) {\n    sort(a);\n\n    for (int i = 0; i < a.length - 1; i++) {\n      if (a[i] > a[i + 1]) {\n        return false;\n      }\n    }\n\n    return true;\n  }\n\n  /**\n   * Bubble sort an array, mutating the array (contains a bug).\n   */\n  public void sort(int [] a) {\n    int j;\n    boolean flag = true;\n    int temp;";

test('SyntaxHighlighter component renders correctly', () => {
  const tree = renderer.create(
    <SyntaxHighlighter language='javascript' wrapLines={true}>{code}</SyntaxHighlighter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('SyntaxHighlighter allows lineStyle as object', () => {
  const tree = renderer.create(
    <SyntaxHighlighter language='javascript' wrapLines={true} lineStyle={{color: "red"}}>{code}</SyntaxHighlighter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('SyntaxHighlighter allows lineStyle as function', () => {
  const tree = renderer.create(
    <SyntaxHighlighter language='javascript' wrapLines={true} lineStyle={() => ({color: "red"})}>{code}</SyntaxHighlighter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test("SyntaxHighlighter renders java code correctly with wrapLines", () => {
  const tree = renderer.create(
    <SyntaxHighlighter
          language='java'
          wrapLines={true}
          lineStyle={(lineNumber) => {
             const style = { display: '', backgroundColor: '' };
             if (lineNumber < 5) {
                  style.display = 'block';
                  style.backgroundColor = '#A9DBB8';
             } else if (lineNumber < 10) {
                 style.display = 'block';
                 style.backgroundColor = '#EDE4AF';
             } else if (lineNumber < 20) {
                 style.display = 'block';
                 style.backgroundColor = '#BA2D0B';
             }
             return style;
          }}
    >
         {javaCode}
    </SyntaxHighlighter>
  );
  expect(tree).toMatchSnapshot();
});