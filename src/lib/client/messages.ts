import type { Hood } from "@/services/neighbourhood";

type Message = { eventId: number };

export type GetPageSourceMsg = Message & {
  action: "getPageSource";
  data: string;
};

export type GetSessionSettings = Message & {
  action: "getSessionSettings";
  data: {
    auth_token: string;
    email: string;
    password_hash: string;
    AF_BANNERS_SESSION_ID: string;
    eos_id: string;
    tt_app_info: string;
    tt_page_id: string;
    tt_pixel_session_index: string;
    tt_session_id: string;
  };
};

export type MarkNeighbourhoodsMessage = Message & {
  action: "markNeighbourhoods";
  ok: boolean;
};

export type GetScreenDimensions = Message & {
  action: "getScreenDimensions";
  data: {
    width: number;
    height: number;
  };
};

export type ScreenDimensions = GetScreenDimensions["data"];

export type ClientMessage =
  | GetPageSourceMsg
  | GetScreenDimensions
  | GetSessionSettings
  | MarkNeighbourhoodsMessage;

export function getPageSource(eventId: number): GetPageSourceMsg {
  return window.UplandStats.getPageSource(eventId);
}

export function getSessionSettings(eventId: number): GetSessionSettings {
  return window.UplandStats.getSessionSettings(eventId);
}

export function getScreenDimensions(eventId: number): GetScreenDimensions {
  return window.UplandStats.getScreenDimensions(eventId);
}

export function markNeighbourhoods(eventId: number, hoods: Hood[]): MarkNeighbourhoodsMessage {
  return window.UplandStats.markNeighbourhoods(eventId, hoods);
}
