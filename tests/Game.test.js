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
    const player1 = new Player();

    game.addPlayer(player1);
    player1.roll1 = 1
    game.executeRound();
    const players = game.getPlayers();

    expect(players[0].totalScore).toBe(1);
  });

  test("first player should have a name", () => {
    const game = new Game();
    game.addPlayer(new Player("Balazs"));
    game.addPlayer(new Player());
    const players = game.getPlayers();

    expect(players[0].name).toBe("Balazs");
  });

  test("both players should have a unique default name", () => {
    const game = new Game();
    game.addPlayer(new Player());
    game.addPlayer(new Player());
    const players = game.getPlayers();

    expect(players[0].name).toBe("player1");
    expect(players[1].name).toBe("player2");
  });

  test("if player scores 10 in two rolls should have one spare", () => {
    const game = new Game();
    game.addPlayer(new Player("Sanyi", 5, 5));
    game.executeRound();
    const players = game.getPlayers();

    expect(players[0].spare).toBe(1);
  });

  test("if player scores 10 in one roll should have one strike", () => {
    const game = new Game();
    game.addPlayer(new Player("Sanyika", 10));
    game.executeRound();
    const players = game.getPlayers();

    expect(players[0].strike).toBe(1);
  });

  test("if player hits spare with (5+5(+4 added after secound frames first roll)) + (4+3) should get 21 points", () => {
    const game = new Game();
    const player1 = new Player("ABC");
    player1.roll1 = 5;
    player1.roll2 = 5;
    game.addPlayer(player1);
    game.executeRound();
    player1.roll1 = 4;
    player1.roll2 = 3;
    game.executeRound();
    const players = game.getPlayers();

    expect(players[0].totalScore).toBe(21);
  });
});

//test first player have no bonus roll without strike aftet tenth round
//test player 1 strikes once, in the tenth round and gets one bonus roll
