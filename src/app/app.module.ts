import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { LocalStorageModule } from 'angular-2-local-storage';
import { EncounterComponent } from './encounter/encounter.component';
import { EncounterService } from './encounter/encounter.service';
import { CombatantComponent } from './combatant/combatant.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    EncounterComponent,
    CombatantComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    EncounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
