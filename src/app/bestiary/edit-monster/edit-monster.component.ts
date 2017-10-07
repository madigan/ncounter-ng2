import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Monster } from '../monster.model';
import { MonsterService } from '../monster.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Die } from "../../shared/die.model";

@Component({
  selector: 'app-edit-monster',
  templateUrl: './edit-monster.component.html'
})
export class EditMonsterComponent implements OnInit {
  monster:Monster;
  editForm:FormGroup;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private monsterService:MonsterService
  ) { }

  ngOnInit() {
    let id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.monster = this.monsterService.getMonster( id );

    this.editForm = new FormGroup({
      'name': new FormControl(
        this.monster.name,
        Validators.required),
      'description': new FormControl(
        this.monster.description),
      'health': new FormControl(
        this.monster.health.toString(),
        [Validators.required, this.diceFormat])
    });
  }

  onSubmit():void {
    this.monster.name = this.editForm.get('name').value;
    this.monster.description = this.editForm.get('description').value;
    this.monster.health = new Die(this.editForm.get('health').value);

    this.monsterService.updateMonster( this.monster );
    this.router.navigate(['/bestiary']); // TODO: Make this relative??
  }

  diceFormat(control:FormControl):{[key:string]: boolean} {
    if(!Die.validate(control.value)) {
      return {'dieInvalid': false };
    } else {
      return null;
    }
  }
}
