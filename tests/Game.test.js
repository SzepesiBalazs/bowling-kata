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

  test("first player have exactly one score after first round", () => {
    const game = new Game();
    const player1 = new Player();

    game.addPlayer(player1);
    player1.roll1 = 1;
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
    player1.roll1 = 9;
    player1.roll2 = 1;
    game.addPlayer(player1);
    game.executeRound();

    player1.roll1 = 2;
    player1.roll2 = 6;
    game.executeRound();

    const players = game.getPlayers();

    expect(players[0].totalScore).toBe(20);
  });

  test("if player hits strike, next round rolls 7, 1 he should get 26 points (10+7+1 +7+1)", () => {
    const game = new Game();
    const player1 = new Player("ABC");
    player1.roll1 = 10;
    game.addPlayer(player1);
    game.executeRound();

    player1.roll1 = 7;
    player1.roll2 = 1;
    game.executeRound();

    const players = game.getPlayers();

    expect(players[0].totalScore).toBe(26);
  });

  test("if player hits 2 strikes in a row, after that in the next round rolls 2, 3 he should get 40 points (10+(10+10)+((3+2*2)))", () => {
    const game = new Game();
    const player1 = new Player("ABC");
    player1.roll1 = 10;
    game.addPlayer(player1);
    game.executeRound();

    player1.roll1 = 10;
    game.executeRound();

    player1.roll1 = 3;
    player1.roll2 = 2;
    game.executeRound();

    const players = game.getPlayers();

    expect(players[0].totalScore).toBe(40);
  });
});

//test first player have no bonus roll without strike aftet tenth round

