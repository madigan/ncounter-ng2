import { Data } from "../shared/data.interface";

export class Character implements Data<Character> {
  constructor(
    private id?:number,
    public name?:string,
    public description?:string,
    public health?:number,
    public xp?:number
  ) { }

  fromJSON(json: {id:number, name:string, description:string, health:number, xp?:number}): Character {
    return new Character(
      json.id,
      json.name,
      json.description,
      json.health,
      json.xp || 0
    );
  }

  get ID():number {
    return this.id;
  }
  set ID(id) {
    this.id = id;
  }
}
