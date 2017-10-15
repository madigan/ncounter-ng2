import { Component, OnInit } from '@angular/core';
import { Combatant } from "../combatant.model";
import { BestiaryEntry } from "../../bestiary/bestiary-entry.model";
import { BestiaryService } from "../../bestiary/bestiary.service";
import { EncounterService } from "../encounter/encounter.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-monster',
  templateUrl: './add-monster.component.html'
})
export class AddMonsterComponent implements OnInit {
  addForm:FormGroup;
  species:BestiaryEntry;
  speciesId:number|undefined;
  monsters:BestiaryEntry[];

  constructor(
    private encounterService:EncounterService,
    private monsterService:BestiaryService)
    { }

  ngOnInit() {
    this.addForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'initiative': new FormControl(10),
      'health': new FormControl()
    })
    this.reset();
    this.monsters = this.monsterService.getList();
  }

  addCombatant():void {
    let combatant:Combatant = new Combatant(
      this.addForm.get('name').value,
      this.addForm.get('initiative').value,
      this.addForm.get('health').value
    );
    this.encounterService.getCurrentEncounter().add( combatant );
    this.reset();
  }

  reset():void {
    this.speciesId = undefined;
    this.species = undefined;
    this.addForm.reset();
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
        this.addForm.patchValue({
          'name': `${monster.name}`,
          'initiative': 10,
          'health': monster.health.roll()
        });
      });
  }
}
