export type NeighbourhoodYieldMap = { [neighbourhoodId: number]: number };

export type StoredData = {
  neighbourhoodMonthlyYields: NeighbourhoodYieldMap;
};

export const get = (key: keyof StoredData) => {
  return localStorage.getItem(key);
};

export const set = (key: keyof StoredData, val: string | null) => {
  return val === null
    ? localStorage.removeItem(key)
    : localStorage.setItem(key, val);
};

export const getNeighbourhoodYields = ():
  | StoredData["neighbourhoodMonthlyYields"] => {
  const str = get("neighbourhoodMonthlyYields");
  return str ? JSON.parse(str) : {};
};

export const setNeighbourhoodYields = (yields: NeighbourhoodYieldMap): NeighbourhoodYieldMap => {
  set("neighbourhoodMonthlyYields", yields !== null ? JSON.stringify(yields) : null);
  return yields || {};
};
