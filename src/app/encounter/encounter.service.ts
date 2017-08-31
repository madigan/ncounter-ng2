import { Injectable } from '@angular/core';

import { Encounter } from './encounter.model';

import { COMBATANTS } from '../combatant/combatant.mock';

@Injectable()
export class EncounterService {
  private currentEncounter:Encounter = new Encounter(COMBATANTS);

  getCurrentEncounter():Encounter {
    return this.currentEncounter;
  }
}
