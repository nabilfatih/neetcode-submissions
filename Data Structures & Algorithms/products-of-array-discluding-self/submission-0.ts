class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const results: number[] = []
        const copiedNums = nums

        for(let n of nums) {
            const indexN = nums.indexOf(n)
            copiedNums.splice(indexN, 1)

            let mult = 1
            for(let i of copiedNums) {
                mult *= i
            }

            copiedNums.splice(indexN, 0, n)

            results.push(mult)
            mult = 1
        }

        return results
    }
}
