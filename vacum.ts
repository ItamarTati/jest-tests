function vacum(string: string): boolean{
    let herizontalCount: number = 0, verticalCount: number = 0
    for(let index: number = 0; index < string.length; index++){
        if (string[index] === 'L') verticalCount++
        if (string[index] === 'R') verticalCount--
        if (string[index] === 'U') herizontalCount++
        if (string[index] === 'D') herizontalCount--
    }
    return herizontalCount === 0 && verticalCount === 0 
}


module.exports = vacum