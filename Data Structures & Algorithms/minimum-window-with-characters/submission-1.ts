class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (t.length > s.length) {
            return "";
        }

        const count = new Map<string, number>();

        for (const char of t) {
            count.set(char, (count.get(char) || 0) + 1);
        }

        let missing = t.length;
        let l = 0;

        // with this we can slice later
        let baseStart = 0;
        let baseLength = s.length + 1;

        for (let r = 0; r < s.length; r++) {
            const char = s[r];

            // check if we still need the char
            if ((count.get(char) ?? 0) > 0) {
                missing--;
            }

            // add char to window
            count.set(char, (count.get(char) ?? 0) - 1);

            while (missing === 0) {
                const currentLength = r - l + 1;

                if (currentLength < baseLength) {
                    baseLength = currentLength;
                    baseStart = l;
                }

                const leftChar = s[l];

                // remove element from window
                count.set(leftChar, (count.get(leftChar) ?? 0) + 1);

                if ((count.get(leftChar) ?? 0) > 0) {
                    missing++;
                }

                l++;
            }
        }

        if (baseLength === s.length + 1) {
            return "";
        }

        return s.slice(baseStart, baseStart + baseLength);
    }
}
