export default class Player {
  constructor(name = "", roll1 = 0, roll2 = 0) {
    this.numberOfRolls = 2;
    this.score = 0;
    this.name = name;
    this.roll1 = roll1;
    this.roll2 = roll2;
    this.spare = 0;
    this.strike = 0;
    this.totalScore = 0;
  }

  rollBowl() {
    this.score += this.numberOfRolls === 2 ? this.roll1 : this.roll2;
    this.numberOfRolls -= 1;

    if (this.numberOfRolls === 1) {
      if (this.spare === 1) {
        this.spare = 0;
        this.totalScore += 10 + (this.roll1 * 2);
      } else {
        this.totalScore += this.roll1;
      }
    }

    if (this.numberOfRolls === 0) {
      if (this.score < 10) {
        this.totalScore += this.roll2;
      }
      else{
        this.totalScore -= this.roll1
        this.spare = 1;
      }
    }

    if (this.score === 10) {
      this.numberOfRolls === 1 ? (this.strike = 1) : (this.spare = 1);
    }
  }

  createUniqueName(numberOfPlayers) {
    if (this.name === "") {
      this.name = "player" + (numberOfPlayers + 1);
    }
  }

  addSpare() {}
}
