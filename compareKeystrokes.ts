module.exports = function compareKeystrokes(string1: string, string2: string): boolean{
    let stack1: string[] = [], stack2: string[] = []
    for(let index: number = 0; index < string1.length; index++){
        if(string1[index] !== '#') stack1.push(string1[index])
        else stack1.pop()
    }
    for(let index: number = 0; index < string2.length; index++){
        if(string2[index] !== '#') stack2.push(string2[index])
        else stack2.pop()
    }  
    

    
    return stack1.join('') === stack2.join('') 
}