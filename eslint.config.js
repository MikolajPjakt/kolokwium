import recommended from 'eslint-config-eslint/recommended.js';

export default [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs',
      globals: {
        node: true,
      },
    },
  },
  recommended, // Dodanie konfiguracji recommended jako osobnego elementu
];