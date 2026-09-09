class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const prev = new Map()

        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i]
            if(prev.has(diff)) {
                return [prev.get(diff), i]
            }
            prev.set(nums[i], i)
        }
    }
}
