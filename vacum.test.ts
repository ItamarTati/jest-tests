const Vacum = require('./vacum.ts');

test('Vacum return to original position', () => {
    expect(Vacum('LR')).toBe(true);
    expect(Vacum('URURD')).toBe(false);
    expect(Vacum('RUULLDRD')).toBe(true);
  });

