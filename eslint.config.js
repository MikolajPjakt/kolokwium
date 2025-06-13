export default [
    {
      languageOptions: {
        ecmaVersion: 2021,
        sourceType: 'commonjs',
        globals: {
          node: true, // Zamiana env.node na globals.node
        },
      },
      extends: 'eslint:recommended',
    },
  ];