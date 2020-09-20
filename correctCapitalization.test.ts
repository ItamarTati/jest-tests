const correctCapitalization = require('./correctCapitalization');

test('check capitalisation', () => {
    expect(correctCapitalization('USA')).toBe(true);
    expect(correctCapitalization('Calvin')).toBe(true);
    expect(correctCapitalization('compUter')).toBe(false);
    expect(correctCapitalization('coding')).toBe(true);

  });
