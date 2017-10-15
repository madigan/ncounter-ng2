import { Component, OnInit } from '@angular/core';
import { EncounterService } from "./encounter/encounter.service";

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  providers: [
    EncounterService
  ]
})
export class FightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
