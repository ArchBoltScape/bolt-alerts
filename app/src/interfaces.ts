export enum RuleType {
  afktimer = "afktimer",
  buff = "buff",
  chat = "chat",
  model = "model",
  popup = "popup",
  stat = "stat",
  xpgain = "xpgain",
}

export interface AlertRule {
  id: string;
  ruletype: RuleType;
  alert?: boolean; // whether the rule is currently alerting, or null for rules that don't persist (e.g. new chat messages)
  number?: number; // threshold, in microseconds in the case of time-based thresholds
  ref?: string; // string that will be used to index object tables in lua
  comparator?: string; // name of comparator function, for rule types that have comparators
  find?: string; // lua pattern string that incoming strings will be compared to
  exacttext?: string; // "exact" text to display to the user instead of the underlying pattern in the "find" field
}

export interface Ruleset {
  id: string;
  name: string;
  rules: { [id: string]: AlertRule };
  expanded: boolean; // whether this ruleset is expanded in the browser UI
  alert: boolean; // whether any rule in the set is currently alerting
  doFlashWindow: boolean; // whether to call flashwindow()
  sound?: string; // the sound to play, if any
  volume: number; // sound volume
  onlyIfUnfocused: boolean; // whether to alert only if the game window is out of focus
}

export interface ConfigRule {
  ruletype: string;
  number?: number;
  ref?: string;
  comparator?: string;
  find?: string;
  exacttext?: string;
}

export interface ConfigRuleset {
  name: string;
  rules: ConfigRule[];
  doFlashWindow: boolean;
  sound?: string;
  volume: number;
  onlyIfUnfocused: boolean;
}
