/// <reference types="vite/client" />

declare type JsonString = string;

declare type ISODateTime = string;

declare type Coords = {
  latitude: number;
  longitude: number;
};

declare type ScreenCoords = {
  north: number;
  south: number;
  east: number;
  west: number;
};

/**
 * Returns the generic type within a Promise, or unknown if not a promise
 */
declare type PromisedType<T extends Promise<any>> = T extends Promise<infer U>
  ? U
  : unknown;

declare interface Window {
  UplandStats: any;
  chrome: any;
}

declare module "vue-spinner/src/PulseLoader.vue";
