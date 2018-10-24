import React from 'react';
import renderer from 'react-test-renderer';
import AsyncSyntaxHighlighter from "../src/async-syntax-highlighter";

test('AsyncSyntaxHighlighter registerLanguage when registerLanguage is undefined', () => {
  const SyntaxHighlighter = AsyncSyntaxHighlighter({});

  SyntaxHighlighter.registerLanguage("test", {});
  expect(SyntaxHighlighter.languages).toEqual([]);
});

test('AsyncSyntaxHighlighter registerLanguage when registerLanguage is defined but astGenerator isn\'t', () => {
  const registerLanguage = jest.fn();
  const SyntaxHighlighter = AsyncSyntaxHighlighter({ registerLanguage });

  SyntaxHighlighter.registerLanguage("test", {});
  expect(SyntaxHighlighter.languages).toEqual([ { name: "test", language: {} }]);
});

test('AsyncSyntaxHighlighter registerLanguage when registerLanguage & astGenerator is defined', () => {
  const registerLanguage = jest.fn();
  
  const SyntaxHighlighter = AsyncSyntaxHighlighter({ registerLanguage });
  SyntaxHighlighter.astGenerator = { test: '123' };

  SyntaxHighlighter.registerLanguage("test", {});
  expect(SyntaxHighlighter.languages).not.toEqual([ { name: "test", language: {} }]);
  expect(registerLanguage).toBeCalledWith(SyntaxHighlighter.astGenerator, "test", {})
});

test('AsyncSyntaxHighlighter isRegistered when registerLanguage is not defined', () => {
  const SyntaxHighlighter = AsyncSyntaxHighlighter({ });

  expect(SyntaxHighlighter.isRegistered("test")).toEqual(true);
});

test('AsyncSyntaxHighlighter isRegistered when astGenerator is not defined it checks the languages array', () => {
  const registerLanguage = jest.fn();
  
  const SyntaxHighlighter = AsyncSyntaxHighlighter({ registerLanguage });
  SyntaxHighlighter.astGenerator = null;
  SyntaxHighlighter.languages.push({ name: 'test' })
  expect(SyntaxHighlighter.isRegistered('test')).toEqual(true);
});

test('AsyncSyntaxHighlighter isRegistered when astGenerator is defined it should call isLanguageRegistered', () => {
  const registerLanguage = jest.fn();
  
  const SyntaxHighlighter = AsyncSyntaxHighlighter({ registerLanguage });
  SyntaxHighlighter.astGenerator = null;
  SyntaxHighlighter.languages.push({ name: 'test' })
  expect(SyntaxHighlighter.isRegistered('test')).toEqual(true);
});

test('AsyncSyntaxHighlighter loadAstGenerator should return the promise of the loader', () => {
  const testValue = "test";
  const loader = jest.fn().mockReturnValue({
    then: jest.fn().mockReturnValue(testValue)
  })
  
  
  const SyntaxHighlighter = AsyncSyntaxHighlighter({ loader });
  expect(SyntaxHighlighter.loadAstGenerator()).toEqual(testValue);
});

test('AsyncSyntaxHighlighter loadAstGenerator when astGenerator resolves', async () => {
  const astGenerator = "test";
  const loader = jest.fn().mockResolvedValue(astGenerator)
  
  
  const SyntaxHighlighter = AsyncSyntaxHighlighter({ loader });
  await SyntaxHighlighter.loadAstGenerator();
  expect(SyntaxHighlighter.astGenerator).toEqual(astGenerator)
});

test('AsyncSyntaxHighlighter loadAstGenerator when astGenerator resolves and it has languages in the language array', async () => {
  const astGenerator = "test";
  const registerLanguage = jest.fn();
  const loader = jest.fn().mockResolvedValue(astGenerator)
  
  
  const SyntaxHighlighter = AsyncSyntaxHighlighter({ loader, registerLanguage });
  const testLanguage = { name: "cpp", language: { } };

  SyntaxHighlighter.languages.push(testLanguage);

  await SyntaxHighlighter.loadAstGenerator();
  expect(registerLanguage).toBeCalledWith(astGenerator, testLanguage.name, testLanguage.language)
});