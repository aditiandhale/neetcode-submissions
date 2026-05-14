class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let globalProfit = 0;

        for (let i=0; i<prices.length; i++){
            for (let j=i+1; j<prices.length; j++){
                const currentProfit = prices[j] - prices[i];

                if (currentProfit > globalProfit) {
                    globalProfit = currentProfit;
                }
            }
        }
        return globalProfit;
    }
}
