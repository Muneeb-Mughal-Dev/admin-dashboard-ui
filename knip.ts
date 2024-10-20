import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  entry: ['src/main.tsx'],
  project: ['src/**/*.{js,jsx,ts,tsx}'],
  vite: {
    config: ['vite*.config.{js,mjs,ts,cjs,mts,cts}'],
  },
  typescript: {
    config: ['tsconfig.json', 'tsconfig.*.json'],
  },
  prettier: {
    config: [
      '.prettierrc',
      '.prettierrc.{json,js,cjs,mjs,yml,yaml,toml,json5}',
      'prettier.config.{js,cjs,mjs}',
      'package.{json,yaml}',
    ],
  },
  postcss: {
    config: [
      'package.json',
      '.postcssrc',
      '.postcssrc.{json,js,cjs,mjs,ts,mts,cts,yaml,yml}',
      'postcss.config.{js,cjs,mjs,ts,mts,cts,json}',
    ],
  },
  eslint: {
    config: ['.eslintrc', '.eslintrc.{js,json,cjs}', '.eslintrc.{yml,yaml}', 'package.json'],
    entry: ['eslint.config.{js,cjs,mjs}'],
  },
}

export default config
