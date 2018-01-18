import { Die } from '../shared/die.model';
import { Data } from "../shared/data.interface";

export class BestiaryEntry implements Data<BestiaryEntry> {
  constructor(
    public ID:number|undefined = undefined,
    public name:string="",
    public description:string="",
    public health:Die=new Die(),
    public initiative:Die=new Die(1, 20),
    public experience:number=0,
    public nameGeneratorID:number|undefined=undefined
  ) {}

  fromJSON(raw:{
    ID:number,
    name:string,
    description:string,
    health:{
      quantity:number,
      sides:number,
      modifier:number
    },
    initiative:undefined|{
      quantity:number,
      sides:number,
      modifier:number
    },
    experience,
    nameGeneratorID:number|undefined
    }):BestiaryEntry {
      let health:Die, initiative:Die;

      // Backwards compatibility in case the initiative wasn't defined.
      if(!raw.initiative) {
        initiative = new Die(1, 20);
      } else {
        initiative = new Die(raw.initiative.quantity, raw.initiative.sides, raw.initiative.modifier);
      }

      if(!raw.health) {
        health = new Die(1, 1);
      } else {
        health = new Die(raw.health.quantity, raw.health.sides, raw.health.modifier);
      }

      return new BestiaryEntry(
        raw.ID,
        raw.name || '',
        raw.description || '',
        health,
        initiative,
        raw.experience,
        raw.nameGeneratorID);
  }
}
