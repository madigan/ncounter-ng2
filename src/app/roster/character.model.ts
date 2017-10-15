import { Data } from "../shared/data.interface";

export class Character implements Data<Character> {
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
