import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

export default tseslint.config(
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
  },
  {
    ignores: ['**/.next/**/*', '*.config.*'],
  },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  ...compat.extends('next/core-web-vitals'),
  // ...compat.extends('eslint-plugin-tailwindcss'),
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-confusing-void-expression': 'off',
    },
  },
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  // {
  //   plugins: {
  //     import: importPlugin,
  //   },
  //   rules: {
  //     "import/order": [
  //       "error",
  //       {
  //         groups: ["builtin", "external", "internal"],
  //         alphabetize: { order: "asc", caseInsensitive: true },
  //       },
  //     ],
  //     "import/newline-after-import": "error",
  //     "import/no-duplicates": "error",
  //   },
  // },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    languageOptions: {
      globals: {
        React: 'readonly',
      },
    },
    rules: {
      'react/jsx-boolean-value': 'error',
      'react/jsx-curly-brace-presence': 'error',
    },
  },
  eslintConfigPrettier
);
