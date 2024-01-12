const subtract = require('./subtract');
test('subtraction of 2 - 3 is -1', () => {
    expect(subtract(2, 3)).toBe(-1);
})