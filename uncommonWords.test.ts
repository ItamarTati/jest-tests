const uncommonWords = require('./uncommonWords')

test('check 2 strings to see which words do not appear in both strings', () => {
    expect(uncommonWords("the quick", "brown fox")).toEqual(["the", "quick", "brown", "fox"])
    expect(uncommonWords("the tortoise beat the haire", "the tortoise lost to the haire")).toEqual(["beat", "lost", "to"])
    expect(uncommonWords( "copper coffee pot", "hot coffee pot")).toEqual(["copper", "hot"])
})


