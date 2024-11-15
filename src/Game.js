export default class Game {
  constructor() {
    this.players = [];
    this.remainingTurns = 10;
  }
  getPlayers() {
    return this.players;
  }
  addPlayer(player) {
    this.players.push(player);
  }
  executeRound() {
    this.players.forEach((player) => {
      player.rollBowl(1);
      player.rollBowl(0);
    });
    this.remainingTurns -= 1;
  }
  getPlayersName() {
    let player1 = prompt("Enter the name of the first player:");

    if (!player1) {
      alert("The first player must have a name!");
      return;
    }

    let player2 = prompt("Enter the name of the second player:");

    if (!player2) {
      player2 = "Player 2";
    }
  }
}
