function longestCommonPrefix(array: string[]):string {
    let prefix: string = ''
    if(array.length === 0) return prefix 
    for(let index: number = 0; index < array[0].length; index++){
        let character = array[0][index]
        for(let secondIndex: number = 0; secondIndex < array.length; secondIndex++){
            if(array[secondIndex][index] !== character) return prefix
        }
        prefix = prefix + character
     }
     return  prefix 
}

longestCommonPrefix(["colorado", "color", "cold"])
module.exports = longestCommonPrefix