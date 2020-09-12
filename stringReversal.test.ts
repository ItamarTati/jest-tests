const stringReversal = require('./stringReversal.ts');

test('Reversing String', () => {
    expect(stringReversal('Cat')).toBe('taC');
    expect(stringReversal('The Daily Byte')).toBe('etyB yliaD ehT');
    expect(stringReversal('civic')).toBe('civic');
  });


