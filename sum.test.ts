const sum = require('./sum.ts');
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});



test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});
test('two plus two is four', () => {
  expect(2 - 2).toBe(0);
});
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
