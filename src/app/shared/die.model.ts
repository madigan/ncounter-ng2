export class Die {
  static readonly pattern = /([0-9]+)d([0-9]+)([+|-][0-9]+)?$/;

  constructor(
    private quantity:number = 0,
    private sides:number = 0,
    private modifier:number = 0
  ) {
    if(this.quantity < 0) throw new Error('Dice must have a quantity greater than one.');
    if(this.sides < 0) throw new Error('Dice cannot have a negative number of sides.');
  }

  roll():number {
    var total:number = 0;
    for(var i = 0; i < this.quantity; i++) {
      total += Math.ceil(Math.random() * this.sides);
    }
    return total + this.modifier;
  }

  toString():string {
    var result:string = "" + this.quantity + "d" + this.sides;
    if(this.modifier != 0) {  // Append the modifier if there is one.
      result += this.modifier > 0 ? "+" + this.modifier : this.modifier;
    }
    return result;
  }

  static parse(data:string|{quantity:number,sides:number,modifiers?:number}):Die {
    if( typeof data === "string" ) {
      var expression = Die.pattern;
      var matches = expression.exec( data );
      var quantity = parseInt(matches[1]);
      var sides = parseInt(matches[2]);
      var modifiers = 0;
      if(matches[3]) {
        modifiers = parseInt(matches[3]);
      }
      return new Die(quantity, sides, modifiers);
    } else {
      return new Die(data.quantity, data.sides, data.modifiers || 0);
    }
  }
}
