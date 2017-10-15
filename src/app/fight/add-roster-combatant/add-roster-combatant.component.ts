import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EncounterService } from "../../encounter/encounter.service";
import { CharacterService } from "../../roster/character.service";
import { Character } from "../../roster/character.model";
import { Combatant } from "../../combatant/combatant.model";

@Component({
  selector: 'app-add-roster-combatant',
  templateUrl: './add-roster-combatant.component.html'
})
export class AddRosterCombatantComponent implements OnInit {
  characters:Character[];
  combatant:Combatant;
  selectForm:FormGroup;
  selectedID:number|undefined;

  constructor(
    private characterService:CharacterService,
    private encounterService:EncounterService
  ) { }

  ngOnInit() {
    this.characters = this.characterService.getList();

    this.selectForm = new FormGroup({
      'character': new FormControl(undefined, Validators.required),
      'initiative': new FormControl(10, Validators.required)
    })
  }

  onSubmit():void {
    let combatant:Combatant = undefined;
    this.characters
      .filter((c)=>c.ID == this.selectedID)
      .map((c)=>
        combatant = new Combatant(
          c.name,
          this.selectForm.get('initiative').value,
          c.health
        ));

    this.encounterService.getCurrentEncounter().add(combatant);
    this.reset();
  }

  reset():void {
    this.selectedID = undefined;
    this.selectForm.patchValue({
      'character': undefined,
      'initiative': 10
    });
  }
}
