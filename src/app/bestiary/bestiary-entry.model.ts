import { Die } from '../shared/die.model';
import { Data } from "../shared/data.interface";

export class BestiaryEntry implements Data<BestiaryEntry> {
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
