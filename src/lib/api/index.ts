// TODO: Return ./models instances instead of raw properties for each call

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

export type FetchOpts = RequestInit;

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

  async get<T = any>(path: string, extraHeaders: object = {}, opts?: FetchOpts): Promise<T> {
    const url = Constants.API_BASE_URL + path;

    // ensure that while waiting for a response from a path, additional calls dont create additional requests
    return singleInvoke(url, async () => {
      const resp = await fetch(url, {
        ...opts,
        method: "GET",
        headers: { ...this.headers(), ...extraHeaders } as any,
      });

      return resp.json();
    });
  }

  property(id: number, opts?: FetchOpts) {
    return this.get<Api.Property>(`/properties/${id}`, {}, opts);
  }

  listProperties(area: AreaCoords, page: Page, sort: "asc" | "desc" = "asc", opts?: FetchOpts) {
    return this.get<Api.ListPropertiesResp>(
      `/properties/list-view?north=${area.north}&south=${area.south}&east=${area.east}&west=${area.west}&offset=${page.offset}&limit=${page.limit}&sort=${sort}`,
      {},
      opts
    );
  }

  async listAllProperties(area: AreaCoords, opts?: FetchOpts) {
    return this.listProperties(area, { limit: 100, offset: 0 }, "asc", opts);
  }

  listNeighbourhoods(opts?: FetchOpts) {
    return this.get<Api.NeighbourhoodsResp>("/neighborhood", {}, opts);
  }

  collections(opts?: FetchOpts) {
    return this.get(
      "/collections?$sort[category]=1&$sort[one_time_reward]=1&$sort[yield_boost]=1",
      {},
      opts
    );
  }

  myCollections(opts?: FetchOpts) {
    return this.get<Api.MyCollectionsResp>("/dashboard/collections", {}, opts);
  }

  myProperties(opts?: FetchOpts) {
    return this.get<Api.MyPropertiesResp>("/properties/mine/detailed", {}, opts);
  }

  myYield(opts?: FetchOpts) {
    return this.get<Api.MyYieldResp>("/yield/mine", {}, opts);
  }

  myDashboard(opts?: FetchOpts) {
    return this.get<Api.MyDashboardResp>("/dashboard", {}, opts);
  }
}
