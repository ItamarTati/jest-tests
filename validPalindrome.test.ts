const ValidPalindrome = require('./validPalindrome');

test('Given a string and the ability to delete at most one character, return whether or not it can form a palindrome', () => {
    expect(ValidPalindrome('abcba')).toBe(true);
    expect(ValidPalindrome('foobof')).toBe(true);
    expect(ValidPalindrome('abccab')).toBe(false);
  });
