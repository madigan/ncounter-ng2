import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { LocalStorageModule } from 'angular-2-local-storage';
import { EncounterComponent } from './encounter/encounter.component';
import { EncounterService } from './encounter/encounter.service';
import { CombatantComponent } from './combatant/combatant.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BestiaryComponent } from './bestiary/bestiary.component';
import { RosterComponent } from './roster/roster.component';
import { HomeComponent } from './home/home.component';
import { QuestsComponent } from './quests/quests.component';
import { FightComponent } from './fight/fight.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quests', component: QuestsComponent },
  { path: 'bestiary', component: BestiaryComponent },
  { path: 'roster', component: RosterComponent },
  { path: 'fight', component: FightComponent } // TODO: Implement Me
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( appRoutes )
  ],
  declarations: [
    AppComponent,
    EncounterComponent,
    CombatantComponent,
    HeaderComponent,
    FooterComponent,
    BestiaryComponent,
    RosterComponent,
    HomeComponent,
    QuestsComponent,
    FightComponent
  ],
  providers: [
    EncounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
