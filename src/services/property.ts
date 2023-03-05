import * as neighbourhood from "./neighbourhood";
import * as storage from "../lib/storage";
import time from "../lib/timer";
import Property from "../lib/api/models/property";

import type UplandApi from "@/lib/api";
import type { Neighbourhood } from "@/lib/api/types";
import type { AreaCoords } from "@/lib/api";
import type { ServiceOpts } from "./types";

export const propertiesWithRent = async (
  hoods: Neighbourhood[],
  area: AreaCoords,
  api: UplandApi,
  opts?: ServiceOpts
) => {
  return await time({ ...opts?.timerOpts, label: "propertiesWithRent" }, async (timerOpts) => {
    if (hoods.length !== 1) return;

    const hood = hoods[0];
    const rentUpx = await neighbourhood.monthlyRentPerUnitFor(hood.id, api, { timerOpts, ...opts });
    const properties = (await api.listAllProperties(area, opts)).properties;

    return properties.map((attrs) => Property(attrs, rentUpx).toJSON());
  });
};

export const stashedProperties = async (api: UplandApi, opts?: ServiceOpts) => {
  return await time({ label: "stashedProperties" }, async (timerOpts) => {
    const properties = await storage.getStashedProperties();

    return Promise.all(
      properties.map(async ({ id, hoodId }) => {
        const rentUpx = await neighbourhood.monthlyRentPerUnitFor(hoodId, api, { timerOpts, ...opts });
        return Property(await api.property(id, opts), rentUpx);
      })
    );
  });
};
