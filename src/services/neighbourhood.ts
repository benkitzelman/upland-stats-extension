import Geo from "geolib";
import * as store from "../lib/storage";
import singleInvoke from "../lib/single_invocation";

import type { AreaCoords, default as UplandApi } from "@/lib/api";
import type { Boundaries, Neighbourhood } from "@/lib/api/types";
import type { NeighbourhoodYieldMap } from "../lib/storage";

export type NeighbourhoodMap = { [id: number]: Neighbourhood };

let rents: NeighbourhoodYieldMap | null = null;
let hoods: NeighbourhoodMap | null = null;

export const fetchAll = async (api: UplandApi) => {
  if (hoods) return hoods;

  const all = await api.listNeighbourhoods();

  hoods = all.reduce((map, hood) => {
    map[hood.id] = hood;
    return map;
  }, {} as any);

  return hoods as NeighbourhoodMap;
};

export const monthlyRentPerUnitFor = async (
  neighbourhoodId: number,
  api: UplandApi
) => {
  rents ||= store.getNeighbourhoodYields();

  const rent = rents[neighbourhoodId];
  if (rent) return rent;

  const neighbourhoods = await fetchAll(api);
  const hood = neighbourhoods[neighbourhoodId];

  if (!hood) throw new Error(`Unknown hood (Id: ${neighbourhoodId})`);
  if (!hood.center)
    throw new Error(`Hood has no center coords (Id: ${neighbourhoodId})`);

  const areaCoords = areaCoordsFrom(hood.center.coordinates);
  const res =
    (await api.listProperties(areaCoords, { limit: 1, offset: 0 })).properties || [];

  if (!res || res.length === 0) {
    return null;
  }

  const propertySummary = res[0];
  const property = await api.property(propertySummary.prop_id);

  const monthlyRent = property.yield_per_hour * 24 * 30;
  const amt = monthlyRent / property.area;

  rents[neighbourhoodId] = amt;
  store.setNeighbourhoodYields(rents);

  return amt;
};

export const neighbourhoodsWithin = async (
  area: AreaCoords,
  api: UplandApi
) => {
  const neighbourhoods = await fetchAll(api);
  const polygon = areaCoordsToPolygon(area);

  return Object.values(neighbourhoods).filter((hood) => {
    if (!hood?.boundaries) return false;

    const points = boundariesToPolygon(hood.boundaries);
    return anyOverlap(polygon, points);
  }) as Neighbourhood[];
};

const anyOverlap = (polygonA: Coords[], polygonB: Coords[]) => {
  return !!(polygonA.find(isIn(polygonB)) || polygonB.find(isIn(polygonA)));
};

const isIn = (polygon: Coords[]) => (point: Coords) =>
  Geo.isPointInPolygon(point, polygon);

const areaCoordsToPolygon = (area: AreaCoords) => {
  return [
    { latitude: area.north, longitude: area.west },
    { latitude: area.north, longitude: area.east },
    { latitude: area.south, longitude: area.east },
    { latitude: area.south, longitude: area.west },
  ];
};

const boundariesToPolygon = (boundaries: Boundaries): Coords[] => {
  return boundaries.coordinates.flat().map((coords) => ({
    latitude: coords[1] as number,
    longitude: coords[0] as number,
  }));
};

const areaCoordsFrom = ([long, lat]: number[]): AreaCoords => {
  return {
    north: lat + 0.002,
    south: lat - 0.002,
    east: long + 0.002,
    west: long - 0.002,
  };
};
