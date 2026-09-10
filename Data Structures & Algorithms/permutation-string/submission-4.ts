class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const s1Count = new Map<string, number>();
        const s2Count = new Map<string, number>();

        for (const v of s1) {
            s1Count.set(v, (s1Count.get(v) || 0) + 1);
        }
        
        let window = s1.length;

        let l = 0;

        for (let r = 0; r < s2.length; r++) {
            s2Count.set(s2[r], (s2Count.get(s2[r]) || 0) + 1);

            if (r - l + 1 > window) {
                // dont directly delete it, decremenet, because it can be duplicate value within window
                s2Count.set(s2[l], (s2Count.get(s2[l]) - 1))

                if(s2Count.get(s2[l]) === 0) {
                    s2Count.delete(s2[l])
                }

                l++;
            }

            // compare if s1Count === s2Count
            if (r - l + 1 === window && this.checkMap(s1Count, s2Count)) {
                return true;
            }
        }

        return false;
    }

    checkMap(s1Count: Map<string, number>, s2Count: Map<string, number>): boolean {
        if (s1Count.size !== s2Count.size) {
            return false;
        }

        for (const [k, v] of s1Count) {
            if (s2Count.get(k) !== v) {
                return false;
            }
        }

        return true;
    }
}
