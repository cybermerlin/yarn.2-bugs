import { CommandModule } from 'yargs';

const commandModule: CommandModule<{}, {}> = {
  command: 'clean',
  describe: 'Зачищает директорию build, tsconfig.tsbuildinfo у пакета, удаляет node_modules, COMMANDHASHES',
  handler: () => {
    import('./handler').then((handler) => handler.default());
  },
};

export = commandModule;
