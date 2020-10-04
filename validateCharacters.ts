module.exports = function validateCaharcters(string: string): boolean {
    let hashmap = {'(': ')', '[': ']', '{': '}'};
    let stack: string[] = []
    for(let index: number = 0; index < string.length; index++){
        if (hashmap[string[index]] !== undefined) stack.push(string[index])
        else if (hashmap[stack.pop()] !== string[index]) return false;
    }
    return stack.length ? false : true;
}