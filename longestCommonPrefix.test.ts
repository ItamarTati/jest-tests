const LongestCommonPrefix = require('./longestCommonPrefix');

test('find the longest prefix', () => {
    expect(LongestCommonPrefix(["colorado", "color", "cold"])).toBe('col');
    expect(LongestCommonPrefix(["a", "b", "c"],)).toBe('');
    expect(LongestCommonPrefix(["spot", "spotty", "spotted"])).toBe('spot');

  });

