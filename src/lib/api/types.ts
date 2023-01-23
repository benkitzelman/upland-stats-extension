export type PropertyStatus = "For sale" | "Ownwed" | "Unlocked";

export interface City {
  id: number;
  name: string;
}

export interface Labels {
  fsa_allow: boolean;
}

export interface Property {
  currency: undefined;
  prop_id: number;
  full_address: string;
  centerlat: string;
  centerlng: string;
  boundaries: string;
  area: number;
  status: PropertyStatus;
  locked_until: ISODateTime | null;
  locked_user_id: number | null;
  transaction_id: number | null;
  last_transaction_id: number | null;
  last_purchased_price: number | null;
  terminal_id: number | null;
  feature: any;
  labels: Labels;
  on_market: any;
  offers_made_by_you: any;
  offers_with_property: any;
  offers_to_property: any;
  fiat_price: number | null;
  is_offering: boolean;
  is_blocked: boolean;
  owner: string | null;
  owner_username: string | null;
  yield_per_hour: number;
  price: number;
  can_make_offer: boolean;
  collection_boost: number;
  street: City;
  city: City;
  teleport_price: number;
  buyer_transaction_fee: number;
  seller_transaction_fee: number;
  is_construction_forbidden: boolean;
  ownership_changed_at: ISODateTime | null;
  state: City;
}

export interface Neighbourhood {
  id: number;
  name: string;
  city_id: number;
  area: number | null;
  boundaries: Boundaries | null;
  center: Center | null;
}

export interface Boundaries {
  crs: CRS;
  type: BoundariesType;
  coordinates: Array<Array<Array<number[] | number>>>;
}

export interface CRS {
  type: CRSType;
  properties: Properties;
}

export interface Properties {
  name: Name;
}

export enum Name {
  Epsg4326 = "EPSG:4326",
}

export enum CRSType {
  Name = "name",
}

export enum BoundariesType {
  MultiPolygon = "MultiPolygon",
  Polygon = "Polygon",
}

export interface Center {
  crs: CRS;
  type: CenterType;
  coordinates: number[];
}

export enum CenterType {
  Point = "Point",
}

export type PropertySummary = Pick<
  Property,
  | "area"
  | "city"
  | "full_address"
  | "owner"
  | "price"
  | "prop_id"
  | "state"
  | "status"
> & {
  currency: "UPX" | "USD";
  on_market: undefined;
};

export type ListPropertiesResp = {
  count: number;
  properties: PropertySummary[];
};

export type NeighbourhoodsResp = Neighbourhood[];
