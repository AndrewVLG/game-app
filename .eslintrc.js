module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'import/no-unresolved': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'import/named': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-duplicates': ['error', { 'prefer-inline': true }],
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['react'],
        groups: ['external', 'builtin', 'parent', 'sibling', 'index', 'type'],
        pathGroups: [
          {
            pattern: 'react-*',
            group: 'external',
          },
          {
            pattern: '@reduxjs/*',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@mui/*',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '../../../**',
            group: 'parent',
            position: 'before',
          },
        ],
      },
    ],
  },
}
