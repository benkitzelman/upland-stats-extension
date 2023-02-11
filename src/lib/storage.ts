export type NeighbourhoodYieldMap = { [neighbourhoodId: number]: number };

export type StashedProperty = { id: number; hoodId: number };

export type StoredData = {
  neighbourhoodMonthlyYields: NeighbourhoodYieldMap;
  stashedProperties: StashedProperty[] | null;
};

export const get = async <T>(key: keyof StoredData): Promise<T> => {
  return (await chrome.storage.local.get([key]))[key];
};

export const set = async (keyVal: Object) => {
  await chrome.storage.local.set(keyVal);
};

export const getNeighbourhoodYields = (): Promise<
  StoredData["neighbourhoodMonthlyYields"]
> => {
  return get("neighbourhoodMonthlyYields");
};

export const setNeighbourhoodYields = async (
  yields: NeighbourhoodYieldMap
): Promise<NeighbourhoodYieldMap> => {
  await set({ neighbourhoodMonthlyYields: yields });
  return yields || {};
};

export const getStashedProperties = async (): Promise<StashedProperty[]> => {
  return (await get("stashedProperties")) || [];
};

export const setStashedProperties = async (props: StashedProperty[] | null) => {
  await set({ stashedProperties: (props || []).filter(Boolean) });
};
