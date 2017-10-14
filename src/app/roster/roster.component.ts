import { Component, OnInit } from '@angular/core';
import { CharacterService } from "./character.service";
import { Character } from "./character.model";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html'
})
export class RosterComponent implements OnInit {
  characters:Character[];
  private characterListChange:Subscription;

  constructor(private characterService:CharacterService) { }

  ngOnInit() {
    this.characters = this.characterService.getList();
    this.characterListChange = this.characterService.listChange.subscribe(
      () => this.characters = this.characterService.getList()
    );
  }

  removeCharacter(character:Character):void {
    this.characterService.remove(character);
  }

}
