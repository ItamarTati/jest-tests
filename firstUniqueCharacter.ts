module.exports = function firstUniqueCharacter(string: string): number{
    let hashmap = {}, lowestIndex: number = Number.MAX_SAFE_INTEGER
    for(let index: number = 0; index < string.length; index++){
        if(hashmap[string[index]] === undefined) hashmap[string[index]] = index
        else hashmap[string[index]] = Number.MAX_SAFE_INTEGER
    }
    for(let property in hashmap){
        if (hashmap[property] < lowestIndex) lowestIndex = hashmap[property] 
    }
    return lowestIndex ===  Number.MAX_SAFE_INTEGER ? -1 : lowestIndex
}