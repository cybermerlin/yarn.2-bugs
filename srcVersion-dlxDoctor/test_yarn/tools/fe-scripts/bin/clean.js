#!/usr/bin/env node

require('ts-node').register({
  preferTsExts: true,
  dir: __dirname,
  /* options */
});
require('../src/clean');
