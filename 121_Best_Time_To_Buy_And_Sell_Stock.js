var maxProfit = function (prices) {
  minPrice = prices[0];
  maxProf = 0;

  for (var i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProf = Math.max(maxProf, prices[i] - minPrice);
  }
  return maxProf;
};

// Here's a breakdown of the code:

// minPrice = prices[0]: Initializes minPrice with the first element of the prices array.

// maxProf = 0: Initializes maxProf (maximum profit) with zero.

// The for loop iterates through the prices array starting from the second element (index 1).

// Inside the loop:

// minPrice = Math.min(minPrice, prices[i]): Updates minPrice to the minimum value between its current value and the current stock price at index i. This keeps track of the lowest price encountered so far.
// maxProf = Math.max(maxProf, prices[i] - minPrice): Updates maxProf to the maximum value between its current value and the difference between the current stock price at index i and the minimum price (minPrice). This calculates the potential profit if the stock is sold at the current price after buying at the lowest price.
// The function returns the final value of maxProf, which represents the maximum profit achievable by buying and selling the stock.

// So, in summary, the function iterates through the array, updating the minimum price and maximum profit as it goes, and finally returns the maximum profit that can be achieved.
