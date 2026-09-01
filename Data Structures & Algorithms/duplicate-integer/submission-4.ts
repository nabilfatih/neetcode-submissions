class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        if(new Set(nums).size < nums.length) {
            return true
        }
        return false
    }
}
