import { Component, OnInit } from '@angular/core';
import { Combatant } from "../combatant.model";
import { BestiaryEntry } from "../../bestiary/bestiary-entry.model";
import { BestiaryService } from "../../bestiary/bestiary.service";
import { EncounterService } from "../encounter/encounter.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NameGeneratorService } from "../../admin/name-generator.service";
import { NameGenerator } from "../../admin/name-generator.model";

@Component({
  selector: 'app-add-monster',
  templateUrl: './add-monster.component.html'
})
export class AddMonsterComponent implements OnInit {
  addForm:FormGroup;
  species:BestiaryEntry;
  speciesId:number|undefined;
  monsters:BestiaryEntry[];
  generator:NameGenerator;

  constructor(
    private encounterService:EncounterService,
    private monsterService:BestiaryService,
    private nameGeneratorService:NameGeneratorService)
    { }

  ngOnInit() {
    this.addForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'initiative': new FormControl(10),
      'health': new FormControl(),
      'addAnother': new FormControl(true)
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
    if(!this.addForm.get('addAnother').value) {
      this.reset();
    } else {
      this.loadSpecies(this.speciesID);
    }
  }

  reset():void {
    this.speciesId = undefined;
    this.species = undefined;
    this.generator = undefined;
    this.addForm.reset();
  }

  randomizeName():void {
    if(this.generator) {
      let newName = `${this.generator.generate()} (${this.species.name})`;
      this.addForm.patchValue({
        'name':newName
      });
    }
  }

  get speciesID():number|undefined {
    return this.speciesId;
  }

  set speciesID(id:number|undefined) {
    this.speciesId = id;
    this.loadSpecies(id);
  }

  private loadSpecies(id:number|undefined) {
    this.monsters
      .filter((monster) => monster.ID == id)
      .map((monster) => {
        this.species = monster;
        this.addForm.patchValue({
          'name': `${monster.name}`,
          'initiative': monster.initiative.roll(),
          'health': monster.health.roll()
        });
        if(monster.nameGeneratorID == undefined) {
          this.generator = undefined;
        } else {
          // TODO: Make this safer just in case a name generator is removed.
          this.generator = this.nameGeneratorService.get(monster.nameGeneratorID);
          this.randomizeName();
        }
      });
  }
}
