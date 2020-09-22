const jewelsAndStones = require('./jewelsAndStones');

test('Given a string representing your stones and another string representing a list of jewels, return the number of stones that you have that are also jewels', () => {
    expect(jewelsAndStones('abc', 'ac' )).toBe(2);
    expect(jewelsAndStones('Af', 'AaaddfFf')).toBe(3);
    expect(jewelsAndStones('AYOPD', 'ayopd')).toBe(0);
  });


