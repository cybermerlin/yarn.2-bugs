#!/usr/bin/env node

console.warn(`Эта команда теперь DEPRECATED переходите на использование pcbl <command>`);
require('ts-node').register({
  preferTsExts: true,
  dir: __dirname,
  /* options */
});
require('../src/build').build();
