/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false
*/

/* 
Qustions:
- Can length of string be 0 or 1?
*/

// Time Complexity O(n)
/* Create a map of matching parenthesis, create a loop and check if value of string[i] is an opening bracket if it is
Add the matching parenthesis to a stack. If it is a closing bracket check if the top of the stack matches the bracket.
Account for edge cases if length of string is 0 or 1 && if string has multiple opening brackets by checking if 
stack length is greater than 0 at the end.
*/
var isValid = function (s) {
  const matchingPairs = {
    "{": "}",
    "(": ")",
    "[": "]"
  }
  const parenStack = []

  if (s.length === 0 || s.length === 1) {
    return false
  }

  for (let i = 0; i < s.length; i++) {
    if (matchingPairs[s[i]]) {
      parenStack.push(matchingPairs[s[i]])
    } else {
      if (parenStack.pop() !== s[i]) {
        return false
      }
    }
  }
  return parenStack.length > 0 ? false : true
};
