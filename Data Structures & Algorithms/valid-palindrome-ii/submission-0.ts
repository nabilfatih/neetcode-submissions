class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s: string): boolean {
        let l = 0
        let r = s.length - 1

        while (l < r) {
            if(s[l] !== s[r]) {
                return (
                    (this.isPalindrome(s.slice(0, l) + s.slice(l + 1))) ||
                    (this.isPalindrome(s.slice(0, r) + s.slice(r + 1)))
                )
            }
            l++
            r--
        }
        return true
    }

    isPalindrome(s: string): boolean {
        let l = 0
        let r = s.length - 1

        while (l < r) {
            while (l < r && !this.isAlphaNum(s[l])) {
                l++
            }
            while(r > l && !this.isAlphaNum(s[l])) {
                r--
            }
            if(s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false
            }
            l++
            r--
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
