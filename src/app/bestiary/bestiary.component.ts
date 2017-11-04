import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { BestiaryEntry } from './bestiary-entry.model';
import { BestiaryService } from './bestiary.service';
import { Die } from '../shared/die.model';

@Component({
  selector: 'app-bestiary',
  templateUrl: './bestiary.component.html'
})
export class BestiaryComponent implements OnInit, OnDestroy {
  entries:BestiaryEntry[] = [];
  private entryCreation:Subscription;

  constructor(private entryService:BestiaryService) { }

  ngOnInit() {
    this.entryCreation = this.entryService.listChange.subscribe(() => {
      this.entries = this.entryService.getList(); // Wasteful?
    });
    this.entries = this.entryService.getList();
  }

  ngOnDestroy() {
    this.entryCreation.unsubscribe();
  }

  removeEntry(entry:BestiaryEntry):void {
    this.entryService.remove( entry );
  }
}
