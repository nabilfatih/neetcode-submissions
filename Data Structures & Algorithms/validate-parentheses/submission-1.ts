class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];

        const partner = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        for (const char of s) {
            if (partner[char]) {
                if (stack[stack.length - 1] === partner[char]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
