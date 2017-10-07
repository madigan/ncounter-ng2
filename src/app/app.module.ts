import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AddMonsterComponent } from './bestiary/add-monster/add-monster.component';
import { EditMonsterComponent } from './bestiary/edit-monster/edit-monster.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quests', component: QuestsComponent },
  { path: 'bestiary', component: BestiaryComponent },
  { path: 'bestiary/add', component: AddMonsterComponent },
  { path: 'bestiary/edit/:id', component: EditMonsterComponent },
  { path: 'roster', component: RosterComponent },
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
    CombatantComponent,
    HeaderComponent,
    FooterComponent,
    BestiaryComponent,
    RosterComponent,
    HomeComponent,
    QuestsComponent,
    FightComponent,
    AddMonsterComponent,
    EditMonsterComponent
  ],
  providers: [
    EncounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
