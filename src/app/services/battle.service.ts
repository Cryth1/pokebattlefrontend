import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BattleResult} from "../models/battle-result";
import {environment} from "../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  simulateBattle(team1: string[], team2: string[]): Observable<BattleResult> {
    return this.http.post<BattleResult>(this.apiUrl, { team1, team2 });
  }
}
