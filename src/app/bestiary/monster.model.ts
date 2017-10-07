import { Die } from '../shared/die.model';

export class Monster {
  constructor(
    public id:number|undefined = undefined,
    public name:string="",
    public description:string="",
    public health:Die=new Die(),
  ) {}
}
