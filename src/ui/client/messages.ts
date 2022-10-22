type Message =
  { eventId: number };

export type GetPageSourceMsg =
  Message & {
    action: "getPageSource",
    source: string
  };

export type ClientMessage =
  GetPageSourceMsg;

export function getPageSource(eventId: number): GetPageSourceMsg {
  return window.UplandStats.getPageSource(eventId);
}

