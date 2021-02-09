import { promises as fs } from 'fs';

import spawn from 'spawndamnit';

import { getChangedFilesSince } from '../../utils/changeset-git';
import builder from '../../webpack/builder';
import { packageConfig, revFilePath } from '../../webpack/paths';
import { getPackage } from '../../utils/getPackage';

async function getPackageStatus(name: string) {
  let shouldBeBuilt = true;
  let rebuiltReason: string;
  let commithash = '';
  try {
    commithash = await fs.readFile(revFilePath, { encoding: 'utf8' });
    const changed = await getChangedFilesSince({
      cwd: process.cwd(),
      ref: commithash,
    });
    shouldBeBuilt = changed.length > 0;
    rebuiltReason = `Пакет "${name}" нужно пересобрать т.к. после сборки по коммиту "${commithash}" есть ${changed.length} связанных изменений`;
  } catch (err) {
    rebuiltReason =
      err.code === 'ENOENT'
        ? `Пакет "${name}" нужно пересобрать т.к. нет метки коммита в билде (файл "COMMITHASH")`
        : `Пересоберём пакет "${name}" на всякий случай, потому что упала ошибка:${'\n'} ${err}`;
  }

  return {
    shouldBeBuilt,
    rebuiltReason,
    commithash,
  };
}
export default async function build(force = false) {
  const { name, private: isPrivate } = getPackage(packageConfig);
  const isModule = !isPrivate;
  const { commithash = '', rebuiltReason, shouldBeBuilt } = !force
    ? await getPackageStatus(name)
    : {
        shouldBeBuilt: true,
        rebuiltReason: `Запущена принудительная сборка для пакета "${name}"`,
      };

  if (shouldBeBuilt) {
    console.log(rebuiltReason);
    await builder('production', name, isModule);
    console.log(`Собрали пакет "${name}"`);
    if (isModule) {
      await spawn('tsc', [], { stdio: 'inherit' });
      console.log(`Сгенерили d.ts для пакета "${name}"`);
    }
  } else {
    console.log(`Пакет "${name}" не нуждается в дополнительной сборке, использован ${commithash}`);
  }
}
