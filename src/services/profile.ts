import Property from "../lib/api/models/property";
import type UplandApi from "@/lib/api";
import type { ServiceOpts } from "./types";

export type Profile = PromisedType<ReturnType<typeof fetch>>;

export const fetch = async (api: UplandApi, opts?: ServiceOpts) => {
  const [dashboard, properties, yields, collections] = await Promise.all([
    api.myDashboard(opts),
    api.myProperties(opts),
    api.myYield(opts),
    api.myCollections(opts),
  ]);

  const props = properties.map((attrs) => Property(attrs).toJSON());
  return { dashboard, properties: props, yields, collections };
};
