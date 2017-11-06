import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BestiaryEntry } from '../bestiary-entry.model';
import { BestiaryService } from '../bestiary.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Die } from "../../shared/die.model";
import { NameGeneratorService } from "../../admin/name-generator.service";
import { NameGenerator } from "../../admin/name-generator.model";

@Component({
  selector: 'app-edit-bestiary-entry',
  templateUrl: './edit-bestiary-entry.component.html'
})
export class EditBestiaryEntry implements OnInit {
  entry:BestiaryEntry;
  editForm:FormGroup;
  generators:NameGenerator[];

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private bestiaryService:BestiaryService,
    private nameGeneratorService:NameGeneratorService
  ) { }

  ngOnInit() {
    let id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.entry = this.bestiaryService.get( id );

    this.generators = this.nameGeneratorService.getList();

    this.editForm = new FormGroup({
      'name': new FormControl(
        this.entry.name,
        Validators.required),
      'description': new FormControl(
        this.entry.description),
      'nameGeneratorID': new FormControl(
        this.entry.nameGeneratorID),
      'health': new FormControl(
        this.entry.health.toString(),
        [Validators.required, Validators.pattern(Die.pattern)]),
      'initiative': new FormControl(
        this.entry.initiative.toString(),
        [Validators.required, Validators.pattern(Die.pattern)]),
      'experience': new FormControl(
        this.entry.experience)
    });
  }

  onSubmit():void {
    this.entry.name = this.editForm.get('name').value;
    this.entry.description = this.editForm.get('description').value;
    this.entry.nameGeneratorID = this.editForm.get('nameGeneratorID').value;
    this.entry.health = Die.parse(this.editForm.get('health').value);
    this.entry.initiative = Die.parse(this.editForm.get('initiative').value);
    this.entry.experience = this.editForm.get('experience').value;

    this.bestiaryService.update( this.entry );
    this.router.navigate(['/bestiary']); // TODO: Make this relative??
  }
}
