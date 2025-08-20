/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
     // Step 1: Trim leading spaces
     s = s.trim();
 
     if (s.length === 0) return 0;
 
     // Step 2: Handle sign
     let sign = 1;
     let i = 0;
     if (s[i] === '+' || s[i] === '-') {
         sign = (s[i] === '-') ? -1 : 1;
         i++;
     }
 
     // Step 3: Convert digits
     let result = 0;
     while (i < s.length && s[i] >= '0' && s[i] <= '9') {
         result = result * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0));
         
         // Step 4: Clamp early to prevent overflow
         if (result * sign <= -(2**31)) return -(2**31);
         if (result * sign >= 2**31 - 1) return 2**31 - 1;
 
         i++;
     }
 
     return result * sign;
 };