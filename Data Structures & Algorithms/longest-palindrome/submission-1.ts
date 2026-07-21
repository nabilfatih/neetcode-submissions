class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s: string): number {
        const seen = new Set();
        let res = 0

        for(let c of s) {
            if(seen.has(c)) {
                seen.delete(c)
                res += 2
            } else {
                seen.add(c)
            }
        }

        return seen.size === 0 ? res : res + 1
    }
}
