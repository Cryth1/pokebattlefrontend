import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokemonBattle } from './components/pokemon-battle/pokemon-battle';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    PokemonBattle

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
