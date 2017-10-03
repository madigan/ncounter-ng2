import { Component, OnInit, OnDestroy } from '@angular/core';
import { Monster } from './monster.model';
import { MonsterService } from './monster.service';

@Component({
  selector: 'app-bestiary',
  templateUrl: './bestiary.component.html',
  styleUrls: ['./bestiary.component.css'],
  providers: [ MonsterService ]
})
export class BestiaryComponent implements OnInit, OnDestroy {
  monsters:Monster[] = [];

  constructor(private monsterService:MonsterService) { }

  ngOnInit() {
    this.monsters = this.monsterService.getList();
    this.monsterService.monsterCreation.subscribe((monster:Monster) => {
      this.monsters = this.monsterService.getList(); // Wasteful?
    });
  }

  ngOnDestroy() {
    this.monsterService.monsterCreation.unsubscribe();
  }
}
