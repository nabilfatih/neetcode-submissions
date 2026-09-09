class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        let l = 0;
        const window = new Set();

        for (let j = 0; j < nums.length; j++) {
            if (j - l > k) {
                window.delete(nums[l]);
                l++;
            }

            if (window.has(nums[j])) {
                return true;
            }
            window.add(nums[j]);
        }
        return false;
    }
}
