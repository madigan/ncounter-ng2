import { Die } from './die.model';

describe('Die Model Tests', () => {
  it('Prints to standard die notation.', () => {
    let die = new Die(2, 4);
    expect(die.toString()).toEqual("2d4");
  });
  it('Correctly renders positive modifiers', () => {
    let die = new Die(3, 4, 5);
    expect(die.toString()).toEqual("3d4+5");
  });
  it('Correctly renders negative modifiers', () => {
    let die = new Die(2, 2, -5);
    expect(die.toString()).toEqual("2d2-5");
  });

  it('Parses standard dice notation correctly', () => {
    let die = Die.parse("3d5");
    expect(die.toString()).toEqual("3d5");
  });
  it('Parses positive modifiers correctly.', () => {
    let die = Die.parse("7d8+42");
    expect(die.toString()).toEqual("7d8+42");
  });
  it('Parses negative modifiers correctly.', () => {
    let die = Die.parse("5d9-20");
    expect(die.toString()).toEqual("5d9-20");
  })
});
