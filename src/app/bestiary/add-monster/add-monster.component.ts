import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Monster } from '../monster.model';
import { MonsterService } from '../monster.service';
import { Die } from '../../shared/die.model';

@Component({
  selector: 'app-add-monster',
  templateUrl: './add-monster.component.html'
})
export class AddMonsterComponent {
  monster:Monster = new Monster();
  health:string = "";

  constructor(private monsterService:MonsterService, private router:Router) { }

  onSubmit():void {
    if(this.health != "") {
      this.monster.health = Die.parse(this.health);
    }
    this.monsterService.addMonster(this.monster);
    this.router.navigate(['/bestiary']);
  }
}
