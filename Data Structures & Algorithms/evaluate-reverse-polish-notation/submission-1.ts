class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = [];

        for (const value of tokens) {
            const num = parseInt(value)
            if (!Number.isNaN(num)) {
                stack.push(num);
            } else {
                if (value === "+") {
                    stack.push(stack.pop() + stack.pop());
                }
                if (value === "-") {
                    const a = stack.pop();
                    const b = stack.pop();

                    stack.push(b - a);
                }
                if (value === "*") {
                    stack.push(stack.pop() * stack.pop());
                }
                if (value === "/") {
                    const a = stack.pop();
                    const b = stack.pop();

                    stack.push(Math.trunc(b / a));
                }
            }
        }

        return stack[0];
    }
}
