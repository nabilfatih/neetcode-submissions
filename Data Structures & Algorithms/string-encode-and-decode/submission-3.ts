class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const result = []
        for(let str of strs) {
            result.push(String(str.length), "#", str)
        }
        return result.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result = []
        let i = 0

        while(i < str.length) {
            let j = i
            while(str[j] !== "#") {
                j++
            }
            
            let length = parseInt(str.substring(i, j))
            
            i = j + 1
            j = i + length
            result.push(str.substring(i, j))
            i = j
        }

        return result
    }
}
