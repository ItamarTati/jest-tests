const firstUniqueCharacter = require('./firstUniqueCharacter');

test('return the index of its first unique character. If a unique character does not exist, return -1', () => {
    expect(firstUniqueCharacter('abcabd' )).toBe(2);
    expect(firstUniqueCharacter('thedailybyte')).toBe(1);
    expect(firstUniqueCharacter('developer')).toBe(0);
    expect(firstUniqueCharacter('aabbccddee')).toBe(-1);
  });
