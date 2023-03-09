const divide = require('./divide');

test('divides 8 * 2 to equal 4', () => {
  expect(divide(8, 2)).toBe(4);
});