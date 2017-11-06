export class Combatant {
  currentHP:number;
  maxHP:number;

  constructor(public name:string, public initiative:number, health:number=1, public experience:number=0) {
    this.name = name;
    this.initiative = initiative;
    this.currentHP = health;
    this.maxHP = health;
    this.experience = experience;
  }

  set health(health:number) {
    this.currentHP = health;
    this.maxHP = health;
  }

  get health():number {
    return this.maxHP;
  }
};
