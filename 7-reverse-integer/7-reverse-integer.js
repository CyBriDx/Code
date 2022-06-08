/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let temp = x
    let rev = 0
    if (x >= 2147483647 || x <= -2147483648)
        return 0
    while(Math.abs(x) > 0) {
        rev = rev*10 + Math.abs(x%10)
        x = Math.floor(Math.abs(x)/10)
    }
    return rev * Math.sign(temp) >= 2147483647 || rev * Math.sign(temp) <= -2147483648 ? 0 : rev * Math.sign(temp)
};