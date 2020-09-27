const intersectionOfNumbers = require('./intersectionOfNumbers')

test('check 2 arrays to see what numbers intersect', () => {
    expect(intersectionOfNumbers([2, 4, 4, 2], [2, 4])).toStrictEqual([2, 4]);
    expect(intersectionOfNumbers([1, 2, 3, 3], [3, 3])).toStrictEqual([3]);
    expect(intersectionOfNumbers([2, 4, 6, 8], [1, 3, 5, 7])).toStrictEqual([]);

})

