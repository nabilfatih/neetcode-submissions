class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const storedObject: Record<string, string[]> = {}

        for (let i = 0; i < strs.length; i ++) {
            const sorted = strs[i].split("").sort().join("")
            if(!storedObject[sorted]) {
                storedObject[sorted] = []
            }
            storedObject[sorted].push(strs[i])
        }

        return Object.values(storedObject)
    }
}
