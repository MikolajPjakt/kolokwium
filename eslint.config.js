import eslintConfigESLint from 'eslint-config-eslint';

export default [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module', // Zmienione z 'commonjs' na 'module' bo package.json ma "type": "module"
      globals: {
        node: true,
      },
    },
  },
  ...eslintConfigESLint, // Rozłożenie tablicy konfiguracji
];