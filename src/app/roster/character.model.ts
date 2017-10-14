import { JSONable } from "../shared/jsonable.interface";
import { IDable } from "../shared/idable.interface";

export class Character implements IDable, JSONable<Character> {
  constructor(
    private id?:number,
    public name?:string,
    public description?:string,
    public health?:number
  ) { }

  fromJSON(json: {id:number, name:string, description:string, health:number}): Character {
    return new Character(
      json.id,
      json.name,
      json.description,
      json.health
    );
  }

  get ID():number {
    return this.id;
  }
  set ID(id) {
    this.id = id;
  }
}
