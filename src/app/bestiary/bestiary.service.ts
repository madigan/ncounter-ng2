import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Die } from '../shared/die.model';
import { ObservableList } from "../shared/observable-list.service";
import { BestiaryEntry } from "./bestiary-entry.model";

@Injectable()
export class BestiaryService extends ObservableList<BestiaryEntry> {
  constructor() {
    super("NCOUNTER_BESTIARY_ENTRIES", BestiaryEntry);
    // TODO: Remove mock data
    if(this.getList().length == 0) {
      this.add(new BestiaryEntry(undefined, "Bandersnatch", "They tend to be very frumius.", Die.parse("4d6+5")));
      this.add(new BestiaryEntry(undefined, "Goblin", "Very generic.", Die.parse("2d4+2")));
      this.add(new BestiaryEntry(undefined, "Lawyer", "A great example of Lawful Evil undead.", Die.parse("3d8+2")));
    }
  }
}
