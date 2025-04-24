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
      '**/generated/prisma/**',
    ],
  },

  // JS/TS universal rules (main process + rendering process)
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.node, // 默认认为主进程环境为 Node.js
    },
  },

  // TS type checking (main process)
  tseslint.configs.recommended,

  // Vue 3
  {
    files: ['**/*.vue'],
    plugins: { vue: pluginVue },
    rules: pluginVue.configs['flat/essential'].rules ?? {},
    languageOptions: {
      parser: vueParser,
      ...pluginVue.configs['flat/essential'].languageOptions,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
      globals: globals.browser,
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
  eslintPluginPrettierRecommended,
]);
