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
  public species:Monster;
  public speciesId:number|undefined;
  public combatant:Combatant;
  public monsters:Monster[];

  constructor(
    private encounterService:EncounterService,
    private monsterService:MonsterService)
    { }

  ngOnInit() {
    this.reset();
    this.monsters = this.monsterService.getList();
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
    this.speciesId = undefined;
    this.species = undefined;
    this.combatant = new Combatant("", 10);
  }

  onSelectSpecies(id:number):void {
    this.speciesId = id;
    this.monsters
      .filter((monster) => monster.id == id)
      .map((monster) => {
        this.species = monster;
        this.combatant.name = monster.name;
        this.combatant.initiative = 10;
        this.combatant.currentHP = monster.health.roll();
        this.combatant.maxHP = this.combatant.currentHP;
      });
  }
  debug() {
    this.speciesId++;
    this.onSelectSpecies(this.speciesId);
  }
}
