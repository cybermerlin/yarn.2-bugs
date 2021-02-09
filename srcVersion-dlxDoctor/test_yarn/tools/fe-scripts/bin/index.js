#!/usr/bin/env node
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('ts-node').register({
  preferTsExts: true,
  dir: __dirname,
  transpileOnly: true,
  project: path.resolve(__dirname, '../tsconfig.json'),
  compilerOptions: {
    module: 'CommonJS',
    target: 'ES2018',
  },
  /* options */
});
require('../src');
