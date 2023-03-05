import * as store from "../lib/storage";
import * as Geo from "../services/geo";
import { ServiceError } from "../lib/errors";
import { yieldPerMonth } from "../lib/calc";
import { timedSingleInvocation } from "../lib/single_invocation";

import type { AreaCoords, default as UplandApi } from "../lib/api";
import type { Neighbourhood } from "../lib/api/types";
import type { NeighbourhoodYieldMap } from "../lib/storage";
import type { ScreenDimensions } from "../lib/client/messages";
import type SharedState from "../lib/shared_state";
import type { ServiceOpts } from "./types";

export type NeighbourhoodMap = { [id: number]: Neighbourhood };

export type Hood = Neighbourhood & {
  monthlyYield?: number | null;
  screenCoords?: { x: number; y: number };
  key?: number;
};

class Error extends ServiceError {
  constructor(msg: string) {
    super(msg, "neighbourhood");
  }
}

let rents: NeighbourhoodYieldMap;
let hoods: NeighbourhoodMap;

const FUZZY_AREA_RADIUS = 0.005;

export const fetchAll = async (api: UplandApi, opts?: ServiceOpts) => {
  if (hoods) return hoods;

  return await timedSingleInvocation({ ...opts?.timerOpts, label: "hood - fetchAll" }, async () => {
    const all = await api.listNeighbourhoods(opts);

    hoods = all.reduce((map, hood) => {
      map[hood.id] = hood;
      return map;
    }, {} as any);

    return hoods as NeighbourhoodMap;
  });
};

export const monthlyRentPerUnitFor = async (
  neighbourhoodId: number,
  api: UplandApi,
  opts?: ServiceOpts
) => {
  return timedSingleInvocation({ ...opts?.timerOpts, label: `monthlyRentPerUnitFor ${neighbourhoodId}` }, async (timerOpts) => {
    rents ||= await store.getNeighbourhoodYields();

    const rent = rents[neighbourhoodId];
    const hasAlreadyAttemptedToFetchRentThisSession = typeof rent !== 'undefined';
    if (rent || hasAlreadyAttemptedToFetchRentThisSession) return rent;


    const neighbourhoods = await fetchAll(api, { timerOpts, ...opts });
    const hood = neighbourhoods[neighbourhoodId];

    if (!hood) throw new Error(`Unknown hood (Id: ${neighbourhoodId})`);
    if (!hood.center)
      throw new Error(`Hood has no center coords (Id: ${neighbourhoodId})`);

    const hoodAreaCoords = Geo.areaCoordsFrom(
      hood.center.coordinates,
      FUZZY_AREA_RADIUS
    );

    const res =
      (await api.listProperties(hoodAreaCoords, { limit: 1, offset: 0 }, "asc", opts))
        .properties || [];

    if (!res || res.length === 0) {
      return null;
    }

    const propertySummary = res[0];
    const property = await api.property(propertySummary.prop_id, opts);

    const monthlyRent = yieldPerMonth(property.yield_per_hour);
    const amt = monthlyRent / property.area;

    rents[neighbourhoodId] = amt;
    store.setNeighbourhoodYields(rents);

    return amt;
  });
};

export const neighbourhoodsWithin = async (
  area: AreaCoords,
  api: UplandApi,
  opts?: ServiceOpts
) => {
  return await timedSingleInvocation({ ...opts?.timerOpts, label: "neighbourhoodsWithin" }, async (timerOpts) => {
    const neighbourhoods = await fetchAll(api, { timerOpts, ...opts });
    const polygon = Geo.areaCoordsToPolygon(area);

    return Object.values(neighbourhoods).filter((hood) => {
      if (!hood?.boundaries) return false;

      const points = Geo.boundariesToPolygon(hood.boundaries);
      return Geo.anyOverlap(polygon, points);
    }) as Neighbourhood[];
  });
};

export const decorate = (
  hoods: (Hood | Neighbourhood)[],
  state: typeof SharedState,
  api: UplandApi,
  opts?: ServiceOpts
): Promise<Hood[]> => {
  return timedSingleInvocation({ ...opts?.timerOpts, label: "neighbourhood decorate" }, async (timerOpts) => {
    const promises = hoods.map(async (hood) => {
      const upx = await monthlyRentPerUnitFor(hood.id, api, { timerOpts });

      return {
        ...hood,
        monthlyYield:
          (hood as Hood).monthlyYield ||
          (upx ? parseFloat(upx.toFixed(2)) : null),

        screenCoords:
          (hood as Hood).screenCoords ||
          screenCoordsFor(
            hood,
            state.currentCoordinates as any,
            state.screenDimensions
          ),
      };
    });

    return Promise.all(promises);
  });
};

export const screenCoordsFor = (
  hood: Hood,
  area: AreaCoords,
  screenDimensions?: ScreenDimensions | null
) => {
  const boundaries = Geo.areaCoordsToPolygon(area);

  if (!hood.center?.coordinates) return;

  const coords = {
    latitude: hood.center.coordinates[1],
    longitude: hood.center.coordinates[0],
  };
  if (!Geo.isIn(boundaries)(coords)) return;
  return Geo.toXY(hood.center?.coordinates, area, screenDimensions);
};
