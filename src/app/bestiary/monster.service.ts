import { Injectable } from '@angular/core';

import { Monster } from './monster.model';
import { Die } from '../shared/die.model';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class MonsterService {
  public monsterCreation:Subject<Monster> = new Subject<Monster>();

  private monsters:Monster[] = [
    new Monster("Bandersnatch", "They tend to be very frumius.", Die.parse("4d6+5")),
    new Monster("Goblin", "Very generic.", Die.parse("2d4+2")),
    new Monster("Lawyer", "A great example of Lawful Evil undead.", Die.parse("3d8+2"))
  ];

  getList():Monster[] {
    return this.monsters.slice();
  }

  // TODO: Make this safer by passing a copy of the monster.
  addMonster(monster:Monster):void {
    this.monsters.push( monster );
    this.monsterCreation.next( monster );
  }
}
