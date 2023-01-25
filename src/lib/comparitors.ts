export const compare = (a: any, b: any, prop: string) => {
  if (a[prop] > b[prop]) return 1;
  if (a[prop] < b[prop]) return -1;
  return 0;
};

export const compareNumeric = (a: any, b: any, prop: string) => {
  return compare(Number(a), Number(b), prop);
};
