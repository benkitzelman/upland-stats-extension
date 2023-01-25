import * as Constants from "../constants";
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
  readonly authToken: string;

  private promiseMap: { [url: string]: Promise<any> } = {};

  constructor(authToken: string) {
    this.authToken = authToken;
  }

  headers() {
    return {
      authorization: this.authToken,
      "Content-Type": "application/json",
      redirect: "follow",
    };
  }

  async get<T = any>(path: string, extraHeaders: object = {}): Promise<T> {
    // ensure that while waiting for a response from a path, additional calls dont create additional requests
    this.promiseMap[path] ||= fetch(Constants.API_BASE_URL + path, {
      method: "GET",
      headers: { ...this.headers(), ...extraHeaders },
    });

    const resp = await this.promiseMap[path];
    delete this.promiseMap[path];

    return resp.clone().json();
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
}
