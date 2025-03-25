import { Component, Input, OnInit } from '@angular/core';
import { BattleService } from '../../services/battle.service';
import { BattleResult} from '../../models/battle-result';
import { BattleLog} from '../../models/battle-log';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.html',
  styleUrls: ['./pokemon-battle.scss']
})
export class PokemonBattle implements OnInit {
  battleResult?: BattleResult;
  currentLogIndex = 0;
  isSimulating = false;
  errorMessage?: string;

  constructor(
    private battleService: BattleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: { [key: string]: string | undefined }) => {
      const team1 = this.parseTeam(params['team1'] || '');
      const team2 = this.parseTeam(params['team2'] || '');

      if (team1.length === 6 && team2.length === 6) {
        this.startSimulation(team1, team2);
      } else {
        this.errorMessage = 'Equipos inválidos en la URL';
      }
    });
  }

  private parseTeam(teamParam: string): string[] {
    return teamParam?.split(',') || [];
  }

  startSimulation(team1: string[], team2: string[]) {
    this.isSimulating = true;
    this.battleService.simulateBattle(team1, team2).subscribe({
      next: (result) => {
        this.battleResult = result;
        this.animateBattle();
      },
      error: (err) => {
        this.errorMessage = 'Error en la batalla: ' + err.message;
        this.isSimulating = false;
      }
    });
  }

  private animateBattle() {
    const interval = setInterval(() => {
      if (this.currentLogIndex < this.battleResult!.logs.length - 1) {
        this.currentLogIndex++;
      } else {
        clearInterval(interval);
        this.isSimulating = false;
      }
    }, 1500); // Intervalo entre batallas
  }
}
