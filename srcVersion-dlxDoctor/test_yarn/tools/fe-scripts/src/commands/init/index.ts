import { CommandModule } from 'yargs';

const commandModule: CommandModule<{}, {}> = {
  command: 'init',
  describe: 'Бутстрапинг проекта',
  handler: () => {
    import('./handler').then((handler) => handler.default());
  },
};

export = commandModule;
