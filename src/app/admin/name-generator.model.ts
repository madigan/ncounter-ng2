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

  generate():string {
    if(this.names.length == 0) return "Timmy the Unnamed";
    else return this.names[Math.floor(Math.random() * this.names.length)];
  }
}
