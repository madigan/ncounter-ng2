import { Die } from '../shared/die.model';

export class Monster {
  constructor(
    public name:string="",
    public description:string="",
    public health:Die=new Die(),
  ) {}
}
