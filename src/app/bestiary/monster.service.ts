import { Injectable } from '@angular/core';

import { Monster } from './monster.model';
import { Die } from '../shared/die.model';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class MonsterService {
  public monsterListChange:Subject<void> = new Subject<void>();

  private monsters:Monster[] = [
    new Monster(0, "Bandersnatch", "They tend to be very frumius.", Die.parse("4d6+5")),
    new Monster(1, "Goblin", "Very generic.", Die.parse("2d4+2")),
    new Monster(2, "Lawyer", "A great example of Lawful Evil undead.", Die.parse("3d8+2"))
  ];

  getList():Monster[] {
    return this.monsters.slice();
  }

  // TODO: Make this safer by passing a copy of the monster.
  // TODO: Outsource the ID-ness to a real webservice which owns the keys.
  addMonster(monster:Monster):void {
    if( !monster.id ) monster.id = this.monsters.length;
    this.monsters.push( monster );
    this.monsterListChange.next( );
  }

  getMonster(id:number):Monster {
    for(let i = 0; i < this.monsters.length; i++) {
      if(this.monsters[i].id == id) return this.monsters[i];
    }
    return undefined;
  }

  updateMonster(monster:Monster):void {
    this.monsters[this.monsters.findIndex((m) => m.id == monster.id)] = monster;
    this.monsterListChange.next( );
  }

  removeMonster(monster:Monster):void {
    this.monsters = this.monsters.filter((m) => m != monster);
    this.monsterListChange.next( );
  }
}
