import { CommandModule } from 'yargs';


const commandModule: CommandModule<{}, { force: boolean }> = {
  command: 'build',
  describe: 'Запускает сборку модуля или приложения, если оно ещё не собрано',
  builder: (cmdObj) =>
    cmdObj.option('force', {
      type: 'boolean',
      default: false,
      description: 'Пропускает проверку существующего бандла и принудительно запускает сборку',
    }),
  handler: ({force}) => {
    import(
      './handler'
      ).then(handler => handler.default(force));
  },
};

export = commandModule;
