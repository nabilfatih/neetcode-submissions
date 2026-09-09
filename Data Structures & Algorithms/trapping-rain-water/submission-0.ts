class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let res = 0;

        let left = 0;
        let right = height.length - 1;

        let leftHeightMax = height[left]
        let rightHeightMax = height[right]

        while (left < right) {
            if(leftHeightMax < rightHeightMax) {
                left++
                  

                leftHeightMax = Math.max(leftHeightMax, height[left])
                res += leftHeightMax - height[left]
            
            } else {
                right--

                rightHeightMax = Math.max(rightHeightMax, height[right])
                res += rightHeightMax - height[right]
            }
        }

        return res;
    }
}
