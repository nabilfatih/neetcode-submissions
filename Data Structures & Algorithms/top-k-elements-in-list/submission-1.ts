class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const storedObject: Record<number,number> = {}
      

        for (let i = 0; i < nums.length;  i++) {
            storedObject[nums[i]] = (storedObject[nums[i]] || 0) + 1
        }

        const result = Object.entries(storedObject).sort((a, b) => b[1] - a[1])
        return result.slice(0, k).map(([key, value]) => parseInt(key))
    }
}
