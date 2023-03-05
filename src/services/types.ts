import type * as Timer from "../lib/timer";

export type ServiceOpts = {
  signal?: AbortSignal | null;
  timerOpts?: Timer.Opts;
};
