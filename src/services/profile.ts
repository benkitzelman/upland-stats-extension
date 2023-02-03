import Property from "../lib/api/models/property";
import type UplandApi from "@/lib/api";

export type Profile = PromisedType<ReturnType<typeof fetch>>;

export const fetch = async (api: UplandApi) => {
  const [dashboard, properties, yields, collections] = await Promise.all([
    api.myDashboard(),
    api.myProperties(),
    api.myYield(),
    api.myCollections(),
  ]);

  const props = properties.map((attrs) => Property(attrs).toJSON());
  return { dashboard, properties: props, yields, collections };
};
