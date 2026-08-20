import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,

  {
    files: ['webpack.config.js'],

    languageOptions: {
      globals: {
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
      },
    },

    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
);
