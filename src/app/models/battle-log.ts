export interface BattleLog {
  pokemon1: Pokemon;
  pokemon2: Pokemon;
  winner: Pokemon;
}

export interface Pokemon {
  id: number;
  name: string;
  stats: StatWrapper[];
  sprites: {
    front_default: string;
  };
}

export interface StatWrapper {
  name: string;
  value: number;

}
