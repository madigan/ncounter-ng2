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
  });
  it("Rolls 1d1+1 within the expected range of 2", () => {
    expect(Die.parse("1d1+1").roll()).toEqual(2);
  });
  it("Rolls 3d4-2 within the expected range of 1-10", () => {
    let number = Die.parse("3d4-2").roll();
    expect(number).toBeLessThan(11);
    expect(number).toBeGreaterThan(0);
  });
  it("Rolls large numbers within the expected range.", () => {
    expect(Die.parse("100d100-50").roll()).toBeGreaterThan(0);
  });
});
