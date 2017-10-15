import { Injectable } from '@angular/core';

import { Encounter } from './encounter.model';

@Injectable()
export class EncounterService {
  private currentEncounter:Encounter = new Encounter([]);

  getCurrentEncounter():Encounter {
    return this.currentEncounter;
  }
}
