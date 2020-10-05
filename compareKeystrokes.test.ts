const compareKeystrokes = require('./compareKeystrokes');

test('Given two strings s and t, which represents a sequence of keystrokes, where # denotes a backspace, return whether or not the sequences produce the same result.', () => {
    expect(compareKeystrokes("ABC#", "CD##AB")).toBe(true);
    expect(compareKeystrokes("como#pur#ter", "computer")).toBe(true);
    expect(compareKeystrokes("cof#dim#ng", "code")).toBe(false);
  });




