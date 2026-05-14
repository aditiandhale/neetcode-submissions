//brute force solution
// class Solution {
//     /**
//      * @param {number[]} prices
//      * @return {number}
//      */
//     maxProfit(prices) {
//         let globalProfit = 0;

//         for (let i=0; i<prices.length; i++){
//             for (let j=i+1; j<prices.length; j++){
//                 const currentProfit = prices[j] - prices[i];

//                 if (currentProfit > globalProfit) {
//                     globalProfit = currentProfit;
//                 }
//             }
//         }
//         return globalProfit;
//     }
// }

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minStockPurchasePrice = prices[0] || 0;
        let profit = 0;

        for (let i=1; i< prices.length; i++){
            if(prices[i]<minStockPurchasePrice) {
                minStockPurchasePrice = prices[i];
            }
            profit = Math.max(profit, prices[i] - minStockPurchasePrice);
        }
        return profit;
    }
}
