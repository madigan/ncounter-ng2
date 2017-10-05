export class Die {
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
      total += Math.ceil(Math.random() * this.sides) + this.modifier;
    }
    return total;
  }

  toString():string {
    var result:string = "" + this.quantity + "d" + this.sides;
    if(this.modifier != 0) {  // Append the modifier if there is one.
      result += this.modifier > 0 ? "+" + this.modifier : this.modifier;
    }
    return result;
  }

  static parse(text:string):Die {
    var expression = Die.getValidationRegExp();
    var matches = expression.exec( text );
    var quantity = parseInt(matches[1]);
    var sides = parseInt(matches[2]);
    var modifiers = 0;
    if(matches[3]) {
      modifiers = parseInt(matches[4]);
    }
    return new Die(quantity, sides, modifiers);
  }

  static getValidationRegExp():RegExp {
    return /([0-9]+)d([0-9]+)(([+|-][0-9]+))?/;
  }
}
