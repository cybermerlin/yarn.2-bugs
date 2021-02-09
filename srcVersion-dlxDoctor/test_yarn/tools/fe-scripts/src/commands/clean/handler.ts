import { resolve as resolvePath } from 'path';

import fs from 'fs-extra';

import { findPaths } from '../../utils/paths';

const { targetDir, targetRoot, runInRootDir } = findPaths();

export default async function (): Promise<void> {
  await fs.remove(resolvePath(targetDir, 'build'));
  await fs.remove(resolvePath(targetDir, 'tsconfig.tsbuildinfo'));

  if (runInRootDir) {
    await fs.remove(resolvePath(targetRoot, 'COMMITHASH'));
  }
}
