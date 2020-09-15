const palindrome = require('./palindrome.ts');

test('Is a valid Palindrome', () => {
    expect(palindrome('level')).toBe(true);
    expect(palindrome('algorithm')).toBe(false);
    expect(palindrome('A man, a plan, a canal: Panama')).toBe(true);
  });
