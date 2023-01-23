export type NeighbourhoodYieldMap = { [neighbourhoodId: number]: number };

export type StashedProperty = { id: number; hoodId: number };

export type StoredData = {
  neighbourhoodMonthlyYields: NeighbourhoodYieldMap;
  stashedProperties: StashedProperty[] | null;
};

export const get = (key: keyof StoredData) => {
  return localStorage.getItem(key);
};

export const set = (key: keyof StoredData, val: string | null | undefined) => {
  return val === null || typeof val === "undefined"
    ? localStorage.removeItem(key)
    : localStorage.setItem(key, val);
};

export const getNeighbourhoodYields = ():
  | StoredData["neighbourhoodMonthlyYields"] => {
  const str = get("neighbourhoodMonthlyYields");
  return str ? JSON.parse(str) : {};
};

export const setNeighbourhoodYields = (
  yields: NeighbourhoodYieldMap
): NeighbourhoodYieldMap => {
  set(
    "neighbourhoodMonthlyYields",
    yields !== null ? JSON.stringify(yields) : null
  );
  return yields || {};
};

export const getStashedProperties = (): StashedProperty[] => {
  const props = get("stashedProperties");
  return props ? JSON.parse(props) : [];
};

export const setStashedProperties = (props: StashedProperty[] | null) => {
  set(
    "stashedProperties",
    props ? JSON.stringify(props.filter(Boolean)) : null
  );
};
