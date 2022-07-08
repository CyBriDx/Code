/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minCost = function (houses, cost, m, n, target) {
    let dp = Array.from({ length: m }, _ =>
        Array.from({ length: n + 1 }, _ => [])
    );

  //   dp = [current house index][previous house color][number groups need from current house]
    const minCost = (idx, prev_color, t) => {
        if (idx == m) return t != 0 ? 1000001 : 0;

        if (dp[idx][prev_color][t] === undefined) {
            dp[idx][prev_color][t] = 1000001;
            if (t == 0) {
                if (houses[idx] === 0 || houses[idx] === prev_color)
                    dp[idx][prev_color][t] = Math.min(
                        dp[idx][prev_color][t],
                        (houses[idx] === 0 ? cost[idx][prev_color - 1] : 0) +
                            minCost(idx + 1, prev_color, t)
                    );
            } else if (houses[idx] === 0)
                  for (let i = 1; i <= cost[idx].length; i++)
                      dp[idx][prev_color][t] = Math.min(
                          dp[idx][prev_color][t],
                          cost[idx][i - 1] + minCost(idx + 1, i, t - (prev_color != i))
                      );
            else
                dp[idx][prev_color][t] = Math.min(
                    dp[idx][prev_color][t],
                    minCost(idx + 1, houses[idx], t - (prev_color != houses[idx]))
                );
        }

        return dp[idx][prev_color][t];
    };

    return minCost(0, 0, target) === 1000001 ? -1 : dp[0][0][target];
};