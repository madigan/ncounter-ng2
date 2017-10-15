import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { LocalStorageModule } from 'angular-2-local-storage';
import { AddMonsterComponent } from './fight/add-monster/add-monster.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { BestiaryComponent } from './bestiary/bestiary.component';
import { RosterComponent } from './roster/roster.component';
import { HomeComponent } from './home/home.component';
import { QuestsComponent } from './quests/quests.component';
import { FightComponent } from './fight/fight.component';
import { AddBestiaryEntryComponent } from './bestiary/add-bestiary-entry/add-bestiary-entry.component';
import { EditBestiaryEntry } from './bestiary/edit-bestiary-entry/edit-bestiary-entry.component';
import { AddCharacterComponent } from './roster/add-character/add-character.component';
import { EditCharacterComponent } from './roster/edit-character/edit-character.component';
import { AddRosterCombatantComponent } from './fight/add-roster-combatant/add-roster-combatant.component';
import { EncounterComponent } from "./fight/encounter/encounter.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quests', component: QuestsComponent },
  { path: 'bestiary', component: BestiaryComponent },
  { path: 'bestiary/add', component: AddBestiaryEntryComponent },
  { path: 'bestiary/edit/:id', component: EditBestiaryEntry },
  { path: 'roster', component: RosterComponent },
  { path: 'roster/add', component: AddCharacterComponent },
  { path: 'roster/edit/:id', component: EditCharacterComponent },
  { path: 'fight', component: FightComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot( appRoutes )
  ],
  declarations: [
    AppComponent,
    EncounterComponent,
    AddMonsterComponent,
    HeaderComponent,
    FooterComponent,
    BestiaryComponent,
    RosterComponent,
    HomeComponent,
    QuestsComponent,
    FightComponent,
    AddBestiaryEntryComponent,
    EditBestiaryEntry,
    AddCharacterComponent,
    EditCharacterComponent,
    AddRosterCombatantComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
