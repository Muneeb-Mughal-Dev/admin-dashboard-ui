import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            'prettier',
            'eslint:recommended',
            'plugin:react-hooks/recommended',
            'plugin:tailwindcss/recommended',
            'plugin:@typescript-eslint/recommended',
        ],
        ignorePatterns: ['dist', '.eslintrc.cjs'],
        parser: '@typescript-eslint/parser',
        files: ['./src**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'tailwindcss/no-custom-classname': 'off',
            'tailwindcss/classnames-order': 'error',
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        },
        settings: {
            tailwindcss: {
                callees: ['cn'],
                config: 'tailwind.config.js',
            },
        },
        overrides: [
            {
                files: ['*.ts', '*.tsx'],
                parser: '@typescript-eslint/parser',
            },
        ],
    },
)
