import { CommandModule } from 'yargs';

const commandModule: CommandModule<{}, { runner: 'run' | 'exec'; args: string[] }> = {
  command: 'changed-ci <runner> [args..]',
  describe:
    'Запускает команду в СI для изменившихся пакетов относительно последнего успешного комита или ветки develop',
  builder: (cmdObj) =>
    cmdObj
      .positional('runner', {
        choices: ['run', 'exec'] as const,
        description: 'Команда запуска (run или exec), аналогичная той, что есть у лерны',
        demandOption: 'Вы должны обязательно указать команду запуска (run или exec)',
      })
      .positional('args', {
        type: 'string',
        array: true,
        description: 'Команда или скрипт вместе с аргументами к ним',
        demandOption: 'Вы должны обязательно указать что будет вызвано в пакете',
      })
      .strict(false),
  handler: ({ runner }) => {
    const args = process.argv.slice(process.argv.indexOf(runner) + 1);
    import('./handler').then((handler) => handler.default(runner, args));
  },
};

export = commandModule;
