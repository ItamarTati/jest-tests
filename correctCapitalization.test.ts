const correctCapitalization = require('./correctCapitalization');

test('Is a valid Palindrome', () => {
    expect(correctCapitalization('USA')).toBe(true);
    expect(correctCapitalization('Calvin')).toBe(true);
    expect(correctCapitalization('compUter')).toBe(false);
    expect(correctCapitalization('coding')).toBe(true);

  });
