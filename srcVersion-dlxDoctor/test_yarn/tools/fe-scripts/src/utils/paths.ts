import { dirname } from 'path';

import fs from 'fs-extra';
import findUp from 'find-up';

import { FindPathsResult } from './types';

export function findPaths(): FindPathsResult {
  const targetDir = fs.realpathSync(process.cwd());
  const yarnPlace = findUp.sync('yarn.lock') || '';
  const targetRoot = dirname(yarnPlace);

  return {
    targetDir,
    targetRoot,
    runInRootDir: targetDir === targetRoot,
  };
}
