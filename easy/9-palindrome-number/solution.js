/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     // Negative numbers are not palindromes
     if (x < 0) return false;
 
     // Convert to string
     let str = x.toString();
 
     // Check if string is equal to its reverse
     return str === str.split('').reverse().join('');
 };