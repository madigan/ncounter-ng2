import { Combatant } from '../combatant/combatant.model';

export class Encounter {
  private _currentIndex:number;
  private _combatants:Combatant[];

  constructor(combatants:Combatant[]) {
    this._combatants = combatants;
    this._combatants.sort((a, b) => b.initiative-a.initiative);

    this._currentIndex = 0;
  }

  advance():void {
    this._currentIndex = (this._currentIndex + 1) % this._combatants.length;
  }

  get currentCombatant():Combatant {
    return this._combatants[this._currentIndex] || undefined;
  }

  get combatants():Combatant[] {
    return this._combatants;
  }
}
