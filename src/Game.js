export default class Game {
  constructor() {
    this.players = [];
    this.remainingTurns = 10;
  }
  getPlayers() {
    return this.players;
  }
  addPlayer(player) {
    player.createUniqueName(this.players.length);
    this.players.push(player);
  }
  executeRound() {
    this.players.forEach((player) => {
      player.rollBowl();
      player.rollBowl();
    });
    this.remainingTurns -= 1;
  }
}
