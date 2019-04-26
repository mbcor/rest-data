import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { HeaderComponent } from './header/header.component';
import { ClaculationComponent } from './claculation/claculation.component';

@NgModule({
  declarations: [AppComponent, GameControlComponent, HeaderComponent, ClaculationComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
