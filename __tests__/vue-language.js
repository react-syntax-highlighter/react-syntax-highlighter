import React from 'react';
import renderer from 'react-test-renderer';
import SyntaxHighlighter from '../src';

const code = `<script lang="ts" setup>
import { Layout } from "@ui/libs";
</script>

<template>
    <Layout />
</template>
`;

test('SyntaxHighlighter component renders vue', () => {
  const tree = renderer
    .create(<SyntaxHighlighter language="vue">{code}</SyntaxHighlighter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
