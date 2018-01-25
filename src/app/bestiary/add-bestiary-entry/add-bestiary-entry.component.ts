import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BestiaryEntry } from '../bestiary-entry.model';
import { BestiaryService } from '../bestiary.service';
import { Die } from '../../shared/die.model';
import { NameGeneratorService } from "../../admin/name-generator.service";
import { NameGenerator } from "../../admin/name-generator.model";

@Component({
  selector: 'app-add-bestiary-entry',
  templateUrl: './add-bestiary-entry.component.html'
})
export class AddBestiaryEntryComponent implements OnInit {
  addForm:FormGroup;
  generators:NameGenerator[];

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
        Die.parse(this.addForm.get('initiative').value),
        this.addForm.get('experience').value,
        this.addForm.get('nameGeneratorID').value,
        this.addForm.get('nameURL').value));
    this.router.navigate(['/bestiary']);
  }

  ngOnInit() {
    this.generators = this.nameGeneratorService.getList();

    this.addForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'description': new FormControl(),
      'health': new FormControl('', [Validators.required, Validators.pattern(Die.pattern)]),
      'initiative': new FormControl('', [Validators.required, Validators.pattern(Die.pattern)]),
      'experience': new FormControl(0),
      'nameGeneratorID': new FormControl(),
      'nameURL': new FormControl()
    })
  }
}
