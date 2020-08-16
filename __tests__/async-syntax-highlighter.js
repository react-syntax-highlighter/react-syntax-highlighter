import AsyncSyntaxHighlighter from '../src/async-syntax-highlighter';

test('AsyncSyntaxHighlighter registerLanguage when registerLanguage is undefined', () => {
  const SyntaxHighlighter = AsyncSyntaxHighlighter({});

  expect(() => {
    SyntaxHighlighter.registerLanguage('test', {});
  }).toThrowError();

  expect(SyntaxHighlighter.languages.size).toEqual(0);
});

test("AsyncSyntaxHighlighter registerLanguage when registerLanguage is defined but astGenerator isn't", () => {
  const registerLanguage = jest.fn();
  const SyntaxHighlighter = AsyncSyntaxHighlighter({ registerLanguage });

  const language = {
    123: 456
  };

  SyntaxHighlighter.registerLanguage('test', language);
  expect(SyntaxHighlighter.languages.get('test')).toEqual(language);
  expect(SyntaxHighlighter.languages.size).toEqual(1);
});

test('AsyncSyntaxHighlighter registerLanguage when registerLanguage & astGenerator is defined', () => {
  const registerLanguage = jest.fn();

  const SyntaxHighlighter = AsyncSyntaxHighlighter({ registerLanguage });
  SyntaxHighlighter.astGenerator = { test: '123' };

  SyntaxHighlighter.registerLanguage('test', {});
  expect(SyntaxHighlighter.languages).not.toEqual([
    { name: 'test', language: {} }
  ]);
  expect(registerLanguage).toBeCalledWith(
    SyntaxHighlighter.astGenerator,
    'test',
    {}
  );
});

test('AsyncSyntaxHighlighter isRegistered when registerLanguage is not defined', () => {
  const SyntaxHighlighter = AsyncSyntaxHighlighter({});

  expect(() => {
    SyntaxHighlighter.isRegistered('test', {});
  }).toThrowError();
});

test('AsyncSyntaxHighlighter isRegistered when astGenerator is not defined it checks the languages array', () => {
  const registerLanguage = jest.fn();

  const SyntaxHighlighter = AsyncSyntaxHighlighter({ registerLanguage });
  SyntaxHighlighter.astGenerator = null;
  SyntaxHighlighter.languages.set('test', {});
  expect(SyntaxHighlighter.isRegistered('test')).toEqual(true);
});

test('AsyncSyntaxHighlighter isRegistered when astGenerator is defined it should call isLanguageRegistered', () => {
  const registerLanguage = jest.fn();

  const SyntaxHighlighter = AsyncSyntaxHighlighter({ registerLanguage });
  SyntaxHighlighter.astGenerator = null;
  SyntaxHighlighter.languages.set('test', {});
  expect(SyntaxHighlighter.isRegistered('test')).toEqual(true);
});

test('AsyncSyntaxHighlighter loadAstGenerator should return the promise of the loader', () => {
  const testValue = 'test';
  const loader = jest.fn().mockReturnValue({
    then: jest.fn().mockReturnValue(testValue)
  });

  const SyntaxHighlighter = AsyncSyntaxHighlighter({ loader });
  expect(SyntaxHighlighter.loadAstGenerator()).toEqual(testValue);
});

test('AsyncSyntaxHighlighter loadAstGenerator when astGenerator resolves', async () => {
  const astGenerator = 'test';
  const loader = jest.fn().mockResolvedValue(astGenerator);

  const SyntaxHighlighter = AsyncSyntaxHighlighter({ loader });
  await SyntaxHighlighter.loadAstGenerator();
  expect(SyntaxHighlighter.astGenerator).toEqual(astGenerator);
});

test('AsyncSyntaxHighlighter loadAstGenerator when astGenerator resolves and it has languages in the language array', async () => {
  const astGenerator = 'test';
  const registerLanguage = jest.fn();
  const loader = jest.fn().mockResolvedValue(astGenerator);

  const SyntaxHighlighter = AsyncSyntaxHighlighter({
    loader,
    registerLanguage
  });
  const testLanguage = { name: 'cpp', language: {} };

  SyntaxHighlighter.languages.set(testLanguage.name, testLanguage.language);

  await SyntaxHighlighter.loadAstGenerator();
  expect(registerLanguage).toBeCalledWith(
    astGenerator,
    testLanguage.name,
    testLanguage.language
  );
});

test('AsyncSyntaxHighlighter when a supportedLanguages array is passed in it should be set to the supported languages static field', () => {
  const supportedLanguages = ['test'];
  const registerLanguage = jest.fn();
  const languageLoaders = {
    foo: () => 'bar'
  };
  const astGenerator = 'test';
  const loader = jest.fn().mockResolvedValue(astGenerator);

  const SyntaxHighlighter = AsyncSyntaxHighlighter({
    loader,
    registerLanguage,
    languageLoaders,
    supportedLanguages
  });

  expect(SyntaxHighlighter.supportedLanguages).toEqual(supportedLanguages);
});

test('AsyncSyntaxHighlighter when language loaders are passed in, it should set the keys to the supported languages static field', () => {
  const registerLanguage = jest.fn();
  const languageLoaders = {
    foo: () => 'bar'
  };
  const astGenerator = 'test';
  const loader = jest.fn().mockResolvedValue(astGenerator);

  const SyntaxHighlighter = AsyncSyntaxHighlighter({
    loader,
    registerLanguage,
    languageLoaders
  });

  expect(SyntaxHighlighter.supportedLanguages).toEqual(['foo']);
});
