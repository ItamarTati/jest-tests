function Palindrome(string: string): boolean { 
if (string.length === 0) return true 
string = string.replace(/[\W_]/g, '').toLowerCase()
let left: number = 0
let right: number = string.length - 1    
    while(left < right){
        let begin: string = string[left]
        let end: string = string[right]
        if (begin !== end) return false; left++; right--
    }
    return true 
 }

module.exports = Palindrome