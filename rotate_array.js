/* 
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
 */

var rotate = function (nums, k) {
  let result = [];
  let max = nums.length;
  let shiftedElement = max - k

  for (let i = 0; i < nums.length; i++) {
    if (i + shiftedElement >= max) {
      result[i] = nums[i - k]
    } else {
      result[i] = nums[i + shiftedElement]
    }
  }
  nums = result
  return nums
};



var printList = function (head) {
  if (head !== null) {
    printList(head.next)
    console.log(head.val)
  }
}



/* Iteration 1:
Calls printList on ([2, 3, 4, 5]) 
console.log(1)

Iteration 2:
Calls printList on ([3, 4, 5])
console.log(2)

Iteration 3:
Calls printList on ([4, 5]
console.log(3)

Iteration 4:
Calls printList on ([5])
console.log(4)

Iteration 5:
Calls printList on null
console.log(5)

Iteration 6: 
Base case is reached and nothing is printed, the recursive function is stopped. */


