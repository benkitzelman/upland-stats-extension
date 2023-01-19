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

export type ClientMessage = GetPageSourceMsg;

export function getPageSource(eventId: number): GetPageSourceMsg {
  return window.UplandStats.getPageSource(eventId);
}

export function getSessionSettings(eventId: number): GetSessionSettings {
  return window.UplandStats.getSessionSettings(eventId);
}
