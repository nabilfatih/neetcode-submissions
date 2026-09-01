class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) {
            return false
        }

        const objectS = {}
        const objectT = {}

        for (let i = 0; i < s.length; i++) {
            objectS[s[i]] = (objectS[s[i]] || 0) + 1
        }

        for (let i = 0; i < t.length; i++) {
            objectT[t[i]] = (objectT[t[i]] || 0) + 1
        }

        for (const key in objectS) {
            if (objectS[key] !== objectT[key]) {
                return false
            }
        }
        return true
    } 
}
