import { Component, OnInit } from '@angular/core';

import { EncounterService } from '../encounter/encounter.service';
import { Combatant } from './combatant.model';

@Component({
  selector: 'app-combatant',
  templateUrl: './combatant.component.html',
  styleUrls: ['./combatant.component.css']
})
export class CombatantComponent implements OnInit {
  public combatant:Combatant;

  constructor(private encounterService:EncounterService) { }

  ngOnInit() {
    this.reset();
  }

  addCombatant():void {
    this.encounterService.getCurrentEncounter().add( this.combatant );
    this.reset();
  }

  reset():void {
    this.combatant = new Combatant("", 0);
  }
}
