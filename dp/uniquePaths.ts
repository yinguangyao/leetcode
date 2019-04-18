/* 
不同路径
    一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

    机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

    问总共有多少条不同的路径？



    例如，上图是一个7 x 3 的网格。有多少可能的路径？

    说明：m 和 n 的值均不超过 100。

    示例 1:

        输入: m = 3, n = 2
        输出: 3
        解释:
        从左上角开始，总共有 3 条路径可以到达右下角。
        1. 向右 -> 向右 -> 向下
        2. 向右 -> 向下 -> 向右
        3. 向下 -> 向右 -> 向右
    示例 2:

        输入: m = 7, n = 3
        输出: 28
*/
/* 
    解题思路：
        1. 动态规划
            不妨看最后一步走到第m, n的格子那里的情况，只有从m-1, n或者m, n-1走过去才可以。
            这样f(m, n) = f(m-1, n) + f(m, n-1)，又因为递归超时，不得不用数组对前一次计算结果缓存
        2. 排列组合
            机器人不管怎么样，一定会走m+n-2步，其中有n-1步是往下走，这样可以用排列组合的思路来理解。
            最后结果一定是A(m+n-2, n-1)，时间复杂度为O(n)
*/
const baseUniquePaths = (m: number, n: number, arr: number[][]): number => {
    if (m === 1 || n === 1) {
        return 1 
    }
    if (arr[m][n]) {
        return arr[m][n]
    }
    return arr[m][n] = baseUniquePaths(m-1, n, arr) + baseUniquePaths(m, n-1, arr)
}
const uniquePathsSimple = function(m: number, n: number): number {
    const arr: number[][] = Array(m).fill(0).map(item => Array(n).fill(0));
    return baseUniquePaths(m, n, arr)
};


