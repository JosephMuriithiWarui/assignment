const divide = require('./divide');
test('division of 6 / 3 is 2', () => {
    expect(divide(6, 3)).toBe(2);
})