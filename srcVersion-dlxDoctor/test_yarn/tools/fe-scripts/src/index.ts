import yargs from 'yargs';

import { contacts } from './utils/supportMessages';

process.on('unhandledRejection', (rejection) => {
  console.log(rejection);
});

// argv нужно вконце прочитать иначе скрипт не запустится
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
yargs
  .scriptName('pcbl')
  .usage('Использование: $0 <command> [options]')
  .commandDir('./commands', {
    recurse: true,
    extensions: ['ts'],
    include: /index.ts$/,
  })
  .demandCommand(1, 'Нужно использовать какую-нибудь команду')
  .wrap(yargs.terminalWidth())
  .help()
  .epilogue(contacts).argv;
