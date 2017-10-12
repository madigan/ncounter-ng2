import { Component, OnInit } from '@angular/core';

import { EncounterService } from '../encounter/encounter.service';
import { Combatant } from './combatant.model';
import { MonsterService } from '../bestiary/monster.service';
import { Monster } from '../bestiary/monster.model';

@Component({
  selector: 'app-combatant',
  templateUrl: './combatant.component.html'
})
export class CombatantComponent implements OnInit {
  public combatant:Combatant;

  constructor(
    private encounterService:EncounterService,
    private monsterService:MonsterService)
    { }

  ngOnInit() {
    this.reset();
  }
  // TODO: Should this be a "MonsterMaker" service? Or part of the "Combatant" service?
  addMonster(monster:Monster):void {
    this.encounterService.getCurrentEncounter().add(
      new Combatant(
        "Fred (${monster.name})",
        10,
        monster.health.roll()
    ));
  }

  addCombatant():void {
    this.encounterService.getCurrentEncounter().add( this.combatant );
    this.reset();
  }

  reset():void {
    this.combatant = new Combatant("", 0);
  }
}
