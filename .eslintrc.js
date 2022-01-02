module.exports = {
  // Use this top section for any general rule or configuration that applies to
  // both JavaScript and TypeScript.
  globals: {
    module: true,
    describe: true,
    it: true,
  },
  // Use the TypeScript parser for all files.
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  plugins: [
    'import', // See https://github.com/benmosher/eslint-plugin-import
    'prettier', // eslint-plugin-prettier - Runs Prettier as an ESLint rule
    'jest', // eslint-plugin-jest
  ],
  extends: [
    'eslint:recommended',
    // eslint-config-prettier
    'prettier', // Turns off rules that might conflict with Prettier.
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-trailing-spaces': 'error',
    'max-len': [
      'warn',
      {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'no-underscore-dangle': 'off',
    'no-param-reassign': ['error', { props: false }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'only-multiline',
      },
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    'no-console': 'warn',
    'no-useless-escape': 'off',
    semi: ['error', 'always'],
    'import/no-default-export': 'warn',
  },

  // Use this section for TypeScript specfic rules or configuration.
  overrides: [
    {
      files: ['**/*.ts'],
      env: { es6: true, node: true },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier', // Turns off all rules that might conflict with Prettier.
      ],
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './src/tsconfig.eslint.json',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-unnecessary-condition': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'after-used',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
        '@typescript-eslint/member-delimiter-style': [
          'warn',
          {
            multiline: {
              delimiter: 'semi',
              requireLast: true,
            },
            singleline: {
              delimiter: 'semi',
              requireLast: false,
            },
          },
        ],
        'jest/prefer-expect-assertions': [
          'error',
          {
            onlyFunctionsWithAsyncKeyword: true,
          },
        ],
      },
    },
  ],
};
