const twoSum = require('./twoSum');

test('2 numbers in the array can added to make K', () => {
    expect(twoSum([1, 3, 8, 2], 10)).toBe(true);
    expect(twoSum([3, 9, 13, 7], 8)).toBe(false);
    expect(twoSum([4, 2, 6, 5, 2], 4)).toBe(true);
  });
