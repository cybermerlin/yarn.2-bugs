import spawn from 'spawndamnit';

import { root } from '../../webpack/paths';

const isCI = !!process.env.BUILD_NUMBER;
const isFeatureBranch = !!process.env.IS_FEATURE_BRANCH;

export default async (runner: string, args: string[]): Promise<void> => {
  if (!isCI) {
    // для совместимости команды yarn lerna:check-dep, чтобы не делать дополнительную команду в package.json
    await spawn('lerna', [runner, '--since', 'HEAD', ...args], {
      cwd: root.path,
      stdio: 'inherit',
    });
    return;
  }

  const commandKey = [runner, ...args].join(' ');

  const commithash = isFeatureBranch ? 'develop' : process.env.GIT_PREVIOUS_SUCCESSFUL_COMMIT;

  const launchMessage = commithash
    ? `Запуск CI в пакетах, которые изменились после ${commithash}`
    : 'Первый запуск d CI для всего солюшена';

  console.log(launchMessage);

  const { code, stderr } = commithash
    ? await spawn('lerna', [runner, '--since', commithash, ...args], {
        cwd: root.path,
        stdio: 'inherit',
      })
    : await spawn('lerna', [runner, '--since', 'develop', ...args], {
        cwd: root.path,
        stdio: 'inherit',
      });

  if (code !== 0) throw stderr.toString('utf8');

  console.log(`Запуск команды ${commandKey} прошёл успешно`);
};
