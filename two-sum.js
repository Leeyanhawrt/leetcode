/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

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

// Time Complexity O(n) 
// Using dictionary data structure, loop through nums array and subtract target value. See if the result persists within the dictionary and return the indexes

var twoSum = function (nums, target) {
  const result = [];
  const numDictionary = {};
  for (let i = 0; i < nums.length; i++) {
    numDictionary[nums[i]] = i
  }
  for (let j = 0; j < nums.length; j++) {
    let searchResult = target - nums[j]
    if (numDictionary[searchResult] && j !== numDictionary[searchResult]) {
      result.push(j, numDictionary[searchResult])
      return result
    }
  }
  return result
};

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

// Time Complexity O(n log n)
// This answer would not give the correct result as we would need to resort the whole array therefore their indexes would change
var twoSum = function (nums, target) {
  const result = [];
  const sortedArray = nums.sort((a, b) => a - b)
  let max = sortedArray.length - 1
  let min = 0

  while (max > min) {
    let sum = sortedArray[max] + sortedArray[min]
    if (sum === target) {
      result.push(max, min)
      return result
    } else if (sum > result) {
      max -= 1
    } else {
      min += 1
    }
  }
  return result
};