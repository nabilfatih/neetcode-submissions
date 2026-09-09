class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let profit = 0

        let l = 0
        let r = 1

        while(r < prices.length) {
            if(prices[l] < prices[r]) {
                let diff = prices[r] - prices[l]
                profit = Math.max(profit, diff)
            } else {
                l = r
            }
            r++
        }

        return profit
    }
}
