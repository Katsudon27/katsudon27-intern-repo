const sum = require('./sum');

test('sums positive numbers', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sums negative numbers', () => {
  expect(sum(-1, -2)).toBe(-3);
});

test('sums with only one argument', () => {
  expect(sum(2)).toBe(null);
});