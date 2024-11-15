import Game from "../src/Game";
import Player from "../src/Player";

describe("BowlingGameRules", () => {
  test("should have exactly 2 players", () => {
    const game = new Game();

    game.addPlayer(new Player());
    game.addPlayer(new Player());

    expect(game.getPlayers().length).toBe(2);
  });

  test("should have exactly 4 players", () => {
    const game = new Game();

    game.addPlayer(new Player());
    game.addPlayer(new Player());
    game.addPlayer(new Player());
    game.addPlayer(new Player());

    expect(game.getPlayers().length).toBe(4);
  });

  test("should have exactly 10 turns on initalization", () => {
    const game = new Game();

    expect(game.remainingTurns).toBe(10);
  });

  test("should have exactly 9 remaining turns after 1 executed", () => {
    const game = new Game();

    game.executeRound();

    expect(game.remainingTurns).toBe(9);
  });

  test("one player loses all of rolls in each turn", () => {
    const game = new Game();

    game.addPlayer(new Player());
    game.executeRound();
    const players = game.getPlayers();

    expect(players[0].numberOfRolls).toBe(0);
  });

  test("both players loses all of rolls in each turn", () => {
    const game = new Game();

    game.addPlayer(new Player());
    game.addPlayer(new Player());
    game.executeRound();
    const players = game.getPlayers();

    expect(players[0].numberOfRolls).toBe(0);
    expect(players[1].numberOfRolls).toBe(0);
  });

  test("first player have exactly one score after first round", () => {
    const game = new Game();

    game.addPlayer(new Player());
    game.executeRound();
    const players = game.getPlayers();

    expect(players[0].score).toBe(1);
  });

  test("first player should have a name", () => {
    const game = new Game();
    game.addPlayer(new Player("Balazs"));
    game.addPlayer(new Player());
    const players = game.getPlayers();

    expect(players[0].name).toBe("Balazs");
  });
});

//test first player should have a name
//test each player has a unique name as default
//test first player shoots have 1 spare if strikes
//test first player have no bonus roll without strike aftet tenth round
//test player 1 strikes once, in the tenth round and gets one bonus roll
