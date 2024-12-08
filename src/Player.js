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
    this.calculateRoundScore();
    this.numberOfRolls -= 1;

    if (this.numberOfRolls === 1) {
      this.totalScoreAfterFirstRoll();
    }

    if (this.numberOfRolls === 0) {
      this.totalScoreAfterSecondRoll();
    }

    if (this.score === 10) {
      this.strikeOrSpare();
    }
  }

  strikeOrSpare() {
    this.numberOfRolls === 1 ? (this.strike += 1) : (this.spare = 1);
  }

  totalScoreAfterSecondRoll() {
    if (this.score < 10) {
      if (this.strike > 0) {
        for (let index = 0; index <= this.strike; index++) {
          this.strike -= 1;
          this.totalScore += 10 + this.score * 2;
        }
      } else {
        this.totalScore += this.roll2;
      }
    } else {
      this.totalScore -= this.roll1;
      this.spare = 1;
    }
  }

  calculateRoundScore() {
    this.score += this.numberOfRolls === 2 ? this.roll1 : this.roll2;
  }

  createUniqueName(numberOfPlayers) {
    if (this.name === "") {
      this.name = "player" + (numberOfPlayers + 1);
    }
  }

  totalScoreAfterFirstRoll() {
    if (this.spare === 1) {
      this.spare = 0;
      this.totalScore += 10 + this.roll1 * 2;
    } else if (this.roll1 < 10 && this.strike <= 0) {
      this.totalScore += this.roll1;
    }
  }

  addSpare() {}
}
