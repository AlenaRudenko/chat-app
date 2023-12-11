module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
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
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
        moduleDirectory: ['src', 'node_modules'],
      },
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by defaul

        // use a glob pattern
        project: 'packages/*/tsconfig.json',
      },
    },
    'import/order': [
      2,
      {
        groups: ['external', 'builtin', 'index', 'sibling', 'parent', 'internal', 'type'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always-and-inside-groups',
      },
    ],
  },
  rules: {
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }], //should add ".ts" if typescript project
    'no-console': 1,
    'no-case-declarations': 1,
    'prettier/prettier': 2,
    'no-debugger': 1,
    'no-else-return': 1,
    'no-param-reassign': 1,
    'no-undef': 'off',
    'no-unused-vars': 0,
    'no-var': 1,
    'object-shorthand': 1,
    'prefer-const': 1,
    'react/jsx-boolean-value': 1,
    'react/jsx-curly-brace-presence': 1,
    'react/jsx-key': 1,
    'react/jsx-sort-props': [
      1,
      {
        callbacksLast: true,
        reservedFirst: true,
        shorthandLast: true,
      },
    ],
    'react/no-array-index-key': 1,
    'react/prefer-stateless-function': 1,
    'react/self-closing-comp': 1,
    'react/require-default-props': 1,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      0,
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      1,
      {
        functions: false,
        classes: false,
        variables: true,
      },
    ],
  },
}
