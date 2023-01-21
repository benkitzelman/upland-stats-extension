import * as neighbourhood from "./neighbourhood";
import PropertySummary from "@/lib/api/models/property_summary";

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

  return properties.map((attrs) => PropertySummary(attrs, rentUpx).toJSON());
};
