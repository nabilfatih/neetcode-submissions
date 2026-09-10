class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        let res = [];
        let queue = []; // store index

        let head = 0;

        let l = 0;

        for (let r = 0; r < nums.length; r++) {
            // remove small value from back
            while (queue.length > head && nums[queue[queue.length - 1]] <= nums[r]) {
                queue.pop();
            }

            queue.push(r);

            if (queue[head] < l) {
                head++;
            }

            if (r - l + 1 === k) {
                res.push(nums[queue[head]]);
                l++;
            }
        }

        return res;
    }
}
