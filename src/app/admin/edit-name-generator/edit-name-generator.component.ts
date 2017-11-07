import { Component, OnInit } from '@angular/core';
import { NameGeneratorService } from "../name-generator.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NameGenerator } from "../name-generator.model";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

@Component({
  selector: 'app-edit-name-generator',
  templateUrl: './edit-name-generator.component.html'
})
export class EditNameGeneratorComponent implements OnInit {
  generator:NameGenerator;
  editForm:FormGroup;
  lists:FormArray;

  constructor(
    private generatorService:NameGeneratorService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    let id:number = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.generator = this.generatorService.get(id);

    this.lists = new FormArray([]);
    for(let i = 0; i < this.generator.names.length; i++) {
      this.lists.push(new FormControl(this.generator.names[i].join('\n'), Validators.minLength(1)))
    }

    this.editForm = new FormGroup({
      name: new FormControl(this.generator.name, Validators.required),
      separator: new FormControl(this.generator.separator),
      names: this.lists
    });
  }

  addList() {
    if(this.lists.length < NameGeneratorService.MAX_LISTS) {
      this.lists.push(new FormControl(''));
    }
  }

  removeList() {
    if(this.lists.length > 0) {
      this.lists.removeAt(this.lists.length-1);
    }
  }

  canAdd():boolean {
    return this.lists.length < NameGeneratorService.MAX_LISTS;
  }

  canRemove():boolean {
    return this.lists.length > 1;
  }

  onSubmit():void {
    let nameArr:string[][] = [];
    this.lists.controls.forEach( (control)=>
        nameArr.push(control.value.split('\n'))
    );
    this.generator.name = this.editForm.get('name').value;
    this.generator.names = nameArr;
    this.generator.separator = this.editForm.get('separator').value;
    this.generatorService.update(this.generator);

    this.router.navigate(['/admin']);
  }

}
