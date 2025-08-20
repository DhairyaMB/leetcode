/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
     const INT_MAX = 2147483647; // 2^31 - 1
     const INT_MIN = -2147483648; // -2^31
     
     let rev = 0;
     let num = x;
 
     while (num !== 0) {
         let digit = num % 10;
         
         // Fix for negative numbers (since % in JS can be negative)
         if (digit < 0) digit += 10, num = Math.ceil(num / 10);
         else num = Math.floor(num / 10);
 
         // Check overflow before updating rev
         if (rev > Math.floor(INT_MAX / 10) || (rev === Math.floor(INT_MAX / 10) && digit > 7)) {
             return 0;
         }
         if (rev < Math.ceil(INT_MIN / 10) || (rev === Math.ceil(INT_MIN / 10) && digit < -8)) {
             return 0;
         }
 
         rev = rev * 10 + digit;
     }
 
     return rev;
 };