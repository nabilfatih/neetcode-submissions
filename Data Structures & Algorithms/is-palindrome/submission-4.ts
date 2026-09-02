class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let l = 0
        let r = s.length - 1

        while(l < r) {
            // skip non non alpha
            while(l < r && !this.isAlpha(s[l])) {
                l++
            }
            while(r > l && !this.isAlpha(s[r])) {
                r--
            }
            if(s[l].toLocaleLowerCase() !== s[r].toLocaleLowerCase()) {
                return false
            }
            l++
            r--
        }

        return true
    }

    isAlpha(s: string): boolean {
        return (
            (s >= "a" && s <= "z") ||
            (s >= "A" && s <= "Z") ||
            (s >= "0" && s <= "9")
        )
    }
}
