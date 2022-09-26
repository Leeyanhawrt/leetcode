/*
Input: nums = [3,2,4], target = 6
Output: [1,2]
Input: nums = [3,3], target = 6
Output: [0,1]
*/

/* 
Qustions:
- Will nums always contain a pair of numbers that will sum to target?
- What should I return if the pair does not exist?
- Will there only be one pair that adds up to target?
- If there are more than one do I only return the first case?
- Will the type of nums and target arguments always be given in number?
- Will nums always contain at least 2 numbers?
- Can we use the same number twice?
- Will array be sorted?
*/

// Time Complexity O(n^2) 
// Initiate 2 for loops to check values of array, if the 2 values sum === target return the indexes 
var twoSum = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j)
        return result
      }
    }
  }
  return result
};
//