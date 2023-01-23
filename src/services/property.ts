import * as neighbourhood from "./neighbourhood";
import * as storage from "../lib/storage";
import Property from "../lib/api/models/property";

import type UplandApi from "@/lib/api";
import type { Neighbourhood } from "@/lib/api/types";
import type { AreaCoords } from "@/lib/api";

export const propertiesWithRent = async (
  hoods: Neighbourhood[],
  area: AreaCoords,
  api: UplandApi
) => {
  if (hoods.length !== 1) return;

  const hood = hoods[0];
  const rentUpx = await neighbourhood.monthlyRentPerUnitFor(hood.id, api);
  const properties = (await api.listAllProperties(area)).properties;

  return properties.map((attrs) => Property(attrs, rentUpx).toJSON());
};

export const stashedProperties = (api: UplandApi) => {
  const properties = storage.getStashedProperties();

  return Promise.all(
    properties.map(async ({ id, hoodId }) => {
      const rentUpx = await neighbourhood.monthlyRentPerUnitFor(hoodId, api);
      return Property(await api.property(id), rentUpx);
    })
  );
};
