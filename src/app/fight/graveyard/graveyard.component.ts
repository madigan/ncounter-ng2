import { Component, OnInit, OnDestroy } from '@angular/core';
import { Combatant } from "../combatant.model";
import { FightService } from "../fight.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-graveyard',
  templateUrl: './graveyard.component.html'
})
export class GraveyardComponent implements OnInit, OnDestroy {
  deceased:Combatant[] = [];
  private killEvent:Subscription;
  totalExperience:number = 0;
  partySize:number=1;

  constructor(private fightService:FightService) { }

  ngOnInit() {
    this.killEvent = this.fightService.killEvent.subscribe(
      (combatant) => {
        this.deceased.push(combatant);
        this.totalExperience += combatant.experience;
      }
    );
  }

  ngOnDestroy() {
    this.killEvent.unsubscribe();
  }

  remove(combatant:Combatant) {
    this.deceased = this.deceased.filter( (c) => c !== combatant);
    this.totalExperience -= combatant.experience;
  }
}
