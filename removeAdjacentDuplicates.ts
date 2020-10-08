module.exports = function removeAdjacentDuplicates(string: string): string{
    let stack: string[] = [];
    for(let index: number = 0; index < string.length; index++){
        let letter: string = string[index]
        let lastLetterInStack: string = stack[stack.length-1]
        if(letter === lastLetterInStack) stack.pop()
        else stack.push(letter)
    }
    return stack.join('')
}