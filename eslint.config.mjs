import { defineConfig, globalIgnores } from 'eslint/config'
import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import jestPlugin from 'eslint-plugin-jest'

export default defineConfig([
  // 글로벌 무시 경로 
  globalIgnores(['dist']),
  // 기본 ESLint 추천 설정 포함 (JavaScript 기본 룰셋)
  js.configs.recommended,

  // 프로젝트 주요 설정: React, TypeScript, Prettier 플러그인 적용
  {
    plugins: {
      react,
      'react-hooks': reactHooks,
      prettier: prettierPlugin,
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
         project: './tsconfig.eslint.json',
      },
      globals: {},
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },

  // src 내부 모든 JS/TS 파일에 브라우저 환경 전역 변수 추가
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
      },
    },
  },

  // 테스트 관련 파일에 대해 Jest 플러그인 활성화 및 Jest 전역 변수 등록
  {
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**/*.{js,jsx,ts,tsx}'],
    plugins: {
      jest: jestPlugin,
    },
    languageOptions: {
      globals: {
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
      },
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
    },
  },

  // ESLint 검사 제외할 파일/폴더
  {
    ignores: ['src/vite-env.d.ts', '.yarn/**', '.pnp.*', 'eslint.config.*', 'tsconfig*.json'],
  },

  // Prettier 관련 설정을 마지막에 적용
  prettierConfig,
])
