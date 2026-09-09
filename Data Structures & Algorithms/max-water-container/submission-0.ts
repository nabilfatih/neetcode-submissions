class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;

        let res = 0;

        while(left < right) {
            const width = right - left
            const height = Math.min(heights[right], heights[left])
            const area = width * height

            res = Math.max(res, area)

            if(heights[left] <= heights[right]) {
                left++
            } else {
                right--
            }
        }

        return res
    }
}
