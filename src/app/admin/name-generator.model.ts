import { Data } from "../shared/data.interface";

export class NameGenerator implements Data<NameGenerator> {
  constructor(
    public ID:number|undefined = undefined,
    public name:string="",
    public names:string[][]=[],
    public separator:string=""
  ) {}

  fromJSON(json: any): NameGenerator {
    this.ID = json.ID;
    this.name = json.name;
    this.names = json.names; //TODO: Fix meh!
    return this;
  }

  generate():string {
    let name:string = "";
    if(this.names.length == 0) {
      name = "Timmy the Unnameable"
    } else {
      for(let i = 0; i < this.names.length; i++) {
        name += this.names[i][Math.floor(Math.random() * this.names[i].length)];
        if(i+1<this.names.length) name += this.separator;
      }
    }
    return name;
  }
}
