import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Monster } from './monster.model';
import { MonsterService } from './monster.service';
import { Die } from '../shared/die.model';

@Component({
  selector: 'app-bestiary',
  templateUrl: './bestiary.component.html',
  styleUrls: ['./bestiary.component.css']
})
export class BestiaryComponent implements OnInit, OnDestroy {
  monsters:Monster[] = [];
  private monsterCreation:Subscription;

  constructor(private monsterService:MonsterService) { }

  ngOnInit() {
    this.monsterCreation = this.monsterService.monsterCreation.subscribe((monster:Monster) => {
      this.monsters = this.monsterService.getList(); // Wasteful?
    });
    this.monsters = this.monsterService.getList();
  }

  ngOnDestroy() {
    this.monsterCreation.unsubscribe();
  }
}
