import { Component, OnInit } from '@angular/core';
import { Combatant } from "../combatant.model";
import { BestiaryEntry } from "../../bestiary/bestiary-entry.model";
import { BestiaryService } from "../../bestiary/bestiary.service";
import { EncounterService } from "../encounter/encounter.service";

@Component({
  selector: 'app-add-monster',
  templateUrl: './add-monster.component.html'
})
export class AddMonsterComponent implements OnInit {
  public species:BestiaryEntry;
  public speciesId:number|undefined;
  public combatant:Combatant;
  public monsters:BestiaryEntry[];

  constructor(
    private encounterService:EncounterService,
    private monsterService:BestiaryService)
    { }

  ngOnInit() {
    this.reset();
    this.monsters = this.monsterService.getList();
  }
  // TODO: Should this be a "MonsterMaker" service? Or part of the "Combatant" service?
  addMonster(monster:BestiaryEntry):void {
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

  get speciesID():number|undefined {
    return this.speciesId;
  }

  set speciesID(id:number|undefined) {
    console.log(`Selected: ${id}`);
    this.speciesId = id;
    this.monsters
      .filter((monster) => monster.ID == id)
      .map((monster) => {
        console.log(`Selected: ${monster.name}`);
        this.species = monster;
        this.combatant.name = monster.name;
        this.combatant.initiative = 10;
        this.combatant.currentHP = monster.health.roll();
        this.combatant.maxHP = this.combatant.currentHP;
      });
  }
}
