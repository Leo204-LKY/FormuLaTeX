import type { Linter } from 'eslint';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import json from '@eslint/json';
import css from '@eslint/css';
import vueParser from 'vue-eslint-parser';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  // Ignore files
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/*.min.js',
      '**/*.config.js',
      '**/*.config.mjs',
      'electron-builder.json',
      '**/tsconfig*.json',
      '.vscode/**',
    ],
  },

  // JS/TS universal rules (main process + rendering process)
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.node as Record<string, boolean>, // Main process environment default is Node.js
    },
  },

  // TS type checking (main process)
  tseslint.configs.recommended as Linter.Config,

  // Vue 3
  {
    files: ['**/*.vue'],
    plugins: { vue: pluginVue },
    ...pluginVue.configs['flat/essential'][0],
    languageOptions: {
      parser: vueParser,
      ...pluginVue.configs['flat/essential'][0].languageOptions,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
      globals: globals.browser as Record<string, boolean>,
    },
  },

  // JSON
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.jsonc'],
    plugins: { json },
    language: 'json/jsonc',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.json5'],
    plugins: { json },
    language: 'json/json5',
    extends: ['json/recommended'],
  },

  // CSS
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
  },

  // Prettier config
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,vue,json,css}'],
    plugins: { prettier },
    rules: {
      'prettier/prettier': 'error', // Report prettier as ESLint errors
    },
  },
  eslintPluginPrettierRecommended as Linter.Config,
]);
