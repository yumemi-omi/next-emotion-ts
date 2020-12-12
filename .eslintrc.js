module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@emotion', 'react', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    "@emotion/pkg-renaming": "error",
  },
};
