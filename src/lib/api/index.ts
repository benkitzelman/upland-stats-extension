import * as Constants from "../constants";
import singleInvoke from "../single_invocation";
import type * as Api from "./types";

export type AreaCoords = {
  north: number;
  south: number;
  east: number;
  west: number;
};

export type Page = {
  offset: number;
  limit: number;
};

export default class UplandApi {
  readonly authToken: string | undefined;

  constructor(authToken?: string | null) {
    this.authToken = authToken || undefined;
  }

  headers() {
    return {
      authorization: this.authToken,
      "Content-Type": "application/json",
      redirect: "follow",
    };
  }

  async get<T = any>(path: string, extraHeaders: object = {}): Promise<T> {
    const url = Constants.API_BASE_URL + path;

    // ensure that while waiting for a response from a path, additional calls dont create additional requests
    return singleInvoke(url, async () => {
      const resp = await fetch(url, {
        method: "GET",
        headers: { ...this.headers(), ...extraHeaders } as any,
      });

      return resp.json();
    });
  }

  property(id: number) {
    return this.get<Api.Property>(`/properties/${id}`);
  }

  listProperties(area: AreaCoords, page: Page, sort: "asc" | "desc" = "asc") {
    return this.get<Api.ListPropertiesResp>(
      `/properties/list-view?north=${area.north}&south=${area.south}&east=${area.east}&west=${area.west}&offset=${page.offset}&limit=${page.limit}&sort=${sort}`
    );
  }

  async listAllProperties(area: AreaCoords) {
    return this.listProperties(area, { limit: 100, offset: 0 });
  }

  listNeighbourhoods() {
    return this.get<Api.NeighbourhoodsResp>("/neighborhood");
  }

  collections() {
    return this.get("/collections?$sort[category]=1&$sort[one_time_reward]=1&$sort[yield_boost]=1");
  }

  myCollections() {
    return this.get<Api.MyCollectionsResp>("/dashboard/collections");
  }

  myProperties() {
    return this.get<Api.MyPropertiesResp>("/properties/mine/detailed");
  }

  myYield() {
    return this.get<Api.MyYieldResp>("/yield/mine");
  }

  myDashboard() {
    return this.get<Api.MyDashboardResp>("/dashboard");
  }
}
