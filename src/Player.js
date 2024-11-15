export default class Player {
  constructor(name = "") {
    this.numberOfRolls = 2;
    this.score = 0;
    this.name = name;
  }

  rollBowl(score) {
    this.numberOfRolls -= 1;
    this.score += score;
  }

  createUniqueName(numberOfPlayers) {
    if (this.name === "") {
      this.name = "player" + (numberOfPlayers + 1);
    }
  }
}
