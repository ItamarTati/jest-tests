const sum = require('./sum.ts');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});
test('adds 20 + 2 to equal 22', () => {
  expect(sum(20, 2)).toBe(22);
});
test('adds 1000000000000000000000000000000000000 + 2 to equal 1000000000000000000000000000000000002', () => {
  expect(sum(1000000000000000000000000000000000000, 2)).toBe(1000000000000000000000000000000000002);
});
