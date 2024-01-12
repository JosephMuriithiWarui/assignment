const multiply = require('./multiply');
test('multiplication of 2 * 3 is 6', () => {
    expect(multiply(2, 3)).toBe(6);
})