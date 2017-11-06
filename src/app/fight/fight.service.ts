import { Injectable } from '@angular/core';
import { Combatant } from "./combatant.model";
import { Subject } from "rxjs/Subject";

@Injectable()
export class FightService {
  enterEvent:Subject<Combatant> = new Subject<Combatant>();
  killEvent:Subject<Combatant> = new Subject<Combatant>();
  fleeEvent:Subject<Combatant> = new Subject<Combatant>();

  constructor() { }

  public add(combatant:Combatant) {
    this.enterEvent.next(combatant);
    console.log(`${combatant.name} has entered the fight!`);
  }

  public kill(combatant:Combatant) {
    this.killEvent.next(combatant);
    console.log(`${combatant.name} is very, very dead.`);
  }

  public flee(combatant:Combatant) {
    this.fleeEvent.next(combatant);
    console.log(`${combatant.name} has fled like the scaredy-moose they are!`);
  }
}
