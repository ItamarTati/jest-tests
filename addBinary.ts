function addBinary(a: string, b: string): string {
    let result = []
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    while (i >= 0 || j >= 0) {
        let sum = carry;
        if (i >= 0) {
            //@ts-ignore
            sum += a.charAt(i--) - '0';
        }
        if (j >= 0) {
            //@ts-ignore
            sum += b.charAt(j--) - '0';
        }

        result.push(sum % 2);
        carry = Math.floor(sum / 2);
    }

    if (carry != 0) {
        result.push(1);
    }

    return result.reverse().join('');
}





module.exports = addBinary