/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     // Map to store numbers and their indices
     const map = new Map();

     for (let i = 0; i < nums.length; i++) {
          const complement = target - nums[i];

          // If complement is found in the map, return indices
          if (map.has(complement)) {
               return [map.get(complement), i];
          }

          // Store current number with its index
          map.set(nums[i], i);
     }
};