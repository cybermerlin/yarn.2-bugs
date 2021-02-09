declare module 'spawndamnit' {
  import { EventEmitter } from 'events';

  import childProcess from 'childProcess';

  export class ChildProcessPromise<T> extends Promise<T> implements EventEmitter {
    constructor(
      executer: (
        resolve: (value?: T | PromiseLike<T>) => void,
        reject: (reason?: unknown) => void,
        events: ChildProcessPromise<T>,
      ) => void,
    );

    addListener(event: string | symbol, listener: (...args: unknown[]) => void): this;

    on(event: string | symbol, listener: (...args: unknown[]) => void): this;

    once(event: string | symbol, listener: (...args: unknown[]) => void): this;

    prependListener(event: string | symbol, listener: (...args: unknown[]) => void): this;

    prependOnceListener(event: string | symbol, listener: (...args: unknown[]) => void): this;

    removeListener(event: string | symbol, listener: (...args: unknown[]) => void): this;

    off(event: string | symbol, listener: (...args: unknown[]) => void): this;

    removeAllListeners(event?: string | symbol): this;

    setMaxListeners(n: number): this;

    getMaxListeners(): number;

    listeners(event: string | symbol): Function[];

    rawListeners(event: string | symbol): Function[];

    emit(event: string | symbol, ...args: unknown[]): boolean;

    eventNames(): (string | symbol)[];

    listenerCount(type: string | symbol): number;
  }
  export default function spawn(
    command: string,
    args?: ReadonlyArray<string>,
    options?: childProcess.SpawnOptions,
  ): ChildProcessPromise<{
    code: number;
    stdout: Buffer;
    stderr: Buffer;
  }>;
}
