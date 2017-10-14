import { Subject } from "rxjs/Subject";

import { ObservableList } from "../shared/observable-list.service";
import { Character } from './character.model';

export class CharacterService extends ObservableList<Character> {
  readonly CHARACTER_KEY:string = 'NCOUNTER_CHARACTERS';

  private characters:Character[];

  constructor() {
    super("NCOUNTER_CHARACTERS", Character);
    // TODO: Remove test data
    if(this.getList().length == 0) {
      this.add(new Character(undefined, "Tim the Brave", "Brave, brave sir Tim", 2));
      this.add(new Character(undefined, "Mary the Hip", "Contrairy to popular belief...", 36));
      this.add(new Character(undefined, "Igor the Ugly", "Poor, poor Igor.", 78));
    }
  }
}
