import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NameGeneratorService } from "../name-generator.service";
import { NameGenerator } from "../name-generator.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-name-generator',
  templateUrl: './add-name-generator.component.html'
})
export class AddNameGeneratorComponent implements OnInit {
  addForm:FormGroup;

  constructor(
    private nameGeneratorService:NameGeneratorService,
    private router:Router
  ) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'names': new FormControl('', Validators.minLength(0))
    })
  }

  onSubmit() {
    this.nameGeneratorService.add(
      new NameGenerator(
        undefined,
        this.addForm.get('name').value,
        this.addForm.get('names').value.split('\n'))
    );

    this.router.navigate(['/admin']);
  }

}
