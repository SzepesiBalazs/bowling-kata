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
});
