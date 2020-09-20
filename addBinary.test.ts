const AddBinary = require('./addBinary');

test('Add 2 binary strings', () => {
    expect(AddBinary('100', '1')).toBe('101');
    expect(AddBinary('11', '1')).toBe('100');
    expect(AddBinary('1', '0')).toBe('1');
  });
