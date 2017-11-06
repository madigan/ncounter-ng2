import { Component, OnInit } from '@angular/core';
import { FightService } from "./fight.service";

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  providers: [
    FightService
  ]
})
export class FightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
