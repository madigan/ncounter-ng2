export class Combatant {
  name:string;
  initiative:number;
  currentHP:number;
  maxHP:number;

  constructor(name:string, initiative:number, health:number=1) {
    this.name = name;
    this.initiative = initiative;
    this.currentHP = health;
    this.maxHP = health;
  }

  set health(health:number) {
    this.currentHP = health;
    this.maxHP = health;
  }

  get health():number {
    return this.maxHP;
  }
};
