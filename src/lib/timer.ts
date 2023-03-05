const INDENT_CHARS = 2;
const MAX_LEVEL = 4;

export type Params = { label: string; indent?: number, root?: string };

export type Opts = { label: string; indent: number, root?: string };

const indent = (label: string, indent: number, root?: string) => {
  let str = `${root || ""}{${indent}} - ${label} - [${Math.random()}]`;
  for (let i = 0; i < (indent + 1) * INDENT_CHARS; i++) str = ` ${str}`;
  return str;
};

export default async function <T>(
  opts: Params,
  fn: (opts: Opts) => Promise<T>
): Promise<T> {
  let indentLevel = opts.indent || 0;
  const indentedLabel = indent(opts.label, indentLevel, opts.root);
  const shouldLog = indentLevel <= MAX_LEVEL;

  if (shouldLog) {
    console.time(indentedLabel);
    indentLevel++;
  }

  const res = await fn({ ...opts, indent: indentLevel });

  if (shouldLog) {
    indentLevel--;
    console.timeEnd(indentedLabel);
  }
  return res;
}
