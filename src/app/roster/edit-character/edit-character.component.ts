import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { CharacterService } from "../character.service";
import { Character } from "../character.model";

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html'
})
export class EditCharacterComponent implements OnInit {
  editForm:FormGroup;
  character:Character;

  constructor(
    private characterService:CharacterService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    let id = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.character = this.characterService.get( id );

    this.editForm = new FormGroup({
      'name': new FormControl(this.character.name, Validators.required),
      'description': new FormControl(this.character.description),
      'health': new FormControl(this.character.health, Validators.required)
    });
  }

  onSubmit():void {
    this.character.name = this.editForm.get('name').value;
    this.character.description = this.editForm.get('description').value;
    this.character.health = this.editForm.get('health').value;

    this.characterService.update(this.character);

    this.router.navigate(['/roster']);
  }
}
