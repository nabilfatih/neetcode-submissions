class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const res = [];
        // we store the index
        const queue = [];

        let l = 0;

        for (let r = 0; r < nums.length; r++) {
            // remove small value from back
            while (queue.length > 0 && nums[queue[queue.length - 1]] <= nums[r]) {
                queue.pop();
            }

            queue.push(r);

            if (queue[0] < l) {
                queue.shift();
            }

            if (r - l + 1 === k) {
                res.push(nums[queue[0]]);
                l++;
            }
        }

        return res;
    }
}
