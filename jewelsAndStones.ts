module.exports = function jewelsAndStones(jewels: string, stones: string):number {
    let hashmap = {}, emptyArray: string[] = []
    for(let index: number = 0;  index < jewels.length; index++){
        if(hashmap[jewels[index]] === undefined) hashmap[jewels[index]] = 1      
    }
    for(let index: number = 0;  index < stones.length; index++){
        if(hashmap[stones[index]] !== undefined) emptyArray.push(stones[index])    
    }
    return emptyArray.length
}