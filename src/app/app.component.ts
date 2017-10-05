import { Component } from '@angular/core';
import { MonsterService } from './bestiary/monster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ MonsterService ]
})
export class AppComponent { }
