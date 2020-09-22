module.exports = function twoSum (numbers: number[], target: number): boolean {
    let hashmap = {}
    for(let index: number = 0; index < numbers.length; index++){
        if(hashmap[target - numbers[index]] !== undefined) return true
        else hashmap[numbers[index]] = index  
    }
    return false 
}