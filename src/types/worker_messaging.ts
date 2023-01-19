export type StateChangeMessage = {
  action: "state-changed";
  state: { [prop: string]: any };
};

export type Message = StateChangeMessage;

export type GetStateMessage = {
  action: "get-state";
};

export type UIMessage = GetStateMessage;
