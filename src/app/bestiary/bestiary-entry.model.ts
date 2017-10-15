import { Die } from '../shared/die.model';
import { IDable } from "../shared/idable.interface";
import { JSONable } from "../shared/jsonable.interface";

export class BestiaryEntry implements JSONable<BestiaryEntry>, IDable {
  constructor(
    public ID:number|undefined = undefined,
    public name:string="",
    public description:string="",
    public health:Die=new Die(),
  ) {}

  fromJSON(raw:{
    ID:number,
    name:string,
    description:string,
    health:{
      quantity:number,
      sides:number,
      modifier:number}
    }):BestiaryEntry {
    return new BestiaryEntry(
      raw.ID,
      raw.name,
      raw.description,
      new Die(
        raw.health.quantity,
        raw.health.sides,
        raw.health.modifier ));
  }
}
