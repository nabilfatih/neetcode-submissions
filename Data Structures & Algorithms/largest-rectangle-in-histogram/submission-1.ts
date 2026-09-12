class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        let maxArea = 0;
        const stack: number[][] = []; // we store index, height

        for (const [index, height] of heights.entries()) {
            let start = index;
            while (stack.length && stack[stack.length - 1][1] > height) {
                const [i, h] = stack.pop();
                maxArea = Math.max(maxArea, h * (index - i));
                start = i;
            }
            stack.push([start, height]);
        }

        // its possible there is still values in stack
        for (const [index, height] of stack) {
            maxArea = Math.max(maxArea, height * (heights.length - index));
        }

        return maxArea;
    }
}
