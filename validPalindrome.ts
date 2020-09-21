function validPalindrome(string: string): boolean{
    let left: number = 0, right: number = string.length - 1
    while(left < right){
        if(string[left] !== string[right]){
            return isPalindrome(string, left + 1, right ) || isPalindrome(string, left, right -1)
        }
        left++
        right--
    }
    return true 
}
function isPalindrome(string: string, left: number, right: number){
    while(left < right) {
        if(string.charAt(left++) != string.charAt(right--)) {
            return false;
        }
    }

    return true;
}
module.exports = validPalindrome