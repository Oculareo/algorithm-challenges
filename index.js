/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

input: a string containing characters of open/close brackets
output: true or false if every open bracket is closed by it's corresponding one in correct order
note: what to do with empty array or odd # of array items

1. iterate over the string as we do so create a stack (array) which we'll use for comparison
2. create a hash map of the opening brackets to save on having to write numerous if statements
3. on each iteration, check to see if the current item is a closing parenthesis (hasOwnProperty)
4. if so then compare look at the end of the stack to see if there's a corresponding opening parenthesis
5. if they don't match then return false;


"()[]{}"
*/

var isValid = function (s) {
	if (s.length % 2 !== 0) return false;
	const stack = [];
	const bracs = {
		')': '(',
		'}': '{',
		']': '[',
	};

	for (item of s) {
		if (bracs.hasOwnProperty(item)) {
			// if item is a closing parenthesis
			if (stack.length && stack[stack.length - 1] === bracs[item]) {
				stack.pop();
			} else {
				return false;
			}
		} else {
			stack.push(item); // if item is an opening parenthesis then add to stack
		}
	}
	return stack.length === 0;
};

/* Super fast solution on LeetCode
==================================

var isValid = function(s) {
    const brackets = [];

    for (let c of s) {
        if (c === '(' || c === '{' || c === '[') {
            brackets.push(c);
        } else {
            if (brackets.length === 0) {
                return false; // There's no matching open bracket.
            }

            const openBracket = brackets.pop();

            if ((c === ')' && openBracket !== '(') || (c === '}' && openBracket !== '{') || (c === ']' && openBracket !== '[')) {
                return false; // Mismatched closing bracket.
            }
        }
    }

    return brackets.length === 0; // All open brackets should be closed.
};

*/

// let result = isValid('()[]{}');
// let result = isValid('(]');
// let result = isValid('()');
// let result = isValid('[');
let result = isValid('((');
// let result = isValid('');
console.log(result);
