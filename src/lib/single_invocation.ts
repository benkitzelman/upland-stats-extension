import timer from "./timer";
import type * as Timer from "./timer";

const invocations: { [key: string]: Promise<any> | undefined } = {};

export default function singleInvocation<T extends ((...args: any[]) => Promise<any>)>(key: string, fn: T, ...args: Parameters<T>): ReturnType<T> {
  const existing = invocations[key];
  if (existing) return existing as ReturnType<T>;

  invocations[key] = fn(...args).finally(() => {
    delete invocations[key];
  });

  return invocations[key] as ReturnType<T>;
}

export function debounce<T extends ((...args: any[]) => any)>(timeout: number, func: T): (...args: Parameters<T>) => void {
  let timer: any;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.call(null, ...args); }, timeout);
  };
}


export function timedSingleInvocation<T extends Promise<any>>(opts: Timer.Params, fn: (opts: Timer.Opts) => T): T {
  const key = [opts.root, opts.label].filter(Boolean).join(' - ');

  return singleInvocation(key, () => timer(opts, fn) as T);
}
