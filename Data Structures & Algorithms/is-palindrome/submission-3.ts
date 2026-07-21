class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let start = 0
        let end = s.length - 1

        while(start < end) {
            while(start < end && !this.isAlphaNum(s[start])) {
                start++
            }
            while(end > start && !this.isAlphaNum(s[end])) {
                end--
            }
            if(s[start].toLowerCase() !== s[end].toLowerCase()) {
                return false
            }
            start++
            end--
        }

        return true
    }

    isAlphaNum(c: string): boolean {
        return (
            (c >= "a" && c <= "z") ||
            (c >= "A" && c <= "Z") ||
            (c >= "0" && c <= "9")
        )
    }
}
