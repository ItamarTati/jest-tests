module.exports = function validAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false
    let hashmapOfS = {}, hashmapOfT = {}
    for(let index: number = 0; index < s.length; index++){
        if(hashmapOfS[s[index]] === undefined) hashmapOfS[s[index]] = 1
        else hashmapOfS[s[index]] = hashmapOfS[s[index]] + 1
    }
    for(let index: number = 0; index < t.length; index++){
        if(hashmapOfS[t[index]] === undefined) return false 
        else hashmapOfS[t[index]] = hashmapOfS[t[index]] - 1
    }

    for(let letter in hashmapOfS){
        if(hashmapOfS[letter] !==0) return false
    }
    return true
}