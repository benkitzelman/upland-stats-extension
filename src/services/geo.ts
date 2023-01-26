import Geo from "geolib";
import type { AreaCoords } from "@/lib/api";
import type { Boundaries } from "@/lib/api/types";
import type { ScreenDimensions } from "@/lib/client/messages";

export const anyOverlap = (polygonA: Coords[], polygonB: Coords[]) => {
  return !!(polygonA.find(isIn(polygonB)) || polygonB.find(isIn(polygonA)));
};

export const isIn = (polygon: Coords[]) => (point: Coords) =>
  Geo.isPointInPolygon(point, polygon);

export const areaCoordsToPolygon = (area: AreaCoords) => {
  return [
    { latitude: area.north, longitude: area.west },
    { latitude: area.north, longitude: area.east },
    { latitude: area.south, longitude: area.east },
    { latitude: area.south, longitude: area.west },
  ];
};

export const boundariesToPolygon = (boundaries: Boundaries): Coords[] => {
  return boundaries.coordinates.flat().map((coords) => ({
    latitude: coords[1] as number,
    longitude: coords[0] as number,
  }));
};

export const areaCoordsFrom = ([long, lat]: number[]): AreaCoords => {
  return {
    north: lat + 0.002,
    south: lat - 0.002,
    east: long + 0.002,
    west: long - 0.002,
  };
};

export const toXY = (longLat: number[] | undefined | null, area: AreaCoords, screenDimensions?: ScreenDimensions | null) => {
  if (!longLat || longLat.length !== 2 || !screenDimensions) return undefined;

  const ratio = (geoMin: number, geoMax: number, geoCoord: number) => {
    const spanGeo = Math.abs(geoMax - geoMin);
    return Math.abs(geoCoord - geoMin) / spanGeo;
  };

  return {
    x: ratio(area.west, area.east, longLat[0]) * screenDimensions.width,
    y: ratio(area.north, area.south, longLat[1]) * screenDimensions.height,
  };
};
