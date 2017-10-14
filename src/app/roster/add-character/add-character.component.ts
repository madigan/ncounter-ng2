import { Component, OnInit } from '@angular/core';
import { CharacterService } from "../character.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Character } from "../character.model";

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html'
})
export class AddCharacterComponent implements OnInit {
  addForm:FormGroup;

  constructor(
    private characterService:CharacterService,
    private router:Router
  ) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'description': new FormControl(),
      'health': new FormControl('', Validators.required)
    });
  }

  onSubmit():void {
    let character:Character = new Character(
      undefined,
      this.addForm.get('name').value,
      this.addForm.get('description').value,
      this.addForm.get('health').value
    );

    this.characterService.add(character);
    this.router.navigate(['/roster']);
  }

}
