import { RouterModule, Routes } from '@angular/router';

import {NgModule} from "@angular/core";
import {PokemonBattle} from "./components/pokemon-battle/pokemon-battle";

export const routes: Routes = [
  {
    path: 'battle',
    component: PokemonBattle,
    runGuardsAndResolvers: 'paramsChange' // Para recargar al cambiar parámetros
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
