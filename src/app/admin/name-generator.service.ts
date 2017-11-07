import { Injectable } from '@angular/core';
import { ObservableList } from "../shared/observable-list.service";
import { NameGenerator } from "./name-generator.model";

@Injectable()
export class NameGeneratorService extends ObservableList<NameGenerator> {
  static readonly MAX_LISTS:number=4;
  
  constructor() {
    super("NCOUNTER_NAME_GENERATORS", NameGenerator);
    if(this.getList().length == 0) {
      this.add( new NameGenerator(undefined, "Generic", [['Bill', 'Jane', 'Hairy', 'Fleevle', 'Oscar', 'Oswald', 'Janewald', 'Blick', 'Kira', 'Batman']]) );
    }
  }
}
