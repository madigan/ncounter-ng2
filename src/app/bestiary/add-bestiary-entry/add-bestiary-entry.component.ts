import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BestiaryEntry } from '../bestiary-entry.model';
import { BestiaryService } from '../bestiary.service';
import { Die } from '../../shared/die.model';
import { NameGeneratorService } from "../../admin/name-generator.service";

@Component({
  selector: 'app-add-bestiary-entry',
  templateUrl: './add-bestiary-entry.component.html'
})
export class AddBestiaryEntryComponent implements OnInit {
  addForm:FormGroup;

  constructor(
    private bestiaryService:BestiaryService,
    private nameGeneratorService:NameGeneratorService,
    private router:Router) { }

  onSubmit():void {
    this.bestiaryService.add(
      new BestiaryEntry( undefined,
        this.addForm.get('name').value,
        this.addForm.get('description').value,
        Die.parse(this.addForm.get('health').value),
        this.addForm.get('nameGeneratorID').value));
    this.router.navigate(['/bestiary']);
  }

  ngOnInit() {
    this.addForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'description': new FormControl(),
      'health': new FormControl('', [Validators.required, Validators.pattern(Die.getValidationRegExp())]),
      'nameGeneratorID': new FormControl()
    })
  }
}
