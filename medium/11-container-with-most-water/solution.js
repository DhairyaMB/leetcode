/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
     let left = 0, right = height.length - 1;
     let maxWater = 0;
     
     while (left < right) {
         const h = Math.min(height[left], height[right]);
         const width = right - left;
         const area = h * width;
         maxWater = Math.max(maxWater, area);
         
         // Move the pointer with the smaller height
         if (height[left] < height[right]) {
             left++;
         } else {
             right--;
         }
     }
     
     return maxWater;
 };