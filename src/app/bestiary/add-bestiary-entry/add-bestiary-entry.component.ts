import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormControl } from '@angular/forms';

import { BestiaryEntry } from '../bestiary-entry.model';
import { BestiaryService } from '../bestiary.service';
import { Die } from '../../shared/die.model';

@Component({
  selector: 'app-add-bestiary-entry',
  templateUrl: './add-bestiary-entry.component.html'
})
export class AddBestiaryEntryComponent {
  constructor(private bestiaryService:BestiaryService, private router:Router) { }

  onSubmit(form:NgForm):void {
    this.bestiaryService.add(
      new BestiaryEntry( undefined,
        form.value.name,
        form.value.description,
        Die.parse(form.value.health)));
    this.router.navigate(['/bestiary']);
  }
}
