import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { NameGeneratorService } from "../name-generator.service";
import { NameGenerator } from "../name-generator.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-name-generator',
  templateUrl: './add-name-generator.component.html'
})
export class AddNameGeneratorComponent implements OnInit {
  addForm:FormGroup;
  listControl:FormArray;

  constructor(
    private nameGeneratorService:NameGeneratorService,
    private router:Router
  ) { }

  ngOnInit() {
    this.listControl = new FormArray([
      new FormControl('')
    ]);
    this.addForm = new FormGroup({
      name: new FormControl('', Validators.required),
      names: this.listControl,
      separator: new FormControl('')
    })
  }

  addList() {
    if(this.listControl.length < NameGeneratorService.MAX_LISTS) {
      this.listControl.push(new FormControl(''));
    }
  }

  removeList() {
    if(this.listControl.length > 0) {
      this.listControl.removeAt(this.listControl.length-1);
    }
  }

  canAdd():boolean {
    return this.listControl.length < NameGeneratorService.MAX_LISTS;
  }

  canRemove():boolean {
    return this.listControl.length > 1;
  }

  onSubmit() {
    let nameArr:string[][] = [];
    this.listControl.controls.forEach(
      (control)=> nameArr.push(control.value.split('\n'))
    );
    this.nameGeneratorService.add(
      new NameGenerator(
        undefined,
        this.addForm.get('name').value,
        nameArr,
        this.addForm.get('separator').value),
    );

    this.router.navigate(['/admin']);
  }
}
