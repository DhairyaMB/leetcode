/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
     const INT_MAX = 2147483647; // 2^31 - 1
     const INT_MIN = -2147483648; // -2^31
 
     const sign = x < 0 ? -1 : 1;
     let n = Math.abs(x);
     let rev = 0;
 
     while (n > 0) {
         const digit = n % 10;
         n = Math.floor(n / 10);
 
         // Check overflow before pushing digit
         if (rev > Math.floor(INT_MAX / 10) ||
            (rev === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)) {
             return 0;
         }
 
         rev = rev * 10 + digit;
     }
 
     rev *= sign;
 
     // Final safe bounds check (optional)
     if (rev < INT_MIN || rev > INT_MAX) return 0;
     return rev;
 };