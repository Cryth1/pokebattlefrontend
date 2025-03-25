import {BattleLog} from "./battle-log";

export interface BattleResult {
  winningTeam: string;
  logs: BattleLog[];
}
