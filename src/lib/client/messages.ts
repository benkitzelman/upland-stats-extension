import type { Hood } from "@/services/neighbourhood";

type ResponseMessage = { eventId: number };
type PageMessage = { eventId: undefined };

export type GetPageSourceMsg = ResponseMessage & {
  action: "getPageSource";
  data: string;
};

export type GetSessionSettings = ResponseMessage & {
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

export type MarkNeighbourhoodsMessage = ResponseMessage & {
  action: "markNeighbourhoods";
  ok: boolean;
};

export type GetScreenDimensions = ResponseMessage & {
  action: "getScreenDimensions";
  data: {
    width: number;
    height: number;
  };
};

export type WindowResizeMessage = PageMessage & {
  action: "windowResize";
  data: { width: number; height: number };
};

export type ScreenDimensions = GetScreenDimensions["data"];

export type ClientResponseMessage =
  | GetPageSourceMsg
  | GetScreenDimensions
  | GetSessionSettings
  | MarkNeighbourhoodsMessage;

export type ClientEventMessage = WindowResizeMessage;

export type ClientMessage = ClientResponseMessage | ClientEventMessage;

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
