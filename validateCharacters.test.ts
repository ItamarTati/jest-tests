const validateCharacters = require('./validateCharacters');

test('Given a string only containing the following characters (, ), {, }, [, and ] return whether or not the opening and closing characters are in a valid order', () => {
    expect(validateCharacters("(){}[]")).toBe(true);
    expect(validateCharacters("(({[]}))")).toBe(true);
    expect(validateCharacters("{(})")).toBe(false);
  });


