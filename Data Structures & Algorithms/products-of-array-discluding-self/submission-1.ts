class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length
        const results = new Array(n).fill(1)

        for(let i = 1; i < n; i++) {
            results[i] = results[i - 1] * nums[i - 1]
        }



        let postfix = 1
        for(let i = n - 1; i >= 0; i--) {
            results[i] *= postfix
            postfix *= nums[i]
        }

 

        return results
    }
}
