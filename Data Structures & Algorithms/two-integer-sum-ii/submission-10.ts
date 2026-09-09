class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            

            if (numbers[left] + numbers[right] > target) {
                right--;
                continue
            }

            if (numbers[left] + numbers[right] < target) {
                left++;
                continue
            }

            if (numbers[left] + numbers[right] === target) {
                return [left + 1, right + 1];
            }

            return [left + 1, right + 1];
        }
    }
}
