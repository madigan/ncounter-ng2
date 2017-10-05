import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Monster } from '../monster.model';
import { MonsterService } from '../monster.service';
import { Die } from '../../shared/die.model';

@Component({
  selector: 'app-add-monster',
  templateUrl: './add-monster.component.html',
  styles: [
    'input.ng-invalid {border-left: 5px solid red;}'
  ]
})
export class AddMonsterComponent {
  constructor(private monsterService:MonsterService, private router:Router) { }

  onSubmit(form:NgForm):void {
    this.monsterService.addMonster(
      new Monster(
        form.value.name,
        form.value.description,
        Die.parse(form.value.health)));
    this.router.navigate(['/bestiary']);
  }
}
