export default class Player {
  constructor(name = "", roll1 = 0, roll2 = 0, spare = 0, strike = 1) {
    this.numberOfRolls = 2;
    this.score = 0;
    this.name = name;
    this.roll1 = roll1;
    this.roll2 = roll2;
    this.spare = spare;
    this.strike = strike;
  }

  rollBowl() {
    this.score += this.numberOfRolls === 2 ? this.roll1 : this.roll2;
    this.numberOfRolls -= 1;

    if (this.numberOfRolls === 0 && this.score === 10) {
      this.spare = 1;
    }
    if (this.numberOfRolls === 1 && this.score === 10) {
      this.strike = 1
    }
  }

  createUniqueName(numberOfPlayers) {
    if (this.name === "") {
      this.name = "player" + (numberOfPlayers + 1);
    }
  }
}
