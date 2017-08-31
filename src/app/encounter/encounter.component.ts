import { Component, OnInit } from '@angular/core';

import { Encounter } from './encounter.model';
import { EncounterService } from './encounter.service';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent {
  constructor( private encounterService:EncounterService ) { }

  get currentEncounter():Encounter {
    return this.encounterService.getCurrentEncounter();
  }
}
