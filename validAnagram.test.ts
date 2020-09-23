const validAnagram = require('./validAnagram')

test('An anagram is a word formed by reordering the letters of another word', () => {
    expect(validAnagram('cat', 'tac')).toBe(true);
    expect(validAnagram('listen', 'silent')).toBe(true);
    expect(validAnagram('program', 'function')).toBe(false);
})
