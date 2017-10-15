import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { Encounter } from './encounter.model';
import { EncounterService } from './encounter.service';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent implements OnInit {
  current:Encounter;

  constructor( private encounterService:EncounterService ) { }

  ngOnInit() {
    this.current = this.encounterService.getCurrentEncounter();
  }
}
