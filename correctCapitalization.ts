function CorrectCapitalization(string: string): boolean{
    let count: number = 0
    for(let index: number = 0; index < string.length; index++){
        let letter = string[index]
        if(letter === letter.toUpperCase()) count++
    }
    return count === string.length ? true : count === 1 && string[0] === string[0].toUpperCase() ? true : count === 0 ? true : false 

}

module.exports = CorrectCapitalization