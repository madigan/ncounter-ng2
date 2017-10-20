import { Component, OnInit, OnDestroy } from '@angular/core';
import { NameGenerator } from "./name-generator.model";
import { NameGeneratorService } from "./name-generator.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit, OnDestroy {
  generators:NameGenerator[];
  private generatorListEvent:Subscription;

  constructor(
    private nameGeneratorService:NameGeneratorService
  ) { }

  removeGenerator(generator:Generator):void {
    this.nameGeneratorService.remove(generator);
  }

  ngOnInit() {
    this.generators = this.nameGeneratorService.getList();
    this.generatorListEvent = this.nameGeneratorService.listChange.subscribe(
      () => this.generators = this.nameGeneratorService.getList()
    );
  }

  ngOnDestroy() {
    this.generatorListEvent.unsubscribe();
  }
}
