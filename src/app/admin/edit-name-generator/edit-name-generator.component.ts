import { Component, OnInit } from '@angular/core';
import { NameGeneratorService } from "../name-generator.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NameGenerator } from "../name-generator.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-name-generator',
  templateUrl: './edit-name-generator.component.html'
})
export class EditNameGeneratorComponent implements OnInit {
  generator:NameGenerator;
  editForm:FormGroup;

  constructor(
    private generatorService:NameGeneratorService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    let id:number = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.generator = this.generatorService.get(id);

    this.editForm = new FormGroup({
      'name': new FormControl(this.generator.name, Validators.required),
      'names': new FormControl(this.generator.names.join('\n'), Validators.minLength(1))
    });
  }

  onSubmit():void {
    this.generator.name = this.editForm.get('name').value;
    this.generator.names = this.editForm.get('names').value.split('\n');
    this.generatorService.update(this.generator);

    this.router.navigate(['/admin']);
  }

}
