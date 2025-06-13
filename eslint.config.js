export default [
    {
      languageOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        globals: {
          node: true,
        },
      },
      rules: {
        // Podstawowe reguły ESLint
        'no-unused-vars': 'error',
        'no-undef': 'error',
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
      },
    },
    {
      // Specjalna konfiguracja dla plików testowych
      files: ['**/*.test.js', '**/*.spec.js'],
      languageOptions: {
        globals: {
          describe: 'readonly',
          test: 'readonly',
          expect: 'readonly',
          jest: 'readonly',
        },
      },
    },
  ];