import { Data } from "../shared/data.interface";

export class NameGenerator implements Data<NameGenerator> {
  constructor(
    public ID:number|undefined = undefined,
    public name:string="",
    public names:string[]=[]
  ) {}

  fromJSON(json: any): NameGenerator {
    this.ID = json.ID;
    this.name = json.name;
    this.names = json.names;
    return this;
  }
}
