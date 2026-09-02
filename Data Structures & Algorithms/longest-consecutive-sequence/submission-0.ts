class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numSet = new Set(nums)
        let longest = 0

        for(let num of nums) {
            // if we dont find num - 1, means it is first in consecutive
            if(!numSet.has(num - 1)) {
                let length = 1
                while(numSet.has(num + length)) {
                    length++
                }
                longest = Math.max(longest, length)
            }
        }

        return longest
    }
}
