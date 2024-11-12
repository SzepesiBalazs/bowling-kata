export default class Game {
  constructor() {
    this.players = [];
  }
  getPlayers() {
    return this.players;
  }
  addPlayer(player) {
    this.players.push(player);
  }
}
