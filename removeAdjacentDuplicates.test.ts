const removeAdjacentDuplicates = require('./removeAdjacentDuplicates')

test('Reversing String', () => {
    expect(removeAdjacentDuplicates("abccba")).toBe("");
    expect(removeAdjacentDuplicates("foobar")).toBe("fbar");
    expect(removeAdjacentDuplicates("abccbefggfe")).toBe("a");
  });


