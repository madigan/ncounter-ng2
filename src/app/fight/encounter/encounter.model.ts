import { Combatant } from '../combatant.model';

export class Encounter {
  private combatantIndex:number;
  combatants:Combatant[];

  constructor(combatants:Combatant[]) {
    this.combatants = combatants;
    this.sort();

    this.combatantIndex = 0;
  }

  advance():void {
    this.combatantIndex = (this.combatantIndex + 1) % this.combatants.length;
  }

  remove(combatant:Combatant):void {
    this.combatants = this.combatants.filter( (c) => c != combatant );
    if(this.combatantIndex >= this.combatants.length) this.combatantIndex = 0;
  }

  add(combatant:Combatant):void {
    this.combatants.push( combatant );
    this.sort();
  }

  private sort():void {
    this.combatants.sort((a, b) => b.initiative-a.initiative);
  }
}
