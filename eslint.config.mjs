import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import importPlugin from 'eslint-plugin-import'

export default [
  {
    ignores: ['node_modules/**', 'es/**', 'lib/**', 'build/**', 'storybook-static/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          legacyDecorators: true,
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        setTimeout: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React rules
      'react/prop-types': 0,
      'react/display-name': 0,
      'react/jsx-no-target-blank': 0,
      'react/jsx-key': 1,
      'react/no-find-dom-node': 0,

      // Style rules
      'comma-dangle': [2, 'always-multiline'],
      'indent': [2, 2, { SwitchCase: 1 }],
      'jsx-quotes': [2, 'prefer-double'],
      'max-len': [1, { code: 140 }],
      'no-mixed-spaces-and-tabs': 2,
      'no-tabs': 2,
      'no-trailing-spaces': 2,
      'quotes': [2, 'single'],
      'semi': [2, 'never'],
      'space-before-blocks': 2,
      'space-in-parens': 2,
      'space-infix-ops': 2,
      'spaced-comment': 2,

      // TypeScript rules
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/ban-ts-ignore': 0,
      '@typescript-eslint/interface-name-prefix': 0,
      '@typescript-eslint/no-use-before-define': 0,

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'],
    rules: {
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-require-imports': 0,
    },
  },
]
