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
}
