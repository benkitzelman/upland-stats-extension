const invocations: { [key: string]: Promise<any> | undefined } = {};

export default function<R, T extends ((...args: any[]) => Promise<R>)>(key: string, fn: T, ...args: Parameters<T>): Promise<R> {
  const existing = invocations[key];
  if (existing) return existing;

  invocations[key] = fn(...args).finally(() => {
    delete invocations[key];
  });

  return invocations[key] as Promise<R>;
}
