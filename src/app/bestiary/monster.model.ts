import { Die } from '../shared/die.model';

export class Monster {
  constructor(
    public id:number|undefined = undefined,
    public name:string="",
    public description:string="",
    public health:Die=new Die(),
  ) {}

  static fromJSON(raw:{
    id:number,
    name:string,
    description:string,
    health:{
      quantity:number,
      sides:number,
      modifier:number}
    }):Monster {
    return new Monster(
      raw.id,
      raw.name,
      raw.description,
      new Die(
        raw.health.quantity,
        raw.health.sides,
        raw.health.modifier ));
  }
}
