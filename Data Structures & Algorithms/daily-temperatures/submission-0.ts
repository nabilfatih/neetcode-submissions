class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const res = new Array<number>(temperatures.length).fill(0)

        // monotonic stack decreasing, first always bigger
        const stack: number[][] = [] // it will store pair [index, value]

        for(let i = 0; i < temperatures.length; i++) {
            while(stack.length && stack[stack.length - 1][1] < temperatures[i]) {
                const [index,] = stack.pop()
                res[index] = i - index
            }

            stack.push([i, temperatures[i]])
        }

        return res
    }
}
