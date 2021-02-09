const isTest = process.env.NODE_ENV === 'test';

module.exports = {
  env: {
    development: {
      presets: [
        '@babel/preset-react',
        '@babel/preset-typescript',
        'proposal-typescript',
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              browsers: ['last 1 version'],
            },
          },
        ],
      ],
      plugins: ['react-hot-loader/babel'],
    },
    production: {
      presets: [
        '@babel/preset-react',
        '@babel/preset-typescript',
        'proposal-typescript',
        [
          '@babel/preset-env',
          {
            exclude: ['transform-async-to-generator', 'transform-regenerator'],
            modules: false,
            targets: {
              browsers: ['last 2 safari version', 'last 2 chrome version'],
            },
          },
        ],
      ],
    },
    test: {
      plugins: ['babel-plugin-import-remove-resource-query', '@babel/plugin-transform-modules-commonjs'],
    },
  },
  plugins: [
    'ts-optchain',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    'dynamic-import-webpack',
    'lodash',
    'ramda',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    [
      'babel-plugin-styled-components',
      {
        ssr: false,
        displayName: !isTest,
      },
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
    '@loadable/babel-plugin',
  ],
};
