import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { Encounter } from './encounter.model';
import { FightService } from "../fight.service";
import { Combatant } from "../combatant.model";

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent implements OnInit, OnDestroy {
  private enterEvent:Subscription;
  current:Encounter = new Encounter([]);

  constructor( private fightService:FightService ) { }

  ngOnInit() {
    this.enterEvent = this.fightService.enterEvent.subscribe((combatant) => {
      this.current.add(combatant);
    });
  }

  ngOnDestroy() {
    this.enterEvent.unsubscribe();
  }

  flee(combatant:Combatant) {
    this.current.remove( combatant );
    this.fightService.flee( combatant );
  }

  kill(combatant:Combatant) {
    this.current.remove( combatant );
    this.fightService.kill( combatant );
  }
}
