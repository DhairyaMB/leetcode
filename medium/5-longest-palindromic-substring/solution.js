/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
     if (s.length <= 1) return s;
 
     let start = 0, end = 0;
 
     // Helper function to expand around center
     function expandAroundCenter(left, right) {
         while (left >= 0 && right < s.length && s[left] === s[right]) {
             left--;
             right++;
         }
         return [left + 1, right - 1]; // return valid palindrome bounds
     }
 
     for (let i = 0; i < s.length; i++) {
         // Odd length palindrome
         let [l1, r1] = expandAroundCenter(i, i);
         // Even length palindrome
         let [l2, r2] = expandAroundCenter(i, i + 1);
 
         // Update longest if needed
         if (r1 - l1 > end - start) {
             start = l1;
             end = r1;
         }
         if (r2 - l2 > end - start) {
             start = l2;
             end = r2;
         }
     }
 
     return s.substring(start, end + 1);
 };