import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalindromoComponent } from './palindromo/palindromo.component';
import { PotenciaComponent } from './potencia/potencia.component';

@NgModule({
  declarations: [
    AppComponent,
    PalindromoComponent,
    PotenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
