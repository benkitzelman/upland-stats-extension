export const compare = (a: any, b: any, prop: string, formatVal?: (val: any) => any) => {
  const fmt = formatVal || ((val) => val);
  if (fmt(a[prop]) > fmt(b[prop])) return 1;
  if (fmt(a[prop]) < fmt(b[prop])) return -1;
  return 0;
};

export const compareNumeric = (a: any, b: any, prop: string) => {
  return compare(a, b, prop, (val) => Number(val || 0));
};
