class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        // decreasing order
        const pair = position
            .map((position, index) => [position, speed[index]])
            .sort((a, b) => b[0] - a[0]);

        const stack: number[] = [];

        for (const [p, s] of pair) {
            const time = (target - p) / s;
            stack.push(time);

            if (stack.length > 1 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop();
            }
        }

        return stack.length;
    }
}
