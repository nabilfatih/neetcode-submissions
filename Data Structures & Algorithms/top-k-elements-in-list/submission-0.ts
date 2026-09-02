class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const storedObject: Record<number,number> = {}
        const results: number[] = []

        for (let i = 0; i < nums.length;  i++) {
            storedObject[nums[i]] = (storedObject[nums[i]] || 0) + 1
        }

       for (const [key, value] of Object.entries(storedObject)) {
            if(storedObject[key] >= k) {
                results.push(Number(key))
            }
       }

        return results
    }
}
