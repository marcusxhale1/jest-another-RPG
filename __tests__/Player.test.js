const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');

console.log(new Potion());

const { TestWatcher } = require('@jest/core');
const Player = require('../lib/Player');

test('creates a player object', () => {
    const player = new Player('Marcus');

    expect(player.name).toBe('Marcus');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.stregnth).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );

});
