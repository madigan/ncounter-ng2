import { Component } from '@angular/core';
import { MonsterService } from './bestiary/monster.service';
import { CharacterService } from "./roster/character.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ MonsterService, CharacterService ]
})
export class AppComponent { }
