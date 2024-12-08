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
      if (player.roll1 < 10) {
        player.rollBowl();
      }
      player.roll1 = 0;
      player.roll2 = 0;
      player.score = 0;
      player.numberOfRolls = 2;
      console.log('player', player)
    });
    this.remainingTurns -= 1;
  }
}
