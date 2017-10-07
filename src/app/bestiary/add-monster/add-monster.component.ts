import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormControl } from '@angular/forms';
import { Monster } from '../monster.model';
import { MonsterService } from '../monster.service';
import { Die } from '../../shared/die.model';

@Component({
  selector: 'app-add-monster',
  templateUrl: './add-monster.component.html'
})
export class AddMonsterComponent {
  constructor(private monsterService:MonsterService, private router:Router) { }

  onSubmit(form:NgForm):void {
    this.monsterService.addMonster(
      new Monster( undefined,
        form.value.name,
        form.value.description,
        Die.parse(form.value.health)));
    this.router.navigate(['/bestiary']);
  }
}
