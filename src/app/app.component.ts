import { Component } from '@angular/core';
import { CharacterService } from "./roster/character.service";
import { BestiaryService } from "./bestiary/bestiary.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ BestiaryService, CharacterService ]
})
export class AppComponent { }
