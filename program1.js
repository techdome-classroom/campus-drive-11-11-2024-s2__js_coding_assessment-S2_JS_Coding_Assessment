/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char in bracketMap) {  // If it's a closing bracket
            const topElement = stack.length > 0 ? stack.pop() : '#'; // Pop from stack or use dummy value
            if (bracketMap[char] !== topElement) {
                return false;
            }
        } else {  // If it's an opening bracket
            stack.push(char);
        }
    }

    return stack.length === 0; // Stack should be empty if all brackets are matched
};

module.exports = { isValid };
